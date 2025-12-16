'use server';

import { EBDTableName } from '@/src/core/enums';
import type { TConversationType } from '@/src/core/types';
import { getAuthData } from '@/src/infrastructure/supabase/auth.supabase';

import { createClient } from './server.supabase';

export async function createConversation(
  type: TConversationType = 'direct',
): Promise<string> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from(EBDTableName.CONVERSATIONS)
    .insert({ type })
    .select('id')
    .single();

  if (error || !data) {
    throw new Error('Failed to create conversation');
  }

  return data.id;
}

export async function findOrCreateConversation(targetUserId: string) {
  const authUser = await getAuthData();

  if (!authUser) {
    throw new Error('Not authenticated');
  }

  const authUserId = authUser.id;

  const supabase = await createClient();

  const { data: myRows } = await supabase
    .from(EBDTableName.CONVERSATION_PARTICIPANTS)
    .select('conversation_id')
    .eq('user_id', authUserId);

  const myConversationIds = myRows?.map((r) => r.conversation_id) ?? [];

  if (myConversationIds.length > 0) {
    const { data: existing } = await supabase
      .from(EBDTableName.CONVERSATION_PARTICIPANTS)
      .select('conversation_id')
      .eq('user_id', targetUserId)
      .in('conversation_id', myConversationIds)
      .maybeSingle();

    if (existing?.conversation_id) {
      return existing.conversation_id;
    }
  }

  const conversationId = await createConversation();

  if (!conversationId) {
    throw new Error('Failed to create conversation');
  }

  await supabase.from(EBDTableName.CONVERSATION_PARTICIPANTS).insert([
    { conversation_id: conversationId, user_id: authUserId },
    { conversation_id: conversationId, user_id: targetUserId },
  ]);

  return conversationId;
}

export async function getSideBarConversation() {
  const authUser = await getAuthData();

  if (!authUser) {
    throw new Error('Not authenticated');
  }

  const authUserId = authUser.id;

  const supabase = await createClient();

  const { data: conversations } = await supabase
    .from(EBDTableName.CONVERSATION_PARTICIPANTS)
    .select('*')
    .eq('user_id', authUserId);

  const conversationsIds = (conversations || []).map(
    (el) => el.conversation_id,
  );

  const { data: conversationParticipants } = await supabase
    .from(EBDTableName.CONVERSATION_PARTICIPANTS)
    .select('*')
    .in('conversation_id', conversationsIds)
    .neq('user_id', authUserId);

  const userIds = (conversationParticipants || []).map((el) => el.user_id);

  const { data: profiles } = await supabase
    .from(EBDTableName.PROFILES)
    .select('*')
    .in('id', userIds);

  console.log('conversationParticipants', conversationParticipants);
  console.log('profiles', profiles);

  return conversationParticipants;
}
