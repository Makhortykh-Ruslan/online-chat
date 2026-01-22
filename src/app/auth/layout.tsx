import React from 'react';

import { AbilityCard } from '@/src/app/auth/components/AbilityCard/AbilityCard';
import { Logo } from '@/src/app/auth/components/Logo/Logo';
import { ABILITY_CARDS } from '@/src/app/auth/constants/ability-cards';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row">
      <section className="bg-introducing flex w-full items-center justify-center bg-cover bg-center px-[20px] py-[20px] md:min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h1 className="text-24 md:text-36 pt-[16px] font-bold text-white">
            LinkUp Chat
          </h1>
          <p className="text-12 md:text-18 pt-[10px] text-center leading-[24px]">
            Experience seamless messaging with real-time chat, <br />
            voice calls, and group collaboration.
          </p>
          <section className="grid grid-cols-2 gap-4 pt-[24px] md:w-full md:max-w-[446px]">
            {ABILITY_CARDS.map((el) => (
              <AbilityCard key={el.id} {...el} />
            ))}
          </section>
        </div>
      </section>

      <section className="w-full">{children}</section>
    </main>
  );
}
