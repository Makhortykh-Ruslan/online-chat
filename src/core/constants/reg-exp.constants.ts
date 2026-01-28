export const PASSWORD_REGEXP = new RegExp(
  /^(?=.*\d)(?=.*[~!@#$%^&*.+:;[\]{}\-_,()"'|/])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
);

export const EMAIL_REGEXP = new RegExp(
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
);
