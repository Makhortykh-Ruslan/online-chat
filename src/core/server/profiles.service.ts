import type { ProfileModel } from '@/src/core/models';
import { createClient, getAuthData } from '@/src/infrastructure/supabase';

export async function getCurrenProfile(): Promise<ProfileModel | null> {
  const authUser = await getAuthData();

  if (!authUser) return null;

  const supabase = await createClient();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authUser.id)
    .single();

  if (!profile) return null;

  return profile;
}
