'use client';

import { ToggleStyles } from './Toggle.styles';

type ToggleProps = {
  value?: boolean;
  onChange: (value: boolean) => void;
};

export const Toggle = ({ value = false, onChange }: ToggleProps) => {
  const styles = ToggleStyles(value);

  return (
    <div
      data-component="Toggle"
      className={styles.component}
      onClick={() => onChange(!value)}
      role="switch"
      aria-checked={value}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onChange(!value);
        }
      }}
    >
      <span className={styles.component_toggle}></span>
    </div>
  );
};
