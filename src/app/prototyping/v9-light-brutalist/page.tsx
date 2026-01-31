"use client";

import Link from "next/link";

// Light brutalist - stark white, black, with ember accent
const works = [
  { id: 1, gradient: "from-violet-600 to-indigo-900", creator: "ELENA VOSS", title: "METAMORPHOSIS III", model: "SORA", aspect: "16:9" },
  { id: 2, gradient: "from-amber-500 to-rose-600", creator: "MARCUS CHEN", title: "LIQUID DREAMS", model: "RUNWAY", aspect: "9:16" },
  { id: 3, gradient: "from-emerald-400 to-cyan-600", creator: "ARIA PATEL", title: "NEON WHISPERS", model: "KLING", aspect: "1:1" },
  { id: 4, gradient: "from-rose-500 to-purple-700", creator: "JAMES WRIGHT", title: "ECHOES", model: "PIKA", aspect: "16:9" },
  { id: 5, gradient: "from-blue-500 to-teal-400", creator: "SOFIA KIM", title: "CORAL DEPTHS", model: "VEO", aspect: "4:3" },
  { id: 6, gradient: "from-orange-500 to-red-600", creator: "DAVID OKONKWO", title: "URBAN PULSE", model: "SORA", aspect: "9:16" },
  { id: 7, gradient: "from-pink-500 to-violet-600", creator: "LUNA MARTINEZ", title: "STARFALL", model: "RUNWAY", aspect: "16:9" },
  { id: 8, gradient: "from-cyan-500 to-blue-600", creator: "ALEX RIVERA", title: "GLASS CATHEDRAL", model: "KLING", aspect: "1:1" },
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

export default function LightBrutalist() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Horizontal navigation - top edge */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/prototyping"
            className="text-black hover:text-orange-500 transition-colors text-xs font-mono uppercase tracking-widest"
          >
            ← BACK
          </Link>

          <span className="text-black text-lg font-bold uppercase tracking-[0.2em]">
            BLOOMHIVE
          </span>

          <button className="bg-black hover:bg-orange-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors">
            JOIN
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-20">
        {/* Hero title block */}
        <header className="px-6 md:px-12 py-12 border-b-2 border-black">
          <h1
            className="text-[10vw] md:text-[8vw] font-bold text-black uppercase leading-[0.9] tracking-tight"
            style={{ marginLeft: "-0.03em" }}
          >
            DISCOVER
          </h1>
          <div className="flex items-end gap-6 mt-4">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              AI VIDEO WORK
            </span>
            <div className="flex-1 h-0.5 bg-black" />
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              {works.length} PIECES
            </span>
          </div>
        </header>

        {/* Asymmetric masonry grid */}
        <section className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-12 gap-4">
            {/* Row 1: Large + two stacked */}
            <div className="col-span-12 md:col-span-7 group cursor-pointer">
              <div className={`bg-gradient-to-br ${works[0].gradient} aspect-video w-full relative border-2 border-black group-hover:border-orange-500 transition-colors`}>
                <div className="absolute top-3 left-3 text-xs font-mono text-white bg-black px-2 py-1">
                  001
                </div>
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-black uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                    {works[0].title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1">{works[0].creator}</p>
                </div>
                <span className="text-xs font-mono text-white bg-black px-2 py-1">
                  {works[0].model}
                </span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
              {works.slice(1, 3).map((work, index) => (
                <div key={work.id} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${work.gradient} ${getAspectClass(work.aspect)} w-full relative border-2 border-black group-hover:border-orange-500 transition-colors`}>
                    <div className="absolute top-2 left-2 text-[10px] font-mono text-white bg-black px-1.5 py-0.5">
                      {String(index + 2).padStart(3, "0")}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-black uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                      {work.title}
                    </h3>
                    <span className="text-[10px] font-mono text-neutral-500">{work.model}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="col-span-12 flex items-center gap-4 my-8">
              <div className="h-0.5 w-12 bg-orange-500" />
              <span className="text-xs font-mono text-black uppercase tracking-widest">MORE WORK</span>
              <div className="flex-1 h-0.5 bg-neutral-200" />
            </div>

            {/* Row 2: Mixed grid */}
            <div className="col-span-6 md:col-span-3 group cursor-pointer">
              <div className={`bg-gradient-to-br ${works[3].gradient} ${getAspectClass(works[3].aspect)} w-full relative border-2 border-black group-hover:border-orange-500 transition-colors`} />
              <div className="mt-2">
                <h3 className="text-xs font-bold text-black uppercase group-hover:text-orange-500 transition-colors truncate">
                  {works[3].title}
                </h3>
                <p className="text-[10px] font-mono text-neutral-500">{works[3].creator}</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 group cursor-pointer">
              <div className={`bg-gradient-to-br ${works[4].gradient} ${getAspectClass(works[4].aspect)} w-full relative border-2 border-black group-hover:border-orange-500 transition-colors`} />
              <div className="mt-2">
                <h3 className="text-xs font-bold text-black uppercase group-hover:text-orange-500 transition-colors truncate">
                  {works[4].title}
                </h3>
                <p className="text-[10px] font-mono text-neutral-500">{works[4].creator}</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 group cursor-pointer">
              <div className={`bg-gradient-to-br ${works[5].gradient} ${getAspectClass(works[5].aspect)} w-full relative border-2 border-black group-hover:border-orange-500 transition-colors`} />
              <div className="mt-2">
                <h3 className="text-xs font-bold text-black uppercase group-hover:text-orange-500 transition-colors truncate">
                  {works[5].title}
                </h3>
                <p className="text-[10px] font-mono text-neutral-500">{works[5].creator}</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 group cursor-pointer">
              <div className={`bg-gradient-to-br ${works[6].gradient} ${getAspectClass(works[6].aspect)} w-full relative border-2 border-black group-hover:border-orange-500 transition-colors`} />
              <div className="mt-2">
                <h3 className="text-xs font-bold text-black uppercase group-hover:text-orange-500 transition-colors truncate">
                  {works[6].title}
                </h3>
                <p className="text-[10px] font-mono text-neutral-500">{works[6].creator}</p>
              </div>
            </div>

            {/* Row 3: Wide piece */}
            <div className="col-span-12 md:col-span-8 group cursor-pointer mt-4">
              <div className={`bg-gradient-to-br ${works[7].gradient} aspect-[21/9] w-full relative border-2 border-black group-hover:border-orange-500 transition-colors`}>
                <div className="absolute bottom-4 left-4 bg-white border-2 border-black p-4">
                  <span className="text-xs font-mono text-orange-500 uppercase tracking-widest block mb-1">
                    FEATURED
                  </span>
                  <h3 className="text-lg font-bold text-black uppercase tracking-tight">
                    {works[7].title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1">{works[7].creator} / {works[7].model}</p>
                </div>
              </div>
            </div>

            {/* Stats block */}
            <div className="col-span-12 md:col-span-4 border-2 border-black p-6 flex flex-col justify-center mt-4">
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">847</span>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">CREATORS</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">12.4K</span>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">VIDEOS</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-orange-500">∞</span>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">POSSIBILITIES</p>
              </div>
            </div>
          </div>

          {/* Load more */}
          <div className="mt-16 text-center">
            <button className="text-xs font-mono text-black hover:text-orange-500 uppercase tracking-widest transition-colors border-b-2 border-black hover:border-orange-500 pb-1">
              LOAD MORE →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-black mt-12">
          <div className="px-6 md:px-12 py-6 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              © BLOOMHIVE 2024
            </span>
            <div className="flex items-center gap-6">
              <span className="text-xs font-mono text-neutral-500 hover:text-black cursor-pointer uppercase tracking-widest transition-colors">
                ABOUT
              </span>
              <span className="text-xs font-mono text-neutral-500 hover:text-black cursor-pointer uppercase tracking-widest transition-colors">
                TERMS
              </span>
              <span className="text-xs font-mono text-neutral-500 hover:text-black cursor-pointer uppercase tracking-widest transition-colors">
                CONTACT
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
