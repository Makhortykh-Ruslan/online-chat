import React from 'react';

import type { TBtnColor } from '@/src/core/components/Button/type/t-btn-color';

type Props = {
  disabled?: boolean;
  text: string;
  color?: TBtnColor;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  disabled,
  text,
  color = 'blue',
  className = '',
  onClick,
  type = 'button',
}: Props) => {
  const baseClasses = `
    flex items-center justify-center
    transition-all duration-300 ease-in-out
    cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 
    rounded-[16px] text-16 font-medium h-[44px] w-full text-white
  `;

  const colorClasses =
    color === 'blue'
      ? 'bg-indigo-600 hover:enabled:bg-indigo-900'
      : 'bg-red-600 hover:enabled:bg-red-900';

  const combinedClasses = `${baseClasses} ${colorClasses} ${className}`.trim();

  return (
    <button
      role="button"
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
