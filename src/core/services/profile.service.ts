'use server';

import { mapProfileToDTO } from '@/src/core/adapters/profile.adapter';
import {
  ERROR_DEFAULT_RESPONSE_MODEL,
  SUCCESS_DEFAULT_RESPONSE_MODEL,
} from '@/src/core/constants';
import { EControlName } from '@/src/core/enums';
import type {
  ResponseEmptyModel,
  ResponseProfileDTOModel,
} from '@/src/core/types';
import {
  getAuthData,
  getProfileByUserIdRepository,
  getSystemSettingByUserIdRepository,
  updateAuthUser,
  updateProfileRepository,
} from '@/src/infrastructure/supabase';

export const updateProfileInfoService = async (
  prevData: ResponseEmptyModel,
  formData: FormData,
): Promise<ResponseEmptyModel> => {
  try {
    const email = formData.get(EControlName.EMAIL) as string;

    const authResponse = await updateAuthUser(email);
    const profileResponse = await updateProfileRepository(formData);

    const error = authResponse.error || profileResponse.error;

    if (error) {
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: error.message };
    }

    return { success: true, message: 'Success', data: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message };
  }
};

export const getProfileInfoService =
  async (): Promise<ResponseProfileDTOModel> => {
    try {
      const authUser = await getAuthData();

      if (!authUser) {
        return {
          ...ERROR_DEFAULT_RESPONSE_MODEL,
          message: 'Not authenticated',
        };
      }

      const authUserId = authUser.id;

      const [profile, system] = await Promise.all([
        getProfileByUserIdRepository(authUserId),
        getSystemSettingByUserIdRepository(authUserId),
      ]);

      const { data: dataProfile, error: errorProfile } = profile;
      const { data: dataSystem, error: errorSystem } = system;

      if (errorProfile || errorSystem) {
        return {
          ...ERROR_DEFAULT_RESPONSE_MODEL,
          message: 'Error profile details',
        };
      }

      const { theme, language } = dataSystem;

      const model = {
        ...dataProfile,
        theme,
        language,
      };

      const data = mapProfileToDTO(model);

      return { ...SUCCESS_DEFAULT_RESPONSE_MODEL, data };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';

      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message };
    }
  };
