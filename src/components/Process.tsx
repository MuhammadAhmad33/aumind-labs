import { CheckCircle, MessageSquare, Code, Rocket, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Process = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      description: "We understand your vision, requirements, and business goals in a detailed discussion.",
      duration: "1-2 days",
      color: "hsl(var(--icon-sky))",
    },
    {
      icon: CheckCircle,
      title: "Strategy & Planning",
      description: "We create a detailed roadmap, choose the right tech stack, and plan the development phases.",
      duration: "3-5 days",
      color: "hsl(var(--icon-emerald))",
    },
    {
      icon: Code,
      title: "Development & Testing", 
      description: "We build your solution with regular updates, testing each feature to ensure quality.",
      duration: "2-8 weeks",
      color: "hsl(var(--icon-violet))",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure smooth operations.",
      duration: "Ongoing",
      color: "hsl(var(--icon-rose))",
    }
  ];

  return (
    <section className="section-padding bg-background-subtle overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            From initial idea to successful launch, we follow a proven process that ensures your project succeeds.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center w-full max-w-4xl ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`flex-1 w-full ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="glass-card group hover:shadow-elevated hover:glow-primary transition-all duration-500 transform hover:-translate-y-1">
                      <div className={`flex items-start space-x-4 ${
                        index % 2 === 0 ? '' : 'md:flex-row-reverse md:space-x-reverse md:space-x-4'
                      }`}>
                        <div className="flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                          <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
                        </div>
                        <div className={`flex-1 min-w-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                          <div className={`flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                            <h3 className="text-lg md:text-2xl font-semibold">{step.title}</h3>
                            <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-[0.12em] font-semibold bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                              <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" />
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;