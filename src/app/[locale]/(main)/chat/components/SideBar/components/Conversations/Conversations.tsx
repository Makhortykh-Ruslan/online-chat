'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { Input } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ConversationDTO } from '@/src/core/dto/conversation.dto';

import { ConversationItem } from './components/ConversationItem/ConversationItem';

type Props = {
  conversations: ConversationDTO[];
};

export const Conversations = ({ conversations }: Props) => {
  const router = useRouter();

  const selectConversation = useCallback(
    (conversationId: string) => {
      const path = `${appRoutes.main.chat}/${conversationId}`;

      router.push(path);
    },
    [router],
  );

  return (
    <section>
      <header>
        <Input
          leftIcon="search"
          id="search"
          placeholder="Search conversations"
        />
      </header>

      <main>
        {conversations.map((el) => (
          <ConversationItem
            key={el.conversationId}
            title={el.title}
            avatarUrl={el.avatarUrl}
            lastMessage={el.lastMessage}
            onClick={() => selectConversation(el.conversationId)}
          />
        ))}

        {conversations.length === 0 && <div>Empty Conversations</div>}
      </main>
    </section>
  );
};
