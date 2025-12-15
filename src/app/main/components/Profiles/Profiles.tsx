'use client';

import { useRouter } from 'next/navigation';

import type { ProfileModel } from '@/src/core/models';
import { findOrCreateConversation } from '@/src/infrastructure/supabase';

type ProfilesProps = {
  data: ProfileModel[];
};

export function Profiles({ data }: ProfilesProps) {
  const router = useRouter();

  const handleClick = async (profile: ProfileModel): Promise<void> => {
    const conversationId = await findOrCreateConversation(profile.id);
    router.push(`/main/chat/${conversationId}`);
  };

  return (
    <>
      {data.map((profile) => (
        <div key={profile.id} onClick={() => handleClick(profile)}>
          {profile.username}
        </div>
      ))}
    </>
  );
}
