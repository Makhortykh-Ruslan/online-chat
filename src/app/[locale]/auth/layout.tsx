import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import { Logo } from '@/src/core/components/Logo/Logo';
import type { LayoutProps } from '@/src/core/types';

import { AbilityCard } from './components/AbilityCard';
import { ABILITY_CARDS } from './constants/ability-cards';

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: metadata('authTitle'),
    description: metadata('authDescription'),
  };
}

export default async function AuthLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  const titles = await getTranslations({
    locale,
    namespace: 'titles',
  });

  const descriptions = await getTranslations({
    locale,
    namespace: 'descriptions',
  });

  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <section className="bg-introducing relative flex w-full flex-1 flex-col items-center justify-center bg-cover bg-center px-5 py-10 text-white">
        <div className="z-10 flex flex-col items-center text-center">
          <Logo />
          <h1 id="intro-title" className="text-24 md:text-36 mt-4 font-bold">
            LinkUp Chat
          </h1>
          <p className="text-12 md:text-18 mt-2 leading-relaxed whitespace-pre-line opacity-90">
            {descriptions('introducing')}
          </p>

          <div className="mt-8 grid w-full grid-cols-2 gap-4">
            {ABILITY_CARDS.map((el) => (
              <AbilityCard
                key={el.id}
                {...el}
                title={titles(el.title)}
                description={descriptions(el.description)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative -mt-4 flex flex-1 flex-col items-center justify-center rounded-t-[20px] bg-white px-6 py-8 md:mt-0 md:rounded-none">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}
