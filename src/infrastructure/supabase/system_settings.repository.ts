'use server';

import { EBDTableName } from '@/src/core/enums';
import type { SystemSettingsModel } from '@/src/core/models';
import type { PostgrestSystemResponse } from '@/src/core/types';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function insertSystemSettingsRepository(
  model: SystemSettingsModel,
) {
  const supabase = await createClient();

  const { language, theme, user_id } = model;

  return supabase.from(EBDTableName.SYSTEM_SETTINGS).insert({
    language,
    theme,
    user_id,
  });
}

export async function getSystemSettingByUserIdRepository(
  userId: string,
): Promise<PostgrestSystemResponse> {
  const supabase = await createClient();

  return supabase
    .from(EBDTableName.SYSTEM_SETTINGS)
    .select('*')
    .eq('user_id', userId)
    .single();
}

export async function updateSystemSettingsRepository(
  data: SystemSettingsModel,
) {
  const supabase = await createClient();

  const { user_id, ...updatePayload } = data;

  return supabase
    .from(EBDTableName.SYSTEM_SETTINGS)
    .update(updatePayload)
    .eq('user_id', user_id)
    .select()
    .single();
}
