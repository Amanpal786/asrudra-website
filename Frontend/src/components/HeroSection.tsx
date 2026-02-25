import { useState } from "react";
import SearchBox from "./SearchBox"; // Adjust path if needed
import EmiCalculator from "../components/calculator"; // Adjust path if needed

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", { searchQuery, propertyType, location });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white p-0 m-0">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          preload="auto"
        >
          <source
            src="/videos/4193142-uhd_2562_1440_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Removed transparent overlay */}
        {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" /> */}
      </div>

      {/* Floating Animated Dots */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-60" />
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full animate-float opacity-80"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 text-[#001f3f]">
            Find Your Dream <br />
            <span className="bg-gradient-to-r from-orange-900 to-orange-400 bg-clip-text text-transparent">
              Property
            </span>
          </h2>
          <h4 className="text-base sm:text-lg md:text-xl font-medium text-[#001f3f] mb-2">
            AS RUDRA SOLUTIONS Pvt. Ltd.
          </h4>
          <p className="text-sm md:text-base lg:text-lg text-[#001f3f] font-normal mb-10 max-w-3xl mx-auto">
            Explore premium properties with smart search and tailored picks.
          </p>

          {/* Search Box Component */}
          <SearchBox />

          {/* EMI Calculator */}
          <div className="mt-10">
            <EmiCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
