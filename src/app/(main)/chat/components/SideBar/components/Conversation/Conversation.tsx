'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { appRoutes } from '@/src/core/constants/router-paths';
import type { ConversationDTO } from '@/src/core/models/conversation.dto';

import { ConversationItem } from './components/ConversationItem/ConversationItem';

type Props = {
  data: ConversationDTO[];
};

export const Conversation = ({ data }: Props) => {
  const router = useRouter();

  const selectConversation = useCallback(
    (conversationId: string) => {
      const path = `${appRoutes.main.chat}/${conversationId}`;

      router.push(path);
    },
    [router],
  );

  return (
    <div>
      <header>
        <input type="Search coversations" />
      </header>

      <main>
        {data.map((el) => (
          <ConversationItem
            key={el.conversationId}
            title={el.title}
            avatarUrl={el.avatarUrl}
            lastMessage={el.lastMessage}
            onClick={() => selectConversation(el.conversationId)}
          />
        ))}

        {data.length === 0 && <div>Empty Conversations</div>}
      </main>
    </div>
  );
};
