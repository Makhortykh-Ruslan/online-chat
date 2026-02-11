import { z } from 'zod';

import {
  emailControl,
  fullNameControl,
  passwordControl,
} from '@/src/core/validations';

export const signUpFormSchema = z.object({
  fullName: fullNameControl,
  email: emailControl,
  password: passwordControl,
});

export type TSignIUpFormSchema = z.infer<typeof signUpFormSchema>;
