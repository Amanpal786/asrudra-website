import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import { Rocket } from "lucide-react";
import {
  Menu,
  X,
  Home,
  GalleryHorizontal,
  // LogIn,
  Heart,
  BarChart3,
  Info,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
      // { name: "New Launch", path: "/new-launch", icon: Rocket },
    { name: "About", path: "/about", icon: Info },
    { name: "Gallery", path: "/gallery", icon: GalleryHorizontal },
    // { name: "Login", path: "/login", icon: LogIn },
    // { name: "Wishlist", path: "/wishlist", icon: Heart },
    { name: "Comparison", path: "/comparison", icon: BarChart3 },
  ];
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 glass-effect bg-white rounded-none">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center relative h-6">
            <div className="relative w-11 h-11 overflow-visible">
              <motion.img
                src="/asrudra-logo.png"
                alt="AS Rudra Solutions Logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute left-0 -translate-x-1 -translate-y-1 w-[80px] h-[80px] max-w-none object-contain rounded-lg"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm transition-all duration-300 ${
                  isActive(item.path)
                    ? "gradient-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            {/* Projects Dropdown */}
            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProjectOpen(!isProjectOpen)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm transition-all duration-300
                  ${
                    location.pathname === "/residential" ||
                    location.pathname === "/office-spaces"
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-black hover:text-white"
                  }
                `}
              >
                Projects
              </button>

              {isProjectOpen && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 z-50">
                  
                  <Link
                    to="/residential"
                    className="block px-4 py-2 font-small text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
                  >
                    Residential
                  </Link>

                  <Link
                    to="/office-spaces"
                    className="block px-4 py-2 font-small text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
                  >
                    Commercial
                  </Link>

                </div>
              )}
            </div>

          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 border-t border-border pt-3"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                    isActive(item.path)
                      ? "gradient-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
