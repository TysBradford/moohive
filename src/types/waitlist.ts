// src/types/waitlist.ts
export interface WaitlistFormData {
  name: string;
  email: string;
}

export interface WaitlistSubmission extends WaitlistFormData {
  source: 'landing_hero' | 'landing_footer';
}

export interface WaitlistFormProps {
  source: 'landing_hero' | 'landing_footer';
  successMessage?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  submit?: string;
}
