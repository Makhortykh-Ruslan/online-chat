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
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={styles.component}
    >
      <div>{avatarUrl}</div>
      <div>
        <p>{title}</p>
        <p>3age min</p>
      </div>
      <div>
        <p>{lastMessage?.content}</p>
        <span>1</span>
      </div>
    </article>
  );
};

export const ConversationCard = memo(ConversationCardComponent);

ConversationCard.displayName = 'ConversationCard';
