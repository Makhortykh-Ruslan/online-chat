import type { TTheme } from '@/src/core/types';

export type ThemeContextType = {
  theme: TTheme;
  changeTheme: (theme: TTheme) => void;
};
