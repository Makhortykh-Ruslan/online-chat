'use server';

import {
  ERROR_DEFAULT_RESPONSE_MODEL,
  SUCCESS_DEFAULT_RESPONSE_MODEL,
} from '@/src/core/constants';
import type { SendMessageModel } from '@/src/core/models/message.model';
import type { ResponseEmptyModel } from '@/src/core/types';
import { getAuthData, insertMessage } from '@/src/infrastructure/supabase';

export async function sendMessageServer(
  _prevData: ResponseEmptyModel,
  model: SendMessageModel,
): Promise<ResponseEmptyModel> {
  try {
    const authUser = await getAuthData();

    if (!authUser) {
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: 'Not authenticated',
      };
    }

    const { content, conversation_id } = model;

    if (!content || !conversation_id) {
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: 'Invalid form data.',
      };
    }

    const insertModel = {
      content,
      sender_id: authUser.id,
      conversation_id,
    };

    const { error: insertError } = await insertMessage(insertModel);

    if (insertError) {
      return {
        ...ERROR_DEFAULT_RESPONSE_MODEL,
        message: insertError.message,
      };
    }

    return {
      ...SUCCESS_DEFAULT_RESPONSE_MODEL,
      message: '',
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';

    return {
      ...ERROR_DEFAULT_RESPONSE_MODEL,
      message,
    };
  }
}
