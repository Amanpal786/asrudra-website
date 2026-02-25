import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import {
  Star,
  MapPin,
  BedDouble,
  Car,
  Maximize,
  ArrowRight,
  Mail,
  User,
  Phone,
  Briefcase,
  Crown,
  Shield,
  TrendingUp,
  Eye,
  X,
  Home,
  Building2,
  Castle,
  Heart,
  Share2,
  MessageCircle
} from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: string;
  image: string;
  badge: string;
  rating: number;
  description: string;
  features: string[];
  type: 'residential' | 'commercial' | 'villa';
  images?: string[];
  developer?: string;
  possession?: string;
  amenities?: string[];
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  propertyInterest?: string;
}

const ExclusiveProperties = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    propertyInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Local exclusive properties data - 1 Residential, 1 Commercial, 1 Villa
  const exclusiveProperties: Property[] = [
    {
      id: '2',
      title: 'SOBHA ',
      location: 'Noida Extention',
      price: '2 Cr ',
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      area: '2789 sqft',
      image: "/Team Photo/sdhd4.jpg",
      badge: 'Premium',
      rating: 4.8,
      type: 'residential',
      description: 'Welcome to Sobha Noida Extension, one of the most promising areas in Delhi NCR, where luxury and innovation coexist. This prestigious project, which aims to redefine contemporary urban living, offers luxurious 2 and 3 BHK apartments that are expertly, elegantly, and forward-thinking designed. Your doorway to an exceptional lifestyle is Sobha Noida Extension, which is sprawled across verdant acres and offers first-rate amenities This property offers comfort and long-term value, making it a great choice for first-time homebuyers, expanding families, and astute investors. Your ideal house is waiting for you in Noida Extension, Noida Extension, thanks to Sobha tradition of integrity, openness, and superior architecture',
      features: ['Sea View', 'Smart Home', 'Modular Kitchen', 'Wooden Flooring', 'Power Backup'],
      images: [
        'photo-1613490493576-7fde63acd811',
        'photo-1545324418-cc1a3fa10c00',
        'photo-1560448204-e02f11c3d0e2'
      ],
      developer: 'sobha Group',
      possession: 'Ready to Move',
      amenities: ['Swimming Pool', 'Gym', 'Clubhouse', '24/7 Security', 'Children\'s Play Area']
    },

    

    {
      id: '1',
      title: 'FORBES FAB LUXE RESIDENCES',
      location: 'Noida Extention',
      price: '2.96 Cr - 3.64 Cr',
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      area: '3307 sqft',
      image: "/Team Photo/fhd1.jpg",
      badge: 'Commercial',
      rating: 4.9,
      type: 'commercial',
      description: 'THE FAB LUXE PROMISE: Secure your family Forbes Fab Luxe Residences Greater Noida West is an exclusive residential address offering ultra-luxury 3 & 4 BHK apartments in Sector 4, Greater Noida West Designed for those who seek elegance, space, and a refined lifestyle, this premium development sets new standards of contemporary living in one of the most prime locations of Noida Extension',
      features: ['Fiber Optic Internet', 'Conference Rooms', 'Cafeteria', 'Modular Workstations', '24/7 Power Backup'],
      images: [
        'photo-1497366754035-f200968a6e72',
        'photo-1542744173-8e7e53415bb0',
        'photo-1560448204-603b3fc33ddc'
      ],
      developer: 'Nx-One Developers',
      possession: 'Ready to Move',
      amenities: ['Business Lounge', 'Video Conferencing', 'Server Room', 'Parking', 'Security']
    },
    {
      id: '101',
      title: 'CRC MAESTA',
      location: 'Sector 1, Greater Noida West (Noida Extension)',
      price: '3 Cr',
      bedrooms: 4,
      bathrooms: 3,
      parking: 6,
      area: '2648 sqft',
      image: "/Team Photo/crchd2.jpg",
      badge: 'Luxury',
      rating: 4.9,
      type: 'villa',
      description: 'Welcome to CRC Maesta, where luxury meets lifestyle in the heart of Sector 1, Noida Extension. Designed for those who aspire for more than just a home, CRC Maesta offers premium 3 and 4 BHK apartments that combine architectural excellence, smart planning, and modern comforts to create a truly elevated living experience Developed by CRC Group, a trusted name known for delivering quality and timely real estate projects, CRC Maesta is a thoughtfully crafted residential development that reflects sophistication in every square foot. From contemporary design and expansive interiors to vibrant community spaces, every element here is curated to offer a lifestyle that’s both elegant and enriching',
      features: ['Private Beach Access', 'Infinity Pool', 'Home Theater', 'Wine Cellar', 'Smart Home Automation'],
      images: [
        'photo-1512917774080-9991f1c4c750',
        'photo-1605146769289-440113cc3d00',
        'photo-1600607687644-c7171b42498b'
      ],  
      developer: 'Premium Villas Ltd',
      possession: 'Dec 2024',
      amenities: ['Infinity Pool', 'Private Garden', 'Home Theater', 'Wine Cellar', 'Staff Quarters']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const enquiryData = {
        ...formData,
        enquiryType: 'exclusive_properties',
        timestamp: new Date().toISOString()
      };

      const response = await axios.post('http://https://asrudra-backend-1.onrender.com/enquiry', enquiryData);
      
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
        propertyInterest: ''
      });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      try {
        const enquiries = JSON.parse(localStorage.getItem('exclusiveEnquiries') || '[]');
        const newEnquiry = {
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString(),
          status: 'pending'
        };
        enquiries.push(newEnquiry);
        localStorage.setItem('exclusiveEnquiries', JSON.stringify(enquiries));
        setIsSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          message: '',
          propertyInterest: ''
        });
        setTimeout(() => setIsSuccess(false), 3000);
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('There was an error submitting your enquiry. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (property: Property) => {
    setSelectedProperty(property);
    setActiveImage(0);
    setIsFavorite(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProperty(null);
    document.body.style.overflow = 'unset';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const getPropertyTypeColor = (type: string) => {
    switch (type) {
      case 'residential': return 'from-blue-500 to-blue-700';
      case 'commercial': return 'from-purple-500 to-purple-700';
      case 'villa': return 'from-amber-500 to-amber-700';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case 'residential': return <Home className="w-4 h-4" />;
      case 'commercial': return <Building2 className="w-4 h-4" />;
      case 'villa': return <Castle className="w-4 h-4" />;
      default: return <Home className="w-4 h-4" />;
    }
  };

  const getPropertyTypeText = (type: string) => {
    switch (type) {
      case 'residential': return 'Premium Residential';
      case 'commercial': return 'Luxury Commercial';
      case 'villa': return 'Ultra Luxury Villa';
      default: return 'Property';
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-sky-500 to-blue-600 text-white p-6 rounded-full shadow-2xl">
                <Crown className="w-10 h-10" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-sky-800 via-blue-800 to-sky-900 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Exclusive Properties
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl text-sky-700 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Discover <span className="font-semibold text-sky-600">Luxury Living</span> with Our Curated Collection of 
            <span className="font-semibold text-blue-600"> Premium Properties</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <div className="flex items-center text-sm text-sky-700 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-sky-200/60 shadow-lg">
              <Shield className="w-4 h-4 text-green-500 mr-2" />
              <span className="font-medium">100% Verified Properties</span>
            </div>
            <div className="flex items-center text-sm text-sky-700 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-sky-200/60 shadow-lg">
              <TrendingUp className="w-4 h-4 text-sky-500 mr-2" />
              <span className="font-medium">Premium Locations</span>
            </div>
            <div className="flex items-center text-sm text-sky-700 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-sky-200/60 shadow-lg">
              <Star className="w-4 h-4 text-amber-500 mr-2" />
              <span className="font-medium">Luxury Amenities</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Properties Grid - 3 Properties Only */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {exclusiveProperties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-sky-200/60 relative"
                >
                  {/* Property Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Property Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${getPropertyTypeColor(property.type)} text-white px-3 py-2 rounded-2xl text-xs font-bold shadow-2xl`}>
                        {getPropertyTypeIcon(property.type)}
                        {getPropertyTypeText(property.type)}
                      </span>
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm text-sky-800 px-3 py-1 rounded-2xl text-sm shadow-2xl">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      {property.rating}
                    </div>
                    
                    {/* Price */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-sky-800 px-4 py-2 rounded-2xl text-xl font-black shadow-2xl">
                      ₹{property.price}
                    </div>

                    {/* Quick View Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 right-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(property)}
                        className="bg-white text-sky-800 px-4 py-2 rounded-2xl font-semibold shadow-2xl flex items-center space-x-2 text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Quick View</span>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-sky-800 mb-2 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-sky-600 mb-3 flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-sky-500 flex-shrink-0" />
                      <span className="line-clamp-1">{property.location}</span>
                    </p>
                    
                    <p className="text-sky-700 mb-4 text-sm leading-relaxed line-clamp-2">
                      {property.description}
                    </p>

                    {/* Property Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-sky-600 mb-4">
                      <span className="flex flex-col items-center justify-center bg-sky-50 rounded-xl py-2">
                        <BedDouble className="w-3 h-3 mb-1 text-sky-500" />
                        {property.bedrooms} {property.type === 'commercial' ? 'Rooms' : 'Beds'}
                      </span>
                      <span className="flex flex-col items-center justify-center bg-sky-50 rounded-xl py-2">
                        <Car className="w-3 h-3 mb-1 text-sky-500" />
                        {property.parking} Parking
                      </span>
                      <span className="flex flex-col items-center justify-center bg-sky-50 rounded-xl py-2">
                        <Maximize className="w-3 h-3 mb-1 text-sky-500" />
                        {property.area} sqft
                      </span>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(property)}
                      className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Full Details
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enquiry Form Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-white to-sky-50/80 rounded-3xl p-8 shadow-2xl border border-sky-200/60 backdrop-blur-sm"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 p-3 rounded-2xl mr-4 shadow-lg"
                  >
                    <Briefcase className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-sky-800">Exclusive Access</h3>
                    <p className="text-sky-600 text-sm font-semibold">Priority Viewing & Special Offers</p>
                  </div>
                </div>

                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h4>
                    <p className="text-green-700 text-sm">We'll contact you shortly with exclusive property details.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block text-sm font-semibold text-sky-700 mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          type="text"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-sky-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sky-800 placeholder:text-sky-400 transition-all duration-200 shadow-sm"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="block text-sm font-semibold text-sky-700 mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          type="email"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-sky-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sky-800 placeholder:text-sky-400 transition-all duration-200 shadow-sm"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      <label className="block text-sm font-semibold text-sky-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          type="tel"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-sky-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sky-800 placeholder:text-sky-400 transition-all duration-200 shadow-sm"
                        />
                      </div>
                    </motion.div>

                                    

                    {/* Message Box Added */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                  >
                      <label className="block text-sm font-semibold text-sky-700 mb-2">Your Message</label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-sky-400">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your requirements, budget, preferred location, or any specific needs..."
                          rows={4}
                          className="w-full pl-12 pr-4 py-4 bg-white border border-sky-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sky-800 placeholder:text-sky-400 transition-all duration-200 shadow-sm resize-none"
                        />
                      </div>
                      <p className="text-xs text-sky-500 mt-2">
                        Let us know your specific requirements for better assistance
                      </p>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-4 rounded-2xl font-black shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        'Get Exclusive Access'
                      )}
                    </motion.button>
                  </form>
                )}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-xs text-sky-500 mt-4 text-center"
                >
                  🔒 Your information is secure and will only be used to contact you about exclusive properties.
                </motion.p>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sky-200/60 shadow-lg"
              >
                <h4 className="font-semibold text-sky-800 mb-3 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Why Choose Exclusive Properties?
                </h4>
                <ul className="text-sm text-sky-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Verified & premium listings only
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Priority viewing access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Negotiated special prices
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                    Personalized property matching
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Property Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <img
                    src={`https://images.unsplash.com/${selectedProperty.images?.[activeImage] || selectedProperty.image}?w=800&h=400&fit=crop&q=80`}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Navigation */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {selectedProperty.images?.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                          activeImage === index ? 'border-white scale-110' : 'border-white/50 hover:border-white'
                        }`}
                      >
                        <img
                          src={`https://images.unsplash.com/${img}?w=100&h=100&fit=crop&q=80`}
                          alt={`${selectedProperty.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-sky-800 p-2 rounded-full hover:bg-white transition-colors shadow-2xl"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Favorite Button */}
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`absolute top-4 right-16 p-2 rounded-full backdrop-blur-sm transition-all ${
                      isFavorite 
                        ? "bg-red-500 text-white" 
                        : "bg-white/90 text-sky-600 hover:bg-red-500 hover:text-white"
                    } shadow-2xl`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div>
                    <h2 className="text-3xl font-black text-sky-800 mb-2">
                      {selectedProperty.title}
                    </h2>
                    <div className="flex items-center text-sky-600 mb-2">
                      <MapPin className="w-5 h-5 mr-2 text-sky-500" />
                      <span className="text-lg">{selectedProperty.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${getPropertyTypeColor(selectedProperty.type)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                        {getPropertyTypeIcon(selectedProperty.type)}
                        {getPropertyTypeText(selectedProperty.type)}
                      </span>
                      <div className="flex items-center bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        {selectedProperty.rating}/5
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-black text-sky-800 mt-4 lg:mt-0">
                    ₹{selectedProperty.price}
                  </div>
                </div>

                <p className="text-sky-700 text-lg leading-relaxed mb-6">
                  {selectedProperty.description}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-sky-50 rounded-2xl">
                    <BedDouble className="w-6 h-6 text-sky-500 mx-auto mb-2" />
                    <div className="text-sm text-sky-600">{selectedProperty.type === 'commercial' ? 'Rooms' : 'Bedrooms'}</div>
                    <div className="font-bold text-sky-800">{selectedProperty.bedrooms}</div>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-2xl">
                    <Car className="w-6 h-6 text-sky-500 mx-auto mb-2" />
                    <div className="text-sm text-sky-600">Parking</div>
                    <div className="font-bold text-sky-800">{selectedProperty.parking}</div>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-2xl">
                    <Maximize className="w-6 h-6 text-sky-500 mx-auto mb-2" />
                    <div className="text-sm text-sky-600">Area</div>
                    <div className="font-bold text-sky-800">{selectedProperty.area} sqft</div>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-2xl">
                    <Building2 className="w-6 h-6 text-sky-500 mx-auto mb-2" />
                    <div className="text-sm text-sky-600">Bathrooms</div>
                    <div className="font-bold text-sky-800">{selectedProperty.bathrooms}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-sky-800 mb-4">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-sky-50 text-sky-700 px-3 py-2 rounded-xl text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link 
                    to={`/property/${selectedProperty.id}`}
                    className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-center hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Full Details
                  </Link>
                  <button className="px-6 bg-sky-100 text-sky-800 py-4 rounded-2xl font-bold hover:bg-sky-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExclusiveProperties;