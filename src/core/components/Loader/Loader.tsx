import { geLoaderStyle } from '@/src/core/components/Loader/Loader.style';
import type { TLoaderSize } from '@/src/core/components/Loader/type/t-loader-size';

type props = {
  size?: TLoaderSize;
  className?: string;
};

export const Loader = ({ className, size = 'small' }: props) => {
  const style = geLoaderStyle(className, size);

  return <div className={style.component}></div>;
};
