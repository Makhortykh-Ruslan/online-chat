import { Message } from '@/src/core/components';
import { getConversationDetails } from '@/src/core/services';
import { getAuthData, getMessages } from '@/src/infrastructure/supabase';

import { ConversationFooter, ConversationHeader } from './components';
import { ConversationIdStyles } from './conversationId.styles';

type props = {
  params: Promise<{
    conversationId: string;
  }>;
};

export default async function ChatPage({ params }: props) {
  const { conversationId } = await params;

  const [messages, conversationDetails, authUser] = await Promise.all([
    getMessages(conversationId),
    getConversationDetails(conversationId),
    getAuthData(),
  ]);

  const styles = ConversationIdStyles;

  if (!conversationDetails) {
    return <div>Conversation not found</div>;
  }

  const authUserId = authUser?.id;

  return (
    <section className={styles.page}>
      <header className={styles.page_header}>
        <ConversationHeader conversationDetails={conversationDetails} />
      </header>
      <main className={styles.page_main}>
        {messages &&
          messages.map((el) => {
            const isMine = el.senderId === authUserId;
            const classNameMessage = isMine ? 'flex justify-end' : '';

            return (
              <div key={el.id} className={classNameMessage}>
                <Message {...el} isMine />
              </div>
            );
          })}
      </main>
      <footer className={styles.page_footer}>
        <ConversationFooter conversationId={conversationId} />
      </footer>
    </section>
  );
}
