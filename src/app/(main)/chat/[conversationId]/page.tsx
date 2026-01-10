import {
  ConversationHeader,
  InputMessage,
} from '@/src/app/(main)/chat/[conversationId]/components';
import { getConversationDetails } from '@/src/core/services';
import { getMessages } from '@/src/infrastructure/supabase';

type props = {
  params: Promise<{
    conversationId: string;
  }>;
};

export default async function ChatPage({ params }: props) {
  const { conversationId } = await params;

  const [messages, conversationDetails] = await Promise.all([
    getMessages(conversationId),
    getConversationDetails(conversationId),
  ]);

  if (!conversationDetails) {
    return <div>Conversation not found</div>;
  }

  return (
    <section>
      <ConversationHeader conversationDetails={conversationDetails} />
      {messages && messages.map((el) => <p key={el.id}>{el.content}</p>)}
      <InputMessage conversationId={conversationId} />
    </section>
  );
}
