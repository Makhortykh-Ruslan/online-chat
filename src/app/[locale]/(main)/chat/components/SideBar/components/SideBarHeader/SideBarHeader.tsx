'use client';

import { Icon } from '@/src/core/components';

import { getSideBarStyle } from './SideBarHeader.style';

export const SideBarHeader = () => {
  const styles = getSideBarStyle();

  const iconPlus = styles.icon + ' ' + 'ml-auto h-[24px] w-[24px]';

  return (
    <section className={styles.component}>
      <h3>Messages</h3>
      <Icon name="plus" className={iconPlus} />
      <Icon name="search" className={styles.icon} />
      <Icon name="settings" className={styles.icon} />
    </section>
  );
};
