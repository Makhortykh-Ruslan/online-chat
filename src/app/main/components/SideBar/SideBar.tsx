'use client';

import { singOutServer } from '@/src/core/server';

export const SideBar = () => {
  return (
    <article>
      <header></header>
      <main></main>
      <footer>
        <form action={singOutServer}>
          <button type="submit">Sign out</button>
        </form>
      </footer>
    </article>
  );
};
