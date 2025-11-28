import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Package, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: hero1,
      title: "Create Unique Personalized Gifts",
      subtitle: "Transform Your Ideas Into Beautiful Custom Products",
      icon: Sparkles,
    },
    {
      image: hero2,
      title: "Professional Printing Services",
      subtitle: "High-Quality Prints For Every Occasion",
      icon: Package,
    },
    {
      image: hero3,
      title: "Express Your Creativity",
      subtitle: "Make Every Gift Special & Memorable",
      icon: Palette,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handleSlideChange = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPrevious = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* Carousel Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent md:from-background/90 md:via-background/70"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex items-center pt-20 lg:pt-24">
                <div className="container mx-auto px-4 lg:px-12 xl:px-16">
                  <div className="max-w-2xl xl:max-w-3xl space-y-6 lg:space-y-8">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-primary/10 backdrop-blur-sm ${isTransitioning ? 'animate-scale-in' : ''}`}>
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight ${isTransitioning ? 'animate-fade-in' : ''}`}>
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed ${isTransitioning ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '100ms' }}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6 ${isTransitioning ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '200ms' }}
                    >
                      <Button 
                        size="lg" 
                        className="bg-primary text-primary-foreground font-semibold text-base lg:text-lg px-8 lg:px-10 py-6 lg:py-7 hover:shadow-premium hover:scale-105 transition-all duration-300 rounded-xl"
                      >
                        Shop Now
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-2 border-secondary text-secondary font-semibold text-base lg:text-lg px-8 lg:px-10 py-6 lg:py-7 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 rounded-xl"
                      >
                        Custom Design
                      </Button>
                    </div>

                    {/* Features List */}
                    <div className={`flex flex-wrap gap-4 lg:gap-6 pt-4 ${isTransitioning ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '300ms' }}
                    >
                      <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="font-medium">Premium Quality</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span className="font-medium">Fast Delivery</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="font-medium">Custom Designs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-3 lg:p-4 rounded-full bg-background/90 backdrop-blur-sm border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-3 lg:p-4 rounded-full bg-background/90 backdrop-blur-sm border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3 lg:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-12 lg:w-16 h-2 lg:h-2.5 bg-primary shadow-premium"
                : "w-2 lg:w-2.5 h-2 lg:h-2.5 bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 lg:bottom-12 right-4 lg:right-8 z-10 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg">
        <span className="text-sm lg:text-base font-semibold text-foreground">
          {currentSlide + 1}
          <span className="text-muted-foreground mx-1">/</span>
          {slides.length}
        </span>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-40 lg:w-64 h-40 lg:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 lg:w-72 h-48 lg:h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
