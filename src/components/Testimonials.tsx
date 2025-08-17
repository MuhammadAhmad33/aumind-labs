import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "B2B SaaS Startup",
      content: "AUMind Labs delivered our MVP in 6 weeks. Their founder-to-founder approach meant they understood our urgency and constraints perfectly.",
      rating: 5,
      result: "40% faster time-to-market"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, GrowthMetrics",
      company: "Analytics Platform",
      content: "Ahmad and Umair didn't just build what we asked for - they suggested improvements that saved us months of iterations. True partners.",
      rating: 5,
      result: "500% user engagement boost"
    },
    {
      name: "Emily Watson",
      role: "CTO, RetailSync",
      company: "E-commerce Automation",
      content: "Best development experience we've had. No bureaucracy, just two brilliant engineers who care about your success as much as you do.",
      rating: 5,
      result: "$2M+ revenue automated"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="bg-gradient-primary bg-clip-text text-transparent">Founders</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what startup founders say about working with AUMind Labs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card group hover:glow-primary transition-glass">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed pl-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="border-t border-glass-border pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent font-medium">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{testimonial.result}</div>
                    <div className="text-xs text-muted-foreground">Impact</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;