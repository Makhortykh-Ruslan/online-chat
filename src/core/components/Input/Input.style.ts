import clsx from 'clsx';

export const getInputStyles = (isError: boolean, className: string) => ({
  component: 'flex w-full flex-col',
  component_input_wrapper: clsx(
    'group mt-[10px] flex items-center gap-[10px] rounded-[12px] border px-[12px] py-[8px] transition-all shadow-none outline-none',
    isError
      ? 'border-red-600 bg-input-bg-err focus-within:border-red-600'
      : 'border-input-border bg-input-bg focus-within:border-input-focus-border focus-within:bg-input-focus-bg',
    className,
  ),
  input: clsx(
    'w-full appearance-none border-none bg-transparent outline-none placeholder-input-placeholder text-14',
    isError ? 'text-red-600' : 'text-input-text',
  ),
  icon: clsx('w-[18px] h-[18px] shrink-0 transition-colors', {
    'text-gray-500 group-focus-within:text-input-focus-border': !isError,
    'text-red-600': isError,
  }),
  label: 'text-14 font-medium transition-colors text-label',
  error: 'text-12 mt-1 font-medium text-red-600',
});
