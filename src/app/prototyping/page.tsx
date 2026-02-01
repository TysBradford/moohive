import Link from "next/link";

const prototypes = [
  {
    id: "v1-gallery-noir",
    name: "Gallery Noir",
    description: "Dramatic, cinematic, museum-like",
    traits: ["Generous whitespace", "Featured hero + grid", "Stark/flat", "Nearly invisible nav"],
    mode: "dark",
  },
  {
    id: "v2-editorial-grid",
    name: "Editorial Grid",
    description: "Clean, orderly, magazine-like",
    traits: ["Structured rhythm", "Uniform 4-column", "Subtle borders", "Full nav bar"],
    mode: "dark",
  },
  {
    id: "v3-organic-flow",
    name: "Organic Flow",
    description: "Pinterest-inspired, dynamic, alive",
    traits: ["Medium density", "True masonry", "Soft shadows", "Floating pill nav"],
    mode: "dark",
  },
  {
    id: "v4-brutalist-minimal",
    name: "Brutalist Minimal",
    description: "Bold, raw, unapologetic",
    traits: ["Asymmetric layout", "Off-grid placement", "Hard edges", "Unconventional nav"],
    mode: "dark",
  },
  {
    id: "v5-refined-luxury",
    name: "Refined Luxury",
    description: "Sophisticated, high-end, considered",
    traits: ["Balanced harmony", "Curated rhythm", "Subtle gradients", "Premium animations"],
    mode: "dark",
  },
  {
    id: "v6-combined-baseline",
    name: "Combined Baseline",
    description: "V1 header + V2 grid merged",
    traits: ["V1 minimal header", "V2 structured grid", "Mixed aspect badges", "Dark baseline"],
    mode: "dark",
  },
  {
    id: "v7-light-masonry",
    name: "Light Masonry",
    description: "Warm cream, Pinterest-style flow",
    traits: ["CSS column masonry", "Native aspect ratios", "Warm stone palette", "Organic feel"],
    mode: "light",
  },
  {
    id: "v8-light-uniform",
    name: "Light Uniform",
    description: "Cool slate, letterboxed containers",
    traits: ["Square containers", "Centered videos", "Indigo accent", "Clean & ordered"],
    mode: "light",
  },
  {
    id: "v9-light-brutalist",
    name: "Light Brutalist",
    description: "Stark white, bold typography",
    traits: ["Hard 2px borders", "All-caps type", "Orange accent", "Asymmetric grid"],
    mode: "light",
  },
];

export default function PrototypingIndex() {
  return (
    <div className="min-h-screen bg-void p-8 md:p-16">
      <header className="mb-16">
        <h1 className="text-4xl font-semibold text-chalk mb-3">
          MooHive Visual Prototypes
        </h1>
        <p className="text-mist text-lg max-w-2xl">
          Landing page variations exploring different interpretations of the brand.
          Includes dark mode originals plus new light mode explorations with mixed aspect ratio handling.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {prototypes.map((proto) => (
          <Link
            key={proto.id}
            href={`/prototyping/${proto.id}`}
            className="group block bg-surface rounded-lg p-6 border border-mist/10 hover:border-ember/50 transition-all duration-300 hover:bg-surface-light"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-xl font-semibold text-chalk group-hover:text-ember transition-colors">
                {proto.name}
              </h2>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                  proto.mode === "light"
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-mist/20 text-mist"
                }`}>
                  {proto.mode}
                </span>
                <span className="text-xs font-mono text-mist bg-void px-2 py-1 rounded">
                  {proto.id.split("-")[0]}
                </span>
              </div>
            </div>
            <p className="text-mist mb-4">{proto.description}</p>
            <ul className="space-y-1">
              {proto.traits.map((trait) => (
                <li key={trait} className="text-sm text-mist/70 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-ember/50" />
                  {trait}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-mist/10">
        <p className="text-sm text-mist">
          These are rapid prototypes for visual direction exploration. Copy is placeholder.
        </p>
      </footer>
    </div>
  );
}
