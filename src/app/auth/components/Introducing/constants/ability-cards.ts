import type { AbilityCardProps } from '@/src/app/auth/components/AbilityCard/AbilityCard';
import { generateIdUtil } from '@/src/core/utils';

export const ABILITY_CARDS: AbilityCardProps[] = [
  {
    iconName: 'message',
    title: 'Real-time Chat',
    description: 'Instant messaging',
    id: generateIdUtil(),
  },
  {
    iconName: 'users',
    title: 'Group Chats',
    description: 'Collaborate together',
    id: generateIdUtil(),
  },
  {
    iconName: 'secure',
    title: 'Secure',
    description: 'End-to-end encrypted',
    id: generateIdUtil(),
  },
  {
    iconName: 'flesh',
    title: 'Fast',
    description: 'Lightning quick',
    id: generateIdUtil(),
  },
];
