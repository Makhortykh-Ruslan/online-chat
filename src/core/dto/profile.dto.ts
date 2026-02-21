import type { ProfileModel } from '@/src/core/models';
import type { TTheme } from '@/src/core/types';

export type ProfileDTO = Pick<ProfileModel, 'id' | 'email'> & {
  fullName: string;
  avatarUrl: string;
  createdAt?: string | undefined;
  language: string;
  theme: TTheme;
};
