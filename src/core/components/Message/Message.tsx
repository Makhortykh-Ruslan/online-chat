import { useLocale } from 'next-intl';

import type { MessageDTO } from '@/src/core/dto';
import { formatMessageTime } from '@/src/core/utils';

import { MessageStyles } from './Message.styles';

type MessageProps = {
  isMine: boolean;
} & MessageDTO;

export const Message = ({ content, createdAt, isMine }: MessageProps) => {
  const local = useLocale();
  const styles = MessageStyles(isMine);

  const time = formatMessageTime(createdAt, local as 'uk' | 'en');

  return (
    <div className={styles.component}>
      <p className={styles.component_title}>{content}</p>
      <p className={styles.component_time}>{time}</p>
    </div>
  );
};
