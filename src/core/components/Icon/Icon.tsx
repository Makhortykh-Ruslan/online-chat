import type { TIcon } from '@/src/core/types';

type IconProps = {
  name: TIcon;
  className?: string;
};

export const Icon = ({ name, className = '' }: IconProps) => {
  return (
    <svg
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
