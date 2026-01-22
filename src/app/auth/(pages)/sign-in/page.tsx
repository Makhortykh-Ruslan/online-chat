import { SingInForm } from './components/SingInForm/SingInForm';

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-24 font-bold text-gray-900">Welcome back</h2>
      <p className="text-16 pt-[8px] pb-[16px] text-gray-700">
        Enter your credentials to access your account
      </p>
      <SingInForm />
    </div>
  );
}
