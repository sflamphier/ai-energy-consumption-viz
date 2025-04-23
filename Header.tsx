import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { BoltIcon, MenuIcon, XIcon } from "lucide-react";

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Comparisons", href: "#comparisons" },
  { name: "Real-world Impact", href: "#real-world" },
  { name: "Costs", href: "#costs" },
  { name: "Take Action", href: "#action" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const smoothScroll = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (window.location.pathname !== "/") {
      setLocation("/");
      // Give time for the page to load before scrolling
      setTimeout(() => {
        smoothScroll(href);
      }, 100);
    } else {
      smoothScroll(href);
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BoltIcon className="text-accent text-2xl" />
          <h1 className="text-xl md:text-2xl font-bold text-primary">AI Energy Consumption</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-dark focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
        <div className="container mx-auto px-4 py-2">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
