"use client";

import Link from "next/link";
import { ArrowLeft, Search, Heart, Bookmark, Share2 } from "lucide-react";

// Mock data with varied aspect ratios for masonry
const works = [
  { gradient: "gradient-organic-1", creator: "Elena Voss", title: "Sunset Dreams", model: "Sora", aspect: "video", likes: "2.4K" },
  { gradient: "gradient-organic-2", creator: "Marcus Chen", title: "Lavender Mist", model: "Runway Gen-3", aspect: "portrait", likes: "1.8K" },
  { gradient: "gradient-organic-3", creator: "Aria Patel", title: "Rose Garden", model: "Kling", aspect: "square", likes: "3.2K" },
  { gradient: "gradient-organic-4", creator: "James Wright", title: "Ocean Breeze", model: "Pika", aspect: "video", likes: "956" },
  { gradient: "gradient-organic-5", creator: "Sofia Kim", title: "Golden Hour", model: "Veo", aspect: "portrait", likes: "4.1K" },
  { gradient: "gradient-organic-6", creator: "David Okonkwo", title: "Spring Bloom", model: "Sora", aspect: "video", likes: "2.7K" },
  { gradient: "gradient-organic-1", creator: "Luna Martinez", title: "Peach Sunset", model: "Runway Gen-3", aspect: "square", likes: "1.5K" },
  { gradient: "gradient-organic-2", creator: "Alex Rivera", title: "Violet Hour", model: "Kling", aspect: "portrait", likes: "3.9K" },
  { gradient: "gradient-organic-3", creator: "Nina Volkov", title: "Cherry Blossom", model: "Pika", aspect: "video", likes: "5.2K" },
  { gradient: "gradient-organic-4", creator: "Theo Park", title: "Azure Dreams", model: "Sora", aspect: "video", likes: "1.1K" },
  { gradient: "gradient-organic-5", creator: "Maya Singh", title: "Honey Glow", model: "Veo", aspect: "portrait", likes: "2.3K" },
  { gradient: "gradient-organic-6", creator: "Oliver Stone", title: "Mint Fresh", model: "Kling", aspect: "square", likes: "1.9K" },
  { gradient: "gradient-organic-1", creator: "Zara Ahmed", title: "Coral Reef", model: "Runway Gen-3", aspect: "portrait", likes: "3.4K" },
  { gradient: "gradient-organic-2", creator: "Leo Thompson", title: "Lilac Haze", model: "Pika", aspect: "video", likes: "2.6K" },
];

const getAspectClass = (aspect: string) => {
  switch (aspect) {
    case "portrait": return "aspect-[9/16]";
    case "square": return "aspect-square";
    default: return "aspect-video";
  }
};

export default function OrganicFlow() {
  return (
    <div className="min-h-screen bg-void">
      {/* Floating pill navigation with glass effect */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="flex items-center gap-2 px-2 py-2 bg-surface/80 backdrop-blur-xl border border-mist/10"
          style={{ borderRadius: "9999px" }}
        >
          <Link
            href="/prototyping"
            className="p-2 text-mist hover:text-chalk transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="h-6 w-px bg-mist/10" />

          <span className="px-4 text-lg font-semibold text-chalk">
            MooHive
          </span>

          <div className="h-6 w-px bg-mist/10" />

          <div className="flex items-center gap-1">
            <button className="px-4 py-2 text-sm text-chalk bg-surface-light rounded-full">
              Explore
            </button>
            <button className="px-4 py-2 text-sm text-mist hover:text-chalk transition-colors">
              Following
            </button>
          </div>

          <div className="h-6 w-px bg-mist/10" />

          <button className="p-2 text-mist hover:text-chalk transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <button
            className="px-5 py-2 bg-ember hover:bg-ember-soft text-void text-sm font-medium transition-colors"
            style={{ borderRadius: "9999px" }}
          >
            Join
          </button>
        </div>
      </nav>

      {/* Main masonry grid */}
      <main className="pt-28 px-4 md:px-8 pb-16">
        {/* CSS columns for masonry effect */}
        <div
          className="mx-auto"
          style={{
            columnCount: 4,
            columnGap: "16px",
            maxWidth: "1600px",
          }}
        >
          {works.map((work, index) => (
            <article
              key={index}
              className="group cursor-pointer mb-4 break-inside-avoid"
            >
              {/* Card with soft shadow */}
              <div
                className="bg-surface overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-ember/5 group-hover:-translate-y-1"
                style={{ borderRadius: "12px" }}
              >
                {/* Thumbnail with varied aspect ratios */}
                <div className={`${work.gradient} ${getAspectClass(work.aspect)} w-full relative`}>
                  {/* Hover overlay with actions */}
                  <div className="absolute inset-0 bg-void/0 group-hover:bg-void/30 transition-all duration-300 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-chalk/90 hover:bg-chalk rounded-full transition-colors">
                        <Heart className="w-4 h-4 text-void" />
                      </button>
                      <button className="p-2 bg-chalk/90 hover:bg-chalk rounded-full transition-colors">
                        <Bookmark className="w-4 h-4 text-void" />
                      </button>
                    </div>
                    <button className="p-2 bg-chalk/90 hover:bg-chalk rounded-full transition-colors">
                      <Share2 className="w-4 h-4 text-void" />
                    </button>
                  </div>
                </div>

                {/* Card content - warm and friendly */}
                <div className="p-4">
                  <h3 className="text-base font-medium text-chalk mb-2 group-hover:text-ember transition-colors">
                    {work.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Avatar placeholder */}
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ember-soft to-ember" />
                      <span className="text-sm text-mist">{work.creator}</span>
                    </div>
                    <div className="flex items-center gap-1 text-mist">
                      <Heart className="w-3 h-3" />
                      <span className="text-xs">{work.likes}</span>
                    </div>
                  </div>
                  {/* Model tag - soft pill */}
                  <div className="mt-3">
                    <span
                      className="text-xs font-mono text-mist bg-surface-light px-3 py-1"
                      style={{ borderRadius: "9999px" }}
                    >
                      {work.model}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load more - friendly button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-surface hover:bg-surface-light border border-mist/10 hover:border-mist/30 text-chalk text-sm font-medium transition-all"
            style={{ borderRadius: "12px" }}
          >
            Load more inspiration
          </button>
        </div>
      </main>

      {/* Footer - soft and minimal */}
      <footer className="px-4 md:px-8 py-8 border-t border-mist/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-mist">
            MooHive · Where AI video creators thrive
          </span>
          <div className="flex items-center gap-6">
            <span className="text-sm text-mist/60 hover:text-mist cursor-pointer transition-colors">About</span>
            <span className="text-sm text-mist/60 hover:text-mist cursor-pointer transition-colors">Blog</span>
            <span className="text-sm text-mist/60 hover:text-mist cursor-pointer transition-colors">Help</span>
          </div>
        </div>
      </footer>

      {/* Responsive column adjustments */}
      <style jsx>{`
        @media (max-width: 1200px) {
          div[style*="columnCount: 4"] {
            column-count: 3 !important;
          }
        }
        @media (max-width: 900px) {
          div[style*="columnCount: 4"] {
            column-count: 2 !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="columnCount: 4"] {
            column-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
