import { getConversationDetails } from '@/src/core/services';
import { getAuthData, getMessages } from '@/src/infrastructure/supabase';

import {
  ConversationFooter,
  ConversationHeader,
  ConversationMessages,
} from './components';
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

  return (
    <section className={styles.page}>
      <header className={styles.page_header}>
        <ConversationHeader conversationDetails={conversationDetails} />
      </header>
      <main className={styles.page_main}>
        <ConversationMessages
          initialMessages={messages}
          conversationId={conversationId}
          authUserId={authUser!.id}
        />
      </main>
      <footer className={styles.page_footer}>
        <ConversationFooter conversationId={conversationId} />
      </footer>
    </section>
  );
}
