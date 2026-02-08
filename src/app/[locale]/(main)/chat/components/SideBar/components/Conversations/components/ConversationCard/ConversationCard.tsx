'use client';

import React, { memo } from 'react';

import type { ConversationDTO } from '@/src/core/dto/conversation.dto';

import { conversationCardStyles } from './ConversationCard.styles';

type Props = Partial<ConversationDTO> & {
  onClick?: () => void;
};

const ConversationCardComponent = ({
  avatarUrl,
  title,
  lastMessage,
  onClick,
}: Props) => {
  const styles = conversationCardStyles;

  return (
    <article onClick={onClick} className={styles.component}>
      <div className={styles.component_avatar}>{avatarUrl}</div>
      <div className={styles.component_row}>
        <p className={styles.component_title}>{title}</p>
        <p className={styles.component_time}>2m ago</p>
      </div>
      <div className={styles.component_row}>
        <p className={styles.component_message}>{lastMessage?.content}</p>
        <div className={styles.component_count}>4</div>
      </div>
    </article>
  );
};

export const ConversationCard = memo(ConversationCardComponent);

ConversationCard.displayName = 'ConversationCard';
