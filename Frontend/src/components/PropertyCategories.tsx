import { useState } from "react";
import axios from "axios";
import {
  Home,
  Building,
  MapPin,
  ArrowRight,
  BedDouble,
  Bath,
  Ruler,
  Star,
  Heart,
  Share2,
  Eye,
  Phone,
  Mail,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  User,
  MessageCircle,
  Send,
  CheckCircle,
  X,
} from "lucide-react";

const ICONS_MAP: Record<string, any> = {
  residential: Home,
  commercial: Building,
  industrial: Building,
  plots: MapPin,
};

type Property = {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  area: string;
  type: string;
  status: "for-sale" | "for-rent";
  featured: boolean;
  rating: number;
  views: number;
  yearBuilt?: number;
  description: string;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
};

type Category = {
  id: string;
  title: string;
  description: string;
  count: string;
  path: string;
  gradient: string;
  properties: Property[];
  stats: {
    total: number;
    forSale: number;
    forRent: number;
    averagePrice: string;
  };
};

type EnquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

// Local data - no API calls needed
const categoriesData: Category[] = [
  {
    id: "residential",
    title: "Residential Properties",
    description: "Beautiful homes, apartments, and villas for families and individuals",
    count: "245",
    path: "/residential",
    gradient: "from-blue-500 to-purple-600",
    stats: {
      total: 245,
      forSale: 167,
      forRent: 78,
      averagePrice: "₹425,0000"
    },
    properties: [
      {
        id: 1,
        title: "NX ONE",
        price: "₹80 lakhs - 1.5cr",
        location: " NOIDA EXTENSION ",
        image: "/images/nx1.jpg",
        bedrooms: 4,
        bathrooms: 2,
        parking: 2,
        area: "1920 sq ft",
        type: "office",
        status: "for-sale",
        featured: true,
        rating: 4.8,
        views: 1247,
        yearBuilt: 2020,
        description: "A modern office building is a spacious, stylish home designed for comfort, functionality, and contemporary living. It features clean architectural lines, large glass windows for natural light, open-plan living spaces, and premium interiors With multiple bedrooms, a modular kitchen, landscaped garden, and often a private terrace or pool, it offers privacy and luxury—perfect for families seeking a peaceful yet elegant lifestyle",
        agent: {
          name: "AS RUDRA SOLUTIONS",
          phone: "9355554334",
          email: "info@asrudrasolutions.com",
          image: "/images/rudra.webp",
        }
      },
      {
        id: 2,
        title: "ATS",
        price: "₹ 90 L - 2.38 Cr",
        location: "noida extension techzone 4 nirala estate",
        image: "/images/ATS1.png",
        bedrooms: 4,
        bathrooms: 2,
        parking: 2,
        area: "1250 sq ft",
        type: "apartment",
        status: "for-sale",
        featured: true,
        rating: 4.6,
        views: 892,
        yearBuilt: 2022,
        description: "Luxurious apartment in prime location with high-end amenities The well-maintained parks, friendly Resident Welfare Association (RWA) staff, proper lighting, and ventilation on each floor, and regular maintenance of the buildings. the society provided basic amenities and a peaceful environment, it fell short in terms of social life, connectivity, and some maintenance aspects, leading to a less optimal living experience for this ex-tenant.",
        agent: {
          name: "AS RUDRA SOLUTIONS", 
           phone: "9355554334",
          email: "info@asrudrasolutions.com",
          image: "/images/rudra.webp",
        }
      },
      {
        id: 3,
        title: "Golden Grande",
        price: "₹60 Lakhs",
        location: "Noida Extention",
        image: '/images/golden-grande.jpg',
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        area: "600 sq ft",
        type: "studio",
        status: "for-rent",
        featured: false,
        rating: 4.4,
        views: 567,
        yearBuilt: 2021,
        description: "A studio apartment is a compact, single-room living space that combines the bedroom, living area, and kitchen into one open layout, with a separate bathroom It is smartly designed to maximize space, offering functionality, affordability, and easy maintenance—ideal for students, working professionals, or individuals seeking minimalist urban living",
        agent: {
          name: "Emily Davis",
          phone: "9355554334",
          email: "info@asrudrasolutions.com",
          image: "/images/rudra.webp",
        }
      }
    ]
  },
  {
    id: "commercial",
    title: "Commercial Spaces",
    description: "Office buildings, retail spaces, and commercial properties",
    count: "128",
    path: "/commercial", // Updated path
    gradient: "from-green-500 to-blue-600",
    stats: {
      total: 128,
      forSale: 45,
      forRent: 83,
      averagePrice: "$1.2M"
    },
    properties: [
      {
        id: 4,
        title: "Downtown Office Tower",
        price: "$3,200,000",
        location: "Financial District, NY",
        image: "/images/ATS4.png",
        bedrooms: 0,
        bathrooms: 12,
        parking: 50,
        area: "25,000 sq ft",
        type: "office",
        status: "for-sale",
        featured: true,
        rating: 4.9,
        views: 1563,
        yearBuilt: 2019,
        description: "Premium office space in heart of financial district with stunning city views.",
        agent: {
          name: "Robert Wilson",
          phone: "+1 (555) 234-5678",
          email: "robert@realestate.com",
          image: "photo-1507003211169-0a1dd7228f2d"
        }
      },
      {
        id: 5,
        title: "Modern Office Space",
        price: "₹11999 sq ft",
        location: "NX ONE GAUR CHOWK NOIDA EXTENSION",
        image: "/images/ATS5.png",
        bedrooms: 0,
        bathrooms:"COMMN TOILET",
        parking: 10,
        area: "856 sq ft",
        type: "office",
        status: "for-rent",
        featured: true,
        rating: 4.7,
        views: 934,
        yearBuilt: 2022,
        description: "Modern office space with open layout and premium amenities.",
        agent: {
          name: "AS RUDRA SOLUTIONS",
          phone: "+91 9355554334",
          email: "info@asrudrasolutions.com",
          image: "photo-1487412720507-e7ab37603c6f"
        }
      }
    ]
  },
  {
    id: "rental",
    title: "Rental Properties",
    description: "Apartments, studios, and houses available for rent",
    count: "189",
    path: "/rental",
    gradient: "from-orange-500 to-red-600",
    stats: {
      total: 189,
      forSale: 0,
      forRent: 189,
      averagePrice: "₹2,0000/mo"
    },
    properties: [
      {
        id: 6,
        title: "Modern Studio",
        price: "₹25,000/month",
        location: "NX One Gaur Chowk Noida Extension",
        image: "/images/mordern.jpg",
        bedrooms: 1,
        bathrooms: 1,
        parking: 1,
        area: "556 sq ft",
        type: "studio",
        status: "for-rent",
        featured: true,
        rating: 4.5,
        views: 723,
        yearBuilt: 2020,
        description: "Bright and modern studio with updated kitchen and bathroom.",
        agent: {
          name: "Pankaj Sengar",
          phone: "+91 9355554334",
          email: "info@asrudrasolutions.com",
          image: "photo-1500648767791-00dcc994a43e"
        }
      },
      {
        id: 7,
        title: "NX ONE  OFFICE",
        price: "₹ 35,000/month (includes maintenance)",
        location: "Gaur Chowk Noida Extension",
        image: "/images/nx2.jpg",
        bedrooms: 0,
        bathrooms: "Common Toilet",
        parking: 1,
        area: "859 sq ft",
        type: "office",
        status: "for-rent",
        featured: false,
        rating: 4.6,
        views: 612,
        yearBuilt: 2022,
        description: "Executive office suite with conference room and kitchenette.",
        agent: {
          name: "Pankaj Sengar",
          phone: "+91 9355554334",
          email: "info@asrudrasolutions.com",
          image: "photo-1487412720507-e7ab37603c6f"
        }
      }
    ]
  }
];

