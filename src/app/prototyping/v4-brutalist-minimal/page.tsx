"use client";

import Link from "next/link";

// Mock data
const works = [
  { gradient: "gradient-brutalist-1", creator: "ELENA VOSS", title: "METAMORPHOSIS III", model: "SORA" },
  { gradient: "gradient-brutalist-2", creator: "MARCUS CHEN", title: "LIQUID DREAMS", model: "RUNWAY" },
  { gradient: "gradient-brutalist-3", creator: "ARIA PATEL", title: "NEON WHISPERS", model: "KLING" },
  { gradient: "gradient-brutalist-4", creator: "JAMES WRIGHT", title: "ECHOES", model: "PIKA" },
  { gradient: "gradient-brutalist-5", creator: "SOFIA KIM", title: "CORAL DEPTHS", model: "VEO" },
  { gradient: "gradient-brutalist-6", creator: "DAVID OKONKWO", title: "URBAN PULSE", model: "SORA" },
  { gradient: "gradient-brutalist-1", creator: "LUNA MARTINEZ", title: "STARFALL", model: "RUNWAY" },
  { gradient: "gradient-brutalist-2", creator: "ALEX RIVERA", title: "GLASS CATHEDRAL", model: "KLING" },
];

export default function BrutalistMinimal() {
  return (
    <div className="min-h-screen bg-void relative overflow-hidden">
      {/* Vertical navigation - left edge */}
      <nav className="fixed left-0 top-0 bottom-0 w-16 md:w-20 z-50 border-r-2 border-chalk flex flex-col items-center justify-between py-8">
        <Link
          href="/prototyping"
          className="text-chalk hover:text-ember transition-colors text-xs font-mono uppercase tracking-widest"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          BACK
        </Link>

        <span
          className="text-chalk text-sm font-bold uppercase tracking-[0.3em]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          MOOHIVE
        </span>

        <button
          className="text-void bg-chalk hover:bg-ember px-3 py-6 text-xs font-bold uppercase tracking-widest transition-colors"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          JOIN
        </button>
      </nav>

      {/* Main content - offset from left nav */}
      <main className="ml-16 md:ml-20">
        {/* Giant hero title - spans viewport */}
        <header className="pt-8 px-8 md:px-16 mb-0">
          <h1
            className="text-[12vw] md:text-[10vw] font-bold text-chalk uppercase leading-[0.85] tracking-tight"
            style={{ marginLeft: "-0.05em" }}
          >
            AI
            <br />
            VIDEO
          </h1>
          <div className="flex items-end gap-8 mt-4">
            <span className="text-xs font-mono text-mist uppercase tracking-widest">
              WHERE CREATORS THRIVE
            </span>
            <div className="flex-1 h-0.5 bg-chalk mb-1" />
          </div>
        </header>

        {/* Featured piece - massive, overlapping elements */}
        <section className="relative px-8 md:px-16 -mt-8">
          <div className="relative">
            {/* Main featured video */}
            <div
              className={`gradient-brutalist-3 aspect-[21/9] w-full relative`}
              style={{ borderRadius: 0 }}
            >
              {/* Overlapping title block */}
              <div className="absolute -bottom-16 -right-4 md:-right-8 bg-void border-2 border-chalk p-6 md:p-8 max-w-md">
                <span className="text-xs font-mono text-ember uppercase tracking-widest block mb-2">
                  FEATURED
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-chalk uppercase tracking-tight">
                  NEON WHISPERS
                </h2>
                <p className="text-sm font-mono text-mist mt-2">ARIA PATEL / KLING</p>
              </div>

              {/* Counter overlay */}
              <div className="absolute top-4 left-4 text-xs font-mono text-chalk/60">
                001/008
              </div>
            </div>
          </div>
        </section>

        {/* Off-grid gallery */}
        <section className="mt-32 px-8 md:px-16 pb-16">
          {/* Section divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-0.5 w-16 bg-ember" />
            <span className="text-xs font-mono text-chalk uppercase tracking-widest">
              LATEST WORK
            </span>
          </div>

          {/* Deliberately asymmetric grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Large item - spans 7 cols */}
            <div className="col-span-12 md:col-span-7 group cursor-pointer">
              <div className={`${works[0].gradient} aspect-video w-full relative`} style={{ borderRadius: 0 }}>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-ember transition-colors" />
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-chalk uppercase tracking-tight group-hover:text-ember transition-colors">
                    {works[0].title}
                  </h3>
                  <p className="text-xs font-mono text-mist mt-1">{works[0].creator}</p>
                </div>
                <span className="text-xs font-mono text-mist border border-mist px-2 py-1">
                  {works[0].model}
                </span>
              </div>
            </div>

            {/* Stack of smaller items */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
              {works.slice(1, 3).map((work, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`${work.gradient} aspect-video w-full relative`} style={{ borderRadius: 0 }}>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-ember transition-colors" />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-chalk uppercase tracking-tight group-hover:text-ember transition-colors">
                      {work.title}
                    </h3>
                    <span className="text-xs font-mono text-mist">{work.model}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - inverted */}
            <div className="col-span-12 md:col-span-4 group cursor-pointer">
              <div className={`${works[3].gradient} aspect-square w-full relative`} style={{ borderRadius: 0 }}>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-ember transition-colors" />
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-bold text-chalk uppercase group-hover:text-ember transition-colors">
                  {works[3].title}
                </h3>
                <p className="text-xs font-mono text-mist">{works[3].creator}</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 group cursor-pointer">
              <div className={`${works[4].gradient} aspect-[21/9] w-full relative`} style={{ borderRadius: 0 }}>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-ember transition-colors" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-sm font-bold text-chalk uppercase group-hover:text-ember transition-colors">
                  {works[4].title}
                </h3>
                <span className="text-xs font-mono text-mist">{works[4].model}</span>
              </div>
            </div>

            {/* Third row - three equal */}
            {works.slice(5, 8).map((work, index) => (
              <div key={index} className="col-span-12 md:col-span-4 group cursor-pointer">
                <div className={`${work.gradient} aspect-video w-full relative`} style={{ borderRadius: 0 }}>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-ember transition-colors" />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-bold text-chalk uppercase group-hover:text-ember transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs font-mono text-mist">{work.creator}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load more - raw text link */}
          <div className="mt-16 text-center">
            <button className="text-xs font-mono text-mist hover:text-ember uppercase tracking-widest transition-colors border-b-2 border-mist hover:border-ember pb-1">
              LOAD MORE →
            </button>
          </div>
        </section>

        {/* Footer - bottom anchored */}
        <footer className="border-t-2 border-chalk">
          <div className="px-8 md:px-16 py-6 flex items-center justify-between">
            <span className="text-xs font-mono text-mist uppercase tracking-widest">
              © MOOHIVE 2024
            </span>
            <div className="flex items-center gap-8">
              <span className="text-xs font-mono text-mist hover:text-chalk cursor-pointer uppercase tracking-widest transition-colors">
                ABOUT
              </span>
              <span className="text-xs font-mono text-mist hover:text-chalk cursor-pointer uppercase tracking-widest transition-colors">
                TERMS
              </span>
              <span className="text-xs font-mono text-mist hover:text-chalk cursor-pointer uppercase tracking-widest transition-colors">
                CONTACT
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
