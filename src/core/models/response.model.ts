export type ResponseModel<T = null> = {
  data: T | null;
  success: boolean;
  message?: string;
};
