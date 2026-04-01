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
      <div className="relative z-10 container mx-auto px-4 pb-20">
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

// import { useState, useEffect } from "react";
// import SearchBox from "./SearchBox";
// import EmiCalculator from "../components/calculator";

// const images = [
//   "/images/luxury1.jpg",
//   "/images/luxury2.webp",
//   "/images/luxury3.webp",
//   "/images/luxury4.webp",
//   "/images/luxury5.webp",
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);

//   // 🔄 Auto rotate images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

//       {/* 🔥 BACKGROUND IMAGE SLIDER */}
//       <div className="absolute inset-0 w-full h-full">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             className={`absolute w-full h-full object-cover transition-opacity duration-1000 
//             ${index === current ? "opacity-100" : "opacity-0"}`}
//           />
//         ))}

//         {/* 🔥 DARK + GOLD OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-br "></div>
//       </div>

//       {/* ✨ FLOATING DOTS */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-70" />
//         <div className="absolute bottom-20 right-20 w-4 h-4 bg-yellow-300 rounded-full animate-pulse opacity-50" />
//       </div>

//       {/* 🔥 MAIN CONTENT */}
//       <div className="relative z-10 text-center px-4 max-w-4xl">

//         {/* HEADING */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
//           Discover Your Dream <br />
//           <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//             Luxury Property
//           </span>
//         </h1>

//         <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
//           Explore premium real estate with modern design, comfort, and elegance.
//         </p>

//         {/* 🔥 GLASS SEARCH */}
//         <div className="backdrop-blur-md bg-white/10 border border-white/20 
//         shadow-2xl rounded-2xl p-4 mb-6">
//           <SearchBox />
//         </div>

//         {/* 🔥 EMI GLASS */}
//         <div className="backdrop-blur-md bg-white/10 border border-white/20 
//         rounded-2xl p-4">
//           <EmiCalculator />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;