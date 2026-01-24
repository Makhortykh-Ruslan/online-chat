import React from 'react';

import { SideBar } from '@/src/app/[locale]/(main)/chat/components/SideBar/SideBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  );
}
