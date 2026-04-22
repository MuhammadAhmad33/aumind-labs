import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">AUMind Labs</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Boutique tech studio helping startups launch, scale, and automate 
              with custom web, mobile, and automation solutions.
            </p>
            <div className="text-sm text-muted-foreground">
              <div>📧 hello@aumindlabs.dev</div>
              <div className="mt-1">🌐 aumindlabs.dev</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 AUMind Labs. Built with care by our founder team.
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 hover:bg-glass rounded-lg transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a 
              href="#" 
              className="p-2 hover:bg-glass rounded-lg transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a 
              href="#" 
              className="p-2 hover:bg-glass rounded-lg transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;