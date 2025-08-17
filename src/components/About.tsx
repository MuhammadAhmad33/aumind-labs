import ahmadAvatar from "@/assets/ahmad-avatar.jpg";
import umairAvatar from "@/assets/umair-avatar.jpg";

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another dev shop. We're startup founders who understand 
              the urgency, constraints, and vision that drive early-stage companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <img 
                  src={ahmadAvatar} 
                  alt="Ahmad - Co-founder" 
                  className="w-20 h-20 rounded-2xl object-cover glow-primary"
                />
                <div>
                  <h3 className="text-2xl font-semibold">Ahmad</h3>
                  <p className="text-primary font-medium">Co-founder & Tech Lead</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <img 
                  src={umairAvatar} 
                  alt="Umair - Co-founder" 
                  className="w-20 h-20 rounded-2xl object-cover glow-accent"
                />
                <div>
                  <h3 className="text-2xl font-semibold">Umair</h3>
                  <p className="text-accent font-medium">Co-founder & Strategy Lead</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started AUMind Labs after years of building our own startups and working 
                with ambitious founders who needed more than cookie-cutter solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our boutique approach means you get direct access to the people building 
                your product — no account managers, no middlemen, just two engineers who 
                care about your success as much as you do.
              </p>

              <div className="pt-4">
                <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full text-sm font-medium text-background">
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