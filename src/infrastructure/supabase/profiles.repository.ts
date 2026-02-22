'use server';

import { EBDTableName } from '@/src/core/enums';
import type { ProfileModel } from '@/src/core/models';
import type { PostgrestProfileResponse } from '@/src/core/types';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function insertProfileRepository(data: ProfileModel) {
  const supabase = await createClient();
  return supabase.from(EBDTableName.PROFILES).insert(data);
}

export async function getProfileByUserIdRepository(
  userId: string,
): Promise<PostgrestProfileResponse> {
  const supabase = await createClient();

  return supabase
    .from(EBDTableName.PROFILES)
    .select()
    .eq('id', userId)
    .single();
}

export async function getProfilesByUsersIdRepository(
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

export async function updateProfileRepository(
  data: Partial<ProfileModel>,
): Promise<PostgrestProfileResponse> {
  const supabase = await createClient();
  return supabase
    .from(EBDTableName.PROFILES)
    .update(data)
    .eq('id', data.id)
    .select()
    .single();
}
