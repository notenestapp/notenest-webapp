import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#benefits", label: "Benefits" },
    { href: "#team", label: "The Team" },
    { href: "#download", label: "Get App" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="NoteNest" className="h-40 w-45 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle Button (Desktop) */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
              </button>
            )}

            <a href="#waitlist" className="btn-primary text-sm py-3 px-6">
              Join the Waitlist
            </a>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle Button (Mobile) */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center justify-center active:scale-95"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 py-4">
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#waitlist" 
                className="btn-primary text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
