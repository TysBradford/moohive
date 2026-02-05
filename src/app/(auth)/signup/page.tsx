import { Metadata } from 'next';
import { AuthForm } from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Create account — MooHive',
  description: 'Join the MooHive community',
};

export default function SignupPage() {
  return <AuthForm mode="signup" redirectTo="/dashboard" />;
}
