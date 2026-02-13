import Image from 'next/image';

import { AvatarStyles } from './Avatar.styles';

type AvatarProps = {
  src?: string | null;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export const Avatar = ({ src, alt, size = 'md' }: AvatarProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-[40px] h-[40px]',
    xl: 'w-[96px] h-[96px]',
  };

  const styles = AvatarStyles(sizes[size]);

  return (
    <div className={styles.component}>
      {src ? (
        <Image src={src} alt={alt} fill className={styles.component_img} />
      ) : (
        <div className={styles.component_alt}>{alt.substring(0, 2)}</div>
      )}
    </div>
  );
};
