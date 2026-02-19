import type { TIdName } from '@/src/core/types';

export const DEFAULT_SELECTED_LANG = {
  value: '🇺🇸 English',
  id: 'en',
};

export const LANGUAGES_MOCK: TIdName<string, string>[] = [
  {
    value: '🇺🇦 Ukrainian',
    id: 'uk',
  },
  {
    value: '🇺🇸 English',
    id: 'en',
  },
  {
    value: '🇵🇱 Polish',
    id: 'pl',
  },
];
