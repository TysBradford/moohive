import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { ProfileEditor } from '@/components/profile/ProfileEditor';
import type { Profile } from '@/types/database';

export const metadata: Metadata = {
  title: 'Edit profile — MooHive',
  description: 'Edit your MooHive profile',
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user!.id)
    .single();

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-stone-900">Edit profile</h1>
        <p className="mt-2 text-stone-500">
          Tell the community about yourself and your work
        </p>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
        <ProfileEditor profile={profile as Profile} />
      </div>
    </div>
  );
}
