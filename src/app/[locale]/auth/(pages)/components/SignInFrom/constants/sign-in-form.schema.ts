import { z } from 'zod';

import { emailControl, passwordControl } from '@/src/core/validations';

export const signInFormSchema = z.object({
  email: emailControl,
  password: passwordControl,
});

export type TSignInFormSchema = z.infer<typeof signInFormSchema>;
