import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-20 left-10 w-2 h-2 bg-quantum-blue rounded-full opacity-60 float-animation" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-byte-green rounded-full opacity-40 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-quantum-blue rounded-full opacity-50 float-animation" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-byte-green rounded-full opacity-30 float-animation" style={{ animationDelay: '1s' }} /> */}
       
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in-up">
            Quantum Ideas,{" "}
            <span className="text-gradient block mt-2">
              Byte-Sized Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your business with cutting-edge AI/ML, Web & App
            solutions. Where innovation meets implementation.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="quantum-gradient hover:quantum-gradient-hover text-white font-semibold px-8 py-4 shadow-quantum glow-on-hover transition-smooth group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="quantum-gradient hover:quantum-gradient-hover text-black font-semibold px-8 py-4 shadow-quantum glow-on-hover transition-smooth group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
