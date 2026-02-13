'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { appRoutes } from '@/src/core/constants/router-paths';
import { EControlName } from '@/src/core/enums';
import type { ErrorModel, ProfileModel } from '@/src/core/models';
import {
  insertProfile,
  signIn,
  signOut,
  signUp,
} from '@/src/infrastructure/supabase';

export async function signInServer(prevData: ErrorModel, formData: FormData) {
  const email = formData.get(EControlName.EMAIL) as string;
  const password = formData.get(EControlName.PASSWORD) as string;

  const { error } = await signIn(email, password);

  if (error) {
    return { error: error.message };
  }

  const redirectPath = appRoutes.main.chat;

  revalidatePath(redirectPath);
  redirect(redirectPath);
}

export async function signUpServer(prevData: ErrorModel, formData: FormData) {
  const email = formData.get(EControlName.EMAIL) as string;
  const password = formData.get(EControlName.PASSWORD) as string;

  const {
    error: signUpError,
    data: { user },
  } = await signUp(email, password);

  if (signUpError) {
    return { error: signUpError.message };
  }

  if (!user?.id) {
    return { error: 'For sign up faild' };
  }

  const fullName = formData.get(EControlName.FULL_NAME) as string;

  const profile: ProfileModel = {
    email,
    avatar_url: '',
    id: user.id,
    user_name: fullName,
  };

  const { error: addNewProfileError } = await insertProfile(profile);

  if (addNewProfileError) {
    return { error: addNewProfileError.message };
  }

  const redirectPath = appRoutes.main.chat;

  revalidatePath(redirectPath);
  redirect(redirectPath);
}

export async function signOutServer() {
  await signOut();

  const pathRedirect = appRoutes.auth.signIn;

  revalidatePath(pathRedirect);
  redirect(pathRedirect);
}
