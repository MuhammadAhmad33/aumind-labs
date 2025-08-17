import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to accelerate your startup? Book a free consultation or send us a message. 
            We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="glass-card">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First name" 
                    className="contact-input"
                  />
                  <Input 
                    placeholder="Last name" 
                    className="contact-input"
                  />
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="contact-input"
                />
                
                <Input 
                  placeholder="Company name" 
                  className="contact-input"
                />
                
                <Textarea 
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="contact-textarea"
                />
                
                <Button className="w-full hero-cta">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
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
                
                <Button size="lg" variant="outline" className="w-full calendly-cta">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
              </div>

              <div className="border-t border-border pt-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Average response time: 4 hours</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">What happens next?</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• We'll review your project requirements</li>
                      <li>• Set up a strategy call within 48 hours</li>
                      <li>• Provide a detailed proposal and timeline</li>
                      <li>• Start building your solution</li>
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