'use client';

import { useTranslations } from 'next-intl';
import React, { type ChangeEvent, useActionState, useState } from 'react';

import { Button, Icon, Input } from '@/src/core/components';
import type { ErrorModel } from '@/src/core/models';
import { sendMessageServer } from '@/src/core/services';
import type { TIcon } from '@/src/core/types';

import { ConversationFooterStyles } from './ConversationFooter.styles';

type InputMessageProps = {
  conversationId: string;
};

const initialState: ErrorModel = {
  error: '',
};

export const ConversationFooter = ({ conversationId }: InputMessageProps) => {
  const [messageType, setMessageType] = useState<TIcon>('audio');
  const [state, formAction] = useActionState(sendMessageServer, initialState);

  const placeholders = useTranslations('placeholders');
  const styles = ConversationFooterStyles;

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageType(event.target.value ? 'message' : 'audio');
  };

  return (
    <form action={formAction} className={styles.component}>
      <input type="hidden" name="conversation_id" value={conversationId} />

      <Icon name="attach" className={styles.component_attach} />

      <Input
        className={styles.component_input}
        name="content"
        id="message"
        placeholder={placeholders('typeMessage')}
        onChange={handleMessageChange}
      />

      <Button type="submit" className={styles.component_btn}>
        <Icon className={styles.component_btn_icon} name={messageType} />
      </Button>
    </form>
  );
};
