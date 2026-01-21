export const generateIdUtil = () => {
  if (typeof window !== 'undefined' && window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  const crypto = require('crypto');
  return crypto.randomUUID();
};
