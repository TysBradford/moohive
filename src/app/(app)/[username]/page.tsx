import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Globe, Twitter, Instagram, Video } from 'lucide-react';

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const supabase = await createClient();

  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, bio')
    .eq('username', username)
    .single();

  if (!profile) {
    return {
      title: 'Creator not found — MooHive',
    };
  }

  return {
    title: `${profile.display_name || username} — MooHive`,
    description: profile.bio || `Check out ${profile.display_name || username}'s AI video portfolio on MooHive`,
  };
}

export default async function CreatorPage({ params }: Props) {
  const { username } = await params;
  const supabase = await createClient();

  // Get profile by username
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();

  if (!profile) {
    notFound();
  }

  // Get published videos
  const { data: videos } = await supabase
    .from('videos')
    .select('*')
    .eq('creator_id', profile.id)
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  const initials = profile.display_name
    ? profile.display_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  return (
    <div className="space-y-12">
      {/* Profile header */}
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
        {/* Avatar */}
        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-stone-100 sm:h-40 sm:w-40">
          {profile.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt={profile.display_name || username}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-4xl font-medium text-stone-400">
              {initials}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-6 sm:ml-8 sm:mt-0">
          <h1 className="text-3xl font-semibold text-stone-900">
            {profile.display_name || username}
          </h1>
          <p className="mt-1 text-lg text-stone-400">@{profile.username}</p>

          {profile.bio && (
            <p className="mt-4 max-w-lg text-stone-600">{profile.bio}</p>
          )}

          {/* Links */}
          {(profile.website ||
            profile.twitter_handle ||
            profile.instagram_handle) && (
            <div className="mt-4 flex items-center justify-center gap-4 sm:justify-start">
              {profile.website && (
                <Link
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-orange-600"
                >
                  <Globe className="h-4 w-4" />
                  Website
                </Link>
              )}
              {profile.twitter_handle && (
                <Link
                  href={`https://twitter.com/${profile.twitter_handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-orange-600"
                >
                  <Twitter className="h-4 w-4" />
                  @{profile.twitter_handle}
                </Link>
              )}
              {profile.instagram_handle && (
                <Link
                  href={`https://instagram.com/${profile.instagram_handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-orange-600"
                >
                  <Instagram className="h-4 w-4" />
                  @{profile.instagram_handle}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Videos grid */}
      <div>
        <h2 className="mb-6 text-xl font-semibold text-stone-900">Work</h2>

        {videos && videos.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <Link
                key={video.id}
                href={`/videos/${video.id}`}
                className="group overflow-hidden rounded-xl border border-stone-200 bg-white transition-all hover:border-stone-300 hover:shadow-md"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-stone-100">
                  {video.thumbnail_url && (
                    <Image
                      src={video.thumbnail_url}
                      alt={video.title}
                      width={640}
                      height={360}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-medium text-stone-900 group-hover:text-orange-600">
                    {video.title}
                  </h3>
                  {video.ai_model && (
                    <p className="mt-1 font-mono text-xs text-stone-400">
                      {video.ai_model}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-12 text-center">
            <Video className="mx-auto h-12 w-12 text-stone-300" />
            <h3 className="mt-4 font-medium text-stone-900">No videos yet</h3>
            <p className="mt-2 text-sm text-stone-500">
              This creator hasn't published any videos yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
