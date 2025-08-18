import { CheckCircle, MessageSquare, Code, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Process = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      description: "We understand your vision, requirements, and business goals in a detailed discussion.",
      duration: "1-2 days"
    },
    {
      icon: CheckCircle,
      title: "Strategy & Planning",
      description: "We create a detailed roadmap, choose the right tech stack, and plan the development phases.",
      duration: "3-5 days"
    },
    {
      icon: Code,
      title: "Development & Testing", 
      description: "We build your solution with regular updates, testing each feature to ensure quality.",
      duration: "2-8 weeks"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure smooth operations.",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background-subtle overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial idea to successful launch, we follow a proven process that ensures your project succeeds.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
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
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="glass-card group hover:glow-primary transition-all duration-500 transform hover:scale-[1.02]">
                      <div className={`flex items-start space-x-4 ${
                        index % 2 === 0 ? '' : 'md:flex-row-reverse md:space-x-reverse md:space-x-4'
                      }`}>
                        <div className="p-4 bg-gradient-primary rounded-3xl group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-8 h-8 text-background" />
                        </div>
                        <div className={index % 2 === 0 ? '' : 'md:text-right'}>
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl font-semibold">{step.title}</h3>
                            <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-background font-bold text-lg shadow-lg">
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