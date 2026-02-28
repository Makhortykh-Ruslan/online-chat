import type { MessageModel } from '@/src/core/models/message.model';
import type { TConversationType } from '@/src/core/types';

export type ConversationDTO = {
  type: TConversationType;
  title: string | null;
  avatarUrl: string | null;
  conversationId: string;
  lastMessage: MessageModel | null;
};
