import type { TTheme } from '@/src/core/types';

export type ProfileModel = {
  email: string;
  id: string;
  user_name: string;
  avatar_url: string;
  created_at?: string;
  language: string;
  theme: TTheme;
};
