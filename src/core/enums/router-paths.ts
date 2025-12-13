type authRouterPath = 'auth' | 'login' | 'registration';
type mainRouterPath = 'main' | 'chat';

type AppRouting = authRouterPath | mainRouterPath;

export const appRoutes: Record<
  AppRouting,
  {
    routerPath: string;
    fullPath?: string;
  }
> = {
  // AUTH //
  auth: { routerPath: 'auth' },
  login: { routerPath: 'login' },
  registration: { routerPath: 'registration' },

  // MAIN //
  main: { routerPath: 'main' },
  chat: { routerPath: 'chat' },
};
