import React from 'react';

import { getButtonStyles } from './Button.style';
import type { TButtonProps } from './type';

export const Button = ({
  disabled,
  color = 'blue',
  className = '',
  type = 'button',
  children,
  ...restProps
}: TButtonProps) => {
  const styles = getButtonStyles(color, className);
  const classNameComponent =
    `${styles.component} ${styles.component_color}`.trim();

  return (
    <button
      role="button"
      type={type}
      className={classNameComponent}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
