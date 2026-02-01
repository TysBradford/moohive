"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Bell } from "lucide-react";

const navLinks = ["Explore", "Creators", "Collections", "Jobs"];
const categories = ["All", "Cinematic", "Abstract", "Character", "Landscapes", "Motion Graphics"];

const rotatingWords = ["trailblazers", "pioneers", "artists", "visionaries"];

const featuredCards = [
  { id: 1, gradient: "from-violet-600 to-indigo-900", creator: "Elena Voss", title: "Metamorphosis III" },
  { id: 2, gradient: "from-amber-500 to-rose-600", creator: "Marcus Chen", title: "Liquid Dreams" },
  { id: 3, gradient: "from-emerald-400 to-cyan-600", creator: "Aria Patel", title: "Neon Whispers" },
];

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

function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      {/* Invisible text to reserve width for longest word */}
      <span className="invisible font-medium">trailblazers</span>
      {/* Animated text positioned absolutely */}
      <span className="absolute inset-0 overflow-hidden">
        <span
          className={`block transition-transform duration-400 ease-out ${
            isAnimating ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <span className="text-stone-900 font-medium">{rotatingWords[currentIndex]}</span>
        </span>
      </span>
    </span>
  );
}

function StackedCards() {
  return (
    <div className="relative w-80 h-[280px] lg:w-96 lg:h-[328px]">
      {featuredCards.map((card, index) => {
        const offset = (featuredCards.length - 1 - index) * 20;
        const rotation = (featuredCards.length - 1 - index) * 3;
        const scale = 1 - (featuredCards.length - 1 - index) * 0.05;

        return (
          <div
            key={card.id}
            className="absolute top-0 left-0 w-full aspect-4/3 rounded-xl overflow-hidden"
            style={{
              transform: `translateY(${offset}px) rotate(${rotation}deg) scale(${scale})`,
              zIndex: index,
            }}
          >
            {/* Metallic border effect */}
            <div
              className="absolute inset-0 rounded-xl p-[2px]"
              style={{
                background: `linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.4) 0%,
                  rgba(200, 200, 210, 0.2) 25%,
                  rgba(255, 255, 255, 0.5) 50%,
                  rgba(180, 180, 190, 0.2) 75%,
                  rgba(255, 255, 255, 0.3) 100%
                )`,
              }}
            >
              {/* Inner card */}
              <div className={`w-full h-full rounded-[10px] bg-gradient-to-br ${card.gradient} relative overflow-hidden`}>
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(
                      105deg,
                      transparent 40%,
                      rgba(255, 255, 255, 0.3) 45%,
                      rgba(255, 255, 255, 0.5) 50%,
                      rgba(255, 255, 255, 0.3) 55%,
                      transparent 60%
                    )`,
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                />

                {/* Card content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-medium text-sm">{card.title}</h4>
                  <p className="text-white/70 text-xs mt-1">{card.creator}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

function CinemaCurtain() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!curtainRef.current) return;

      const triggerStart = window.innerHeight * 0.5; // Start opening at 50vh scroll
      const triggerEnd = window.innerHeight * 1.2; // Fully open by 120vh scroll
      const scrollY = window.scrollY;

      if (scrollY < triggerStart) {
        setScrollProgress(0);
      } else if (scrollY > triggerEnd) {
        setScrollProgress(1);
      } else {
        // Custom easing curve for weight/momentum feel
        const raw = (scrollY - triggerStart) / (triggerEnd - triggerStart);
        // Cubic ease-out for heavy, decelerating motion
        const eased = 1 - Math.pow(1 - raw, 3);
        setScrollProgress(eased);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Curtain should fade out completely when fully open
  const opacity = scrollProgress < 0.95 ? 1 : 1 - ((scrollProgress - 0.95) / 0.05);

  if (scrollProgress >= 1 && opacity <= 0) return null;

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity }}
    >
      {/* Left curtain panel */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2"
        style={{
          transform: `translateX(-${scrollProgress * 100}%)`,
          transition: "none", // Using scroll-driven animation, no CSS transition
        }}
      >
        {/* Velvet texture with pleating */}
        <div className="relative w-full h-full">
          {/* Main curtain fabric - deep burgundy velvet */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #5a1a1a 0%,
                  #6b2020 4%,
                  #5a1a1a 8%,
                  #6b2020 12%,
                  #5a1a1a 16%,
                  #6b2020 20%,
                  #5a1a1a 24%,
                  #6b2020 28%,
                  #5a1a1a 32%,
                  #6b2020 36%,
                  #5a1a1a 40%,
                  #6b2020 44%,
                  #5a1a1a 48%,
                  #6b2020 52%,
                  #5a1a1a 56%,
                  #6b2020 60%,
                  #5a1a1a 64%,
                  #6b2020 68%,
                  #5a1a1a 72%,
                  #6b2020 76%,
                  #5a1a1a 80%,
                  #6b2020 84%,
                  #5a1a1a 88%,
                  #6b2020 92%,
                  #5a1a1a 96%,
                  #6b2020 100%
                )
              `,
            }}
          />

          {/* Highlight sheen on pleats */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  transparent 0%,
                  transparent 3%,
                  rgba(255, 255, 255, 0.15) 3.5%,
                  rgba(255, 255, 255, 0.25) 4%,
                  rgba(255, 255, 255, 0.15) 4.5%,
                  transparent 5%,
                  transparent 8%
                )
              `,
            }}
          />

          {/* Fabric texture grain */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(0, 0, 0, 0.03) 2px,
                  rgba(0, 0, 0, 0.03) 4px
                )
              `,
            }}
          />

          {/* Shadow gradient towards center */}
          <div
            className="absolute top-0 bottom-0 right-0 w-24"
            style={{
              background: `linear-gradient(to left, rgba(0, 0, 0, 0.4), transparent)`,
            }}
          />
        </div>
      </div>

      {/* Right curtain panel */}
      <div
        className="absolute top-0 bottom-0 right-0 w-1/2"
        style={{
          transform: `translateX(${scrollProgress * 100}%)`,
          transition: "none",
        }}
      >
        {/* Velvet texture with pleating */}
        <div className="relative w-full h-full">
          {/* Main curtain fabric */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #6b2020 0%,
                  #5a1a1a 4%,
                  #6b2020 8%,
                  #5a1a1a 12%,
                  #6b2020 16%,
                  #5a1a1a 20%,
                  #6b2020 24%,
                  #5a1a1a 28%,
                  #6b2020 32%,
                  #5a1a1a 36%,
                  #6b2020 40%,
                  #5a1a1a 44%,
                  #6b2020 48%,
                  #5a1a1a 52%,
                  #6b2020 56%,
                  #5a1a1a 60%,
                  #6b2020 64%,
                  #5a1a1a 68%,
                  #6b2020 72%,
                  #5a1a1a 76%,
                  #6b2020 80%,
                  #5a1a1a 84%,
                  #6b2020 88%,
                  #5a1a1a 92%,
                  #6b2020 96%,
                  #5a1a1a 100%
                )
              `,
            }}
          />

          {/* Highlight sheen */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  transparent 0%,
                  transparent 3%,
                  rgba(255, 255, 255, 0.15) 3.5%,
                  rgba(255, 255, 255, 0.25) 4%,
                  rgba(255, 255, 255, 0.15) 4.5%,
                  transparent 5%,
                  transparent 8%
                )
              `,
            }}
          />

          {/* Fabric texture */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(0, 0, 0, 0.03) 2px,
                  rgba(0, 0, 0, 0.03) 4px
                )
              `,
            }}
          />

          {/* Shadow gradient towards center */}
          <div
            className="absolute top-0 bottom-0 left-0 w-24"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent)`,
            }}
          />
        </div>
      </div>

      {/* Center shadow cast on content behind */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0, 0, 0, ${0.3 * (1 - scrollProgress)}) 0%, transparent 70%)`,
          opacity: 1 - scrollProgress,
        }}
      />
    </div>
  );
}

