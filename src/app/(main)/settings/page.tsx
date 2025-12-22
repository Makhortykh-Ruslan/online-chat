import { singOutServer } from '@/src/core/server';

export default function SettingsPage() {
  return (
    <section>
      <footer>
        <form action={singOutServer}>
          <button type="submit">Sign out</button>
        </form>
      </footer>
    </section>
  );
}
