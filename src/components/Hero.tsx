import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="hero-glow"></div>
      
      <div className="container mx-auto max-w-6xl text-center z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Launch, Scale,</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Automate
              </span>
              <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-4">
                — with AUMind Labs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Two founder-engineers helping startups move faster with custom web, mobile, 
              and automation solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button size="lg" className="hero-cta group">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Consult
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="secondary" size="lg" className="hero-secondary">
              See Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;