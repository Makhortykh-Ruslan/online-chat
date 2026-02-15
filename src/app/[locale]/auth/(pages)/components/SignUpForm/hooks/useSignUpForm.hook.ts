import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { signUpServer } from '@/src/core/services';

import { signUpFormSchema, type TSignIUpFormSchema } from '../constants';

export const useSignUpForm = () => {
  const { resolvedTheme } = useTheme();
  const locale = useLocale();

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
  } = useForm<TSignIUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onTouched',
  });

  const [state, formAction, isPending] = useActionState(signUpServer, {
    success: false,
    data: null,
  });

  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      alert(state.message);
    }
  }, [state]);

  const onSubmit = (data: TSignIUpFormSchema) => {
    startTransition(() => {
      const formData = new FormData();

      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('language', locale);
      formData.append('theme', resolvedTheme || 'system');

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
