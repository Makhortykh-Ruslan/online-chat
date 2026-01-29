import { getTranslations } from 'next-intl/server';

import type { LayoutProps } from '@/src/core/types';

import { SignInFrom } from '../components';
import { getPageStyles } from '../styles';

export default async function SignInPage({ params }: LayoutProps) {
  const { locale } = await params;

  const titles = await getTranslations({ locale, namespace: 'titles' });
  const descriptions = await getTranslations({
    locale,
    namespace: 'descriptions',
  });

  const styles = getPageStyles();

  return (
    <>
      <header className={styles.page}>
        <h2 className={styles.page_title}>{titles('welcomeBack')}</h2>
        <p className={styles.page_description}>
          {descriptions('enterCredentials')}
        </p>
      </header>
      <SignInFrom />
    </>
  );
}
