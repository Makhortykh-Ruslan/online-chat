import React from 'react';

import { SideBar } from '@/src/app/main/components/SideBar/SideBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <SideBar />
      <div>{children}</div>
    </main>
  );
}
