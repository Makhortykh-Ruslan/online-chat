import type { TIcon } from '@/src/core/types';

type IconProps = {
  name: TIcon;
  size?: number;
  className?: string;
};

export const Icon = ({ name, size = 24, className = '' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <use href={`/icons/sprite.svg#icon-${name}`} />
    </svg>
  );
};
