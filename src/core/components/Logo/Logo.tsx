import Image from 'next/image';

import logo from '../../../../public/images/logo.png';
import { getLogoStyles } from './Logo.styles';

export const Logo = () => {
  const styles = getLogoStyles();

  return (
    <div className={styles.component}>
      <Image src={logo} width={40} height={40} alt="logo" />
    </div>
  );
};
