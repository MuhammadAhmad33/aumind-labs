import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "SaaS Analytics Platform",
      description: "Real-time dashboard with advanced data visualization for a B2B SaaS startup. Built with React, Node.js, and automated deployment.",
      image: portfolio1,
      tags: ["React", "Node.js", "PostgreSQL", "Analytics"],
      metrics: "40% faster reporting"
    },
    {
      title: "E-commerce Mobile App",
      description: "Cross-platform mobile app with seamless shopping experience, payment integration, and real-time inventory management.",
      image: portfolio2,
      tags: ["React Native", "Stripe", "Firebase", "Mobile"],
      metrics: "300% conversion boost"
    },
    {
      title: "Marketing Automation Suite",
      description: "Custom workflow automation connecting CRM, email marketing, and analytics tools. Reduced manual work by 80%.",
      image: portfolio3,
      tags: ["Automation", "APIs", "Zapier", "Integration"],
      metrics: "80% time saved"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="bg-gradient-primary bg-clip-text text-transparent">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results. See how we've helped startups scale and optimize their operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group hover:glow-primary transition-glass">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                    {project.metrics}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;