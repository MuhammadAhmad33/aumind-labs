import { Code2, Lightbulb, Rocket, Sparkles } from "lucide-react";

const About = () => {
  const founders = [
    {
      icon: Code2,
      title: "Engineering",
      role: "Co-Founder",
      description: "Architects scalable systems and ships production code that powers every client launch.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Lightbulb,
      title: "Product & Strategy",
      role: "Co-Founder",
      description: "Shapes product vision, validates ideas, and turns ambiguous problems into clear roadmaps.",
      gradient: "from-accent to-primary-glow",
    },
    {
      icon: Rocket,
      title: "Growth & Operations",
      role: "Co-Founder",
      description: "Drives client success, delivery cadence, and the partnerships that scale startups beyond launch.",
      gradient: "from-primary-glow to-primary",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-sm font-medium text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Founder-led, by design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Three founders.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              One mission.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            AUMind Labs was built by three co-founders who've launched their own
            startups — and now help others do the same. No account managers, no
            handoffs. You work directly with the people building your product.
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative glass-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Subtle gradient accent on hover */}
              <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}>
                  <founder.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" strokeWidth={2} />
                </div>

                {/* Role label */}
                <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                  {founder.role}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {founder.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card">
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-5">
              Our boutique team means every project gets senior attention from day
              one. We've shipped products across SaaS, fintech, e-commerce, and
              automation — and we bring that pattern recognition to every build.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {["Personal", "Fast", "Results-driven"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
