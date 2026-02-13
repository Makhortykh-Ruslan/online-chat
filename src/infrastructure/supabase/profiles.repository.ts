import type { PostgrestSingleResponse } from '@supabase/postgrest-js';

import { EBDTableName, EControlName } from '@/src/core/enums';
import type { ProfileModel } from '@/src/core/models';
import { getAuthData } from '@/src/infrastructure/supabase/auth.repository';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function insertProfile(data: ProfileModel) {
  const supabase = await createClient();
  return supabase.from(EBDTableName.PROFILES).insert(data);
}

export async function getProfileByUserId(
  id: string,
): Promise<PostgrestSingleResponse<ProfileModel>> {
  const supabase = await createClient();

  return supabase.from(EBDTableName.PROFILES).select().eq('id', id).single();
}

export async function getProfiles(): Promise<ProfileModel | null> {
  const authUser = await getAuthData();

  if (!authUser) return null;

  const supabase = await createClient();

  const { data: profile } = await supabase
    .from(EBDTableName.PROFILES)
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

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();

  const fullName = formData.get(EControlName.FULL_NAME) as string;
  const email = formData.get(EControlName.EMAIL) as string;
  const id = formData.get(EControlName.ID) as string;

  return supabase
    .from(EBDTableName.PROFILES)
    .update({
      user_name: fullName,
      email: email,
    })
    .eq('id', id)
    .select()
    .single();
}
