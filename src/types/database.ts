/**
 * Database types for MooHive
 * Generated based on Supabase schema
 */

export interface Profile {
  id: string;
  username: string | null;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  website: string | null;
  twitter_handle: string | null;
  instagram_handle: string | null;
  is_creator: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProfileInsert {
  id: string;
  username?: string | null;
  display_name?: string | null;
  bio?: string | null;
  avatar_url?: string | null;
  website?: string | null;
  twitter_handle?: string | null;
  instagram_handle?: string | null;
  is_creator?: boolean;
}

export interface ProfileUpdate {
  username?: string | null;
  display_name?: string | null;
  bio?: string | null;
  avatar_url?: string | null;
  website?: string | null;
  twitter_handle?: string | null;
  instagram_handle?: string | null;
  is_creator?: boolean;
}

export interface ToolUsed {
  name: string;
  purpose?: string;
}

export interface Video {
  id: string;
  creator_id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  ai_model: string | null;
  prompt: string | null;
  negative_prompt: string | null;
  duration_seconds: number | null;
  aspect_ratio: string | null;
  resolution: string | null;
  fps: number | null;
  tools_used: ToolUsed[];
  generation_settings: Record<string, unknown>;
  view_count: number;
  upvote_count: number;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface VideoInsert {
  id?: string;
  creator_id: string;
  title: string;
  description?: string | null;
  video_url: string;
  thumbnail_url?: string | null;
  ai_model?: string | null;
  prompt?: string | null;
  negative_prompt?: string | null;
  duration_seconds?: number | null;
  aspect_ratio?: string | null;
  resolution?: string | null;
  fps?: number | null;
  tools_used?: ToolUsed[];
  generation_settings?: Record<string, unknown>;
  is_published?: boolean;
  is_featured?: boolean;
  published_at?: string | null;
}

export interface VideoUpdate {
  title?: string;
  description?: string | null;
  video_url?: string;
  thumbnail_url?: string | null;
  ai_model?: string | null;
  prompt?: string | null;
  negative_prompt?: string | null;
  duration_seconds?: number | null;
  aspect_ratio?: string | null;
  resolution?: string | null;
  fps?: number | null;
  tools_used?: ToolUsed[];
  generation_settings?: Record<string, unknown>;
  is_published?: boolean;
  is_featured?: boolean;
  published_at?: string | null;
}

// Common AI video models
export const AI_MODELS = [
  'sora',
  'runway',
  'kling',
  'pika',
  'veo',
  'flow',
  'luma',
  'minimax',
  'other',
] as const;

export type AIModel = (typeof AI_MODELS)[number];

// Common aspect ratios
export const ASPECT_RATIOS = ['16:9', '9:16', '1:1', '4:3', '21:9'] as const;

export type AspectRatio = (typeof ASPECT_RATIOS)[number];

// Common resolutions
export const RESOLUTIONS = ['720p', '1080p', '2K', '4K'] as const;

export type Resolution = (typeof RESOLUTIONS)[number];
