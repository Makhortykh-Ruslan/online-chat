import clsx from 'clsx';

export const AvatarStyles = (size: string) => ({
  component: clsx(size, 'relative overflow-hidden rounded-full bg-gray-200'),
  component_img: 'object-cover',
  component_alt:
    'flex h-full w-full items-center justify-center text-gray-500 uppercase',
});
