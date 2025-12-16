import { Profiles } from '@/src/app/main/components/Profiles/Profiles';
import { getCurrenProfile, singOutServer } from '@/src/core/server';
import {
  getProfiles,
  getSideBarConversation,
} from '@/src/infrastructure/supabase';

export async function SideBar() {
  const { data: conversation } = await getSideBarConversation();
  const { data: profiles } = await getProfiles();
  const currentUser = await getCurrenProfile();

  return (
    <article>
      <header>{currentUser && <h1>{currentUser.username}</h1>}</header>
      <main>{profiles && <Profiles data={profiles} />}</main>
      <footer>
        <form action={singOutServer}>
          <button type="submit">Sign out</button>
        </form>
      </footer>
    </article>
  );
}
