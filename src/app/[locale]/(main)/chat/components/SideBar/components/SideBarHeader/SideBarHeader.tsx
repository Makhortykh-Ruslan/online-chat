'use client';

import { Icon } from '@/src/core/components';

export const SideBarHeader = () => {
  return (
    <header>
      <h3>Messages</h3>
      <Icon name="plus" />
      <Icon name="search" />
      <Icon name="settings" />
    </header>
  );
};
