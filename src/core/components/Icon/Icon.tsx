import type { TIcon } from '@/src/core/types';

type IconProps = {
  name: TIcon;
  className?: string;
  onClick?: () => void;
};

export const Icon = ({ name, className = '', onClick }: IconProps) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      onClick={onClick}
    >
      <use href={`/icons/sprite.svg#icon-${name}`} />
    </svg>
  );
};
