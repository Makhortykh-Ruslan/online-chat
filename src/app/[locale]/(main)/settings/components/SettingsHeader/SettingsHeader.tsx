'use client';

import { useTranslations } from 'next-intl';

import { Icon } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants';
import { useRouter } from '@/src/i18n/routing';

import { SettingsHeaderStyles } from './SettingsHeader.styles';

export const SettingsHeader = () => {
  const titles = useTranslations('titles');
  const styles = SettingsHeaderStyles;
  const router = useRouter();

  const handleBackTo = () => {
    router.push(appRoutes.main.chat);
  };

  return (
    <div className={styles.component} onClick={handleBackTo}>
      <Icon name="arrow-left" className={styles.component_icon} />
      <p className={styles.component_title}>{titles('backToChat')}</p>
    </div>
  );
};
