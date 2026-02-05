'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Globe, Twitter } from 'lucide-react';
import type { Profile } from '@/types/database';

interface ProfileCardProps {
  profile: Profile;
  showLinks?: boolean;
}

export function ProfileCard({ profile, showLinks = true }: ProfileCardProps) {
  const initials = profile.display_name
    ? profile.display_name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  return (
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-stone-100">
        {profile.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={profile.display_name || 'Profile'}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-medium text-stone-400">
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-lg font-medium text-stone-900">
          {profile.display_name || 'Unnamed creator'}
        </h3>

        {profile.username && (
          <p className="text-sm text-stone-400">@{profile.username}</p>
        )}

        {profile.bio && (
          <p className="mt-2 line-clamp-2 text-sm text-stone-500">
            {profile.bio}
          </p>
        )}

        {/* Links */}
        {showLinks && (profile.website || profile.twitter_handle) && (
          <div className="mt-3 flex items-center gap-3">
            {profile.website && (
              <Link
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-orange-600"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </Link>
            )}
            {profile.twitter_handle && (
              <Link
                href={`https://twitter.com/${profile.twitter_handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-stone-400 transition-colors hover:text-orange-600"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