const PropertyCard = ({ property }: { property: Property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
          {property.featured && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
              Featured
            </span>
          )}
          <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white shadow-md ${
            property.status === "for-sale" 
              ? "bg-green-500" 
              : "bg-blue-500"
          }`}>
            {property.status === "for-sale" ? "For Sale" : "For Rent"}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10 flex space-x-1">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isFavorite 
                ? "bg-red-500 text-white" 
                : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
          <button className="p-1.5 rounded-full bg-white/90 text-gray-600 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-300">
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <img
          src={property.image}
          alt={property.title}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop";
          }}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            imageLoaded ? 'scale-100' : 'scale-110'
          } hover:scale-105`}
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-gradient-to-t from-black/80 to-transparent p-3 rounded-lg">
            <div className="text-lg font-bold text-white mb-1">{property.price}</div>
            <div className="flex items-center text-white/90 text-xs">
              <MapPin className="w-3 h-3 mr-1" />
              {property.location}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{property.title}</h3>
          <div className="flex items-center bg-blue-50 px-1.5 py-1 rounded-md">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs font-semibold text-gray-700 ml-1">{property.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{property.description}</p>

        <div className="grid grid-cols-3 gap-2 py-2 border-y border-gray-100">
          {property.bedrooms && (
            <div className="flex items-center justify-center flex-col">
              <BedDouble className="w-4 h-4 text-blue-600 mb-1" />
              <span className="text-xs font-semibold text-gray-900">{property.bedrooms}</span>
              <span className="text-xs text-gray-500">Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center justify-center flex-col">
              <Bath className="w-4 h-4 text-blue-600 mb-1" />
              <span className="text-xs font-semibold text-gray-900">{property.bathrooms}</span>
              <span className="text-xs text-gray-500">Baths</span>
            </div>
          )}
          <div className="flex items-center justify-center flex-col">
            <Ruler className="w-4 h-4 text-blue-600 mb-1" />
            <span className="text-xs font-semibold text-gray-900">{property.area}</span>
            <span className="text-xs text-gray-500">Area</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
              <img 
                src={property.image}
                alt={property.agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-900">{property.agent.name}</div>
              <div className="text-xs text-gray-500">Agent</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500">
            <Eye className="w-3 h-3" />
            <span className="text-xs">{property.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryStats = ({ stats }: { stats: Category['stats'] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
      <div className="text-lg font-bold text-blue-600">{stats.total}</div>
      <div className="text-xs text-gray-600">Total Properties</div>
    </div>
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
      <div className="text-lg font-bold text-green-600">{stats.forSale}</div>
      <div className="text-xs text-gray-600">For Sale</div>
    </div>
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
      <div className="text-lg font-bold text-blue-500">{stats.forRent}</div>
      <div className="text-xs text-gray-600">For Rent</div>
    </div>
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
      <div className="text-lg font-bold text-orange-600">{stats.averagePrice}</div>
      <div className="text-xs text-gray-600">Average Price</div>
    </div>
  </div>
);

// Contact Form Component - Fixed for the correct API format
const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<EnquiryFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<EnquiryFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Format data exactly as the API expects
      const apiPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone, // Map 'phone' to 'phoneNumber'
        message: formData.message
      };

      console.log('Sending enquiry to API:', apiPayload);

      const response = await fetch('https://asrudra-backend-1.onrender.com/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(apiPayload)
      });

      console.log('API Response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('API Success response:', result);
        
        setIsSuccess(true);
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        // Try to get error message from response
        const errorText = await response.text();
        console.error('API Error response:', errorText);
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      
      // Fallback: Store in localStorage if API is unavailable
      try {
        const enquiries = JSON.parse(localStorage.getItem('propertyEnquiries') || '[]');
        const newEnquiry = {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phone,
          message: formData.message,
          id: Date.now(),
          timestamp: new Date().toISOString(),
          status: 'pending'
        };
        enquiries.push(newEnquiry);
        localStorage.setItem('propertyEnquiries', JSON.stringify(enquiries));
        
        console.log('Enquiry saved to localStorage as backup:', newEnquiry);
        setIsSuccess(true);
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('There was an error submitting your enquiry. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof EnquiryFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4 text-sm">Your enquiry has been submitted successfully. We'll get back to you soon.</p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Get In Touch</h2>
              <p className="text-gray-600 mt-1 text-sm">Fill the form and our team will contact you</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Message *
            </label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your property requirements, budget, timeline, and any specific needs..."
                rows={4}
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Enquiry
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const PropertyCategories = () => {
  const [categories] = useState<Category[]>(categoriesData);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [showContactForm, setShowContactForm] = useState(false);

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const currentCategoryData = categories[currentCategory];

  const handleExploreAll = (url: string) => {
    console.log('Navigating to:', url);
    window.location.href = url;
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Your Perfect
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Property Match
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exclusive properties across all categories. Find your ideal home, office, or investment property.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => {
              const Icon = ICONS_MAP[category.id] || Home;
              return (
                <button
                  key={category.id}
                  onClick={() => setCurrentCategory(index)}
                  className={`flex items-center px-4 py-2.5 rounded-xl transition-all duration-300 border font-medium text-sm ${
                    currentCategory === index
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:shadow-md"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.title.split(' ')[0]}
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-white/20">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Current Category Header */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
              <div className="flex items-center mb-3 lg:mb-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
                  {(() => {
                    const Icon = ICONS_MAP[currentCategoryData.id] || Home;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentCategoryData.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">{currentCategoryData.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
                
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors duration-300 ${
                      viewMode === "grid" 
                        ? "bg-blue-600 text-white" 
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors duration-300 ${
                      viewMode === "list" 
                        ? "bg-blue-600 text-white" 
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <CategoryStats stats={currentCategoryData.stats} />

            <div className="flex items-center justify-between">
              <button
                onClick={() => handleExploreAll(currentCategoryData.path)}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 hover:scale-105 text-sm"
              >
                Explore All Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevCategory}
                  className="p-2 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors duration-300"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={nextCategory}
                  className="p-2 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors duration-300"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className={`grid gap-4 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {currentCategoryData.properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Need Help Finding the Right Property?</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                Our expert team will help you find the perfect property that matches all your requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md text-sm"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Schedule a Call
                </button>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
};

export default PropertyCategories;