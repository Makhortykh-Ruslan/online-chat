'use client';

import { Icon } from '@/src/core/components';

import { getSideBarStyle } from './SideBarHeader.style';

export const SideBarHeader = () => {
  const styles = getSideBarStyle();

  return (
    <section className={styles.component}>
      <h3>Messages</h3>
      <Icon name="plus" className="ml-auto w-[24px] h-[24px]" />
      <Icon name="search" className={styles.icon} />
      <Icon name="settings" className={styles.icon} />
    </section>
  );
};
