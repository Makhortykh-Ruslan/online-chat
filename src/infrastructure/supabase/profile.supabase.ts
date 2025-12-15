'use server';

import type { ProfileModel } from '@/src/core/models';

import { createClient } from './server.supabase';

const relation = 'profiles';

export async function addNewProfile(data: ProfileModel) {
  const supabase = await createClient();
  return supabase.from(relation).insert(data);
}

export async function getProfiles() {
  const supabase = await createClient();
  const { data: currentAuthUser } = await supabase.auth.getUser();

  return supabase
    .from(relation)
    .select('*')
    .neq('id', currentAuthUser.user?.id);
}
