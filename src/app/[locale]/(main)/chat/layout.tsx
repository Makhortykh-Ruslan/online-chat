import React from 'react';

import { SideBar } from '@/src/app/[locale]/(main)/chat/components/SideBar/SideBar';
import { ThemeToggle } from '@/src/core/components/ThemeToggle/ThemeToggle';

import { getLayoutStyle } from './layout.style';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = getLayoutStyle();

  return (
    <main className={styles.page}>
      <ThemeToggle />
      <section className={styles.page_conversation}>
        <SideBar />
      </section>
      <section className={styles.page_children}>{children}</section>
    </main>
  );
}
