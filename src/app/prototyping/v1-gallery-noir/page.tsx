"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Gradient assignments for thumbnails
const gradients = [
  "gradient-noir-1",
  "gradient-noir-2",
  "gradient-noir-3",
  "gradient-noir-4",
  "gradient-noir-5",
  "gradient-noir-6",
];

// Mock creator data
const featuredWork = {
  gradient: "gradient-noir-1",
  creator: "Elena Voss",
  title: "Metamorphosis III",
  model: "Sora",
  views: "12.4K",
};

const galleryWorks = [
  { gradient: "gradient-noir-2", creator: "Marcus Chen", title: "Liquid Dreams", model: "Runway Gen-3", views: "8.2K" },
  { gradient: "gradient-noir-3", creator: "Aria Patel", title: "Neon Whispers", model: "Kling", views: "5.7K" },
  { gradient: "gradient-noir-4", creator: "James Wright", title: "Echoes of Tomorrow", model: "Pika", views: "4.1K" },
  { gradient: "gradient-noir-5", creator: "Sofia Kim", title: "Coral Depths", model: "Veo", views: "9.8K" },
  { gradient: "gradient-noir-6", creator: "David Okonkwo", title: "Urban Pulse", model: "Sora", views: "7.3K" },
  { gradient: "gradient-noir-1", creator: "Luna Martinez", title: "Starfall", model: "Runway Gen-3", views: "6.5K" },
  { gradient: "gradient-noir-3", creator: "Alex Rivera", title: "Glass Cathedral", model: "Kling", views: "3.9K" },
  { gradient: "gradient-noir-2", creator: "Nina Volkov", title: "Electric Bloom", model: "Pika", views: "11.2K" },
];

export default function GalleryNoir() {
  return (
    <div className="min-h-screen bg-void relative">
      {/* Vignette effect */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Nearly invisible navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex items-center justify-between">
        <Link
          href="/prototyping"
          className="text-mist/40 hover:text-mist transition-colors flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="flex items-center gap-12">
          <span className="text-2xl font-semibold text-chalk/80 tracking-tight">
            MooHive
          </span>
        </div>
        <button className="text-chalk/60 hover:text-chalk text-sm font-medium transition-colors border border-chalk/10 hover:border-chalk/30 px-4 py-2 rounded">
          Join
        </button>
      </nav>

      {/* Main content with extreme whitespace */}
      <main className="pt-32 px-8 md:px-16 lg:px-24">

        {/* Featured hero piece - massive, floating in void */}
        <section className="mb-32">
          <div className="max-w-6xl mx-auto">
            <div
              className={`${featuredWork.gradient} aspect-video w-full rounded thumbnail-placeholder`}
              style={{ borderRadius: "4px" }}
            >
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />

              {/* Minimal metadata - floats at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-chalk mb-2">{featuredWork.title}</h2>
                  <p className="text-chalk/70">{featuredWork.creator}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-chalk/50 bg-void/40 px-3 py-1 rounded backdrop-blur-sm">
                    {featuredWork.model}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loose grid - generous spacing, floating in darkness */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto">
            {/* No section header - let the work speak */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {galleryWorks.map((work, index) => (
                <article
                  key={index}
                  className="group cursor-pointer"
                >
                  {/* Thumbnail - no card container, floats directly on void */}
                  <div
                    className={`${work.gradient} aspect-video w-full thumbnail-placeholder relative overflow-hidden`}
                    style={{ borderRadius: "4px" }}
                  >
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-all duration-500" />

                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Metadata - minimal, appears on hover */}
                  <div className="mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-medium text-chalk mb-1">{work.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-mist">{work.creator}</span>
                      <span className="text-xs font-mono text-mist/60">{work.model}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Subtle load more - almost invisible */}
        <div className="text-center pb-32">
          <button className="text-mist/40 hover:text-mist text-sm transition-colors">
            See more work
          </button>
        </div>
      </main>

      {/* Footer - barely there */}
      <footer className="px-8 md:px-16 lg:px-24 py-8 border-t border-chalk/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xs text-mist/30">MooHive</span>
          <span className="text-xs text-mist/30">Where AI video creators thrive</span>
        </div>
      </footer>
    </div>
  );
}
