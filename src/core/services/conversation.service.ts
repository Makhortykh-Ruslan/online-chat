'use server';

import type { ConversationDTO } from '@/src/core/dto/conversation.dto';
import type { ProfileModel } from '@/src/core/models';
import type { MessageModel } from '@/src/core/models/message.model';
import {
  createConversation,
  getAuthData,
  getConversationById,
  getConversationsByIds,
  getLastConversationMessage,
  getProfilesByUsersId,
} from '@/src/infrastructure/supabase';
import {
  findExistingDirectConversationId,
  getOtherParticipantsInMyConversations,
  getParticipantsByConversationId,
  getParticipantsByUserId,
  insertParticipants,
} from '@/src/infrastructure/supabase/participants.repository';

export async function findOrCreateConversation(
  targetUserId: string,
): Promise<string> {
  const authUser = await getAuthData();
  if (!authUser) {
    throw new Error('Not authenticated');
  }

  const authUserId = authUser.id;

  const myParticipants = await getParticipantsByUserId(authUserId);
  const myConversationIds = myParticipants.map((p) => p.conversation_id);

  if (myConversationIds.length > 0) {
    const existingConversationId = await findExistingDirectConversationId(
      targetUserId,
      myConversationIds,
    );

    if (existingConversationId) {
      return existingConversationId;
    }
  }

  const newConversationId = await createConversation('direct');

  await insertParticipants([
    { conversation_id: newConversationId, user_id: authUserId },
    { conversation_id: newConversationId, user_id: targetUserId },
  ]);

  return newConversationId;
}

export async function getSidebarConversations(): Promise<ConversationDTO[]> {
  const authUser = await getAuthData();
  if (!authUser) throw new Error('Not authenticated');

  const authUserId = authUser.id;

  const participants = await getParticipantsByUserId(authUserId);
  const conversationIds = participants.map((p) => p.conversation_id);

  if (!conversationIds.length) return [];

  const participantsInMyConversations =
    await getOtherParticipantsInMyConversations(authUserId, conversationIds);

  const userIds = participantsInMyConversations.map((p) => p.user_id);

  const [profiles, messages, conversations] = await Promise.all([
    getProfilesByUsersId(userIds),
    getLastConversationMessage(conversationIds),
    getConversationsByIds(conversationIds),
  ]);

  const profileByConversationId = new Map<string, ProfileModel>();

  participantsInMyConversations.forEach((p) => {
    const profile = profiles.find((pr) => pr.id === p.user_id);
    if (profile) profileByConversationId.set(p.conversation_id, profile);
  });

  const lastMessageByConversationId = new Map<string, MessageModel>();

  messages.forEach((m) => {
    lastMessageByConversationId.set(m.conversation_id, m);
  });

  return conversations.map((conversation) => {
    const profile = profileByConversationId.get(conversation.id);
    const lastMessage = lastMessageByConversationId.get(conversation.id);

    return {
      conversationId: conversation.id,
      type: conversation.type,
      title: profile?.display_name ?? '',
      avatarUrl: profile?.avatar_url ?? null,
      lastMessage: lastMessage ?? null,
    };
  });
}

export type ConversationDetailsDTO = {
  conversationId: string;
  type: 'direct' | 'group';
  title: string | null;
  avatarUrl: string | null;
  participants: Array<{
    userId: string;
    profile: ProfileModel;
  }>;
};

export async function getConversationDetails(
  conversationId: string,
): Promise<ConversationDetailsDTO | null> {
  const authUser = await getAuthData();

  if (!authUser) throw new Error('Not authenticated');

  const authUserId = authUser.id;

  const conversation = await getConversationById(conversationId);
  if (!conversation) {
    return null;
  }

  const participants = await getParticipantsByConversationId(conversationId);

  const isParticipant = participants.some((p) => p.user_id === authUserId);
  if (!isParticipant) {
    throw new Error(
      'Access denied: You are not a participant of this conversation',
    );
  }

  const userIds = participants.map((p) => p.user_id);

  const profiles = await getProfilesByUsersId(userIds);

  const profileByUserId = new Map<string, ProfileModel>();
  profiles.forEach((profile) => {
    profileByUserId.set(profile.id, profile);
  });

  const participantsWithProfiles = participants
    .map((participant) => {
      const profile = profileByUserId.get(participant.user_id);
      if (!profile) return null;
      return {
        userId: participant.user_id,
        profile,
      };
    })
    .filter((p): p is { userId: string; profile: ProfileModel } => p !== null);

  let title: string | null = null;
  let avatarUrl: string | null = null;

  if (conversation.type === 'direct') {
    const otherParticipant = participantsWithProfiles.find(
      (p) => p.userId !== authUserId,
    );
    if (otherParticipant) {
      title = otherParticipant.profile.display_name;
      avatarUrl = otherParticipant.profile.avatar_url;
    }
  } else {
    title = null;
    avatarUrl = null;
  }

  return {
    conversationId: conversation.id,
    type: conversation.type as 'direct' | 'group',
    title,
    avatarUrl,
    participants: participantsWithProfiles,
  };
}
