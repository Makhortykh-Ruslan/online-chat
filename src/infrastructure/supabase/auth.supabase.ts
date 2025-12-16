'use server';

import { createClient } from './server.supabase';

export async function singUp(email: string, password: string) {
  const supabase = await createClient();
  return supabase.auth.signUp({ email, password });
}

export async function singIn(email: string, password: string) {
  const supabase = await createClient();
  return supabase.auth.signInWithPassword({ email, password });
}

export async function singOut() {
  const supabase = await createClient();
  return supabase.auth.signOut();
}

export async function getAuthData() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}
