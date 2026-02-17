'use client';

import type { ReactNode } from 'react';

import { useSelectContext } from '../context';

export const Content = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useSelectContext();
  if (!isOpen) return null;
  return (
    <div className="absolute z-10 mt-1 w-full rounded border bg-white shadow-md">
      {children}
    </div>
  );
};
