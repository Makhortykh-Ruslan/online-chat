import React from 'react';

import { AbilityList } from '@/src/app/[locale]/auth/components/AbilityList/AbilityList';
import { Logo } from '@/src/core/components/Logo/Logo';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row">
      <section className="bg-introducing flex w-full items-center justify-center bg-cover bg-center px-[20px] pt-[20px] pb-[35px] md:min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h1 className="text-24 md:text-36 pt-[16px] font-bold text-white">
            LinkUp Chat
          </h1>
          <p className="text-12 md:text-18 pt-[10px] text-center leading-[24px]">
            Experience seamless messaging with real-time chat, <br /> voice
            calls, and group collaboration.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-[24px] md:w-full md:max-w-[446px]">
            {<AbilityList />}
          </div>
        </div>
      </section>

      <section className="relative -top-[15px] w-full rounded-t-[12px] bg-white p-[16px] md:static md:top-0 md:rounded-t-[0] md:p-[0]">
        {children}
      </section>
    </main>
  );
}
