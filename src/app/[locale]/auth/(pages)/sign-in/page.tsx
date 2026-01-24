import { getTranslations } from 'next-intl/server';

import { SingInForm } from './components/SingInForm/SingInForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SignInPage({ params }: Props) {
  const { locale } = await params;

  const titles = await getTranslations({ locale, namespace: 'titles' });
  const descriptions = await getTranslations({
    locale,
    namespace: 'descriptions',
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-24 font-bold text-gray-900">
        {titles('welcomeBack')}
      </h2>
      <p className="text-16 pt-[8px] pb-[16px] text-gray-700">
        {descriptions('enterCredentials')}
      </p>
      <SingInForm />
    </div>
  );
}
