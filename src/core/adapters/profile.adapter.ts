import type { ProfileDTO } from '@/src/core/dto';
import type { ProfileModel } from '@/src/core/models';

export const mapProfileToDTO = (data: ProfileModel): ProfileDTO => {
  return {
    id: data.id,
    email: data.email,
    createdAt: data.created_at,
    fullName: data.user_name,
    avatarUrl: data.avatar_url,
  };
};
