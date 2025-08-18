import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "SaaS Analytics Platform",
      description: "Real-time dashboard with advanced data visualization for a B2B SaaS startup. Built with React, Node.js, and automated deployment pipeline.",
      image: portfolio1,
      tags: ["React", "Node.js", "PostgreSQL", "Analytics"],
      metrics: "40% faster reporting",
      details: "Custom dashboard with real-time data processing, user analytics, and automated reporting features."
    },
    {
      title: "E-commerce Mobile App",
      description: "Cross-platform mobile app with seamless shopping experience, payment integration, and real-time inventory management.",
      image: portfolio2,
      tags: ["React Native", "Stripe", "Firebase", "Mobile"],
      metrics: "300% conversion boost",
      details: "Native-feeling mobile app with advanced cart management, payment processing, and push notifications."
    },
    {
      title: "Marketing Automation Suite",
      description: "Custom workflow automation connecting CRM, email marketing, and analytics tools. Reduced manual work by 80%.",
      image: portfolio3,
      tags: ["Automation", "APIs", "Zapier", "Integration"],
      metrics: "80% time saved",
      details: "Intelligent workflow automation with multi-platform integrations and smart data synchronization."
    },
    {
      title: "FinTech Banking Platform",
      description: "Secure banking platform with real-time transactions, fraud detection, and compliance management for digital banking startup.",
      image: portfolio1,
      tags: ["React", "Python", "PostgreSQL", "Security"],
      metrics: "99.9% uptime",
      details: "Enterprise-grade banking solution with advanced security, real-time processing, and regulatory compliance."
    },
    {
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management system with AI-driven insights, automated lead scoring, and predictive analytics.",
      image: portfolio2,
      tags: ["AI/ML", "React", "Python", "OpenAI"],
      metrics: "60% lead conversion",
      details: "Smart CRM with machine learning algorithms for customer behavior prediction and automated sales insights."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="bg-gradient-primary bg-clip-text text-transparent">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results. See how we've helped startups scale and optimize their operations.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative">
          <div className="glass-card overflow-hidden">
            <div className="relative h-[600px] md:h-[500px]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8 h-full">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                          {project.metrics}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="flex flex-col justify-center space-y-6 p-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.details}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button className="flex-1 hero-cta">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-glass border-glass-border hover:glow-primary"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-glass border-glass-border hover:glow-primary"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On-Time Delivery</div>
          </div>
          <div className="text-center glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-primary-glow mb-2">50%</div>
            <div className="text-sm text-muted-foreground">Avg. Performance Boost</div>
          </div>
          <div className="text-center glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-accent-glow mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Support Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;