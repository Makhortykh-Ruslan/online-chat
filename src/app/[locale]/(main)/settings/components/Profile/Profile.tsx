'use client';

import { Button, Input, Loader } from '@/src/core/components';
import type { ProfileDTO } from '@/src/core/dto';

import { useProfileForm } from './hooks';
import { ProfileStyles } from './Profile.styles';

export const Profile = (profileData: ProfileDTO) => {
  const {
    translate,
    register,
    errors,
    handleSubmit,
    isDisableSubmit,
    isLoading,
  } = useProfileForm(profileData);

  const styles = ProfileStyles;

  return (
    <form onSubmit={handleSubmit} className={styles.component}>
      <Input
        leftIcon="user"
        id="fullName"
        label={translate.labels('fullName')}
        placeholder={translate.placeholders('fullName')}
        {...register('fullName')}
        error={
          errors.fullName?.message
            ? translate.validations(errors.fullName?.message)
            : ''
        }
      />

      <Input
        leftIcon="email"
        id="email"
        label={translate.labels('email')}
        placeholder={translate.placeholders('email')}
        {...register('email')}
        error={
          errors.email?.message
            ? translate.validations(errors.email?.message)
            : ''
        }
      />

      <Button disabled={isDisableSubmit} color="blue" type="submit">
        {isLoading && <Loader />}
        {isLoading ? translate.button('pending') : translate.button('save')}
      </Button>
    </form>
  );
};
