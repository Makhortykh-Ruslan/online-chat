import { z } from 'zod';

import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@/src/core/constants';

export const emailControl = z
  .string()
  .min(1, 'required')
  .regex(EMAIL_REGEXP, 'invalidEmail');

export const passwordControl = z
  .string()
  .min(1, 'required')
  .regex(PASSWORD_REGEXP, 'passwordNoSymbol');
