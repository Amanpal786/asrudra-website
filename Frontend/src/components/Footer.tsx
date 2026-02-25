import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerData, setFooterData] = useState<any>(null);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await fetch("http://localhost:4001/footer");
        const data = await res.json();
        setFooterData(data);
      } catch (err) {
        console.error("Footer API fetch error:", err);
      }
    };

    fetchFooterData();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subscriberEmail || !subscriberEmail.includes("@")) {
      setSubscribeStatus("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setSubscribeStatus("");

    try {
      const res = await fetch("http://localhost:4001/subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscriberEmail }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setSubscribeStatus("Thank you for subscribing!");
        setSubscriberEmail("");
        setTimeout(() => setSubscribeStatus(""), 3000);
      } else {
        setSubscribeStatus(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeStatus("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!footerData) return null;

  const { headerLinks, services, locations, contactInfo, socials } = footerData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <footer className="bg-[#001F54] text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative"
              >
                <img
                  src="/asrudra-logo.png"
                  alt="AS Rudra Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.div>
              <span className="text-lg md:text-xl font-bold group-hover:text-blue-300 transition-colors">
                AS Rudra Solutions Pvt. Ltd.
              </span>
            </Link>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              Your trusted partner in real estate. We connect dreams with
              reality through premium properties and exceptional service.
            </p>
            <div className="flex space-x-4 mt-4">
              {socials?.facebook && (
                <motion.a 
                  whileHover={{ y: -3 }}
                  href={socials.facebook} 
                  target="_blank" 
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>
              )}
              {socials?.twitter && (
                <motion.a 
                  whileHover={{ y: -3 }}
                  href={socials.twitter} 
                  target="_blank" 
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </motion.a>
              )}
              {socials?.instagram && (
                <motion.a 
                  whileHover={{ y: -3 }}
                  href={socials.instagram} 
                  target="_blank" 
                  className="hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
              )}
              {socials?.linkedin && (
                <motion.a 
                  whileHover={{ y: -3 }}
                  href={socials.linkedin} 
                  target="_blank" 
                  className="hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:ml-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {headerLinks?.map((link: any) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="flex items-center text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="md:ml-4">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services?.map((service: string, index: number) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center text-gray-300 text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={itemVariants} className="sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-3">
              {locations?.map((location: string, index: number) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center text-gray-300 text-sm md:text-base"
                >
                  <MapPin size={14} className="mr-2 text-blue-300" />
                  {location}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="sm:col-span-2 md:col-span-3 lg:col-span-1 md:ml-4 lg:ml-0">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
              >
                <MapPin className="mt-0.5 text-blue-300 flex-shrink-0" />
                <div>
                  {contactInfo?.address?.map((line: string, idx: number) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 text-sm md:text-base"
              >
                <Phone className="text-blue-300" />
                <div>
                  {contactInfo?.phones?.map((phone: string, idx: number) => (
                    <a 
                      key={idx} 
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="block hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 text-sm md:text-base"
              >
                <Mail className="text-blue-300" />
                <div>
                  {contactInfo?.emails?.map((email: string, idx: number) => (
                    <a 
                      key={idx} 
                      href={`mailto:${email}`}
                      className="block hover:text-white transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col items-center"
        >
          <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
          <p className="text-gray-300 text-sm mb-4 text-center max-w-lg">
            Subscribe to our newsletter for the latest property updates and offers
          </p>
          
          <form 
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
          >
            <input
              type="email"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Subscribe"
              )}
            </motion.button>
          </form>
          
          {subscribeStatus && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm mt-2 ${
                subscribeStatus.includes("Thank you") 
                  ? "text-green-400" 
                  : "text-yellow-400"
              }`}
            >
              {subscribeStatus}
            </motion.p>
          )}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-blue-800 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center"
        >
          <p>© {currentYear} A.S.Rudra Solutions. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 md:mt-0">
            <Link 
              to="/privacy" 
              className="hover:text-white transition-colors text-xs md:text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="hover:text-white transition-colors text-xs md:text-sm"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookies" 
              className="hover:text-white transition-colors text-xs md:text-sm"
            >
              Cookie Policy
            </Link>
            <Link 
              to="/sitemap" 
              className="hover:text-white transition-colors text-xs md:text-sm"
            >
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;