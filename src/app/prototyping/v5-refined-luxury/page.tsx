"use client";

import Link from "next/link";
import { ArrowLeft, Play, ChevronRight } from "lucide-react";

// Mock data with curated rhythm
const featuredWorks = [
  { gradient: "gradient-luxury-1", creator: "Elena Voss", title: "Metamorphosis III", model: "Sora", size: "medium" },
  { gradient: "gradient-luxury-2", creator: "Marcus Chen", title: "Liquid Dreams", model: "Runway Gen-3", size: "medium" },
  { gradient: "gradient-luxury-3", creator: "Aria Patel", title: "Neon Whispers", model: "Kling", size: "medium" },
  { gradient: "gradient-luxury-4", creator: "James Wright", title: "Echoes of Tomorrow", model: "Pika", size: "large" },
  { gradient: "gradient-luxury-5", creator: "Sofia Kim", title: "Coral Depths", model: "Veo", size: "large" },
  { gradient: "gradient-luxury-6", creator: "David Okonkwo", title: "Urban Pulse", model: "Sora", size: "medium" },
  { gradient: "gradient-luxury-1", creator: "Luna Martinez", title: "Starfall", model: "Runway Gen-3", size: "medium" },
  { gradient: "gradient-luxury-2", creator: "Alex Rivera", title: "Glass Cathedral", model: "Kling", size: "medium" },
];

export default function RefinedLuxury() {
  return (
    <div className="min-h-screen bg-void relative">
      {/* Subtle ambient gradient at top */}
      <div
        className="fixed top-0 left-0 right-0 h-[40vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249, 115, 22, 0.03) 0%, transparent 100%)",
        }}
      />

      {/* Premium navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-void/80 border-b border-chalk/5">
        <div className="px-8 md:px-12 lg:px-16 py-5">
          <div className="flex items-center justify-between">
            {/* Left: Back + Logo with elegant spacing */}
            <div className="flex items-center gap-8">
              <Link
                href="/prototyping"
                className="text-mist/60 hover:text-chalk transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <span
                className="text-xl text-chalk tracking-[0.15em] font-medium"
                style={{ letterSpacing: "0.15em" }}
              >
                MOOHIVE
              </span>
            </div>

            {/* Center: Nav links with underline animation */}
            <div className="hidden lg:flex items-center gap-10">
              {["Discover", "Creators", "Collections"].map((link) => (
                <button
                  key={link}
                  className="group relative text-sm text-mist hover:text-chalk transition-colors duration-300"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-ember group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Right: Premium CTA */}
            <button
              className="relative px-6 py-2.5 text-sm font-medium text-chalk border border-chalk/20 hover:border-ember hover:text-ember overflow-hidden group transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              <span className="relative z-10">Join Community</span>
              <span className="absolute inset-0 bg-ember/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 px-8 md:px-12 lg:px-16 py-12">
        {/* Hero statement - elegant typography */}
        <header className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-chalk leading-[1.1] tracking-tight mb-6">
            Where exceptional
            <span className="block text-mist/40">AI video finds its audience</span>
          </h1>
          <p className="text-lg text-mist max-w-xl leading-relaxed">
            A curated space for creators pushing the boundaries of AI-generated video.
          </p>
        </header>

        {/* Curated grid with 3-2-3 rhythm */}
        <section>
          {/* Section label - refined */}
          <div className="flex items-center gap-6 mb-8">
            <span className="text-xs text-ember uppercase tracking-[0.2em] font-medium">
              Featured Work
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-ember/30 to-transparent" />
          </div>

          {/* Row 1: Three medium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {featuredWorks.slice(0, 3).map((work, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                {/* Card with subtle border and inner glow */}
                <div
                  className="relative bg-surface border border-chalk/5 overflow-hidden transition-all duration-500 group-hover:border-ember/30"
                  style={{ borderRadius: "8px" }}
                >
                  {/* Subtle inner glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 40px rgba(249, 115, 22, 0.05)",
                    }}
                  />

                  {/* Thumbnail */}
                  <div className={`${work.gradient} aspect-video w-full relative overflow-hidden`}>
                    {/* Play button - elegant reveal */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-void/20">
                      <div className="w-14 h-14 rounded-full bg-chalk/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Play className="w-5 h-5 text-void ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-medium text-chalk mb-2 group-hover:text-ember transition-colors duration-300">
                      {work.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-mist">{work.creator}</span>
                      <span className="text-xs font-mono text-mist/50 tracking-wide">{work.model}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: Two large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featuredWorks.slice(3, 5).map((work, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className="relative bg-surface border border-chalk/5 overflow-hidden transition-all duration-500 group-hover:border-ember/30"
                  style={{ borderRadius: "8px" }}
                >
                  {/* Inner glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 60px rgba(249, 115, 22, 0.05)",
                    }}
                  />

                  {/* Larger thumbnail */}
                  <div className={`${work.gradient} aspect-[16/10] w-full relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-void/20">
                      <div className="w-16 h-16 rounded-full bg-chalk/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Play className="w-6 h-6 text-void ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-medium text-chalk mb-2 group-hover:text-ember transition-colors duration-300">
                      {work.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-mist">{work.creator}</span>
                      <span className="text-xs font-mono text-mist/50 tracking-wide">{work.model}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Row 3: Three medium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorks.slice(5, 8).map((work, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className="relative bg-surface border border-chalk/5 overflow-hidden transition-all duration-500 group-hover:border-ember/30"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 40px rgba(249, 115, 22, 0.05)",
                    }}
                  />

                  <div className={`${work.gradient} aspect-video w-full relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-void/20">
                      <div className="w-14 h-14 rounded-full bg-chalk/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Play className="w-5 h-5 text-void ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-medium text-chalk mb-2 group-hover:text-ember transition-colors duration-300">
                      {work.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-mist">{work.creator}</span>
                      <span className="text-xs font-mono text-mist/50 tracking-wide">{work.model}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Elegant CTA section */}
        <section className="mt-20 py-16 border-y border-chalk/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-chalk mb-4">
              Join the community
            </h2>
            <p className="text-mist mb-8">
              Connect with creators who are defining the future of AI video.
            </p>
            <button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-ember hover:bg-ember-soft text-void font-medium transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              Get Started
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </section>
      </main>

      {/* Refined footer */}
      <footer className="px-8 md:px-12 lg:px-16 py-10 border-t border-chalk/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-chalk tracking-[0.1em]">MOOHIVE</span>
            <span className="text-mist/30">·</span>
            <span className="text-sm text-mist/50">Where AI video creators thrive</span>
          </div>
          <div className="flex items-center gap-8">
            {["About", "Careers", "Terms", "Privacy"].map((link) => (
              <span
                key={link}
                className="text-sm text-mist/50 hover:text-chalk cursor-pointer transition-colors duration-300"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
