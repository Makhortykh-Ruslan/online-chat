export type ResponseModel<T = null> = {
  data: T | null;
  error: string | null;
  message?: string;
};
