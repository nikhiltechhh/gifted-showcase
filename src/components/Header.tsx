import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Custom Gifts", href: "#custom" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <img 
                src={logo} 
                alt="Creative Print Zone" 
                className="h-12 lg:h-16 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold transition-all duration-300"
            >
              Design Now
            </Button>
            <Button 
              className="bg-primary text-primary-foreground font-semibold hover:shadow-premium hover:scale-105 transition-all duration-300"
            >
              Shop Gifts
            </Button>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none group z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground my-1.5 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 space-y-2 bg-background/98 backdrop-blur-md border-t border-border">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3.5 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? "fade-in 0.4s ease-out forwards" : "none",
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <Button 
              variant="outline"
              className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Design Now
            </Button>
            <Button 
              className="w-full bg-primary text-primary-foreground font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Shop Gifts
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
