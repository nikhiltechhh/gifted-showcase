import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-background/98 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20 lg:h-20">

          {/* Logo + Name */}
          <div
            className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
            onClick={() => scrollToId("home")}
          >
            <img
              src={logo}
              alt="Creative Print Zone"
              className="h-12 lg:h-16 w-auto transition-transform duration-300 hover:scale-105"
            />

            <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-foreground">
              Creative Print Zone
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToId(item.id)}
                className="px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button
              onClick={() => scrollToId("products")}
              className="bg-primary text-primary-foreground font-semibold hover:shadow-premium hover:scale-105 transition-all duration-300"
            >
              Shop Now
            </Button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none group z-50"
          >
            <span
              className={`block w-7 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground my-1.5 transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-foreground transition-all duration-300 ${
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
        <nav className="px-4 pt-4 pb-6 space-y-2 bg-white shadow-md border-t border-gray-200">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToId(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-5 py-3.5 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-100 rounded-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? "fade-in 0.4s ease-out forwards" : "none",
              }}
            >
              {item.name}
            </button>
          ))}

          {/* CTA Button - Mobile */}
          <div className="pt-4">
            <Button
              className="w-full bg-primary text-primary-foreground font-semibold"
              onClick={() => {
                scrollToId("products");
                setIsOpen(false);
              }}
            >
              Shop Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
