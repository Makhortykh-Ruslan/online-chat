'use server';

import type { ProfileModel } from '@/src/core/models';

import { createClient } from './server.supabase';

const relation = 'profiles';

export async function addNewProfile(data: ProfileModel) {
  const supabase = await createClient();
  return supabase.from(relation).insert(data);
}
