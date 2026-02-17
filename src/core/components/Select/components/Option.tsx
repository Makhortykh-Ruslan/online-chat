'use client';

import type { ReactNode } from 'react';

import { useSelectContext } from '../context';

export const Option = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const { onSelect, selectedValue } = useSelectContext();
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => onSelect(value)}
      className={`cursor-pointer p-2 hover:bg-gray-100 ${isSelected ? 'bg-blue-50 text-blue-600' : ''}`}
    >
      {children}
    </div>
  );
};
