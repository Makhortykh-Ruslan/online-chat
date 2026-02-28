'use client';

import { useTranslations } from 'next-intl';
import React, { type ChangeEvent, startTransition, useState } from 'react';

import { Button, Icon, Input } from '@/src/core/components';
import { useActionInterceptor } from '@/src/core/hooks';
import { sendMessageServer } from '@/src/core/services';
import type { TIcon } from '@/src/core/types';

import { ConversationFooterStyles } from './ConversationFooter.styles';

type InputMessageProps = {
  conversationId: string;
};

export const ConversationFooter = ({ conversationId }: InputMessageProps) => {
  const [messageType, setMessageType] = useState<TIcon>('audio');
  const { execute } = useActionInterceptor(sendMessageServer);

  const placeholders = useTranslations('placeholders');
  const styles = ConversationFooterStyles;

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageType(event.target.value ? 'message' : 'audio');
  };

  const handleAction = (formData: FormData) => {
    startTransition(() => execute(formData));
  };

  return (
    <form action={handleAction} className={styles.component}>
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
