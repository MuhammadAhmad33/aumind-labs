const items = [
  {
    quote: "AUMind shipped our MVP in six weeks. The founder-to-founder dynamic meant zero translation overhead — they just got it.",
    name: "Sarah Chen", role: "CEO, TechFlow",
  },
  {
    quote: "They didn't just build what we asked for. They suggested the changes that saved us months of iteration. Real partners.",
    name: "Marcus Rodriguez", role: "Founder, GrowthMetrics",
  },
  {
    quote: "Best engineering experience we've had. No bureaucracy, just brilliant people who care about your business as much as you do.",
    name: "Emily Watson", role: "CTO, RetailSync",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="eyebrow mb-6">Words from founders</div>
        <h2 className="display-lg max-w-5xl mb-16 md:mb-20">
          They <em className="italic text-primary">trusted</em> us with the build.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {items.map((t) => (
            <figure key={t.name} className="bg-paper p-8 md:p-10 flex flex-col">
              <div className="font-display text-6xl text-primary leading-none mb-4">"</div>
              <blockquote className="font-display text-2xl md:text-3xl leading-snug mb-8 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="border-t border-border pt-4">
                <div className="font-medium">{t.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
