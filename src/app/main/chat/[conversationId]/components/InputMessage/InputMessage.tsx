'use client';

import { useActionState } from 'react';

import type { ErrorModel } from '@/src/core/models';
import { sendMessageServer } from '@/src/core/server';

type InputMessageProps = {
  conversation_id: string;
};

const initialState: ErrorModel = {
  error: '',
};

export const InputMessage = ({ conversation_id }: InputMessageProps) => {
  const [state, formAction] = useActionState(sendMessageServer, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="conversation_id" value={conversation_id} />
      <input name="content" placeholder="Type message..." />
      <button type="submit">Send</button>
    </form>
  );
};
