import type { ResponseModel } from '@/src/core/models/response.model';

export const SUCCESS_DEFAULT_RESPONSE_MODEL: ResponseModel<null> = {
  success: true,
  message: '',
  data: null,
};

export const ERROR_DEFAULT_RESPONSE_MODEL: ResponseModel<null> = {
  success: false,
  message: '',
  data: null,
};
