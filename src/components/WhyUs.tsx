const stats = [
  { n: "50+", l: "Products shipped" },
  { n: "2–8", l: "Weeks avg. delivery" },
  { n: "$50M+", l: "Client revenue powered" },
  { n: "99%", l: "On-time launches" },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-6 text-background/70">Why us</div>
            <h2 className="display-lg">
              Senior <em className="italic text-primary">attention,</em> from day one.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:pt-10">
            <p className="text-lg md:text-2xl leading-relaxed text-background/80 font-display">
              No account managers. No layers. You message the people writing your code.
              That's why we ship in weeks, not quarters — and why our clients keep coming back.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10 border border-background/10 rounded-3xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.l} className="bg-foreground p-8 md:p-10">
              <div className="font-display text-5xl md:text-7xl mb-3 text-primary">{s.n}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
