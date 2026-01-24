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
    <div className="grid w-full gap-1 rounded-2xl border border-white/20 bg-white/25 p-2 backdrop-blur-[30px] md:px-3 md:py-4">
      <div className="flex gap-3">
        <Icon
          name={iconName}
          className="--color-gray-0 h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
        ></Icon>

        <p className="text-12 md:text-14">{title}</p>
      </div>

      <p className="text-12">{description}</p>
    </div>
  );
};
