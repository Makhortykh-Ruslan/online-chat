import clsx from 'clsx';

import type { TLoaderSize } from '@/src/core/components/Loader/type/t-loader-size';

export const geLoaderStyle = (
  className: string | undefined,
  size: TLoaderSize,
) => ({
  component: clsx(
    'animate-spin rounded-full border-gray-300 border-t-indigo-900',
    className,
    size === 'small' && 'w-5 h-5 border-2',
  ),
});
