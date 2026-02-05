import { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Plus, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard — MooHive',
  description: 'Your MooHive dashboard',
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Get user's profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user!.id)
    .single();

  // Get user's videos
  const { data: videos } = await supabase
    .from('videos')
    .select('*')
    .eq('creator_id', user!.id)
    .order('created_at', { ascending: false });

  const displayName =
    profile?.display_name ||
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    'there';

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-semibold text-stone-900">
          Welcome, {displayName.split(' ')[0]}
        </h1>
        <p className="mt-2 text-stone-500">
          {profile?.username
            ? `Your portfolio is live at moohive.com/${profile.username}`
            : 'Complete your profile to get your portfolio URL'}
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {!profile?.username && (
          <Link
            href="/profile"
            className="group rounded-xl border border-stone-200 bg-white p-6 transition-all hover:border-stone-300 hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100 text-stone-600 transition-colors group-hover:bg-stone-900 group-hover:text-white">
              <Video className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-stone-900">Complete your profile</h3>
            <p className="mt-1 text-sm text-stone-500">
              Add a username and bio to get your portfolio URL
            </p>
          </Link>
        )}

        <Link
          href="/videos/new"
          className="group rounded-xl border border-stone-200 bg-white p-6 transition-all hover:border-stone-300 hover:shadow-md"
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100 text-stone-600 transition-colors group-hover:bg-stone-900 group-hover:text-white">
            <Plus className="h-6 w-6" />
          </div>
          <h3 className="font-medium text-stone-900">Add your first video</h3>
          <p className="mt-1 text-sm text-stone-500">
            Showcase your AI video work with rich metadata
          </p>
        </Link>
      </div>

      {/* Videos section */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-stone-900">Your videos</h2>
          <Link
            href="/videos/new"
            className="text-sm font-medium text-stone-600 hover:text-orange-600"
          >
            Add video
          </Link>
        </div>

        {videos && videos.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Video cards would go here */}
            {videos.map((video) => (
              <div
                key={video.id}
                className="overflow-hidden rounded-xl border border-stone-200 bg-white"
              >
                <div className="aspect-video bg-stone-100" />
                <div className="p-4">
                  <h3 className="font-medium text-stone-900">{video.title}</h3>
                  <p className="mt-1 text-sm text-stone-400">
                    {video.is_published ? 'Published' : 'Draft'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-12 text-center">
            <Video className="mx-auto h-12 w-12 text-stone-300" />
            <h3 className="mt-4 font-medium text-stone-900">No videos yet</h3>
            <p className="mt-2 text-sm text-stone-500">
              Add your first video to start building your portfolio
            </p>
            <Link
              href="/videos/new"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
            >
              <Plus className="h-4 w-4" />
              Add video
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
