import { Icon } from '@/src/core/components/Icon/Icon';

import { getAbilityCardStyle } from './AbilityCard.style';
import type { TAbilityCardProps } from './type/t-ability.props';

export const AbilityCard = ({
  iconName,
  title,
  description,
}: TAbilityCardProps) => {
  const styles = getAbilityCardStyle();
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <Icon name={iconName} className={styles.icon}></Icon>

        <p className={styles.title}>{title}</p>
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};
