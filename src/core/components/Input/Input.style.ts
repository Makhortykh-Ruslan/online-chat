import clsx from 'clsx';

export const getInputStyles = (isError: boolean, className: string) => ({
  component: 'flex w-full flex-col',
  component_input_wrapper: clsx(
    'group mt-[10px] gap-[10px] rounded-[12px] border px-[12px] py-[8px] transition-all flex items-center shadow-none',
    isError
      ? 'border-red-600 bg-white focus-within:border-red-600'
      : 'border-gray-300 bg-gray-50 focus-within:border-indigo-400 focus-within:bg-indigo-50',
    className,
  ),
  input: clsx(
    'w-full appearance-none border-none bg-transparent outline-none placeholder:text-gray-400 text-14',
    isError ? 'text-red-600' : 'text-gray-700 focus:text-indigo-400',
  ),
  icon: clsx('w-[18px] h-[18px] shrink-0 transition-colors', {
    'text-gray-500 group-focus-within:text-indigo-400': !isError,
    'text-red-600': isError,
  }),
  label: 'text-14 font-medium transition-colors text-gray-900',
  error: 'text-12 mt-1 font-medium text-red-600',
});
