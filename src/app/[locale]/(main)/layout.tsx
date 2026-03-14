import { getAuthData } from '@/src/infrastructure/supabase';

import { OnlineStatusChannel } from './components/OnlineStatusChannel';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuthData();

  if (!user?.id) {
    return <>{children}</>;
  }

  return <OnlineStatusChannel userId={user.id}>{children}</OnlineStatusChannel>;
}
