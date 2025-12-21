import React from 'react';

import { SideBar } from '@/src/app/main/components/SideBar/SideBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ display: 'flex', gap: '20px' }}>
      <SideBar />
      {children}
    </main>
  );
}
