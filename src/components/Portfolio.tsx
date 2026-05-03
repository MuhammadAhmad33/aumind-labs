import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

const projects = [
  { title: "Northwind Analytics", category: "SaaS · Dashboard", year: "2025", img: p1, metric: "40% faster reporting", tags: ["React", "Postgres", "AI"] },
  { title: "Veil Commerce", category: "Mobile · E-commerce", year: "2025", img: p2, metric: "300% conversion lift", tags: ["React Native", "Stripe"] },
  { title: "Loop Automations", category: "Workflow · AI Agents", year: "2024", img: p3, metric: "80% manual ops removed", tags: ["n8n", "OpenAI"] },
  { title: "Kestrel Banking", category: "FinTech · Platform", year: "2024", img: p1, metric: "99.99% uptime", tags: ["Node", "Security"] },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background-subtle">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-20 flex-wrap">
          <div>
            <div className="eyebrow mb-6">Magic Work</div>
            <h2 className="display-lg max-w-3xl">
              Recent <em className="italic text-primary">launches.</em>
            </h2>
          </div>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="pill">
            Start your project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-foreground/5 aspect-[4/5] mb-5">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] bg-paper text-foreground rounded-full px-3 py-1.5">
                    {p.metric}
                  </span>
                  <span className="w-10 h-10 rounded-full bg-paper text-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    {p.category}
                  </div>
                </div>
                <div className="font-mono text-xs text-ink-soft">{p.year}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
