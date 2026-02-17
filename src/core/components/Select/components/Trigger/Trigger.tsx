'use client';

import { Icon } from '@/src/core/components';

import { useSelectContext } from '../../context';
import { TriggerStyles } from './Trigger.styles';

export const Trigger = ({ placeholder }: { placeholder: string }) => {
  const { toggle, selectedValue, isOpen } = useSelectContext();

  const styles = TriggerStyles(isOpen, selectedValue);

  return (
    <button onClick={toggle} className={styles.component}>
      {selectedValue || placeholder}

      <Icon name="arrow-down" className={styles.component_arrow} />
    </button>
  );
};
