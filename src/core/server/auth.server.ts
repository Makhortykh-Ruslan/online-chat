'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { appRoutes } from '@/src/core/constants/router-paths';
import { EControlName } from '@/src/core/enums/e-control-name';
import type { ErrorModel, ProfileModel } from '@/src/core/models';
import {
  addNewProfile,
  singIn,
  singOut,
  singUp,
} from '@/src/infrastructure/supabase';

export async function signInServer(prevData: ErrorModel, formData: FormData) {
  const email = formData.get(EControlName.EMAIL) as string;
  const password = formData.get(EControlName.PASSWORD) as string;

  const { error } = await singIn(email, password);

  if (error) {
    return { error: error.message };
  }

  const redirectPath = appRoutes.main.chat;

  revalidatePath(redirectPath);
  redirect(redirectPath);
}

export async function singUpServer(prevData: ErrorModel, formData: FormData) {
  const email = formData.get(EControlName.EMAIL) as string;
  const password = formData.get(EControlName.PASSWORD) as string;

  const {
    error: signUpError,
    data: { user },
  } = await singUp(email, password);

  if (signUpError) {
    return { error: signUpError.message };
  }

  if (!user?.id) {
    return { error: 'For sign up faild' };
  }

  const username = formData.get(EControlName.USER_NAME) as string;
  const display_name = formData.get(EControlName.DISPLAY_NAME) as string;

  const profile: ProfileModel = {
    avatar_url: '',
    id: user.id,
    username,
    display_name,
  };

  const { error: addNewProfileError } = await addNewProfile(profile);

  if (addNewProfileError) {
    return { error: addNewProfileError.message };
  }

  const redirectPath = appRoutes.main.chat;

  revalidatePath(redirectPath);
  redirect(redirectPath);
}

export async function singOutServer() {
  await singOut();

  const pathRedirect = appRoutes.auth.signIn;

  revalidatePath(pathRedirect);
  redirect(pathRedirect);
}
