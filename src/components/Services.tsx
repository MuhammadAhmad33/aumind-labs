import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Web Engineering",
    desc: "Production-grade web apps, marketing sites, and dashboards built on modern React stacks.",
    tags: ["React / Next.js", "TypeScript", "Edge & Serverless"],
  },
  {
    n: "02",
    title: "Mobile Development",
    desc: "iOS, Android, and cross-platform apps that feel native and ship to the stores cleanly.",
    tags: ["React Native", "Swift / Kotlin", "App Store Ops"],
  },
  {
    n: "03",
    title: "AI & Automation",
    desc: "LLM features, intelligent workflows, and back-office automation that replace manual ops.",
    tags: ["OpenAI / Claude", "n8n / Zapier", "Custom agents"],
  },
  {
    n: "04",
    title: "Product Strategy",
    desc: "Discovery, scoping, and roadmaps for founders who need a sparring partner — not a vendor.",
    tags: ["MVP scoping", "Tech audits", "0→1 roadmaps"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background-subtle">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-20 flex-wrap">
          <div>
            <div className="eyebrow mb-6">Services</div>
            <h2 className="display-lg max-w-3xl">
              What we <em className="italic text-primary">build.</em>
            </h2>
          </div>
          <p className="text-ink-soft max-w-sm text-base md:text-lg">
            Four practices, one team. Hire us end-to-end or drop us into a single hairy problem.
          </p>
        </div>

        <div className="border-t border-foreground/20">
          {services.map((s) => (
            <a
              key={s.n}
              href="#contact"
              className="group grid grid-cols-12 gap-4 md:gap-8 items-start border-b border-foreground/20 py-8 md:py-12 hover:bg-foreground hover:text-background transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4 rounded-none"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="col-span-2 md:col-span-1 font-mono text-sm md:text-base text-foreground/60 group-hover:text-background/60 pt-2">
                {s.n}
              </div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5 pt-2 md:pt-3">
                <p className="text-base md:text-lg leading-relaxed text-ink-soft group-hover:text-background/80 mb-4">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-foreground/20 group-hover:border-background/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-1 flex md:justify-end pt-2 md:pt-3">
                <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
