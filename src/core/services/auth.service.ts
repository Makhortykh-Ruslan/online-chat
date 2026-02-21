'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  ERROR_DEFAULT_RESPONSE_MODEL,
  SUCCESS_DEFAULT_RESPONSE_MODEL,
} from '@/src/core/constants';
import { appRoutes } from '@/src/core/constants/router-paths';
import { EControlName } from '@/src/core/enums';
import type { ResponseEmptyModel, TTheme } from '@/src/core/types';
import {
  insertProfileRepository,
  insertSystemSettingsRepository,
  signIn,
  signOut,
  signUp,
} from '@/src/infrastructure/supabase';

export async function signInService(
  prevData: ResponseEmptyModel,
  formData: FormData,
): Promise<ResponseEmptyModel> {
  let redirectPath: string | null = null;

  try {
    const email = formData.get(EControlName.EMAIL) as string;
    const password = formData.get(EControlName.PASSWORD) as string;

    const { error } = await signIn(email, password);

    if (error) {
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: error.message };
    }

    redirectPath = appRoutes.main.chat;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message };
  }

  if (redirectPath) {
    revalidatePath(redirectPath);
    redirect(redirectPath);
  }

  return { ...SUCCESS_DEFAULT_RESPONSE_MODEL, message: 'Success' };
}

export async function signUpService(
  prevData: ResponseEmptyModel,
  formData: FormData,
): Promise<ResponseEmptyModel> {
  let redirectPath: string | null = null;

  try {
    const email = formData.get(EControlName.EMAIL) as string;
    const password = formData.get(EControlName.PASSWORD) as string;
    const fullName = formData.get(EControlName.FULL_NAME) as string;
    const language = formData.get(EControlName.LANGUAGE) as string;
    const theme = formData.get(EControlName.THEME) as TTheme;

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

    const { error: profileError } = await insertProfileRepository({
      id: authUserId,
      email,
      user_name: fullName,
      avatar_url: '',
      language: 'en',
      theme: 'light',
    });

    if (profileError) {
      return { ...ERROR_DEFAULT_RESPONSE_MODEL, message: profileError.message };
    }

    const { error: settingsError } = await insertSystemSettingsRepository({
      user_id: authUserId,
      language,
      theme,
    });

    if (settingsError)
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: settingsError.message,
      };

    redirectPath = appRoutes.main.chat;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    return { ...ERROR_DEFAULT_RESPONSE_MODEL, message };
  }

  if (redirectPath) {
    revalidatePath(redirectPath);
    redirect(redirectPath);
  }

  return { ...SUCCESS_DEFAULT_RESPONSE_MODEL, message: 'Success' };
}

export async function signOutService() {
  await signOut();

  const pathRedirect = appRoutes.auth.signIn;

  revalidatePath(pathRedirect);
  redirect(pathRedirect);
}
