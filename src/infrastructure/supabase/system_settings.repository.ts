'use server';

import type { PostgrestSingleResponse } from '@supabase/postgrest-js';

import { EBDTableName } from '@/src/core/enums';
import type { SystemSettingsModel } from '@/src/core/models';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function insertSystemSettings(model: SystemSettingsModel) {
  const supabase = await createClient();

  const { language, theme, userId } = model;

  return supabase.from(EBDTableName.SYSTEM_SETTINGS).insert({
    language,
    theme,
    user_id: userId,
  });
}

export async function getSystemSettingByUserId(
  userId: string,
): Promise<PostgrestSingleResponse<SystemSettingsModel>> {
  const supabase = await createClient();

  return supabase
    .from(EBDTableName.SYSTEM_SETTINGS)
    .select('*')
    .eq('user_id', userId)
    .single();
}

export async function updateSystemSettings(data: SystemSettingsModel) {
  const supabase = await createClient();

  const { userId, ...updatePayload } = data;

  return supabase
    .from(EBDTableName.SYSTEM_SETTINGS)
    .update(updatePayload)
    .eq('user_id', userId)
    .select()
    .single();
}
