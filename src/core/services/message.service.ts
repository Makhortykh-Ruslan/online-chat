'use server';

import { EControlName } from '@/src/core/enums';
import type { ErrorModel } from '@/src/core/models';
import { getAuthData, insertMessage } from '@/src/infrastructure/supabase';

export async function sendMessageServer(
  prevData: ErrorModel,
  formData: FormData,
): Promise<ErrorModel> {
  const authUser = await getAuthData();

  if (!authUser) {
    return { error: 'Not authenticated' };
  }

  const sender_id = authUser.id;
  const content = formData.get(EControlName.CONTENT) as string;
  const conversation_id = formData.get(EControlName.CONVERSATION_ID) as string;

  if (!content || !conversation_id) {
    return { error: 'Invalid form data.' };
  }

  const model = {
    content,
    sender_id,
    conversation_id,
  };

  const { error } = await insertMessage(model);

  if (error) {
    return { error: error.message };
  }

  return { error: '' };
}
