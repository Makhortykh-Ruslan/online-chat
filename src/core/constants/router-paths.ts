type AppRoutesShape = {
  auth: {
    signIn: string;
    signUp: string;
  };
  main: {
    chat: string;
    settings: string;
  };
};

export const appRoutes = {
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
  },
  main: {
    chat: '/chat',
    settings: '/settings',
  },
} as const satisfies AppRoutesShape;
