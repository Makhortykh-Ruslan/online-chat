import clsx from 'clsx';

export const ToggleStyles = (value: boolean) => ({
  component: clsx(
    'relative flex items-center px-[3px] rounded-[100px] border w-[44px] h-[24px] cursor-pointer',
    value ? 'bg-indigo-600 border-indigo-300' : 'bg-gray-400',
  ),
  component_toggle: clsx(
    'rounded-full bg-gray-0 w-[16px] h-[16px] transition-transform duration-200 ease-in-out',
    value ? 'translate-x-[20px]' : 'translate-x-0',
  ),
});
