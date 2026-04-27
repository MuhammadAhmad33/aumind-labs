import { Shield, Zap, DollarSign, Users, TrendingUp, Clock } from "lucide-react";

const WhyUs = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Fast & Agile",
      description: "No bureaucracy, no delays. We move at startup speed because we understand the urgency of launching.",
      stat: "60%",
      statLabel: "Faster Delivery",
      color: "hsl(var(--icon-amber))",
    },
    {
      icon: Users,
      title: "Founder-Driven",
      description: "Direct access to our co-founders. No account managers, no miscommunication — just founders helping founders.",
      stat: "30+",
      statLabel: "Happy Clients",
      color: "hsl(var(--icon-violet))",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Premium quality without the agency markup. You get enterprise-level solutions at startup-friendly rates.",
      stat: "50%",
      statLabel: "Cost Savings",
      color: "hsl(var(--icon-emerald))",
    },
    {
      icon: Shield,
      title: "Proven Results",
      description: "50+ successful launches with 99% on-time delivery rate and millions in revenue generated for our clients.",
      stat: "99%",
      statLabel: "Success Rate",
      color: "hsl(var(--icon-sky))",
    }
  ];

  const impactStats = [
    {
      icon: TrendingUp,
      number: "50+",
      label: "Projects Delivered",
      description: "Successfully launched startups",
      color: "hsl(var(--icon-rose))",
    },
    {
      icon: Clock,
      number: "2-8 Weeks",
      label: "Average Delivery",
      description: "From concept to launch",
      color: "hsl(var(--icon-cyan))",
    },
    {
      icon: DollarSign,
      number: "$50M+",
      label: "Revenue Generated",
      description: "For our startup clients",
      color: "hsl(var(--icon-emerald))",
    }
  ];

  return (
    <section className="section-padding bg-background-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">AUMind Labs?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            We're not just another dev shop. We're founders who've been in your shoes, building solutions that actually move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-12 md:mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="glass-card group hover:shadow-elevated hover:glow-primary transition-all duration-500 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <highlight.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: highlight.color }} strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-3 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">{highlight.title}</h3>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{highlight.stat}</div>
                      <div className="text-[10px] md:text-sm text-muted-foreground">{highlight.statLabel}</div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact metrics */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Proven Impact</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${(index + 4) * 0.15}s` }}
            >
              <div className="glass-card hover:shadow-elevated hover:glow-accent transition-all duration-500 transform hover:-translate-y-2">
                <div className="inline-flex mb-4 md:mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <stat.icon className="w-9 h-9 md:w-11 md:h-11" style={{ color: stat.color }} strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-base md:text-lg font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">{stat.label}</div>
                <div className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;