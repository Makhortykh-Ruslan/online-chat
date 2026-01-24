import type { AbilityCardProps } from '@/src/app/[locale]/auth/components/AbilityCard/AbilityCard';
import { generateIdUtil } from '@/src/core/utils';

export const ABILITY_CARDS: AbilityCardProps[] = [
  {
    iconName: 'message',
    title: 'realTimeChat',
    description: 'instantMessaging',
    id: generateIdUtil(),
  },
  {
    iconName: 'users',
    title: 'groupChats',
    description: 'collaborateTogether',
    id: generateIdUtil(),
  },
  {
    iconName: 'secure',
    title: 'secure',
    description: 'endToEndEncrypted',
    id: generateIdUtil(),
  },
  {
    iconName: 'flesh',
    title: 'flesh',
    description: 'lightingQuick',
    id: generateIdUtil(),
  },
];
