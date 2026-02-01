"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Check, Loader2 } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    gradient: "bg-gradient-to-br from-[#0c1220] via-[#1a3a5c] to-[#0a2f3f]",
    radial:
      "radial-gradient(ellipse at 30% 40%, rgba(56, 189, 248, 0.12) 0%, transparent 60%)",
    creator: "Alex Rivera",
    model: "Sora",
  },
  {
    id: 2,
    gradient: "bg-gradient-to-br from-[#1a0a00] via-[#7c2d12] to-[#451a03]",
    radial:
      "radial-gradient(ellipse at 70% 40%, rgba(251, 146, 60, 0.18) 0%, transparent 60%)",
    creator: "Maya Chen",
    model: "Runway Gen-3",
  },
  {
    id: 3,
    gradient: "bg-gradient-to-br from-[#0f0520] via-[#2e1065] to-[#0c0a1a]",
    radial:
      "radial-gradient(ellipse at 50% 30%, rgba(168, 85, 247, 0.12) 0%, transparent 60%)",
    creator: "Jordan Ellis",
    model: "Kling",
  },
  {
    id: 4,
    gradient: "bg-gradient-to-br from-[#021a0a] via-[#064e3b] to-[#0a1a12]",
    radial:
      "radial-gradient(ellipse at 40% 60%, rgba(52, 211, 153, 0.12) 0%, transparent 60%)",
    creator: "Sofia Nakamura",
    model: "Pika",
  },
  {
    id: 5,
    gradient: "bg-gradient-to-br from-[#1a0520] via-[#4c1d95] to-[#0f172a]",
    radial:
      "radial-gradient(ellipse at 60% 50%, rgba(236, 72, 153, 0.12) 0%, transparent 60%)",
    creator: "Kai Andersen",
    model: "Sora",
  },
];

const SLIDE_DURATION = 6000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const touchStartRef = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) nextSlide();
      else prevSlide();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || formStatus === "loading") return;
    setFormStatus("loading");
    // TODO: Wire to Supabase waitlist table
    setTimeout(() => setFormStatus("success"), 1200);
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Video showcase"
    >
      {/* ── Carousel slides ── */}
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full w-full shrink-0"
              style={{ minWidth: "100%" }}
            >
              <div
                className={`absolute inset-0 ${slide.gradient}`}
                style={{
                  animation:
                    index === currentSlide
                      ? `ken-burns ${SLIDE_DURATION + 2000}ms ease-out forwards`
                      : "none",
                  transform: index !== currentSlide ? "scale(1)" : undefined,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: slide.radial }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Film grain ── */}
      <div className="hero-grain absolute inset-0 pointer-events-none z-[1]" />

      {/* ── Vignette overlay ── */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(10,10,11,0.35)_0%,rgba(10,10,11,0.75)_100%)]" />

      {/* ── Bottom gradient for attribution readability ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-void to-transparent" />

      {/* ── Top nav ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center px-6 py-5 md:px-10">
        <span className="text-lg font-semibold tracking-tight text-chalk select-none">
          MooHive
        </span>
      </nav>

      {/* ── Slide attribution ── */}
      <div className="absolute bottom-12 left-6 md:left-10 z-30 transition-opacity duration-300">
        <p className="font-mono text-xs text-chalk/50">
          {SLIDES[currentSlide].creator} &mdash;{" "}
          {SLIDES[currentSlide].model}
        </p>
      </div>

      {/* ── Navigation arrows (desktop, visible on hover) ── */}
      <button
        onClick={prevSlide}
        className={`absolute left-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-sm text-chalk/60 hover:bg-white/[0.15] hover:text-chalk transition-all duration-300 cursor-pointer ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-sm text-chalk/60 hover:bg-white/[0.15] hover:text-chalk transition-all duration-300 cursor-pointer ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Next slide"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* ── Content overlay ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-chalk text-center tracking-tight leading-[1.1] max-w-2xl">
          Where AI video creators thrive
        </h1>

        <p className="mt-5 text-base sm:text-lg text-chalk/65 text-center max-w-md leading-relaxed">
          Showcase your work. Share your process. Find your people.
        </p>

        {/* ── Email capture ── */}
        <div className="mt-8 w-full max-w-md">
          {formStatus === "success" ? (
            <div className="flex items-center justify-center gap-2.5 py-3 animate-fade-in">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-ember/15">
                <Check size={14} className="text-ember" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-medium text-chalk/90">
                You&apos;re on the list
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 px-4 rounded-lg bg-white/[0.06] border border-white/[0.08] text-chalk placeholder:text-mist/60 text-sm focus:outline-none focus:border-ember/40 focus:ring-1 focus:ring-ember/15 transition-all duration-200 backdrop-blur-sm"
              />
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="h-12 px-6 rounded-lg bg-ember text-white text-sm font-medium hover:bg-ember/90 active:bg-ember/80 transition-colors duration-150 disabled:opacity-60 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                {formStatus === "loading" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Get early access
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentSlide
                ? "w-6 bg-ember"
                : "w-1.5 bg-white/20 hover:bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-white/[0.06]">
        <div
          key={currentSlide}
          className="h-full bg-ember/70"
          style={{
            animation: `progress-fill ${SLIDE_DURATION}ms linear forwards`,
            animationPlayState: isHovered ? "paused" : "running",
          }}
        />
      </div>
    </section>
  );
}
