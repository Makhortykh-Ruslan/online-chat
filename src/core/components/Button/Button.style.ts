import clsx from 'clsx';

import type { TBtnColor } from './type';

export const getButtonStyles = (color: TBtnColor, className: string) => ({
  component: `flex items-center justify-center
    transition-all duration-300 ease-in-out
    cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 
    rounded-[16px] text-16 font-medium h-[44px] w-full text-white`,
  component_color: clsx(
    color === 'blue'
      ? 'bg-indigo-600 hover:enabled:bg-indigo-900'
      : 'bg-red-600 hover:enabled:bg-red-900',
    className,
  ),
});
