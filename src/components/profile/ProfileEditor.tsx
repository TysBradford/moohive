'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import {
  User,
  AtSign,
  FileText,
  Globe,
  Twitter,
  Instagram,
  Camera,
  Loader2,
  AlertCircle,
  Check,
} from 'lucide-react';
import type { Profile, ProfileUpdate } from '@/types/database';

interface ProfileEditorProps {
  profile: Profile;
  onSave?: (profile: Profile) => void;
}

export function ProfileEditor({ profile, onSave }: ProfileEditorProps) {
  const [formData, setFormData] = useState<ProfileUpdate>({
    display_name: profile.display_name,
    username: profile.username,
    bio: profile.bio,
    website: profile.website,
    twitter_handle: profile.twitter_handle,
    instagram_handle: profile.instagram_handle,
  });
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar_url);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supabase = createClient();

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError('Image must be smaller than 2MB');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${profile.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from('avatars').getPublicUrl(filePath);

      setAvatarUrl(publicUrl);

      // Update profile with new avatar URL
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', profile.id);

      if (updateError) throw updateError;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload avatar');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      const { data, error: updateError } = await supabase
        .from('profiles')
        .update(formData)
        .eq('id', profile.id)
        .select()
        .single();

      if (updateError) throw updateError;

      setSuccess(true);
      onSave?.(data as Profile);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      if (err instanceof Error) {
        // Handle specific Postgres errors
        if (err.message.includes('username_format')) {
          setError(
            'Username must be 3-30 characters, lowercase letters, numbers, and underscores only'
          );
        } else if (err.message.includes('unique')) {
          setError('This username is already taken');
        } else {
          setError(err.message);
        }
      } else {
        setError('Failed to save profile');
      }
    } finally {
      setSaving(false);
    }
  };

  const initials = formData.display_name
    ? formData.display_name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Avatar */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-stone-100">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl font-medium text-stone-400">
                {initials}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-stone-900 text-white transition-colors hover:bg-stone-800 disabled:opacity-50"
          >
            {uploading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Camera className="h-4 w-4" />
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="hidden"
          />
        </div>
        <div className="text-sm text-stone-500">
          <p className="font-medium text-stone-900">Profile photo</p>
          <p>JPG, PNG or GIF. Max 2MB.</p>
        </div>
      </div>

      {/* Display name */}
      <div>
        <label
          htmlFor="display_name"
          className="mb-2 block text-sm font-medium text-stone-900"
        >
          Display name
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
          <input
            id="display_name"
            type="text"
            value={formData.display_name || ''}
            onChange={(e) =>
              setFormData({ ...formData, display_name: e.target.value })
            }
            placeholder="How you want to be known"
            className="w-full rounded-lg border border-stone-200 bg-white py-3 pl-12 pr-4 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/20"
          />
        </div>
      </div>

      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-stone-900"
        >
          Username
        </label>
        <div className="relative">
          <AtSign className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
          <input
            id="username"
            type="text"
            value={formData.username || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value.toLowerCase(),
              })
            }
            placeholder="your_username"
            pattern="^[a-z0-9_]{3,30}$"
            className="w-full rounded-lg border border-stone-200 bg-white py-3 pl-12 pr-4 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/20"
          />
        </div>
        <p className="mt-1 text-sm text-stone-400">
          moohive.com/{formData.username || 'username'}
        </p>
      </div>

      {/* Bio */}
      <div>
        <label
          htmlFor="bio"
          className="mb-2 block text-sm font-medium text-stone-900"
        >
          Bio
        </label>
        <div className="relative">
          <FileText className="absolute left-4 top-4 h-5 w-5 text-stone-400" />
          <textarea
            id="bio"
            value={formData.bio || ''}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Tell us about yourself and your work"
            rows={3}
            maxLength={300}
            className="w-full resize-none rounded-lg border border-stone-200 bg-white py-3 pl-12 pr-4 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/20"
          />
        </div>
        <p className="mt-1 text-right text-sm text-stone-400">
          {formData.bio?.length || 0}/300
        </p>
      </div>

      {/* Website */}
      <div>
        <label
          htmlFor="website"
          className="mb-2 block text-sm font-medium text-stone-900"
        >
          Website
        </label>
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
          <input
            id="website"
            type="url"
            value={formData.website || ''}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            placeholder="https://your-website.com"
            className="w-full rounded-lg border border-stone-200 bg-white py-3 pl-12 pr-4 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/20"
          />
        </div>
      </div>

      {/* Social handles */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="twitter"
            className="mb-2 block text-sm font-medium text-stone-900"
          >
            Twitter
          </label>
          <div className="relative">
            <Twitter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
            <input
              id="twitter"
              type="text"
              value={formData.twitter_handle || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  twitter_handle: e.target.value.replace('@', ''),
                })
              }
              placeholder="handle"
              className="w-full rounded-lg border border-stone-200 bg-white py-3 pl-12 pr-4 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/20"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="instagram"
            className="mb-2 block text-sm font-medium text-stone-900"
          >
            Instagram
          </label>
          <div className="relative">
            <Instagram className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
            <input
              id="instagram"
              type="text"
              value={formData.instagram_handle || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  instagram_handle: e.target.value.replace('@', ''),
                })
              }
              placeholder="handle"
              className="w-full rounded-lg border border-stone-200 bg-white py-3 pl-12 pr-4 text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/20"
            />
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Success message */}
      {success && (
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-600">
          <Check className="h-4 w-4 flex-shrink-0" />
          <p>Profile saved successfully</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={saving}
        className="flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 py-3 font-medium text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {saving && <Loader2 className="h-4 w-4 animate-spin" />}
        Save changes
      </button>
    </form>
  );
}
