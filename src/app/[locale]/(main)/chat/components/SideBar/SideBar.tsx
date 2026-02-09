import { getSidebarConversations } from '@/src/core/services/conversation.service';

import { Conversations, SideBarHeader } from './components';

export async function SideBar() {
  const conversations = await getSidebarConversations();

  return (
    <>
      <SideBarHeader />
      <Conversations conversations={conversations} />
    </>
  );
}
