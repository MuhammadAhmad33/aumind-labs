import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      <div className={`transition-all duration-300 ${isExpanded ? 'mb-4' : ''}`}>
        {isExpanded && (
          <div className="glass-card p-4 mb-4 w-[calc(100vw-3rem)] max-w-xs animate-fade-in">
            <h4 className="font-semibold mb-2">Ready to build something amazing?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Let's discuss your project and see how we can help you succeed.
            </p>
            <div className="flex gap-2">
              <Button size="sm" onClick={scrollToContact} className="flex-1">
                Get Started
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setIsExpanded(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <Button
        size="lg"
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-primary hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingCTA;