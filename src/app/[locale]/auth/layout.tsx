import type { Metadata } from 'next';
import React from 'react';

import { AbilityList } from '@/src/app/[locale]/auth/components/AbilityList';
import { Logo } from '@/src/core/components/Logo/Logo';

export const metadata: Metadata = {
  title: 'Authentication | LinkUp Chat',
  description:
    'Login or Register to experience seamless messaging with LinkUp Chat.',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <section className="bg-introducing relative flex w-full flex-1 flex-col items-center justify-center bg-cover bg-center px-5 py-10 text-white">
        <div className="z-10 flex flex-col items-center text-center">
          <Logo />
          <h1 id="intro-title" className="text-24 md:text-36 mt-4 font-bold">
            LinkUp Chat
          </h1>
          <p className="text-12 md:text-18 mt-2 leading-relaxed opacity-90">
            Experience seamless messaging with real-time chat, <br /> voice
            calls, and group collaboration.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <AbilityList />
          </div>
        </div>
      </section>

      <section className="relative -mt-4 flex flex-1 flex-col items-center justify-center rounded-t-[20px] bg-white px-6 py-8 md:mt-0 md:rounded-none">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}
