import { Icon } from '@/src/core/components/Icon/Icon';

import { getLogoStyle } from './Logo.style';

export const Logo = () => {
  const styles = getLogoStyle();

  return (
    <div className={styles.component}>
      <Icon name="cloud" className={styles.component_logo}></Icon>
    </div>
  );
};
