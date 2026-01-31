"use client";

import Link from "next/link";
import { ArrowLeft, Search, Bell, User } from "lucide-react";

// Mock data
const navLinks = ["Explore", "Creators", "Collections", "Jobs"];

const categories = ["All", "Cinematic", "Abstract", "Character", "Landscapes", "Motion Graphics"];

const works = [
  { gradient: "gradient-editorial-1", creator: "Elena Voss", title: "Metamorphosis III", model: "Sora", duration: "0:24", views: "12.4K" },
  { gradient: "gradient-editorial-2", creator: "Marcus Chen", title: "Liquid Dreams", model: "Runway Gen-3", duration: "0:18", views: "8.2K" },
  { gradient: "gradient-editorial-3", creator: "Aria Patel", title: "Neon Whispers", model: "Kling", duration: "0:32", views: "5.7K" },
  { gradient: "gradient-editorial-4", creator: "James Wright", title: "Echoes", model: "Pika", duration: "0:15", views: "4.1K" },
  { gradient: "gradient-editorial-5", creator: "Sofia Kim", title: "Coral Depths", model: "Veo", duration: "0:28", views: "9.8K" },
  { gradient: "gradient-editorial-6", creator: "David Okonkwo", title: "Urban Pulse", model: "Sora", duration: "0:22", views: "7.3K" },
  { gradient: "gradient-editorial-1", creator: "Luna Martinez", title: "Starfall", model: "Runway Gen-3", duration: "0:19", views: "6.5K" },
  { gradient: "gradient-editorial-2", creator: "Alex Rivera", title: "Glass Cathedral", model: "Kling", duration: "0:35", views: "3.9K" },
  { gradient: "gradient-editorial-3", creator: "Nina Volkov", title: "Electric Bloom", model: "Pika", duration: "0:21", views: "11.2K" },
  { gradient: "gradient-editorial-4", creator: "Theo Park", title: "Midnight Sun", model: "Sora", duration: "0:27", views: "8.9K" },
  { gradient: "gradient-editorial-5", creator: "Maya Singh", title: "Fluid Motion", model: "Veo", duration: "0:16", views: "5.4K" },
  { gradient: "gradient-editorial-6", creator: "Oliver Stone", title: "Digital Rain", model: "Kling", duration: "0:30", views: "7.1K" },
];

export default function EditorialGrid() {
  return (
    <div className="min-h-screen bg-void">
      {/* Full navigation bar */}
      <nav className="sticky top-0 z-50 bg-void border-b border-mist/10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Back + Logo */}
            <div className="flex items-center gap-6">
              <Link
                href="/prototyping"
                className="text-mist hover:text-chalk transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <span className="text-xl font-semibold text-chalk tracking-tight">
                BloomHive
              </span>
            </div>

            {/* Center: Nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  className="text-sm text-mist hover:text-chalk transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-mist hover:text-chalk transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-mist hover:text-chalk transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="bg-ember hover:bg-ember-soft text-void text-sm font-medium px-4 py-2 rounded-full transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Category filter bar */}
        <div className="px-6 py-3 border-t border-mist/5">
          <div className="flex items-center gap-6 overflow-x-auto">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`text-sm whitespace-nowrap transition-colors ${
                  index === 0
                    ? "text-chalk font-medium"
                    : "text-mist hover:text-chalk"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main grid - tight, structured */}
      <main className="px-6 py-8">
        {/* Hairline divider text */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono text-mist uppercase tracking-wider">Featured Work</span>
          <div className="flex-1 h-px bg-mist/10" />
          <span className="text-xs text-mist">{works.length} pieces</span>
        </div>

        {/* Uniform grid - 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <article
              key={index}
              className="group cursor-pointer bg-surface border border-mist/10 hover:border-mist/30 transition-all"
              style={{ borderRadius: "2px" }}
            >
              {/* Thumbnail - uniform 16:9 */}
              <div
                className={`${work.gradient} aspect-video w-full relative`}
                style={{ borderRadius: "2px 2px 0 0" }}
              >
                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 text-xs font-mono text-chalk bg-void/80 px-2 py-0.5 rounded-sm">
                  {work.duration}
                </span>
              </div>

              {/* Card content - compact */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-chalk mb-1 truncate group-hover:text-ember transition-colors">
                  {work.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-mist truncate">{work.creator}</span>
                  <span className="text-xs font-mono text-mist/60">{work.views}</span>
                </div>
                {/* Model tag */}
                <div className="mt-2 pt-2 border-t border-mist/5">
                  <span className="text-xs font-mono text-mist/50">{work.model}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination - editorial style */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-sm text-void bg-ember rounded-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-mist hover:text-chalk border border-mist/10 hover:border-mist/30 rounded-sm transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-mist hover:text-chalk border border-mist/10 hover:border-mist/30 rounded-sm transition-colors">
            3
          </button>
          <span className="text-mist mx-2">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-mist hover:text-chalk border border-mist/10 hover:border-mist/30 rounded-sm transition-colors">
            24
          </button>
        </div>
      </main>

      {/* Footer - editorial */}
      <footer className="mt-16 border-t border-mist/10">
        <div className="px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-sm font-semibold text-chalk">BloomHive</span>
              <p className="text-xs text-mist mt-1">Where AI video creators thrive</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-mist hover:text-chalk cursor-pointer transition-colors">About</span>
              <span className="text-xs text-mist hover:text-chalk cursor-pointer transition-colors">Careers</span>
              <span className="text-xs text-mist hover:text-chalk cursor-pointer transition-colors">Terms</span>
              <span className="text-xs text-mist hover:text-chalk cursor-pointer transition-colors">Privacy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
