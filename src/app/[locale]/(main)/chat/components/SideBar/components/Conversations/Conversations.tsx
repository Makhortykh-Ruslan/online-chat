'use client';

import { useTranslations } from 'next-intl';
import React, { useCallback, useMemo, useState } from 'react';

import { Input, Tabs } from '@/src/core/components';
import type { TTab } from '@/src/core/components/Tabs/type';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ConversationDTO } from '@/src/core/dto/conversation.dto';
import { useRouter } from '@/src/i18n/routing';

import { ConversationCard } from './components';
import { SIDEBAR_TABS_CONFIG, type TTabConfigKey } from './constants';
import { ConversationsStyles } from './Conversations.styles';

type Props = {
  conversations: ConversationDTO[];
};

export const Conversations = ({ conversations }: Props) => {
  const router = useRouter();
  const [activeTabId, setActiveTabId] = useState<TTabConfigKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const titles = useTranslations('titles');
  const descriptions = useTranslations('descriptions');

  const filteredConversations = useMemo(() => {
    return conversations.filter((el) => {
      const matchesTab = activeTabId === 'all' || el.type === activeTabId;
      const matchesSearch = el.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [conversations, activeTabId, searchQuery]);

  const selectConversation = useCallback(
    (conversationId: string) => {
      router.push(`${appRoutes.main.chat}/${conversationId}`);
    },
    [router],
  );

  const handleChangeTab = useCallback((tab: TTab<TTabConfigKey>) => {
    setActiveTabId(tab.id);
  }, []);

  const styles = ConversationsStyles(filteredConversations.length === 0);

  return (
    <>
      <div className={styles.component_input}>
        <Input
          leftIcon="search"
          id="search"
          placeholder="Search conversations"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.component_tabs}>
        <Tabs
          tabs={SIDEBAR_TABS_CONFIG}
          activeTabId={activeTabId}
          onChangeTab={handleChangeTab}
        />
      </div>

      <main className={styles.component_main}>
        {filteredConversations.map((el) => (
          <ConversationCard
            key={el.conversationId}
            title={el.title}
            avatarUrl={el.avatarUrl}
            lastMessage={el.lastMessage}
            onClick={() => selectConversation(el.conversationId)}
          />
        ))}

        {filteredConversations.length === 0 && (
          <div className={styles.component_empty}>
            <p className={styles.component_empty_title}>
              {titles('emptyTitle')}
            </p>
            <p className={styles.component_empty_description}>
              {descriptions('emptyDescription')}
            </p>
          </div>
        )}
      </main>
    </>
  );
};
