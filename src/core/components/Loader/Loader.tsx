import { geLoaderStyle } from './Loader.styles';
import type { TLoaderSize } from './type';

type props = {
  size?: TLoaderSize;
  className?: string;
};

export const Loader = ({ className, size = 'small' }: props) => {
  const style = geLoaderStyle(className, size);

  return <div data-component="Loader" className={style.component}></div>;
};
