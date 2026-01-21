import { Icon } from '@/src/core/components/Icon/Icon';
import type { TIcon } from '@/src/core/types';

export type AbilityCardProps = {
  iconName: TIcon;
  title: string;
  description: string;
  id: number;
};

export const AbilityCard = ({
  iconName,
  title,
  description,
}: AbilityCardProps) => {
  return (
    <div className="grid gap-1 py-4 px-3">
      <div className="flex gap-3">
        <Icon name={iconName} className="--color-gray-0"></Icon>
        <p className="text-14">{title}</p>
      </div>
      <p className="text-12">{description}</p>
    </div>
  );
};
