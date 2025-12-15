import { Profiles } from '@/src/app/main/components/Profiles/Profiles';
import { singOutServer } from '@/src/core/server';
import { getConversation, getProfiles } from '@/src/infrastructure/supabase';

export async function SideBar() {
  const { data: conversation } = await getConversation();
  const { data: profiles } = await getProfiles();

  return (
    <article>
      <header></header>
      <main>{profiles && <Profiles data={profiles} />}</main>
      <footer>
        <form action={singOutServer}>
          <button type="submit">Sign out</button>
        </form>
      </footer>
    </article>
  );
}
