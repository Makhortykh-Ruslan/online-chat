type AppRoutesShape = {
  auth: {
    root: string;
    signIn: string;
    signUp: string;
  };
  main: {
    root: string;
    chat: string;
  };
};

export const appRoutes = {
  auth: {
    root: '/auth',
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  },
  main: {
    root: '/main',
    chat: '/main/chat',
  },
} as const satisfies AppRoutesShape;
