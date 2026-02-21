import type { PostgrestSingleResponse } from '@supabase/postgrest-js';

import type { ProfileDTO } from '@/src/core/dto';
import type { ProfileModel, SystemSettingsModel } from '@/src/core/models';
import type { ResponseModel } from '@/src/core/models/response.model';

// Postgrest //

export type PostgrestSystemResponse =
  PostgrestSingleResponse<SystemSettingsModel>;

export type PostgrestProfileResponse = PostgrestSingleResponse<ProfileModel>;

// DTO //

export type ResponseEmptyModel = ResponseModel<null>;

export type ResponseProfileDTOModel = ResponseModel<ProfileDTO>;
