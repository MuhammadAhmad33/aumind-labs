import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 shadow-ink hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in"
    >
      Let's Talk
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
};

export default FloatingCTA;
