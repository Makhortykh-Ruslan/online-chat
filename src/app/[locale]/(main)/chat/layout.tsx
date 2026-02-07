import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import { SideBar } from '@/src/app/[locale]/(main)/chat/components/SideBar/SideBar';
import { ThemeToggle } from '@/src/core/components/ThemeToggle/ThemeToggle';
import type { LayoutProps } from '@/src/core/types';

import { getLayoutStyle } from './layout.style';

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: metadata('chatTitle'),
    description: metadata('chatDescription'),
  };
}

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
