'use client';

import { useTranslations } from 'next-intl';

import { ChangePasswordStyles } from './ChangePassword.styles';

export const ChangePassword = () => {
  const titles = useTranslations('titles');
  const placeholders = useTranslations('placeholders');

  const styles = ChangePasswordStyles;

  return (
    <section className={styles.component}>
      <h2 className={styles.component_title}>{titles('changePassword')}</h2>
    </section>
  );
};
