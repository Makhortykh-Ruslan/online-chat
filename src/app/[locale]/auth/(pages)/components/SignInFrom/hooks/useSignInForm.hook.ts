import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { signInServer } from '@/src/core/services';

import { signInFormSchema, type TSignInFormSchema } from '../constants';

export const useSignInForm = () => {
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
  } = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    mode: 'onTouched',
  });

  const [state, formAction, isPending] = useActionState(signInServer, {
    success: false,
    data: null,
  });

  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      alert(state.message);
    }
  }, [state]);

  const onSubmit = (data: TSignInFormSchema) => {
    startTransition(() => {
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('password', data.password);

      formAction(formData);
    });
  };

  return {
    register,
    translate,
    errors,
    serverError: state.message,
    handleSubmit: handleSubmit(onSubmit),
    isLoading: isPending || isSubmitting,
    isDisableSubmit: isPending || isSubmitting || !isValid,
  };
};
