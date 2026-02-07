import type { TTab } from '@/src/core/components/Tabs/type';

export const CONVERSATIONS_TAB_CONFIG = [
  {
    name: 'all',
    id: 'all',
  },
  {
    name: 'direct',
    id: 'direct',
  },
  {
    name: 'groups',
    id: 'groups',
  },
] as const satisfies readonly TTab[];

export type TTabConfigKey = (typeof CONVERSATIONS_TAB_CONFIG)[number]['id'];
