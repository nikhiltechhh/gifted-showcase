import { Sparkles, Coffee, Hammer, Gift, Scissors, Package, Key, Cog, Truck, MapPin, ShoppingBag, Users } from "lucide-react";
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
    { icon: Sparkles, text: "Customized Cushions", color: "#FF1493" },
    { icon: Coffee, text: "Bulk Printing Mugs", color: "#FF6B6B" },
    { icon: Hammer, text: "Wood Engraving", color: "#FFD700" },
    { icon: Gift, text: "Laser Marking Gifts", color: "#FF1493" },
    { icon: Scissors, text: "MDF & Acrylic CO2 Cutting", color: "#4ECDC4" },
    { icon: Package, text: "Sublimation Raw Materials", color: "#FFD700" },
    { icon: Key, text: "Customized Keychains", color: "#FF6B6B" },
    { icon: Cog, text: "Machines & Equipment", color: "#4ECDC4" },
    { icon: Truck, text: "Pan India Delivery", color: "#22C55E" },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-40 h-40 md:w-64 md:h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-5 w-40 h-40 md:w-64 md:h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-4 py-12 md:py-16 max-w-7xl mx-auto">
        {/* Main headline section - Compact */}
        <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-50 to-pink-50 rounded-full text-red-600 font-semibold text-xs md:text-sm border border-red-100 mb-3 md:mb-4">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Premium Quality
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-pink-600 mb-3 md:mb-4 leading-tight">
            Creativity that delivers
            <br />
            <span className="text-gray-800">right to you</span>
          </h1>
          
          <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-2">
            Your one-stop destination for <span className="font-bold text-red-600">premium customized gifts</span> and <span className="font-bold text-red-600">bulk printing solutions</span>.
          </p>
        </div>

        {/* What We Offer Section - Compact List */}
        <div className={`mb-10 md:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">What We Offer</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3">
              {offerings.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`group flex items-center gap-1.5 md:gap-2.5 p-1.5 md:p-3 rounded-lg bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ 
                      transitionDelay: `${300 + index * 50}ms`,
                    }}
                  >
                    <div 
                      className="p-1.5 md:p-2 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <Icon 
                        className="w-3.5 h-3.5 md:w-5 md:h-5" 
                        style={{ color: item.color }} 
                      />
                    </div>
                    
                    <p className="text-[10px] leading-tight md:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors flex-1">
                      {item.text}
                    </p>

                    <div 
                      className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics section - Compact */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Happy Customers */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-5 md:p-6 flex items-center justify-between transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-red-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-0.5 transform group-hover:scale-110 transition-transform duration-500">1000+</div>
              <div className="text-gray-600 text-xs md:text-sm font-semibold">Happy Customers</div>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative z-10">
              <Users className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
            </div>
          </div>

          {/* Cities */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-5 md:p-6 flex items-center justify-between transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-blue-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-0.5 transform group-hover:scale-110 transition-transform duration-500">80+</div>
              <div className="text-gray-600 text-xs md:text-sm font-semibold">Cities</div>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative z-10">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
            </div>
          </div>

          {/* Orders Delivered */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-5 md:p-6 flex items-center justify-between transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-green-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-0.5 transform group-hover:scale-110 transition-transform duration-500">1000+</div>
              <div className="text-gray-600 text-xs md:text-sm font-semibold">Gifts Delivered</div>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative z-10">
              <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;