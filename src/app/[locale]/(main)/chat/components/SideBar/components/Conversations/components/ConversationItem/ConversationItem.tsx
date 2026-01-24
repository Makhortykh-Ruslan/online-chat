'use client';

import React, { memo } from 'react';

import type { ConversationDTO } from '@/src/core/models/conversation.dto';

type Props = Partial<ConversationDTO> & {
  onClick?: () => void;
};

const ConversationItemComponent = ({
  avatarUrl,
  title,
  lastMessage,
  onClick,
}: Props) => {
  return (
    <article onClick={onClick} role="button" tabIndex={0}>
      <div>{avatarUrl}</div>
      <div>
        <h2>{title}</h2>
        <p>{lastMessage?.content}</p>
      </div>
      <div>
        <p>2m age</p>
        <span>1</span>
      </div>
    </article>
  );
};

export const ConversationItem = memo(ConversationItemComponent);

ConversationItem.displayName = 'ConversationItem';
