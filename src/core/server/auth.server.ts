'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { appRoutes } from '@/src/core/enums/router-paths';
import type { ErrorModel } from '@/src/core/models/error.model';
import { singIn, singOut, singUp } from '@/src/infrastructure/supabase';

export async function loginServer(prevData: ErrorModel, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await singIn(email, password);

  if (error) {
    return { error: error.message };
  }

  const pathRedirect = `/${appRoutes.main.routerPath}/${appRoutes.chat.routerPath}`;

  revalidatePath(pathRedirect);
  redirect(pathRedirect);
}

export async function registrationServer(
  prevData: ErrorModel,
  formData: FormData,
) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await singUp(email, password);

  if (error) {
    return { error: error.message };
  }

  const pathRedirect = `/${appRoutes.main.routerPath}/${appRoutes.chat.routerPath}`;

  revalidatePath(pathRedirect);
  redirect(pathRedirect);
}

export async function singOutServer() {
  await singOut();

  const pathRedirect = `/${appRoutes.auth.routerPath}/${appRoutes.login.routerPath}`;

  revalidatePath(pathRedirect);
  redirect(pathRedirect);
}
