'use client';

import { type ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useSelectContext } from '../../context';
import { ContentStyles } from './Content.styles';

export const Content = ({ children }: { children: ReactNode }) => {
  const { isOpen, coords, toggle } = useSelectContext();
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        toggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggle]);

  if (!isOpen || !mounted || !coords) return null;

  const styles = ContentStyles;

  return createPortal(
    <div
      ref={contentRef}
      className={styles.component}
      style={{
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        width: `${coords.width}px`,
      }}
    >
      {children}
    </div>,
    document.body,
  );
};
