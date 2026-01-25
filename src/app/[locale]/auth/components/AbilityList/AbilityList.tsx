'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { AbilityCard } from '@/src/app/[locale]/auth/components/AbilityCard';
import { ABILITY_CARDS } from '@/src/app/[locale]/auth/constants/ability-cards';

export const AbilityList = () => {
  const titles = useTranslations('titles');
  const descriptions = useTranslations('descriptions');

  return (
    <>
      {ABILITY_CARDS.map((el) => (
        <AbilityCard
          key={el.id}
          {...el}
          title={titles(el.title)}
          description={descriptions(el.description)}
        />
      ))}
    </>
  );
};
