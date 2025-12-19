import { InputMessage } from '@/src/app/main/chat/[conversationId]/components/InputMessage/InputMessage';
import { getMessages } from '@/src/infrastructure/supabase';

type ChatPageProps = {
  params: Promise<{
    conversation_id: string;
  }>;
};

export default async function ChatPage({ params }: ChatPageProps) {
  const { conversation_id } = await params;
  const messages = await getMessages(conversation_id);

  return (
    <section>
      {messages && messages.map((el) => <p key={el.id}>{el.content}</p>)}
      <InputMessage conversation_id={conversation_id} />
    </section>
  );
}
