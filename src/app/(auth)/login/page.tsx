import { Metadata } from 'next';
import { AuthForm } from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Sign in — MooHive',
  description: 'Sign in to your MooHive account',
};

export default function LoginPage() {
  return <AuthForm mode="login" redirectTo="/dashboard" />;
}
