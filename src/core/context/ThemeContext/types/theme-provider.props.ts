import type { ReactNode } from 'react';

import type { TTheme } from '@/src/core/types';

export type ThemeProviderProps = {
  children: ReactNode;
  initialTheme: TTheme;
};
