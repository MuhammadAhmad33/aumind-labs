const steps = [
  { n: "01", t: "Discovery", d: "A working call to map the goal, constraints, and what success looks like.", time: "1–2 days" },
  { n: "02", t: "Plan", d: "We scope the build, choose the stack, and lock a delivery cadence you can plan around.", time: "3–5 days" },
  { n: "03", t: "Build", d: "Senior engineers ship in tight loops with weekly demos and a live staging URL.", time: "2–8 weeks" },
  { n: "04", t: "Launch & Scale", d: "We deploy, monitor, and stay on as your engineering bench for whatever comes next.", time: "Ongoing" },
];

const Process = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-6">Our Process</div>
            <h2 className="display-lg">
              From kickoff to launch — <em className="italic text-primary">in weeks.</em>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-6 md:col-start-7 md:pt-10 text-ink-soft text-base md:text-lg">
            A four-step rhythm that keeps work transparent, fast, and out of your inbox.
            You always know what's shipping next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-3xl overflow-hidden">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group bg-paper p-8 md:p-10 hover:bg-primary hover:text-primary-foreground transition-colors duration-500 relative min-h-[280px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60 group-hover:text-primary-foreground/70">
                  Step {s.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-foreground/20 group-hover:border-primary-foreground/40">
                  {s.time}
                </span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl mb-4">{s.t}</h3>
              <p className="text-sm md:text-base text-ink-soft group-hover:text-primary-foreground/85 leading-relaxed mt-auto">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