export default function V8Hero() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Cinema Curtain Reveal */}
      <CinemaCurtain />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-[#FAF9F7]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center gap-6">
          <Link
            href="/prototyping"
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-semibold text-stone-900 tracking-tight">
            MooHive
          </span>
        </div>

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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
            {/* Left side - Text content */}
            <div className="md:w-1/2 lg:w-[55%]">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-stone-900 leading-[1.1] tracking-tight">
                Where the world's best AI video creators gather
              </h1>

              <p className="mt-6 text-lg text-stone-500 leading-relaxed max-w-xl">
                Discover, share, and learn with the <RotatingText /> shaping a new art form
              </p>

              <button className="mt-8 bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3 rounded-full transition-colors text-base">
                Join the community
              </button>
            </div>

            {/* Right side - Stacked cards (hidden on mobile) */}
            <div className="hidden md:flex md:w-1/2 lg:w-[45%] justify-center md:justify-end">
              <StackedCards />
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-[73px] z-40 bg-[#FAF9F7]/90 backdrop-blur-sm border-b border-stone-200">
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
      <main className="px-6 py-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">Featured Work</span>
          <div className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-400">{works.length} pieces</span>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4 px-0 md:px-16">
          {works.map((work) => (
            <article
              key={work.id}
              className="group cursor-pointer break-inside-avoid mb-4"
            >
              <div
                className={`bg-gradient-to-br ${work.gradient} ${getAspectClass(work.aspect)} w-full relative rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}
              >
                <span className="absolute bottom-2 right-2 text-xs font-mono text-white bg-black/50 px-2 py-0.5 rounded">
                  {work.duration}
                </span>
              </div>

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
            <span className="text-sm font-semibold text-stone-900">MooHive</span>
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
