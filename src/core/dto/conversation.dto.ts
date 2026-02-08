import type { MessageModel } from '@/src/core/models/message.model';

export type ConversationDTO = {
  type: string;
  title: string | null;
  avatarUrl: string | null;
  conversationId: string;
  lastMessage: MessageModel | null;
};
