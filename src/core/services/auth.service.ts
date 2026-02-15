'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  ERROR_DEFAULT_RESPONSE_MODEL,
  SUCCESS_DEFAULT_RESPONSE_MODEL,
} from '@/src/core/constants';
import { appRoutes } from '@/src/core/constants/router-paths';
import { EControlName } from '@/src/core/enums';
import type { ErrorModel } from '@/src/core/models';
import type { ResponseModel } from '@/src/core/models/response.model';
import {
  addProfilesSetting,
  insertProfile,
  signIn,
  signOut,
  signUp,
} from '@/src/infrastructure/supabase';

export async function signInServer(prevData: ErrorModel, formData: FormData) {
  let redirectPath: string | null = null;

  try {
    const email = formData.get(EControlName.EMAIL) as string;
    const password = formData.get(EControlName.PASSWORD) as string;

    const { error } = await signIn(email, password);

    if (error) {
      return { error: error.message };
    }

    redirectPath = appRoutes.main.chat;
  } catch (err) {
    console.error(err);
    return { error: 'Something went wrong' };
  }

  if (redirectPath) {
    revalidatePath(redirectPath);
    redirect(redirectPath);
  }
}

export async function signUpServer(
  prevData: ResponseModel<null>,
  formData: FormData,
): Promise<ResponseModel<null>> {
  let redirectPath: string | null = null;

  try {
    const email = formData.get(EControlName.EMAIL) as string;
    const password = formData.get(EControlName.PASSWORD) as string;
    const fullName = formData.get(EControlName.FULL_NAME) as string;
    const language = formData.get(EControlName.LANGUAGE) as string;
    const theme = formData.get(EControlName.THEME) as string;

    const {
      error: signUpError,
      data: { user },
    } = await signUp(email, password);

    if (signUpError)
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: signUpError.message };

    const authUserId = user?.id;

    if (!authUserId)
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: 'User ID generation failed',
      };

    const { error: profileError } = await insertProfile({
      id: authUserId,
      email,
      user_name: fullName,
      avatar_url: '',
    });

    if (profileError)
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: profileError.message };

    const { error: settingsError } = await addProfilesSetting({
      userId: authUserId,
      language,
      theme,
    });

    if (settingsError)
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: settingsError.message,
      };

    redirectPath = appRoutes.main.chat;
  } catch (err) {
    console.error(err);
    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: 'Something went wrong' };
  }

  if (redirectPath) {
    revalidatePath(redirectPath);
    redirect(redirectPath);
  }

  return { ...SUCCESS_DEFAULT_RESPONSE_MODEL, message: 'Success' };
}

export async function signOutServer() {
  await signOut();

  const pathRedirect = appRoutes.auth.signIn;

  revalidatePath(pathRedirect);
  redirect(pathRedirect);
}
