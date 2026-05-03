import { ArrowUpRight } from "lucide-react";
import falcon from "@/assets/halftone-falcon.png";

const clients = [
  "Forbes", "Financial Times", "Clutch", "TOYOTA", "Neuralogic",
  "Honeywell", "GROUPON", "Inc.5000", "TechCrunch", "Wired",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-32 pb-8">
      {/* Falcon — absolutely positioned, oversized, centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={falcon}
          alt="Halftone falcon mid-flight — symbol of speed and precision"
          width={1408}
          height={1408}
          className="w-[90vw] max-w-[1100px] h-auto opacity-90 dark:opacity-80 mix-blend-multiply dark:mix-blend-screen select-none animate-[fade-in_1.2s_ease-out]"
          style={{ transform: "translateY(-2vh)" }}
        />
      </div>

      {/* Tagline — bottom-left over the falcon */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-4 items-end">
          <h1 className="col-span-12 md:col-span-9 display-xl text-foreground">
            Launching <em className="italic text-primary">faster</em>
            <br />
            with founder-
            <br />
            engineers.
          </h1>

          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="pill-dark group text-base px-6 py-3"
            >
              Let's Talk Growth
              <span className="inline-flex w-7 h-7 rounded-full bg-background text-foreground items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom labels row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 items-end">
          <div className="eyebrow">Awards</div>
          <div className="eyebrow">Featured Clients</div>
          <div className="hidden md:block max-w-xs text-sm text-ink-soft">
            Three founder-engineers · web, mobile & automation for ambitious teams.
          </div>
          <div className="hidden md:flex items-center gap-2 justify-end font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Booking Q3 · 2026
          </div>
        </div>
      </div>

      {/* Marquee logos */}
      <div className="relative z-10 mt-10 sm:mt-14 border-y border-border bg-paper/50 backdrop-blur-sm overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-5 sm:py-6">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl sm:text-3xl md:text-4xl px-8 sm:px-12 text-foreground/70 hover:text-primary transition-colors"
            >
              {name}
              <span className="inline-block ml-8 sm:ml-12 text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
