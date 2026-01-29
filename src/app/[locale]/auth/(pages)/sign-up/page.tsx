import { getTranslations } from 'next-intl/server';

import type { LayoutProps } from '@/src/core/types';

import { SignUpForm } from '../components';
import { getPageStyles } from '../styles';

export default async function SignUpPage({ params }: LayoutProps) {
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
        <h2 className={styles.page_title}>{titles('createAccount')}</h2>
        <p className={styles.page_description}>{descriptions('fillDetail')}</p>
      </header>
      <SignUpForm />
    </>
  );
}
