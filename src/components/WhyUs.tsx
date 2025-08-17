import { Zap, Users, DollarSign } from "lucide-react";

const WhyUs = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Fast & Agile",
      description: "We move at startup speed. Quick iterations, rapid deployment, and constant communication.",
      stat: "2-3x",
      statLabel: "Faster delivery"
    },
    {
      icon: Users,
      title: "Founder-driven",
      description: "Work directly with the founders. No account managers, no miscommunication, just results.",
      stat: "100%",
      statLabel: "Direct access"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Get enterprise-quality work without the enterprise overhead. Smart solutions, fair pricing.",
      stat: "40-60%",
      statLabel: "Cost savings"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">AUMind Labs</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just building software — we're building partnerships with ambitious founders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="glass-card hover:glow-accent transition-glass">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-primary rounded-3xl mb-4">
                    <highlight.icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">{highlight.stat}</div>
                    <div className="text-sm text-muted-foreground">{highlight.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;