import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { ErrorModel } from '@/src/core/models';
import { signInServer } from '@/src/core/services';

import { profileFormSchema, type TProfileFormSchema } from '../constants';

const initialState: ErrorModel = {
  error: '',
};

export const useProfileForm = () => {
  const labels = useTranslations('labels');
  const button = useTranslations('button');
  const validations = useTranslations('validations');
  const placeholders = useTranslations('placeholders');
  const descriptions = useTranslations('descriptions');

  const translate = {
    labels,
    button,
    validations,
    placeholders,
    descriptions,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onTouched',
  });

  const [state, formAction, isPending] = useActionState(
    signInServer,
    initialState,
  );

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  const onSubmit = (data: TProfileFormSchema) => {
    startTransition(() => {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);

      formAction(formData);
    });
  };

  return {
    register,
    translate,
    errors,
    serverError: state.error,
    handleSubmit: handleSubmit(onSubmit),
    isLoading: isPending || isSubmitting,
    isDisableSubmit: isPending || isSubmitting || !isValid,
  };
};
