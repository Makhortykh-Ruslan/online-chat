'use server';

import { mapProfileToDTO } from '@/src/core/adapters/profile.adapter';
import type { ProfileDTO } from '@/src/core/dto';
import { EControlName } from '@/src/core/enums';
import type { ResponseModel } from '@/src/core/models/response.model';
import {
  getAuthData,
  getProfileByUserId,
  updateAuthUser,
  updateProfile,
} from '@/src/infrastructure/supabase';
import { ERROR_DEFAULT_RESPONSE_MODEL, SUCCESS_DEFAULT_RESPONSE_MODEL } from '@/src/core/constants';

export const updateProfileInfo = async (
  prevData: ResponseModel<null>,
  formData: FormData,
): Promise<ResponseModel<null>> => {
  try {
    const email = formData.get(EControlName.EMAIL) as string;

    const authRes = await updateAuthUser(email);
    const profRes = await updateProfile(formData);

    const error = authRes.error || profRes.error;

    if (error) {
      return { success: false, message: error.message, data: null };
    }

    return { success: true, message: 'Success', data: null };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, message, data: null };
  }
};

export const getProfile = async (): Promise<
  ResponseModel<ProfileDTO | null>
> => {
  const authUser = await getAuthData();

  if (!authUser) {
    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: 'Not authenticated' };
  }

  const authUserId = authUser.id;

  const { data, error } = await getProfileByUserId(authUserId);

  if (error) {
    return { success: false, message: error.message, data: null };
  }

  const model = mapProfileToDTO(data);

  return { success: true, message: 'Success', data: model };
};
