'use server';

import { EBDTableName, EControlName } from '@/src/core/enums';
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
  formData: FormData,
): Promise<PostgrestProfileResponse> {
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
