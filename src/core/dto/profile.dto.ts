import type { ProfileModel } from '@/src/core/models';

export type ProfileDTO = Pick<ProfileModel, 'id' | 'email'> & {
  fullName: string;
  avatarUrl: string;
  createdAt?: string | undefined;
};
