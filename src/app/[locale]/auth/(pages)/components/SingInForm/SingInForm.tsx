'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@/src/core/components';
import { appRoutes } from '@/src/core/constants/router-paths';
import type { ErrorModel } from '@/src/core/models';
import { signInServer } from '@/src/core/services';
import { Link } from '@/src/i18n/routing';

import { getAuthFormStyle } from '../../styles';
import { signInFormSchema, type TSignInFormSchema } from './constants';

const initialState: ErrorModel = {
  error: '',
};

export const SingInForm = () => {
  const labels = useTranslations('labels');
  const button = useTranslations('button');
  const validations = useTranslations('validations');
  const placeholders = useTranslations('placeholders');
  const descriptions = useTranslations('descriptions');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    mode: 'onTouched',
  });

  const [state, formAction] = useActionState(signInServer, initialState);

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    }
  }, [state.error]);

  const onSubmit = (data: TSignInFormSchema) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    startTransition(() => formAction(formData));
  };

  const styles = getAuthFormStyle();
  const isDisableSubmit = isSubmitting || !isValid;

  return (
    <section className={styles.component}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.component_input}>
          <Input
            leftIcon="email"
            id="userNameOrEmail"
            label={labels('email')}
            placeholder={placeholders('email')}
            {...register('email')}
            error={
              errors.email?.message ? validations(errors.email?.message) : ''
            }
          />
        </div>

        <div className={styles.component_input}>
          <Input
            isPasswordFlow
            id="password"
            leftIcon="lock"
            label={labels('password')}
            placeholder={placeholders('password')}
            {...register('password')}
            error={
              errors.password?.message
                ? validations(errors.password?.message)
                : ''
            }
          />
        </div>

        <Button
          className={styles.component_button}
          disabled={isDisableSubmit}
          color="blue"
          text={isSubmitting ? button('pending') : button('logIn')}
          type="submit"
        />
      </form>
      <div className={styles.component_link_container}>
        {descriptions('notHaveAccount')}
        <Link className={styles.component_link} href={appRoutes.auth.signUp}>
          {descriptions('signUp')}
        </Link>
      </div>
    </section>
  );
};
