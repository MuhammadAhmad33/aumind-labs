import { Code, Smartphone, Zap, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks. From MVPs to enterprise solutions.",
      features: ["React & Next.js", "Full-stack development", "API integrations", "Performance optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native iOS and Android apps, plus cross-platform solutions that don't compromise on quality.",
      features: ["React Native", "Native iOS/Android", "App Store deployment", "User experience focus"]
    },
    {
      icon: Zap,
      title: "Automations & Data",
      description: "Streamline operations with custom automations, data pipelines, and intelligent workflows.",
      features: ["Workflow automation", "Data processing", "API orchestration", "Business intelligence"]
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Unique challenges require unique solutions. We build exactly what your business needs.",
      features: ["Tailored development", "System integration", "Legacy modernization", "Consulting & strategy"]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="bg-gradient-primary bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to launch, we handle the technical complexity so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card group hover:glow-primary transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm group-hover:text-foreground transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
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