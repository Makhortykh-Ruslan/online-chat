import { singOutServer } from '@/src/core/server';
import { getSidebarConversations } from '@/src/core/server/conversation.service';

export async function SideBar() {
  const conversations = await getSidebarConversations();

  return (
    <article>
      {/*<header>{currentUser && <h1>{currentUser.username}</h1>}</header>*/}
      {/*<main>{profiles && <Profiles data={profiles} />}</main>*/}
      <footer>
        <form action={singOutServer}>
          <button type="submit">Sign out</button>
        </form>
      </footer>
    </article>
  );
}
