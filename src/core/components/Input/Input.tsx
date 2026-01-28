'use client';

import React, { type MouseEvent, useState } from 'react';

import { Icon } from '@/src/core/components/Icon/Icon';

import { getInputStyles } from './Input.style';
import type { TInputProps } from './type/t-input.props';

export const Input = ({
  id,
  label,
  error,
  className = '',
  leftIcon,
  rightIcon,
  isPasswordFlow,
  type = 'text',
  ...restProps
}: TInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isError = !!error;
  const styles = getInputStyles(isError, className);

  const currentType = isPasswordFlow
    ? isPasswordVisible
      ? 'text'
      : 'password'
    : type;
  const currentRightIcon = isPasswordFlow
    ? isPasswordVisible
      ? 'eye-open'
      : 'eye-close'
    : rightIcon;

  const handleTogglePassword = (e: MouseEvent) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return (
    <div className={styles.component}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.component_input_wrapper}>
        {leftIcon && <Icon name={leftIcon} className={styles.icon} />}

        <input
          id={id}
          className={styles.input}
          type={currentType}
          {...restProps}
        />

        {currentRightIcon && (
          <button
            type="button"
            onKeyDown={handleKeyDown}
            onMouseDown={handleTogglePassword}
            className={
              isPasswordFlow ? 'cursor-pointer' : 'pointer-events-none'
            }
          >
            <Icon name={currentRightIcon} className={styles.icon} />
          </button>
        )}
      </div>

      {isError && <p className={styles.error}>{error}</p>}
    </div>
  );
};
