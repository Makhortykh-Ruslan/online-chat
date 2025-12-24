import { signOutServer } from '@/src/core/server';

export default function SettingsPage() {
  return (
    <section>
      <footer>
        <form action={signOutServer}>
          <button type="submit">Sign out</button>
        </form>
      </footer>
    </section>
  );
}
