'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { User, Settings, LogOut, ChevronDown, Plus } from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface AppHeaderProps {
  user: SupabaseUser;
}

export function AppHeader({ user }: AppHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const avatarUrl = user.user_metadata?.avatar_url;
  const displayName =
    user.user_metadata?.full_name || user.user_metadata?.name || user.email;
  const initials = displayName
    ? displayName
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/dashboard"
          className="text-xl font-semibold tracking-tight text-stone-900"
        >
          MooHive
        </Link>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Add video button */}
          <Link
            href="/videos/new"
            className="flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            <Plus className="h-4 w-4" />
            Add video
          </Link>

          {/* User menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:bg-stone-100"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt=""
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-medium text-stone-400">
                    {initials}
                  </div>
                )}
              </div>
              <ChevronDown className="h-4 w-4 text-stone-400" />
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-lg border border-stone-200 bg-white py-1 shadow-lg">
                  <div className="border-b border-stone-100 px-4 py-3">
                    <p className="truncate text-sm font-medium text-stone-900">
                      {displayName}
                    </p>
                    <p className="truncate text-sm text-stone-400">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Your profile
                  </Link>

                  <Link
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>

                  <div className="border-t border-stone-100">
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-3 px-4 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-900"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
