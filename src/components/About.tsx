import { Sparkles, Coffee, Hammer, Gift, Scissors, Package, Key, Cog, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const offerings = [
    { icon: Sparkles, text: "Customized Cushions" },
    { icon: Coffee, text: "Bulk Printing Mugs" },
    { icon: Hammer, text: "Wood Engraving" },
    { icon: Gift, text: "Laser Marking Gifts" },
    { icon: Scissors, text: "MDF & Acrylic CO2 Cutting" },
    { icon: Package, text: "Sublimation Raw Materials" },
    { icon: Key, text: "Customized Keychains (Metal, MDF, Acrylic)" },
    { icon: Cog, text: "Machines & Equipment" },
    { icon: Truck, text: "Pan India Delivery" },
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Your one-stop destination for premium customized gifts and bulk printing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group bg-card border border-border rounded-lg p-4 hover:shadow-[var(--shadow-premium)] transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 80}ms`,
                  transitionDuration: '600ms'
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
