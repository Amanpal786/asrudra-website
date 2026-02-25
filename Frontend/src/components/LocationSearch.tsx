import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Home,
  Building2,
  Landmark,
  BedDouble,
  Store,
  KeyRound,
  Search,
  X
} from "lucide-react";

const LocationSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [defaultCategories] = useState([
    {
      icon: <Home className="text-blue-600 w-6 h-6" />,
      title: "Residential",
      description: "Find premium residential homes and apartments."
    },
    {
      icon: <Building2 className="text-blue-600 w-6 h-6" />,
      title: "Commercial",
      description: "Explore shops, showrooms, and commercial hubs."
    },
    {
      icon: <Landmark className="text-blue-600 w-6 h-6" />,
      title: "Plots",
      description: "Find land for development or investment."
    },
    {
      icon: <BedDouble className="text-blue-600 w-6 h-6" />,
      title: "2 BHK Homes",
      description: "Affordable and cozy 2BHK homes."
    },
    {
      icon: <BedDouble className="text-blue-600 w-6 h-6" />,
      title: "3 BHK Homes",
      description: "Spacious and premium 3BHK residences."
    },
    {
      icon: <Store className="text-blue-600 w-6 h-6" />,
      title: "Office Space",
      description: "Modern office locations for businesses."
    },
    {
      icon: <KeyRound className="text-blue-600 w-6 h-6" />,
      title: "Rental Properties",
      description: "Browse rental homes, flats, and offices."
    }
  ]);

  useEffect(() => {
    const fetchProperties = async () => {
      if (searchQuery.trim() === "") {
        setFilteredProperties([]);
        return;
      }

      setIsSearching(true);
      try {
        const response = await axios.get("http://https://asrudra-backend-1.onrender.com/Property");
        const allProperties = response.data;

        const query = searchQuery.toLowerCase();
        const filtered = allProperties.filter((property) => {
          return (
            property?.propertyType?.toLowerCase().includes(query) ||
            property?.bhk?.toLowerCase().includes(query) ||
            property?.purpose?.toLowerCase().includes(query) ||
            property?.title?.toLowerCase().includes(query)
          );
        });

        setFilteredProperties(filtered);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchProperties();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProperties([]);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const mapVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
            Discover Properties in Your Preferred Location
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Find your dream home, office space, or investment property with our comprehensive search
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center relative"
        >
          <div className="relative w-full md:w-2/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for 2BHK, 3BHK, Plots, Residential, Commercial, Office, Rent..."
              className="w-full pl-10 pr-10 py-3 border-2 border-blue-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg text-black" // Added text-black here
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={mapVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112251.43736636191!2d77.31470919069754!3d28.579620142847288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59f03e2c8c3%3A0x6f0f5c2a0e8609e5!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689825411205!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </motion.div>

        {isSearching && (
          <div className="flex justify-center my-8">
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 1, repeat: Infinity, ease: "linear" }
              }}
              className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
            />
          </div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {searchQuery.trim() && filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <motion.div
                  key={property._id}
                  variants={itemVariants}
                  layout
                  className="h-full"
                >
                  <PropertyCard
                    icon={<MapPin className="text-blue-600 w-6 h-6" />}
                    title={property.title}
                    description={`${property.propertyType} • ${property.bhk || ""} • ${property.purpose}`}
                    image={property.image}
                  />
                </motion.div>
              ))
            ) : !searchQuery.trim() ? (
              defaultCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="h-full"
                >
                  <PropertyCard
                    icon={category.icon}
                    title={category.title}
                    description={category.description}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500 text-lg">
                  No properties found matching your search. Try different keywords.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const PropertyCard = ({ icon, title, description, image }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    {image && (
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      </div>
      <p className="text-blue-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default LocationSection;