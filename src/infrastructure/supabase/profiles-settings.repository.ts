'use server';

import { EBDTableName } from '@/src/core/enums';
import type { ProfilesSettingsModel } from '@/src/core/models';
import { createClient } from '@/src/infrastructure/supabase/server.supabase';

export async function addProfilesSetting(model: ProfilesSettingsModel) {
  const supabase = await createClient();

  const { language, theme, userId } = model;

  return supabase.from(EBDTableName.PROFILES_SETTINGS).insert({
    language,
    theme,
    user_id: userId,
  });
}
