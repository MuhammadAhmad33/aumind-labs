import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16">
        {/* Massive wordmark */}
        <div className="font-display text-[18vw] md:text-[14vw] leading-none tracking-tight pb-10 border-b border-border">
          aumind<span className="text-primary">labs.</span>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-12">
          <div className="col-span-12 md:col-span-5">
            <p className="font-display text-2xl md:text-3xl leading-snug max-w-md">
              A boutique studio of founder-engineers. We launch, scale, and automate
              software for ambitious teams.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft mb-4">Studio</div>
            <ul className="space-y-2 text-base">
              <li><a href="#about" className="link-underline">About</a></li>
              <li><a href="#services" className="link-underline">Services</a></li>
              <li><a href="#portfolio" className="link-underline">Magic Work</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft mb-4">Connect</div>
            <ul className="space-y-2 text-base">
              <li><a href="#contact" className="link-underline">Contact</a></li>
              <li><a href="#" className="link-underline">LinkedIn</a></li>
              <li><a href="#" className="link-underline">GitHub</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft mb-4">Get in touch</div>
            <a href="mailto:hello@aumindlabs.com" className="inline-flex items-center gap-2 font-display text-2xl hover:text-primary transition-colors">
              hello@aumindlabs.com <ArrowUpRight className="w-5 h-5" />
            </a>
            <div className="text-sm text-ink-soft mt-3">aumindlabs.com</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mt-12 border-t border-border flex-wrap gap-4">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            © 2026 AUMind Labs · All rights reserved
          </div>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
