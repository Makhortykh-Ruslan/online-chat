'use client';

import type { ReactNode } from 'react';

import type { TIdName } from '@/src/core/types';

import { useSelectContext } from '../../context';
import { OptionStyles } from './Option.styles';

export const Option = <V, I>({
  value,
  children,
}: {
  value: TIdName<V, I>;
  children: ReactNode;
}) => {
  const { onSelect, selectedValue } = useSelectContext();

  const isSelected = selectedValue?.id === value.id || false;
  const styles = OptionStyles(isSelected);

  return (
    <div onClick={() => onSelect(value)} className={styles.component}>
      {children}
    </div>
  );
};
