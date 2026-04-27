import { Code, Smartphone, Zap, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks. From MVPs to enterprise solutions.",
      features: ["React & Next.js", "Full-stack development", "API integrations", "Performance optimization"],
      color: "hsl(var(--icon-indigo))",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native iOS and Android apps, plus cross-platform solutions that don't compromise on quality.",
      features: ["React Native", "Native iOS/Android", "App Store deployment", "User experience focus"],
      color: "hsl(var(--icon-emerald))",
    },
    {
      icon: Zap,
      title: "Automations & Data",
      description: "Streamline operations with custom automations, data pipelines, and intelligent workflows.",
      features: ["Workflow automation", "Data processing", "API orchestration", "Business intelligence"],
      color: "hsl(var(--icon-amber))",
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Unique challenges require unique solutions. We build exactly what your business needs.",
      features: ["Tailored development", "System integration", "Legacy modernization", "Consulting & strategy"],
      color: "hsl(var(--icon-violet))",
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            What We <span className="bg-gradient-primary bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            From idea to launch, we handle the technical complexity so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card group hover:shadow-elevated hover:glow-primary transition-all duration-500 cursor-pointer transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-5 md:mb-6">
                <div className="flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2.5 md:space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;