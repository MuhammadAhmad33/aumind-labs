import { Users, Code, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="glass-card animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another dev shop. We're startup founders who understand 
              the urgency, constraints, and vision that drive early-stage companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center space-x-6 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-2">
                  <Code className="w-10 h-10 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Tech Lead</h3>
                  <p className="text-primary font-medium">Full-Stack Engineering</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center glow-accent transition-all duration-300 group-hover:scale-110 group-hover:-rotate-2">
                  <Lightbulb className="w-10 h-10 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Strategy Lead</h3>
                  <p className="text-accent font-medium">Product & Business</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-secondary flex items-center justify-center glow-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-1">
                  <Users className="w-10 h-10 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Operations Lead</h3>
                  <p className="text-secondary font-medium">Growth & Client Success</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our three co-founders started AUMind Labs after years of building their own startups and working 
                with ambitious founders who needed more than cookie-cutter solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our boutique approach means you get direct access to the people building 
                your product — no account managers, no middlemen, just three engineers who 
                care about your success as much as you do.
              </p>

              <div className="pt-4">
                <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full text-sm font-medium text-background hover:scale-105 transition-transform duration-300 cursor-default">
                  Personal. Fast. Results-driven.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;