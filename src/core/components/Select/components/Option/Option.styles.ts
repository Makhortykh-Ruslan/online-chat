import clsx from 'clsx';

export const OptionStyles = (isSelected: boolean) => ({
  component: clsx(
    `cursor-pointer text-14 py-[8px] px-[12px] 
    hover:bg-indigo-50 transition duration-150 ease-in-out dark:hover:bg-purple-900`,
    isSelected && 'text-indigo-500 font-semibold',
  ),
});
