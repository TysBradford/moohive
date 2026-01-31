"use client";

import Link from "next/link";
import { ArrowLeft, Search, Bell } from "lucide-react";

// Light mode color palette - warm cream
const navLinks = ["Explore", "Creators", "Collections", "Jobs"];
const categories = ["All", "Cinematic", "Abstract", "Character", "Landscapes", "Motion Graphics"];

const works = [
  { id: 1, gradient: "from-violet-600 to-indigo-900", creator: "Elena Voss", title: "Metamorphosis III", model: "Sora", duration: "0:24", aspect: "16:9" },
  { id: 2, gradient: "from-amber-500 to-rose-600", creator: "Marcus Chen", title: "Liquid Dreams", model: "Runway Gen-3", duration: "0:18", aspect: "9:16" },
  { id: 3, gradient: "from-emerald-400 to-cyan-600", creator: "Aria Patel", title: "Neon Whispers", model: "Kling", duration: "0:32", aspect: "1:1" },
  { id: 4, gradient: "from-rose-500 to-purple-700", creator: "James Wright", title: "Echoes", model: "Pika", duration: "0:15", aspect: "16:9" },
  { id: 5, gradient: "from-blue-500 to-teal-400", creator: "Sofia Kim", title: "Coral Depths", model: "Veo", duration: "0:28", aspect: "4:3" },
  { id: 6, gradient: "from-orange-500 to-red-600", creator: "David Okonkwo", title: "Urban Pulse", model: "Sora", duration: "0:22", aspect: "9:16" },
  { id: 7, gradient: "from-pink-500 to-violet-600", creator: "Luna Martinez", title: "Starfall", model: "Runway Gen-3", duration: "0:19", aspect: "16:9" },
  { id: 8, gradient: "from-cyan-500 to-blue-600", creator: "Alex Rivera", title: "Glass Cathedral", model: "Kling", duration: "0:35", aspect: "1:1" },
  { id: 9, gradient: "from-yellow-400 to-orange-500", creator: "Nina Volkov", title: "Electric Bloom", model: "Pika", duration: "0:21", aspect: "3:4" },
  { id: 10, gradient: "from-indigo-500 to-purple-600", creator: "Theo Park", title: "Midnight Sun", model: "Sora", duration: "0:27", aspect: "16:9" },
  { id: 11, gradient: "from-teal-400 to-emerald-600", creator: "Maya Singh", title: "Fluid Motion", model: "Veo", duration: "0:16", aspect: "9:16" },
  { id: 12, gradient: "from-red-500 to-pink-600", creator: "Oliver Stone", title: "Digital Rain", model: "Kling", duration: "0:30", aspect: "4:3" },
  { id: 13, gradient: "from-slate-600 to-zinc-800", creator: "Sam Lee", title: "Monochrome", model: "Sora", duration: "0:33", aspect: "1:1" },
  { id: 14, gradient: "from-lime-400 to-green-600", creator: "Zara Ahmed", title: "Growth", model: "Veo", duration: "0:19", aspect: "9:16" },
];

function getAspectClass(aspect: string) {
  switch (aspect) {
    case "16:9": return "aspect-video";
    case "9:16": return "aspect-[9/16]";
    case "1:1": return "aspect-square";
    case "4:3": return "aspect-[4/3]";
    case "3:4": return "aspect-[3/4]";
    default: return "aspect-video";
  }
}

export default function LightMasonry() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header - warm light mode */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-[#FAF9F7]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center gap-6">
          <Link
            href="/prototyping"
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-semibold text-stone-900 tracking-tight">
            BloomHive
          </span>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
            Join
          </button>
        </div>
      </nav>

      {/* Category filter */}
      <div className="fixed top-[73px] left-0 right-0 z-40 bg-[#FAF9F7]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="px-6 py-3">
          <div className="flex items-center gap-6 overflow-x-auto">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`text-sm whitespace-nowrap transition-colors ${
                  index === 0
                    ? "text-stone-900 font-medium"
                    : "text-stone-400 hover:text-stone-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="pt-32 px-6 pb-16">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">Featured Work</span>
          <div className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-400">{works.length} pieces</span>
        </div>

        {/* Masonry grid using CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {works.map((work) => (
            <article
              key={work.id}
              className="group cursor-pointer break-inside-avoid mb-4"
            >
              {/* Thumbnail at native aspect ratio */}
              <div
                className={`bg-gradient-to-br ${work.gradient} ${getAspectClass(work.aspect)} w-full relative rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}
              >
                <span className="absolute bottom-2 right-2 text-xs font-mono text-white bg-black/50 px-2 py-0.5 rounded">
                  {work.duration}
                </span>
              </div>

              {/* Metadata below */}
              <div className="mt-3 px-0.5">
                <h3 className="text-sm font-medium text-stone-900 truncate group-hover:text-orange-600 transition-colors">
                  {work.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-stone-500">{work.creator}</span>
                  <span className="text-[10px] font-mono text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded">
                    {work.model}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 text-center">
          <button className="text-sm text-stone-500 hover:text-stone-900 transition-colors border border-stone-300 hover:border-stone-400 px-6 py-2 rounded-full">
            Load more
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-stone-900">BloomHive</span>
            <p className="text-xs text-stone-500 mt-1">Where AI video creators thrive</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-stone-500 hover:text-stone-900 cursor-pointer transition-colors">About</span>
            <span className="text-xs text-stone-500 hover:text-stone-900 cursor-pointer transition-colors">Terms</span>
            <span className="text-xs text-stone-500 hover:text-stone-900 cursor-pointer transition-colors">Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
