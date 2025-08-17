import { Code2, Database, Cloud, Smartphone, Zap, Globe } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: Globe,
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      icon: Database,
      tech: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      tech: ["React Native", "Flutter", "iOS", "Android", "Expo"]
    },
    {
      category: "Cloud",
      icon: Cloud,
      tech: ["AWS", "Vercel", "Supabase", "Firebase", "Docker"]
    },
    {
      category: "AI/ML",
      icon: Zap,
      tech: ["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"]
    },
    {
      category: "Dev Tools",
      icon: Code2,
      tech: ["Git", "GitHub Actions", "Webpack", "ESLint", "Prettier"]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies to build scalable, performant solutions that grow with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, index) => (
            <div key={index} className="glass-card group hover:glow-primary transition-glass">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-2xl">
                  <category.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.tech.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card">
            <h3 className="text-2xl font-semibold mb-4">Always Learning, Always Evolving</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Technology moves fast, and so do we. We continuously evaluate and adopt new tools 
              to ensure your project uses the best available solutions. From emerging AI frameworks 
              to the latest deployment strategies, we stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;