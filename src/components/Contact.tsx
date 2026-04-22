import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Send, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form or show success message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding bg-background-subtle">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ready to accelerate your startup? Book a free consultation or send us a message. 
            We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="glass-card animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="First name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-glass border-glass-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                  />
                  <Input 
                    name="lastName"
                    placeholder="Last name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-glass border-glass-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                  />
                </div>
                
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-glass border-glass-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                />
                
                <Input 
                  name="company"
                  placeholder="Company name" 
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-glass border-glass-border focus:border-primary transition-all duration-300 hover:border-primary/50"
                />
                
                <Textarea 
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-glass border-glass-border focus:border-primary transition-all duration-300 hover:border-primary/50 resize-none"
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full hero-cta group transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* CTA Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Prefer to talk first?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a free 30-minute consultation where we'll discuss your project, 
                  timeline, and how we can help you achieve your goals.
                </p>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full calendly-cta group transition-all duration-300 hover:scale-[1.02] hover:bg-primary hover:text-background"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="border-t border-glass-border pt-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Average response time: 4 hours</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">What happens next?</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        We'll review your project requirements
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Set up a strategy call within 48 hours
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Provide a detailed proposal and timeline
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Start building your solution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;