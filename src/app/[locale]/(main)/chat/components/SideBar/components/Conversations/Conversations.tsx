'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

import { Input, Tabs } from '@/src/core/components';
import type { TTab } from '@/src/core/components/Tabs/type';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ConversationDTO } from '@/src/core/dto/conversation.dto';

import { ConversationCard } from './components';
import { SIDEBAR_TABS_CONFIG, type TTabConfigKey } from './constants';

type Props = {
  conversations: ConversationDTO[];
};

export const Conversations = ({ conversations }: Props) => {
  const router = useRouter();
  const [activeTabId, setActiveTabId] = useState<TTabConfigKey>('all');

  const selectConversation = useCallback(
    (conversationId: string) => {
      const path = `${appRoutes.main.chat}/${conversationId}`;

      router.push(path);
    },
    [router],
  );

  const handleChangeTab = (event: TTab<TTabConfigKey>) => {
    setActiveTabId(event.id);
  };

  return (
    <section>
      <header>
        <Input
          leftIcon="search"
          id="search"
          placeholder="Search conversations"
        />
      </header>

      <Tabs
        tabs={SIDEBAR_TABS_CONFIG}
        activeTabId={activeTabId}
        onChangeTab={handleChangeTab}
      />

      <main>
        {conversations.map((el) => (
          <ConversationCard
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
