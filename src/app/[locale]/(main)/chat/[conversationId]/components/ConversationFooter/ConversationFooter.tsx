'use client';

import { useTranslations } from 'next-intl';
import React, { startTransition, useEffect, useState } from 'react';

import { Button, Icon, Input } from '@/src/core/components';
import { useActionInterceptor } from '@/src/core/hooks';
import { sendMessageServer } from '@/src/core/services';

import { ConversationFooterStyles } from './ConversationFooter.styles';

type Props = {
  conversationId: string;
};

export const ConversationFooter = ({ conversationId }: Props) => {
  const { execute, state } = useActionInterceptor(sendMessageServer);
  const [content, setContent] = useState('');
  const placeholders = useTranslations('placeholders');
  const styles = ConversationFooterStyles;

  useEffect(() => {
    if (state.success) {
      setContent('');
    }
  }, [state.timestamp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;

    startTransition(() =>
      execute({ content, conversation_id: conversationId }),
    );
  };

  return (
    <form
      data-component="ConversationFooter"
      onSubmit={handleSubmit}
      className={styles.component}
    >
      <Input
        className={styles.component_input}
        id="message"
        placeholder={placeholders('typeMessage')}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button type="submit" className={styles.component_btn}>
        <Icon className={styles.component_btn_icon} name="message" />
      </Button>
    </form>
  );
};
