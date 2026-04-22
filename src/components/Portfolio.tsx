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
    <section className="section-padding bg-background-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Real solutions for real businesses. Here's how we've helped founders like you turn ideas into success stories.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative">
          <div className="glass-card overflow-hidden p-4 md:p-8">
            <div className="relative min-h-[640px] sm:min-h-[560px] md:h-[500px]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentSlide ? 'translate-x-0 opacity-100' : 
                    index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 h-full">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-2xl h-48 sm:h-64 md:h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <div className="px-3 py-1.5 md:px-4 md:py-2 bg-background/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-primary shadow-lg">
                          {project.metrics}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="flex flex-col justify-center space-y-4 md:space-y-6 p-2 md:p-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">{project.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                          {project.description}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden sm:block">
                          {project.details}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 md:px-3 bg-secondary rounded-full text-xs md:text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button className="flex-1 hero-cta">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="flex-1 sm:flex-none">
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
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-glass border-glass-border hover:glow-primary z-10 h-9 w-9 md:h-10 md:w-10"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-glass border-glass-border hover:glow-primary z-10 h-9 w-9 md:h-10 md:w-10"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/40 hover:bg-primary/50 w-2'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div className="text-center glass p-4 md:p-6 rounded-2xl hover:glow-primary transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center glass p-4 md:p-6 rounded-2xl hover:glow-accent transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">On-Time Delivery</div>
          </div>
          <div className="text-center glass p-4 md:p-6 rounded-2xl hover:glow-primary transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary-glow mb-1 md:mb-2">50%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Avg. Performance Boost</div>
          </div>
          <div className="text-center glass p-4 md:p-6 rounded-2xl hover:glow-accent transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl md:text-3xl font-bold text-accent-glow mb-1 md:mb-2">24h</div>
            <div className="text-xs md:text-sm text-muted-foreground">Support Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;