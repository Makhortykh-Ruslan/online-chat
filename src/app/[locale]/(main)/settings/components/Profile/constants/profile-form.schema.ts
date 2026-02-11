import { z } from 'zod';

import { emailControl, fullNameControl } from '@/src/core/validations';

export const profileFormSchema = z.object({
  fullName: fullNameControl,
  email: emailControl,
});

export type TProfileFormSchema = z.infer<typeof profileFormSchema>;
