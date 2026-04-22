import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden bg-gradient-mesh" style={{ transform: 'translateZ(0)' }}>
      <div className="hero-glow"></div>
      
      <div className="container mx-auto max-w-6xl text-center z-10">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
              <span className="block">Launch, Scale,</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent pb-2">
                Automate
              </span>
              <span className="block text-lg sm:text-2xl md:text-3xl font-medium text-muted-foreground mt-3 sm:mt-4">
                — with AUMind Labs
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 px-2">
              Three founder-engineers helping startups move faster with custom web, mobile, 
              and automation solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-8 animate-fade-in delay-500 px-4">
            <Button 
              size="lg" 
              className="hero-cta group hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Consult
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="hero-secondary hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              See Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-float delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float delay-500"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent-glow rounded-full animate-pulse-slow delay-700"></div>
    </section>
  );
};

export default Hero;