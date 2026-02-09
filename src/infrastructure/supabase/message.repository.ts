import type { MessageDTO } from '@/src/core/dto';
import { EBDTableName } from '@/src/core/enums';
import type { MessageModel } from '@/src/core/models/message.model';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function insertMessage(data: MessageModel) {
  const supabase = await createClient();

  return supabase.from(EBDTableName.MESSAGES).insert(data);
}

export async function getMessages(
  conversation_id: string,
): Promise<MessageDTO[]> {
  const supabase = await createClient();

  const { data: messages } = await supabase
    .from(EBDTableName.MESSAGES)
    .select('*')
    .eq('conversation_id', conversation_id);

  return (messages || []).map((el) => ({
    id: el.id,
    createdAt: el.created_at,
    conversationId: el.conversation_id,
    senderId: el.sender_id,
    content: el.content,
  }));
}

export async function getLastConversationMessage(
  conversationsIds: string[],
): Promise<MessageModel[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from(EBDTableName.MESSAGES)
    .select('*')
    .in('conversation_id', conversationsIds)
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
