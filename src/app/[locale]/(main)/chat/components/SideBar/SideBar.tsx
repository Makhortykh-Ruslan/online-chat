import { Header } from '@/src/app/[locale]/(main)/chat/components/SideBar/components/Header/Header';
import { getSidebarConversations } from '@/src/core/services/conversation.service';

import { Conversations } from './components/Conversations/Conversations';

export async function SideBar() {
  const conversations = await getSidebarConversations();

  return (
    <aside>
      <Header />
      <Conversations conversations={conversations} />
    </aside>
  );
}
