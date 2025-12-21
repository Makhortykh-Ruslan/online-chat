import { EBDTableName } from '@/src/core/enums';
import type { ProfileModel } from '@/src/core/models';
import { getAuthData } from '@/src/infrastructure/supabase/auth.repository';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function insertProfile(data: ProfileModel) {
  const supabase = await createClient();
  return supabase.from(EBDTableName.PROFILES).insert(data);
}

export async function getProfile(): Promise<ProfileModel | null> {
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

export async function getProfilesByUsersId(
  userIds: string[],
): Promise<ProfileModel[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from(EBDTableName.PROFILES)
    .select('*')
    .in('id', userIds);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
