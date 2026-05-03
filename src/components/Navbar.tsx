import { useState, useEffect } from "react";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: "Services", href: "#services" },
    { label: "Magic Work", href: "#portfolio" },
    { label: "Studio", href: "#about" },
  ];

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6">
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between gap-4 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-foreground text-background flex items-center justify-center font-mono text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            AU
          </div>
          <span className="font-display text-2xl tracking-tight">
            aumind<span className="text-primary">labs</span>
          </span>
        </a>

        {/* Desktop pill nav */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-paper/80 backdrop-blur-md border border-border px-2 py-1.5 shadow-paper">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.href)}
              className="pill-ghost rounded-full px-4 py-1.5"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-paper"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <button onClick={() => go("#contact")} className="hidden sm:inline-flex pill-dark">
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-3 mx-auto max-w-7xl rounded-3xl bg-paper border border-border p-6 shadow-paper">
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.href)}
                className="text-left font-display text-3xl py-2 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => go("#contact")} className="pill-dark mt-4 justify-center">
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
