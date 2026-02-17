'use client';

import { createContext, useContext } from 'react';

export type Coords = {
  top: number;
  left: number;
  width: number;
};

type SelectContextType = {
  selectedValue: string;
  onSelect: (value: string) => void;
  isOpen: boolean;
  toggle: () => void;
  coords: Coords | null;
  setCoords: (coords: Coords) => void;
};

export const SelectContext = createContext<SelectContextType | undefined>(
  undefined,
);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context)
    throw new Error('Select components must be used within <Select />');
  return context;
}
