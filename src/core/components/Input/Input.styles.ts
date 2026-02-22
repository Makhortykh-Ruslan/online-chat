import clsx from 'clsx';

export const getInputStyles = (isError: boolean, className: string) => ({
  component: 'flex w-full flex-col',
  component_input_wrapper: clsx(
    'group flex items-center gap-[10px] rounded-[12px] border px-[12px] py-[8px] transition-all shadow-none outline-none',
    isError
      ? 'border-red-600 focus-within:border-red-600'
      : `border-gray-300 bg-gray-0 focus-within:bg-indigo-50 focus-within:border-indigo-400
        dark:border-brand-800 dark:bg-brand-900 focus-within:dark:bg-brand-700 focus-within:dark:border-gray-50`,
    className,
  ),
  input: clsx(
    'w-full appearance-none border-none bg-transparent outline-none placeholder-gray-700 text-14',
    isError
      ? 'text-gray-900 dark:text-gray-50'
      : 'text-gray-900 dark:text-gray-50 focus:text-indigo-400 focus:dark:text-gray-50',
  ),
  icon: clsx('w-[18px] h-[18px] shrink-0 transition-colors', {
    'text-gray-500 group-focus-within:text-indigo-400 dark:group-focus-within:text-gray-50':
      !isError,
    'text-red-600': isError,
  }),
  label: 'text-14 text-main-title font-medium transition-colors text-label',
  error: 'text-12 mt-1 font-medium text-red-600',
});
