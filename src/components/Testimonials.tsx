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
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            What <span className="bg-gradient-primary bg-clip-text text-transparent">Founders</span> Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Don't just take our word for it. Here's what startup founders say about working with AUMind Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card group hover:shadow-elevated hover:glow-primary transition-all duration-500 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-7 h-7 md:w-8 md:h-8 text-primary/20" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-5 md:pl-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="border-t border-glass-border pt-5 md:pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.role}</div>
                    <div className="text-[10px] md:text-xs text-accent font-medium truncate">{testimonial.company}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs md:text-sm font-semibold text-primary">{testimonial.result}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">Impact</div>
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