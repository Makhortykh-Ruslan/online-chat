import { z } from 'zod';

import {
  defaultRequiredRule,
  emailRule,
  idControl,
} from '@/src/core/validations';

export const userFormSchema = z.object({
  fullName: defaultRequiredRule,
  email: emailRule.min(1, 'required'),
  id: idControl,
});

export type TUserFormSchema = z.infer<typeof userFormSchema>;
