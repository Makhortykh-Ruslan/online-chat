'use server';

import type { PostgrestSingleResponse } from '@supabase/postgrest-js';

import { EBDTableName } from '@/src/core/enums';
import type { ProfilesSettingsModel } from '@/src/core/models';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function addProfilesSettings(model: ProfilesSettingsModel) {
  const supabase = await createClient();

  const { language, theme, userId } = model;

  return supabase.from(EBDTableName.PROFILES_SETTINGS).insert({
    language,
    theme,
    user_id: userId,
  });
}

export async function getProfileSettingsById(
  userId: string,
): Promise<PostgrestSingleResponse<ProfilesSettingsModel>> {
  const supabase = await createClient();

  return supabase
    .from(EBDTableName.PROFILES_SETTINGS)
    .select('*')
    .eq('user_id', userId)
    .single();
}

export async function updateProfileSettings(data: ProfilesSettingsModel) {
  const supabase = await createClient();

  const { userId, ...updatePayload } = data;

  const { data: result, error } = await supabase
    .from(EBDTableName.PROFILES_SETTINGS)
    .update(updatePayload)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return result;
}
