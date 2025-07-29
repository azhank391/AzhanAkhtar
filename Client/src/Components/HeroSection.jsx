import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const MatrixRevealText = ({ text = "MUHAMMAD AZHAN", speed = 30, delay = 80 }) => {
  const [displayText, setDisplayText] = useState("_".repeat(text.length));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    let currentIndex = 0;
    let timeouts = [];
    let intervals = [];

    const animateLetter = (index) => {
      let iterations = 0;
      const maxIterations = 8;

      const interval = setInterval(() => {
        if (iterations < maxIterations) {
          const randomChar = letters[Math.floor(Math.random() * letters.length)];
          setDisplayText(prev => 
            text.substring(0, index) + randomChar + prev.substring(index + 1)
          );
          iterations++;
        } else {
          setDisplayText(prev => 
            text.substring(0, index + 1) + prev.substring(index + 1)
          );
          clearInterval(interval);

          if (index + 1 < text.length) {
            const timeout = setTimeout(() => animateLetter(index + 1), delay);
            timeouts.push(timeout);
          }
        }
      }, speed);

      intervals.push(interval);
    };

    animateLetter(currentIndex);

    // Cleanup function
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [text, speed, delay]); // Removed displayText and letters from dependencies

  return (
    <span className="font-mono whitespace-nowrap overflow-hidden align-middle tracking-wider">
      {displayText}
    </span>
  );
};

const ResponsiveHeroSection = () => {
  const [isVisible, setIsVisible] = useState({ "hero-content": false });

  useEffect(() => {
    // Simulate the reveal animation
    setTimeout(() => {
      setIsVisible({ "hero-content": true });
    }, 100);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 sm:pt-28 bg-slate-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-400/20 animate-pulse"></div>
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <div
          data-reveal
          id="hero-content"
          className={`transition-all duration-1000 ease-out ${
            isVisible["hero-content"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          {/* Main heading with better responsive scaling */}
          <h1 className="font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            {/* Hello I'm - responsive but not overdone */}
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4">
              HELLO, I'M
            </div>
            
            {/* Name with matrix effect - better responsive sizing */}
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
              <MatrixRevealText text="MUHAMMAD AZHAN" speed={50} delay={100} />
            </div>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with
            functionality. Passionate about clean code, beautiful design, and
            innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="border-2 border-orange-400 hover:bg-orange-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View Skills
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-orange-400" />
      </div>
    </section>
  );
};

export default ResponsiveHeroSection;