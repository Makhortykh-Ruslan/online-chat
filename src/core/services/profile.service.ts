'use server';

import { mapProfileToDTO } from '@/src/core/adapters/profile.adapter';
import {
  ERROR_DEFAULT_RESPONSE_MODEL,
  SUCCESS_DEFAULT_RESPONSE_MODEL,
} from '@/src/core/constants';
import type { ProfileDTO } from '@/src/core/dto';
import { EControlName } from '@/src/core/enums';
import type { SystemSettingsModel } from '@/src/core/models';
import type { ResponseModel } from '@/src/core/models/response.model';
import {
  getAuthData,
  getProfileByUserId,
  getSystemSettingByUserId,
  updateAuthUser,
  updateProfile,
  updateSystemSettings,
} from '@/src/infrastructure/supabase';

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
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: error.message };
    }

    return { success: true, message: 'Success', data: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message };
  }
};

export const getProfileInfo = async (): Promise<
  ResponseModel<ProfileDTO | null>
> => {
  try {
    const authUser = await getAuthData();

    if (!authUser) {
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: 'Not authenticated' };
    }

    const authUserId = authUser.id;

    const [profile, profileSettings] = await Promise.all([
      getProfileByUserId(authUserId),
      getSystemSettingByUserId(authUserId),
    ]);

    const { data: dataProfile, error: errorProfile } = profile;
    const { data: dataProfileSetting, error: errorProfileSetting } =
      profileSettings;

    if (errorProfile || errorProfileSetting) {
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: 'Error profile details',
      };
    }

    const model = {
      ...dataProfile,
      theme: dataProfileSetting?.theme,
      language: dataProfileSetting?.language,
    };

    const data = mapProfileToDTO(model);

    return { ...SUCCESS_DEFAULT_RESPONSE_MODEL, data };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message };
  }
};

export const updateProfilePreference = async (
  settings: SystemSettingsModel,
) => {
  try {
    const authUser = await getAuthData();

    if (!authUser) {
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: 'Not authenticated' };
    }

    const { data, error } = await updateSystemSettings({
      ...settings,
      userId: authUser.id,
    });

    if (error) {
      console.error('Supabase update error:', error);
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: 'Error update profile settings details',
      };
    }

    return { ...SUCCESS_DEFAULT_RESPONSE_MODEL, data };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message };
  }
};
