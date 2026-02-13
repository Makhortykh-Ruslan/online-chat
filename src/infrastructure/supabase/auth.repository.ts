import { createClient } from './server.supabase';

export async function signUp(email: string, password: string) {
  const supabase = await createClient();
  return supabase.auth.signUp({ email, password });
}

export async function signIn(email: string, password: string) {
  const supabase = await createClient();
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  const supabase = await createClient();
  return supabase.auth.signOut();
}

export async function getAuthData() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function updateAuthUser(email: string, password?: string) {
  const supabase = await createClient();

  return await supabase.auth.updateUser({
    ...(email && { email }),
    ...(password && { password }),
  });
}
