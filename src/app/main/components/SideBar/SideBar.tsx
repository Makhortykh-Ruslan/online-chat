import { singOutServer } from '@/src/core/server';
import { getSidebarConversations } from '@/src/core/server/conversation.service';
import { getProfile } from '@/src/infrastructure/supabase';

import { Conversation } from './components/Conversation/Conversation';

export async function SideBar() {
  const profile = await getProfile();
  const conversations = await getSidebarConversations();

  return (
    <article>
      <header>{profile && <h1>{profile.username}</h1>}</header>
      <Conversation data={conversations} />
      <footer>
        <form action={singOutServer}>
          <button type="submit">Sign out</button>
        </form>
      </footer>
    </article>
  );
}
