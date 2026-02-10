'use client';

import { Avatar, Icon } from '@/src/core/components';
import type { ConversationDetailsDTO } from '@/src/core/services/conversation.service';

import { ConversationHeaderStyles } from './ConversationHeader.styles';

type ConversationHeaderProps = {
  conversationDetails: ConversationDetailsDTO;
};

export const ConversationHeader = ({
  conversationDetails,
}: ConversationHeaderProps) => {
  const { avatarUrl, title } = conversationDetails;

  const styles = ConversationHeaderStyles;

  return (
    <>
      <div data-component="conversation-header" className={styles.component}>
        <Avatar src={avatarUrl} alt={avatarUrl || 'Avatar'} size="lg" />

        <div className={styles.component_title}>
          <h2 className={styles.component_title}>{title || 'Group Chat'}</h2>
          <p className={styles.component_subtitle}>Active now</p>
        </div>

        <div className={styles.component_icons}>
          <Icon name="call" className={styles.component_icon} />
          <Icon name="camera" className={styles.component_icon} />
          <Icon name="dots" className={styles.component_icon} />
        </div>
      </div>
    </>
  );
};
