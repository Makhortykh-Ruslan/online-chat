'use server';

import type { TConversationType } from '@/src/core/types';

import { createClient } from './server.supabase';

const relation = 'conversations';

export async function getConversation() {
  const supabase = await createClient();
  return await supabase.from(relation).select('*');
}

export async function createConversation(
  type: TConversationType = 'direct',
): Promise<string> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('conversations')
    .insert({ type })
    .select('id')
    .single();

  if (error || !data) {
    throw new Error('Failed to create conversation');
  }

  return data.id;
}

export async function findOrCreateConversation(targetUserId: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  const authUserId = user.id;

  const { data: myRows } = await supabase
    .from('conversation_participants')
    .select('conversation_id')
    .eq('user_id', authUserId);

  const myConversationIds = myRows?.map((r) => r.conversation_id) ?? [];

  if (myConversationIds.length > 0) {
    const { data: existing } = await supabase
      .from('conversation_participants')
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

  await supabase.from('conversation_participants').insert([
    { conversation_id: conversationId, user_id: authUserId },
    { conversation_id: conversationId, user_id: targetUserId },
  ]);

  return conversationId;
}
