export type MessageModel = {
  id: number;
  created_at: string;
  content: string;
  sender_id: string;
  conversation_id: string;
};

export type CreateMessageModel = {
  content: string;
  sender_id: string;
  conversation_id: string;
};

export type SendMessageModel = {
  content: string;
  conversation_id: string;
};
