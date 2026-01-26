'use client';

import clsx from 'clsx';
import { type InputHTMLAttributes } from 'react';

import { Icon } from '@/src/core/components/Icon/Icon';
import type { TIcon } from '@/src/core/types';

type Props = {
  id: string;
  label?: string;
  error?: string;
  className?: string;
  leftIcon?: TIcon;
  rightIcon?: TIcon;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  id,
  label,
  error,
  className = '',
  leftIcon,
  rightIcon,
  ...restProps
}: Props) => {
  const isError = !!error;

  const baseContainer =
    'group mt-[10px] gap-[10px] rounded-[12px] border px-[12px] py-[8px] transition-all flex items-center shadow-none';

  const resultClassName = clsx(baseContainer, className, {
    'text-14 border-gray-300 bg-gray-50 focus-within:border-indigo-400 focus-within:bg-indigo-50':
      !isError,
    'border-red-600 bg-gray-0 focus-within:border-red-600 focus-within:bg-gray-0':
      isError,
  });

  const inputClassName = clsx(
    'w-full appearance-none border-none bg-transparent outline-none placeholder:text-gray-400',
    {
      'text-gray-700 focus:text-indigo-400': !isError,
      'text-red-600 focus:text-red-600': isError,
    },
  );

  const iconClassName = clsx('w-[18px] h-[18px]', {
    'text-gray-500 group-focus-within:text-indigo-400': !isError,
    'text-red-600': isError,
  });

  return (
    <div className="flex w-full flex-col">
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'text-14 font-medium transition-colors',
            isError ? 'text-red-600' : 'text-gray-900',
          )}
        >
          {label}
        </label>
      )}
      <div className={resultClassName}>
        {leftIcon && <Icon name={leftIcon} className={iconClassName} />}

        <input id={id} className={inputClassName} {...restProps} />

        {rightIcon && <Icon name={rightIcon} className={iconClassName} />}
      </div>
      {isError && (
        <p className="text-12 mt-1 font-medium text-red-600">{error}</p>
      )}
    </div>
  );
};
