'use client';

import { useTranslations } from 'next-intl';

import { Icon } from '@/src/core/components';

import { getSideBarStyles } from './SideBarHeader.styles';

export const SideBarHeader = () => {
  const titles = useTranslations('titles');

  const handleRedirectToSettings = () => {
    console.log('handleRedirectToSettings');
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
