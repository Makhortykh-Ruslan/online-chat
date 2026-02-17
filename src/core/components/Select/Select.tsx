'use client';

import { type ReactNode, useState } from 'react';

import {
  type Coords,
  SelectContext,
} from '@/src/core/components/Select/context';

import { Content, Option, Trigger } from './components';

export const Select = ({
  children,
  onChange,
  value,
}: {
  children: ReactNode;
  onChange: (v: string) => void;
  value: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<Coords | null>(null);

  const toggle = () => setIsOpen(!isOpen);
  const onSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{
        selectedValue: value,
        onSelect,
        isOpen,
        toggle,
        coords,
        setCoords,
      }}
    >
      <div className="relative inline-block w-full">{children}</div>
    </SelectContext.Provider>
  );
};

Select.Trigger = Trigger;
Select.Content = Content;
Select.Option = Option;
