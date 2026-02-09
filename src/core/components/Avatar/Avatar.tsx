import Image from 'next/image';

import { AvatarStyles } from './Avatar.styles';

type AvatarProps = {
  src?: string | null;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
};

export const Avatar = ({ src, alt, size = 'md' }: AvatarProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const stylse = AvatarStyles(sizes[size]);

  return (
    <div className={stylse.component}>
      {src ? (
        <Image src={src} alt={alt} fill className={stylse.component_img} />
      ) : (
        <div className={stylse.component_alt}>{alt.substring(0, 2)}</div>
      )}
    </div>
  );
};
