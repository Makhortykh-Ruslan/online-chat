'use server';

import { EBDTableName } from '@/src/core/enums';
import type { ProfileModel } from '@/src/core/models';

import { createClient } from './server.supabase';

export async function insertNewProfile(data: ProfileModel) {
  const supabase = await createClient();
  return supabase.from(EBDTableName.PROFILES).insert(data);
}

export async function getProfiles() {
  const supabase = await createClient();
  const { data: currentAuthUser } = await supabase.auth.getUser();

  return supabase
    .from(EBDTableName.PROFILES)
    .select('*')
    .neq('id', currentAuthUser.user?.id);
}
