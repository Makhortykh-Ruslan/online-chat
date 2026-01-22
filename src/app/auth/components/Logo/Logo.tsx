import { Icon } from '@/src/core/components/Icon/Icon';

export const Logo = () => {
  return (
    <div className="shadow-purple bg-purple-logo flex h-[52px] w-[52px] items-center justify-center rounded-[11px] md:h-[80px] md:w-[80px]">
      <Icon
        name="cloud"
        className="--color-gray-0 h-[26px] w-[30px] md:h-[40px] md:w-[47px]"
      ></Icon>
    </div>
  );
};
