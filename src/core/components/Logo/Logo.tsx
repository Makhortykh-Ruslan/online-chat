import Image from 'next/image';

import logo from '../../../../public/images/logo.png';
import { getLogoStyle } from './Logo.style';

export const Logo = () => {
  const styles = getLogoStyle();

  return (
    <div className={styles.component}>
      <Image src={logo} width={40} height={40} alt="logo" />
    </div>
  );
};
