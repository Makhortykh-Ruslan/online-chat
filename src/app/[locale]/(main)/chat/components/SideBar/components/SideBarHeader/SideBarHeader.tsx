'use client';

import { useTranslations } from 'next-intl';

import { Icon } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants';
import { useRouter } from '@/src/i18n/routing';

import { getSideBarStyles } from './SideBarHeader.styles';

export const SideBarHeader = () => {
  const router = useRouter();
  const titles = useTranslations('titles');

  const handleRedirectToSettings = () => {
    console.log('handleRedirectToSettings');
    router.push(appRoutes.main.settings);
  };

  const handleAddNewConversation = () => {
    console.log('handleAddNewConversation');
  };

  const styles = getSideBarStyles();
  const iconSearch = styles.icon + ' ' + 'ml-auto';

  return (
    <section className={styles.component}>
      <h3>{titles('messages')}</h3>
      <Icon
        name="search"
        className={iconSearch}
        onClick={handleAddNewConversation}
      />
      <Icon
        name="settings"
        className={styles.icon}
        onClick={handleRedirectToSettings}
      />
    </section>
  );
};
