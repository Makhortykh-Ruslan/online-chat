'use client';

import type { RealtimeChannel } from '@supabase/supabase-js';

import { EBDTableName } from '@/src/core/enums';
import type { MessageModel } from '@/src/core/models/message.model';

import { createBrowserSupabaseClient } from './client.supabase';

export function subscribeToConversationMessages(
  conversationId: string,
  onNewMessage: (message: MessageModel) => void,
): RealtimeChannel {
  const supabase = createBrowserSupabaseClient();

  const channel = supabase
    .channel(`messages:conversation_id=eq.${conversationId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: EBDTableName.MESSAGES,
        filter: `conversation_id=eq.${conversationId}`,
      },
      (payload) => {
        onNewMessage(payload.new as MessageModel);
      },
    )
    .subscribe();

  return channel;
}
