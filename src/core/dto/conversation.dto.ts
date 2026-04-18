import type { UserModel } from '@/src/core/models';
import type { MessageModel } from '@/src/core/models/message.model';
import type { TConversationType } from '@/src/core/types';

export type ConversationDTO = {
  type: TConversationType;
  title: string | null;
  avatarUrl: string | null;
  conversationId: string;
  lastMessage: MessageModel | null;
};

export type ConversationDetailsDTO = {
  conversationId: string;
  type: 'direct' | 'group';
  title: string | null;
  avatarUrl: string | null;
  participants: Array<{
    userId: string;
    user: UserModel;
  }>;
};
