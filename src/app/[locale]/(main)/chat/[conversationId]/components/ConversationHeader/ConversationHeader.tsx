import type { ConversationDetailsDTO } from '@/src/core/services/conversation.service';

type ConversationHeaderProps = {
  conversationDetails: ConversationDetailsDTO;
};

export const ConversationHeader = ({
  conversationDetails,
}: ConversationHeaderProps) => {
  return (
    <header>
      <div>
        {conversationDetails.avatarUrl && (
          <img
            src={conversationDetails.avatarUrl}
            alt={conversationDetails.title || 'Avatar'}
          />
        )}
        <div>
          <h2>{conversationDetails.title || 'Group Chat'}</h2>
          <p>
            {conversationDetails.type === 'direct'
              ? 'Direct message'
              : `${conversationDetails.participants.length} participants`}
          </p>
        </div>
      </div>
    </header>
  );
};
