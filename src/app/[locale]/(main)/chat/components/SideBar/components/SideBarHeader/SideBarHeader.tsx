'use client';

import { Icon } from '@/src/core/components';

import { getSideBarStyles } from './SideBarHeader.styles';

export const SideBarHeader = () => {
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
      <h3>Messages</h3>
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
