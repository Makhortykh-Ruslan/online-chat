import { getTranslations } from 'next-intl/server';

import type { LayoutProps } from '@/src/core/types';

import { SingInForm } from './components/SingInForm/SingInForm';

export default async function SignInPage({ params }: LayoutProps) {
  const { locale } = await params;

  const titles = await getTranslations({ locale, namespace: 'titles' });
  const descriptions = await getTranslations({
    locale,
    namespace: 'descriptions',
  });

  return (
    <>
      <header className="mb-[32px] flex flex-col items-center justify-center">
        <h2 className="text-24 text-center font-bold text-gray-900">
          {titles('welcomeBack')}
        </h2>
        <p className="text-16 pt-[8px] text-center text-gray-700">
          {descriptions('enterCredentials')}
        </p>
      </header>
      <SingInForm />
    </>
  );
}
