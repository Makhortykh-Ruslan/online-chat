import { Header } from '@/src/app/(main)/chat/components/SideBar/components/Header/Header';
import { getSidebarConversations } from '@/src/core/server/conversation.service';
import { getProfile } from '@/src/infrastructure/supabase';

import { Conversation } from './components/Conversation/Conversation';

export async function SideBar() {
  const profile = await getProfile();
  const conversations = await getSidebarConversations();

  return (
    <aside>
      <header>{profile && <h1>{profile.username}</h1>}</header>
      <Header />
      <Conversation data={conversations} />
    </aside>
  );
}
