import { TrendingUp, Users, Zap, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "50+",
      label: "Projects Delivered",
      description: "Successfully launched startups"
    },
    {
      icon: Users,
      number: "30+",
      label: "Happy Clients",
      description: "Founders who trust us"
    },
    {
      icon: Clock,
      number: "60%",
      label: "Faster Delivery",
      description: "Than traditional agencies"
    },
    {
      icon: Zap,
      number: "99%",
      label: "Success Rate",
      description: "Projects delivered on time"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="bg-gradient-primary bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak louder than words. Here's the impact we've created for startups like yours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-card hover:glow-accent transition-glass">
                <div className="mb-4">
                  <div className="inline-flex p-4 bg-gradient-primary rounded-3xl mb-4">
                    <stat.icon className="w-8 h-8 text-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional impact metrics */}
        <div className="mt-16 text-center">
          <div className="glass-card">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$50M+</div>
                <div className="text-muted-foreground">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2-8 Weeks</div>
                <div className="text-muted-foreground">Average Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-glow mb-2">24/7</div>
                <div className="text-muted-foreground">Founder Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;