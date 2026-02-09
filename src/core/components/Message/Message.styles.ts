import clsx from 'clsx';

export const MessageStyles = (isSender: boolean) => ({
  component: clsx(
    isSender
      ? 'rounded-[16px_16px_6px_16px] bg-indigo-600'
      : 'rounded-[16px_16px_16px_6px] bg-gray-0  dark:bg-indigo-200',
    'py-[8px] px-[12px] shadow-smooth w-fit max-w-[50%]',
  ),
  component_title: clsx(
    isSender ? 'text-gray-0' : 'text-gray-900',
    'text-main-description text-16 font-regular',
  ),
  component_time: clsx(
    isSender ? 'text-indigo-100' : 'dark:text-gray-700',
    'mt-[10px] text-main-description text-12 font-regular',
  ),
});
