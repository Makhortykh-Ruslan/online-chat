import { z } from 'zod';

import {
  emailControl,
  fullNameControl,
  idControl,
} from '@/src/core/validations';

export const profileFormSchema = z.object({
  fullName: fullNameControl,
  email: emailControl,
  id: idControl,
});

export type TProfileFormSchema = z.infer<typeof profileFormSchema>;
