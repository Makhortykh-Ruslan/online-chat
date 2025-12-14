import { redirect } from 'next/navigation';

import { appRoutes } from '@/src/core/enums/router-paths';

export default function NotFound() {
  redirect(appRoutes.auth.signIn);
}
