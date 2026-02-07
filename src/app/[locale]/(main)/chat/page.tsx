import type { LayoutProps } from '@/src/core/types';

import { EmptyBlock } from './components';
import { pageStyles } from './page.styles';

export default async function ChatPage({ params }: LayoutProps) {
  const { locale } = await params;

  return (
    <div className={pageStyles.page}>
      {
        <EmptyBlock
          locale={locale}
          titleKey="selectAChat"
          descriptionKey="chooseConversation"
        />
      }
    </div>
  );
}
