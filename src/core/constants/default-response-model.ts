import type { ResponseModel } from '@/src/core/models/response.model';

export const SUCCESS_DEFAULT_RESPONSE_MODEL: ResponseEmptyModel = {
  success: true,
  message: '',
  data: null,
};

export const ERROR_DEFAULT_RESPONSE_MODEL: ResponseEmptyModel = {
  success: false,
  message: '',
  data: null,
};
