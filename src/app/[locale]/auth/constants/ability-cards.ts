import { generateIdUtil } from '@/src/core/utils';

import type { TAbilityCardProps } from '../components/AbilityCard/type/t-ability.props';

export const ABILITY_CARDS: TAbilityCardProps[] = [
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
