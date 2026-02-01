"use client";

import Link from "next/link";
import { ArrowLeft, Search, Bell } from "lucide-react";

// Mock data with mixed aspect ratios
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

export default function CombinedBaseline() {
  return (
    <div className="min-h-screen bg-void">
      {/* V1-style header - minimal, floating */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-void/80 backdrop-blur-sm border-b border-chalk/5">
        <div className="flex items-center gap-6">
          <Link
            href="/prototyping"
            className="text-mist hover:text-chalk transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-semibold text-chalk tracking-tight">
            MooHive
          </span>
        </div>

        {/* Center: Nav links - subtle */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm text-mist/70 hover:text-chalk transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right: Minimal actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-mist/60 hover:text-chalk transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-mist/60 hover:text-chalk transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-chalk/80 hover:text-chalk text-sm font-medium transition-colors border border-chalk/20 hover:border-chalk/40 px-4 py-2 rounded">
            Join
          </button>
        </div>
      </nav>

      {/* Category filter */}
      <div className="fixed top-[73px] left-0 right-0 z-40 bg-void/80 backdrop-blur-sm border-b border-chalk/5">
        <div className="px-6 py-3">
          <div className="flex items-center gap-6 overflow-x-auto">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`text-sm whitespace-nowrap transition-colors ${
                  index === 0
                    ? "text-chalk font-medium"
                    : "text-mist/60 hover:text-chalk"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <main className="pt-32 px-6 pb-16">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono text-mist uppercase tracking-wider">Featured Work</span>
          <div className="flex-1 h-px bg-mist/10" />
          <span className="text-xs text-mist">{works.length} pieces</span>
        </div>

        {/* V2-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work) => (
            <article
              key={work.id}
              className="group cursor-pointer bg-surface border border-mist/10 hover:border-mist/30 transition-all rounded"
            >
              {/* Thumbnail - uniform 16:9 for baseline */}
              <div
                className={`bg-gradient-to-br ${work.gradient} aspect-video w-full relative rounded-t`}
              >
                <span className="absolute bottom-2 right-2 text-xs font-mono text-chalk bg-void/80 px-2 py-0.5 rounded-sm">
                  {work.duration}
                </span>
                {/* Show actual aspect ratio badge */}
                <span className="absolute top-2 left-2 text-[10px] font-mono text-chalk/60 bg-void/60 px-1.5 py-0.5 rounded-sm">
                  {work.aspect}
                </span>
              </div>

              {/* Card content */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-chalk mb-1 truncate group-hover:text-ember transition-colors">
                  {work.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-mist truncate">{work.creator}</span>
                  <span className="text-xs font-mono text-mist/60">{work.model}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-mist/10">
        <div className="px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-chalk">MooHive</span>
            <p className="text-xs text-mist mt-1">Where AI video creators thrive</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-mist hover:text-chalk cursor-pointer transition-colors">About</span>
            <span className="text-xs text-mist hover:text-chalk cursor-pointer transition-colors">Terms</span>
            <span className="text-xs text-mist hover:text-chalk cursor-pointer transition-colors">Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
