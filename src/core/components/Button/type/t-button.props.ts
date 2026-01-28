import type { ButtonHTMLAttributes } from 'react';

import type { TBtnColor } from './t-btn-color';

export type TButtonProps = {
  text: string;
  color?: TBtnColor;
} & ButtonHTMLAttributes<HTMLButtonElement>;
