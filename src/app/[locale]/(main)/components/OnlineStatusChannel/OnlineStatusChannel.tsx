'use client';

import React, { useCallback, useEffect, useRef } from 'react';

import { setUserOnlineStatusAction } from '@/src/core/services';
import { createBrowserClient } from '@/src/infrastructure/supabase/client.supabase';

const ONLINE_CHANNEL_NAME = 'online';

type OnlineStatusChannelProps = {
  userId: string;
  children: React.ReactNode;
};

export function OnlineStatusChannel({
  userId,
  children,
}: OnlineStatusChannelProps) {
  const setOnlineRef = useRef(false);

  const setOffline = useCallback(() => {
    if (!setOnlineRef.current) return;
    setOnlineRef.current = false;
    setUserOnlineStatusAction(false);
  }, []);

  useEffect(() => {
    const supabase = createBrowserClient();
    const channel = supabase.channel(ONLINE_CHANNEL_NAME);

    channel
      .on('presence', { event: 'sync' }, () => {
        // Presence sync — можна використовувати для відображення списку онлайн
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user_id: userId,
            online_at: new Date().toISOString(),
          });
          setOnlineRef.current = true;
          await setUserOnlineStatusAction(true);
        }
      });

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setOffline();
      } else if (document.visibilityState === 'visible') {
        setUserOnlineStatusAction(true);
        setOnlineRef.current = true;
      }
    };

    const handleBeforeUnload = () => {
      setOffline();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      channel.unsubscribe();
      // Не викликаємо setOffline при unmount — лише при hidden/beforeunload,
      // щоб не ставити false при remount (Strict Mode) або навігації в Next.js
    };
  }, [userId, setOffline]);

  return <>{children}</>;
}
