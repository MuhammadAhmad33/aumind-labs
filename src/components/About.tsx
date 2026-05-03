import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow mb-6">The Studio</div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft space-y-2">
              <div>Est. 2024</div>
              <div>Remote-first</div>
              <div>Three co-founders</div>
              <div>Boutique by design</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <h2 className="display-lg mb-10">
              We're a <em className="italic text-primary">tiny</em> studio of
              founder-engineers shipping software the way startups actually need it —
              fast, opinionated, and built to scale.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
              {[
                { label: "Engineering", role: "Co-Founder", line: "Architects systems that don't break at scale." },
                { label: "Product", role: "Co-Founder", line: "Turns fuzzy ideas into clear, shippable plans." },
                { label: "Growth", role: "Co-Founder", line: "Drives delivery, partnerships, and what's next." },
              ].map((f) => (
                <div key={f.label} className="bg-paper p-6 md:p-8 group hover:bg-foreground hover:text-background transition-colors duration-500">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60 group-hover:text-background/60 mb-6">
                    {f.role}
                  </div>
                  <div className="font-display text-3xl md:text-4xl mb-4">{f.label}</div>
                  <p className="text-sm leading-relaxed text-ink-soft group-hover:text-background/80">
                    {f.line}
                  </p>
                  <ArrowUpRight className="w-5 h-5 mt-8 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
