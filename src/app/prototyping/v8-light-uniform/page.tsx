"use client";

import Link from "next/link";
import { ArrowLeft, Search, Bell, Grid3X3, LayoutGrid } from "lucide-react";

// Light mode - cool slate palette
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

// Calculate inner dimensions for letterboxing within a square container
function getInnerStyle(aspect: string) {
  switch (aspect) {
    case "16:9":
      return { width: "100%", height: "56.25%", paddingTop: "21.875%" }; // centered vertically
    case "9:16":
      return { width: "56.25%", height: "100%", paddingLeft: "21.875%" }; // centered horizontally
    case "1:1":
      return { width: "100%", height: "100%", paddingTop: "0", paddingLeft: "0" };
    case "4:3":
      return { width: "100%", height: "75%", paddingTop: "12.5%" };
    case "3:4":
      return { width: "75%", height: "100%", paddingLeft: "12.5%" };
    default:
      return { width: "100%", height: "56.25%", paddingTop: "21.875%" };
  }
}

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

export default function LightUniform() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header - cool slate */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="flex items-center gap-6">
          <Link
            href="/prototyping"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-semibold text-slate-900 tracking-tight">
            BloomHive
          </span>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
            Join
          </button>
        </div>
      </nav>

      {/* Category filter */}
      <div className="fixed top-[73px] left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6 overflow-x-auto">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`text-sm whitespace-nowrap transition-colors ${
                  index === 0
                    ? "text-indigo-600 font-medium"
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* View toggle */}
          <div className="hidden md:flex items-center gap-1 ml-4">
            <button className="p-1.5 text-indigo-600 bg-indigo-50 rounded">
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded">
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="pt-32 px-6 pb-16">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Featured Work</span>
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400">{works.length} pieces</span>
        </div>

        {/* Uniform grid with letterboxing */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {works.map((work) => (
            <article
              key={work.id}
              className="group cursor-pointer"
            >
              {/* Uniform square container with video centered inside */}
              <div className="aspect-square w-full relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-indigo-300 transition-colors">
                {/* Centered video with letterbox/pillarbox effect */}
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <div
                    className={`bg-gradient-to-br ${work.gradient} ${getAspectClass(work.aspect)} max-w-full max-h-full rounded-lg shadow-sm`}
                    style={{
                      width: work.aspect === "9:16" || work.aspect === "3:4" ? "auto" : "100%",
                      height: work.aspect === "16:9" || work.aspect === "4:3" ? "auto" : "100%",
                    }}
                  >
                    {/* Duration badge */}
                    <div className="relative w-full h-full">
                      <span className="absolute bottom-2 right-2 text-xs font-mono text-white bg-black/50 px-2 py-0.5 rounded">
                        {work.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metadata below */}
              <div className="mt-3">
                <h3 className="text-sm font-medium text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                  {work.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-slate-500">{work.creator}</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    {work.model}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-sm text-white bg-indigo-600 rounded-lg font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors">
            3
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-slate-900">BloomHive</span>
            <p className="text-xs text-slate-500 mt-1">Where AI video creators thrive</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">About</span>
            <span className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
            <span className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
