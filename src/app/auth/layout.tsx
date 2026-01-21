import React from 'react';

import { Introducing } from '@/src/app/auth/components/Introducing/Introducing';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <section className="flex-1 bg-logo-gradient">
        <Introducing />
      </section>
      <section className="flex-1">{children}</section>
    </main>
  );
}
