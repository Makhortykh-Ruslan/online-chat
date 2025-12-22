import { InputMessage } from '@/src/app/(main)/chat/[conversationId]/components/InputMessage/InputMessage';
import { getMessages } from '@/src/infrastructure/supabase';

type ChatPageProps = {
  params: Promise<{
    conversationId: string;
  }>;
};

export default async function ChatPage({ params }: ChatPageProps) {
  const { conversationId } = await params;
  const messages = await getMessages(conversationId);

  return (
    <section>
      {messages && messages.map((el) => <p key={el.id}>{el.content}</p>)}
      <InputMessage conversationId={conversationId} />
    </section>
  );
}
