'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

import { Input, Tabs } from '@/src/core/components';
import type { TTab } from '@/src/core/components/Tabs/type';
import { MOCK_CONVERSATIONS } from '@/src/core/constants';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ConversationDTO } from '@/src/core/dto/conversation.dto';

import { ConversationCard } from './components';
import { SIDEBAR_TABS_CONFIG, type TTabConfigKey } from './constants';
import { ConversationsStyles } from './Conversations.styles';

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

  const testConversation = [...conversations, ...MOCK_CONVERSATIONS];

  const handleChangeTab = (event: TTab<TTabConfigKey>) => {
    setActiveTabId(event.id);
  };

  const styles = ConversationsStyles(testConversation.length === 0);

  return (
    <>
      <header>
        <div className={styles.component_input}>
          <Input
            leftIcon="search"
            id="search"
            placeholder="Search conversations"
          />
        </div>

        <div className={styles.component_tabs}>
          <Tabs
            tabs={SIDEBAR_TABS_CONFIG}
            activeTabId={activeTabId}
            onChangeTab={handleChangeTab}
          />
        </div>
      </header>

      <main className={styles.component_main}>
        {testConversation.map((el) => (
          <ConversationCard
            key={el.conversationId}
            title={el.title}
            avatarUrl={el.avatarUrl}
            lastMessage={el.lastMessage}
            onClick={() => selectConversation(el.conversationId)}
          />
        ))}

        {testConversation.length === 0 && <div>Empty Conversations</div>}
      </main>
    </>
  );
};
