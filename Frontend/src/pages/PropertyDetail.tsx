import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Home,
  Star,
  Bed,
  Bath,
  Car,
  Ruler,
  Building2,
  Calendar,
  Layers,
  Eye,
  Phone,
  Mail,
  User,
  ArrowRight,
  Heart,
  Share2,
  CheckCircle,
  Shield,
  Wifi,
  TreePine,
  Dumbbell,
  CupSoda,
  Briefcase,
  Users,
  Video,
  Coffee,
  Monitor,
  Play,
  Pause,
  Expand,
  ChevronLeft,
  ChevronRight,
  X,
  Leaf,
  Clock,
  Award,
  Target
} from "lucide-react";

// Enhanced property data with 6 images and 1 video
export const propertyData: Record<string, any> = {

  // Residential Properties (Even IDs)
  "2": {
    id: 2,
    title: "Modern 2 BHK Villa",
    price: "₹1.2 Crores",
    location: "Gurgaon Sector 70",
    images: [
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop"
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-a-residential-building-44737-large.mp4",
    videoThumbnail: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "950 sq ft",
    rating: 4.7,
    reviews: 89,
    description: "Stunning modern villa with contemporary architecture and premium amenities. Features spacious rooms and elegant interiors with panoramic views and luxury finishes throughout.",
    features: ["Private Garden", "Modular Kitchen", "Marble Flooring", "Smart Home", "Private Terrace", "Walk-in Closet"],
    amenities: {
      'Security': ["Gated Community", "Security Guards", "CCTV", "Biometric Access"],
      'Lifestyle': ["Swimming Pool", "Clubhouse", "Jogging Track", "Landscaped Gardens"],
      'Sports': ["Gym", "Tennis Court", "Basketball Court", "Yoga Deck"],
      'Community': ["Community Hall", "Party Lawn", "Children's Play Area", "Senior Citizen Zone"]
    },
    developer: "Sobha Limited",
    possession: "Dec 2024",
    totalFloors: 3,
    totalUnits: 1,
    carpetArea: "850 sq ft",
    facing: "North",
    badge: "Luxury",
    status: "For Sale",
    type: "Villa",
    propertyType: "residential",
    seoKeywords: ["2 bhk villa", "modern villa", "luxury residence", "gurgaon property", "premium housing", "villa for sale"],
    virtualTour: "https://example.com/virtual-tour-2",
    yearBuilt: 2023,
    propertyAge: "New Construction"
  },
  "4": {
    id: 4,
    title: "Affordable 1 BHK Apartment",
    price: "₹35 Lakhs",
    location: "Bangalore Whitefield",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448205-97abe3a22b63?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448205-97abe3a22b64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448205-97abe3a22b65?w=800&h=600&fit=crop"
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-44736-large.mp4",
    videoThumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "550 sq ft",
    rating: 4.2,
    reviews: 67,
    description: "Compact and well-designed 1 BHK apartment perfect for singles and young couples. Great location with all basic amenities and excellent connectivity to IT hubs.",
    features: ["Compact Design", "Modular Kitchen", "Balcony", "Power Backup", "Wooden Flooring", "Wardrobes"],
    amenities: {
      'Security': ["Security Guard", "CCTV", "Intercom", "Fire Safety"],
      'Lifestyle': ["Garden", "Children's Play Area", "Sitting Area", "Badminton Court"],
      'Convenience': ["Power Backup", "Water Supply", "Rainwater Harvesting", "Waste Management"]
    },
    developer: "Prestige Group",
    possession: "Ready to Move",
    totalFloors: 8,
    totalUnits: 64,
    carpetArea: "500 sq ft",
    facing: "West",
    badge: "Budget",
    status: "For Sale",
    type: "Apartment",
    propertyType: "residential",
    seoKeywords: ["1 bhk apartment", "affordable housing", "bangalore property", "budget home", "whitefield apartment"],
    virtualTour: "/public/Team Photo/NX-ONE ARK BROCHURE.pdf",
    yearBuilt: 2020,
    propertyAge: "3 Years"
  },

  "6": {
  id: 6,
  title: "Nirala Estate",
  price: "₹90.57 L - ₹2.31 Cr",
  location: "GH-04, Techzone 4, Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/nirala estate.pdf",
    description: "Official project brochure with floor plans, amenities, specifications and investment insights."
  },

  images: [
    "/Team Photo/nhd1.jpg",
    "/Team Photo/nhd2.jpg",
    "/Team Photo/n3.webp",
    "/Team Photo/n4.webp",
    "/Team Photo/n6.webp"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 3,
  bathrooms: 2,
  parking: 1,
  area: "1250 - 2450 sq ft",

  rating: 4.6,
  reviews: 148,

  description: `Nirala Estate is a premium residential township located in Techzone 4, Greater Noida West. Spread across approximately 25 acres of beautifully landscaped green spaces, the project offers a perfect blend of luxury, comfort, and modern architecture.

Designed for families and investors, Nirala Estate provides spacious 2, 3 & 4 BHK apartments with premium finishes and world-class amenities. The project ensures a secure gated environment, eco-friendly infrastructure, and excellent connectivity to major NCR hubs including Noida, Delhi and Ghaziabad.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "Nirala Group",
    description: `Nirala Group is one of the fastest-growing real estate developers in Delhi NCR, known for delivering high-quality residential projects with timely possession and strong customer satisfaction.

The group focuses on modern construction techniques, sustainable development, and creating value-driven homes in prime NCR locations. Nirala Group has built a strong reputation for transparency, quality, and long-term trust.`,
    keyStrengths: [
      "Strong presence in Greater Noida West",
      "Timely project delivery record",
      "Modern architectural design",
      "Customer-centric approach",
      "Quality construction standards",
      "Value appreciation potential"
    ],
    commitment: [
      "On-Time Possession",
      "Premium Construction Quality",
      "Customer Satisfaction",
      "Transparent Transactions",
      "Sustainable Development",
      "Modern Lifestyle Integration"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "25 Acre Integrated Township",
    "Ready to Move & New Phase Options",
    "2, 3 & 4 BHK Premium Apartments",
    "Prime Location in Techzone 4",
    "High Rental & Appreciation Potential",
    "Well Developed Residential Catchment",
    "Close to Gaur Chowk & Expressway",
    "Trusted Developer – Nirala Group"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Flexible Payment Plans Available",
    banks: ["HDFC", "SBI", "ICICI Bank", "Axis Bank"],
    possession: "Ready to Move (Some Towers Under Construction)",
    totalUnits: 200,
    towers: 5,
    priceRange: "₹90.57 L - ₹2.31 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Spacious Balconies",
    "Vastu Compliant Layouts",
    "Premium Flooring",
    "Modular Kitchen",
    "High-Speed Elevators",
    "Ample Natural Light & Ventilation",
    "Earthquake Resistant Structure",
    "Power Backup"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Gated Community",
      "Intercom Facility"
    ],
    Lifestyle: [
      "Club House",
      "Swimming Pool",
      "Landscaped Gardens",
      "Multipurpose Hall",
      "Party Lawn"
    ],
    Sports: [
      "Gymnasium",
      "Jogging Track",
      "Badminton Court",
      "Indoor Games Area"
    ],
    Community: [
      "Children Play Area",
      "Senior Citizen Zone",
      "Yoga & Meditation Area",
      "Community Seating Area"
    ]
  },

  developer: "Nirala Group",
  possession: "Ready to Move",
  totalFloors: 15,
  totalUnits: 200,
  carpetArea: "1100 - 2100 sq ft",
  facing: "East / West Options Available",
  badge: "Premium Township",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹3/sq ft",

  seoKeywords: [
    "Nirala Estate Greater Noida West",
    "Nirala Estate Techzone 4",
    "Luxury flats Noida Extension",
    "2 BHK 3 BHK flats Greater Noida West",
    "Nirala Group projects NCR"
  ],

  virtualTour: null,
  yearBuilt: 2024,
  propertyAge: "New Phase + Ready Towers",

  locationAdvantages: [
    "Prime Location in Techzone 4",
    "5 Minutes from Gaur Chowk",
    "Easy Access to Noida-Greater Noida Expressway",
    "Close to Reputed Schools & Hospitals",
    "Near Upcoming Metro Connectivity",
    "Well Developed Social Infrastructure",
    "High Growth Investment Corridor"
  ]
},





"8": {
  id: 8,
  title: "FORBES FAB LUXE RESIDENCES",
  price: "₹2.96 Cr - ₹3.64 Cr",
  location: "Sector 4, Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/forbes.pdf",
    description: "Official project brochure with floor plans, luxury amenities, wellness features and investment details."
  },

  images: [
    "/Team Photo/fhd1.jpg",
    "/Team Photo/fhd2.jpg",
    "/Team Photo/f3.webp",
    "/Team Photo/f4.webp",
    "/Team Photo/f5.webp"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 3,
  bathrooms: 3,
  parking: 2,
  area: "1850 - 2550 sq ft",

  rating: 4.8,
  reviews: 112,

  description: `FORBES FAB LUXE RESIDENCES is an ultra-luxury residential development in Sector 4, Greater Noida West. Designed for elite urban living, the project offers spacious 3 & 4 BHK residences with premium finishes, wellness-focused infrastructure and world-class lifestyle amenities.

The project emphasizes air purity, open green spaces, modern architecture and global luxury standards. Located in one of the fastest growing corridors of NCR, Forbes Residences ensures excellent connectivity, strong appreciation potential and unmatched comfort.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "Forbes Global Properties",
    description: `Forbes Global Properties is an internationally recognized real estate brand known for representing luxury residential developments across the globe. The brand stands for exclusivity, architectural excellence, and premium lifestyle living.

With a focus on high-end developments, Forbes ensures superior construction quality, modern design philosophy and long-term value creation for homeowners and investors.`,
    keyStrengths: [
      "Global luxury real estate branding",
      "Premium architectural design",
      "High-end lifestyle development",
      "Strong appreciation potential",
      "Prime location selection",
      "Luxury-focused residential planning"
    ],
    commitment: [
      "Luxury Living Standards",
      "Quality Construction",
      "Timely Delivery",
      "Premium Lifestyle Experience",
      "Customer Satisfaction",
      "Sustainable Development"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Ultra Luxury 3 & 4 BHK Apartments",
    "Prime Sector 4 Location – Greater Noida West",
    "Low Density Premium Living",
    "High Appreciation Potential",
    "Wellness-Focused Infrastructure",
    "Close to Upcoming Metro Connectivity",
    "Premium Clubhouse & Lifestyle Amenities",
    "Strong NCR Connectivity"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Construction Linked Payment Plan Available",
    banks: ["HDFC", "SBI", "ICICI Bank", "Axis Bank"],
    possession: "Under Construction (Expected 2027)",
    totalUnits: 250,
    towers: 3,
    priceRange: "₹2.96 Cr - ₹3.64 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Wellness Living Concept",
    "Premium Imported Flooring",
    "Smart Home Automation",
    "Spacious Balconies",
    "Modular Kitchen with Chimney & Hob",
    "VRV Air Conditioning",
    "High-Speed Elevators",
    "Premium Bathroom Fittings"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Gated Community",
      "Video Door Phone"
    ],
    Lifestyle: [
      "Luxury Clubhouse",
      "Swimming Pool",
      "Sky Lounge",
      "Multipurpose Hall",
      "Party Lawn"
    ],
    Sports: [
      "Gymnasium",
      "Jogging Track",
      "Tennis Court",
      "Indoor Games Room"
    ],
    Community: [
      "Children Play Area",
      "Senior Citizen Zone",
      "Landscaped Gardens",
      "Yoga & Meditation Area"
    ]
  },

  developer: "Forbes Global Properties",
  possession: "Under Construction",
  totalFloors: 20,
  totalUnits: 250,
  carpetArea: "1700 - 2300 sq ft",
  facing: "North-East",
  badge: "Ultra Luxury",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹4/sq ft",

  seoKeywords: [
    "Forbes Fab Luxe Residences",
    "Luxury flats Greater Noida West",
    "Ultra luxury apartments Noida Extension",
    "3 BHK luxury flat NCR",
    "4 BHK premium apartments Greater Noida"
  ],

  virtualTour: null,
  yearBuilt: 2025,
  propertyAge: "New Project",

  locationAdvantages: [
    "Close to Noida-Greater Noida Expressway",
    "Upcoming Metro Connectivity",
    "Near Reputed Schools & Hospitals",
    "5 Minutes from Gaur Chowk",
    "Well Developed Residential Catchment",
    "High Growth Investment Corridor"
  ]
},

// "10": {
//   id: 10,
//   title: "La Residentia Grande",
//   price: "₹61.6 L - 1.45 cr",
//   location: "Noida Expressway",
//   images: [
//     "/Team Photo/residentia1.jpg",
//     "/Team Photo/residentia2.jpg",
//     "/Team Photo/residentia3.jpg",
//     "/Team Photo/residentia4.jpg",
//     "/Team Photo/residentia5.jpg",
//     "/Team Photo/residentia6.jpg"
//   ],
//   video: null,
//   videoThumbnail: null,
//   bedrooms: 4,
//   bathrooms: 4,
//   parking: 2,
//   area: "3200 sq ft",
//   rating: 4.9,
//   reviews: 140,
//   description: "La Residentia Grande is a luxury residential project offering private terrace, home automation and servant room facilities.",
//   features: ["Private Terrace", "Home Automation", "Servant Room"],
//   amenities: {
//     Security: ["24x7 Security", "CCTV"],
//     Lifestyle: ["Private Terrace"],
//     Luxury: ["Home Automation"]
//   },
//   developer: "La Residentia Developers",
//   possession: "Ready to Move",
//   totalFloors: 18,
//   totalUnits: 180,
//   carpetArea: "3000 sq ft",
//   facing: "South",
//   badge: "Premium",
//   status: "For Sale",
//   type: "Residential Apartment",
//   propertyType: "residential",
//   seoKeywords: ["La Residentia Grande", "Noida Expressway Property"],
//   virtualTour: null,
//   yearBuilt: 2023,
//   propertyAge: "2 Years"
// },

"12": {
  id: 12,
  title: "Sikka Kaamya Greens",
  price: "₹78.0 Lac - ₹1.88 Cr",
  location: "Sector 10, Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/sikka kaamya greens.pdf",
    description: "Official project brochure with floor plans, amenities, specifications and pricing details."
  },

  images: [
    "/Team Photo/skhd1.jpg",
    "/Team Photo/skhd2.jpg",
    "/Team Photo/skhd3.jpg",
    "/Team Photo/sk4.webp",
    "/Team Photo/sk5.webp"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 3,
  bathrooms: 3,
  parking: 2,
  area: "950 - 2100 sq ft",

  rating: 4.8,
  reviews: 110,

  description: `Sikka Kaamya Greens is a premium residential development located in Sector 10, Greater Noida West. Designed to offer a luxurious yet affordable lifestyle, the project features well-planned 2, 3 & 4 BHK apartments with spacious layouts and modern specifications.

Built on a two-side open plot, the project ensures ample ventilation, natural light, and scenic green views. With contemporary architecture, landscaped surroundings, and lifestyle-driven amenities, Sikka Kaamya Greens is ideal for families looking for comfort, connectivity, and long-term investment growth.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "Sikka Group",
    description: `Sikka Group is a well-established real estate developer in Delhi NCR known for delivering quality residential and commercial projects. With decades of experience, the group focuses on creating value-driven developments that combine affordability with modern infrastructure.

Sikka Group emphasizes timely delivery, customer trust, and quality construction, making it a reliable name in Greater Noida West real estate.`,
    keyStrengths: [
      "Strong presence in NCR real estate",
      "Affordable luxury housing projects",
      "Timely delivery commitment",
      "Modern architectural designs",
      "Customer-focused development",
      "Strategic location selection"
    ],
    commitment: [
      "Quality Construction Standards",
      "On-Time Possession",
      "Customer Satisfaction",
      "Transparent Dealings",
      "Sustainable Development",
      "Modern Community Living"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Prime Location in Sector 10, Greater Noida West",
    "Two-Side Open Plot Design",
    "2, 3 & 4 BHK Premium Apartments",
    "Under Construction with High Appreciation Potential",
    "Close to Major Schools & Hospitals",
    "Well-Developed Residential Catchment",
    "Excellent NCR Connectivity",
    "Trusted Developer – Sikka Group"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Construction Linked & Flexible Payment Plans",
    banks: ["HDFC", "SBI", "ICICI Bank", "PNB"],
    possession: "Under Construction",
    totalUnits: 300,
    towers: 4,
    priceRange: "₹78.0 Lac - ₹1.88 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Sky Lounge",
    "Yoga Deck",
    "Spacious Balconies",
    "Premium Flooring",
    "Modular Kitchen",
    "High-Speed Elevators",
    "Two-Side Open Apartments",
    "Power Backup"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Gated Community",
      "Intercom Facility"
    ],
    Lifestyle: [
      "Sky Lounge",
      "Clubhouse",
      "Landscaped Gardens",
      "Multipurpose Hall",
      "Party Lawn"
    ],
    Sports: [
      "Gymnasium",
      "Jogging Track",
      "Yoga Deck",
      "Indoor Games Area"
    ],
    Community: [
      "Kids Play Area",
      "Senior Citizen Zone",
      "Community Seating Area"
    ]
  },

  developer: "Sikka Group",
  possession: "Under Construction",
  totalFloors: 22,
  totalUnits: 300,
  carpetArea: "900 - 1900 sq ft",
  facing: "East / West Options Available",
  badge: "Luxury Affordable",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹2.5/sq ft",

  seoKeywords: [
    "Sikka Kaamya Greens Greater Noida West",
    "Sikka Group projects",
    "Luxury flats Noida Extension",
    "Sector 10 Greater Noida West property",
    "2 BHK 3 BHK flats Greater Noida"
  ],

  virtualTour: null,
  yearBuilt: 2025,
  propertyAge: "New Project",

  locationAdvantages: [
    "Prime Location in Sector 10",
    "Close to Gaur City Mall",
    "Easy Access to Noida & Delhi",
    "Near Upcoming Metro Connectivity",
    "Well-Developed Social Infrastructure",
    "Close to Schools & Hospitals",
    "High Growth Investment Zone"
  ]
},


"14": {
  id: 14,
  title: "CRC MAESTA",
  price: "₹70 L - ₹2.38 Cr",
  location: "Sector 1, Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/crc maesta.pdf",
    description: "Welcome to CRC Maesta, where luxury meets lifestyle in the heart of Sector 1, Noida Extension. Designed for those who aspire for more than just a home, CRC Maesta offers premium 3 and 4 BHK apartments that combine architectural excellence, smart planning, and modern comforts to create a truly elevated living experience Developed by CRC Group, a trusted name known for delivering quality and timely real estate projects, CRC Maesta is a thoughtfully crafted residential development that reflects sophistication in every square foot. From contemporary design and expansive interiors to vibrant community spaces, every element here is curated to offer a lifestyle that’s both elegant and enriching"
  },

  images: [
    "/Team Photo/crchd1.jpg",
    "/Team Photo/crchd2.jpg",
    "/Team Photo/crchd3.jpg",
    "/Team Photo/crchd4.jpg",
    "/Team Photo/crchd5.jpg"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 2,
  bathrooms: 2,
  parking: 1,
  area: "900 - 1800 sq ft",

  rating: 4.4,
  reviews: 90,

  description: `CRC Maesta is a premium residential project located in Sector 1, Greater Noida West. Developed by CRC Group, the project offers thoughtfully designed 2, 3 & 4 BHK apartments with modern architecture, elegant interiors, and spacious layouts.

Strategically positioned in one of the fastest-growing residential hubs of NCR, CRC Maesta ensures excellent connectivity, green surroundings, and a lifestyle enriched with world-class amenities. The project blends affordability with luxury, making it ideal for families as well as long-term investors.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "CRC Group",
    description: `CRC Group is a reputed real estate developer in Delhi NCR known for delivering quality residential and commercial developments. The group focuses on innovation, construction excellence, and customer-centric design philosophy.

With a commitment to timely possession and premium construction standards, CRC Group has built strong trust among homebuyers and investors across Greater Noida West.`,
    keyStrengths: [
      "Strong NCR Presence",
      "Timely Project Delivery",
      "Modern Construction Technology",
      "Premium Lifestyle Developments",
      "Customer-Centric Approach",
      "Transparent Business Practices"
    ],
    commitment: [
      "High-Quality Construction",
      "On-Time Possession",
      "Customer Satisfaction",
      "Sustainable Development",
      "Value for Money Homes",
      "Modern Community Living"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Prime Location in Sector 1 Greater Noida West",
    "2, 3 & 4 BHK Luxury Apartments",
    "High Appreciation Potential",
    "Developed Residential Catchment Area",
    "Close to Schools & Hospitals",
    "Excellent Road Connectivity",
    "Premium Amenities & Green Landscape",
    "Trusted Developer – CRC Group"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Construction Linked & Flexible Payment Plans",
    banks: ["HDFC", "SBI", "ICICI Bank", "Axis Bank"],
    possession: "Ready to Move",
    totalUnits: 220,
    towers: 3,
    priceRange: "₹70 L - ₹2.38 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Affordable Luxury Living",
    "Large Green Landscapes",
    "Spacious Balconies",
    "Modular Kitchen",
    "Premium Flooring",
    "Power Backup",
    "High-Speed Elevators",
    "Modern Architecture"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Gated Community",
      "Intercom Facility"
    ],
    Lifestyle: [
      "Clubhouse",
      "Landscaped Gardens",
      "Swimming Pool",
      "Party Lawn",
      "Multipurpose Hall"
    ],
    Sports: [
      "Gymnasium",
      "Jogging Track",
      "Indoor Games Room",
      "Kids Play Area"
    ],
    Convenience: [
      "Power Backup",
      "Lift Facility",
      "Water Supply",
      "Visitor Parking"
    ]
  },

  developer: "CRC Group",
  possession: "Ready to Move",
  totalFloors: 14,
  totalUnits: 220,
  carpetArea: "850 - 1500 sq ft",
  facing: "East / West Options Available",
  badge: "Affordable Luxury",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹2.5/sq ft",

  seoKeywords: [
    "CRC Maesta Greater Noida West",
    "CRC Group projects",
    "Luxury flats Noida Extension",
    "Sector 1 Greater Noida property",
    "2 BHK 3 BHK flats Greater Noida West"
  ],

  virtualTour: null,
  yearBuilt: 2022,
  propertyAge: "3 Years",

  locationAdvantages: [
    "Prime Location in Sector 1",
    "Close to Noida & Delhi Connectivity",
    "Near Upcoming Metro Corridor",
    "Close to Schools & Hospitals",
    "Developed Social Infrastructure",
    "High Growth Investment Zone",
    "Easy Access to Expressways"
  ]
},

"16": {
  id: 16,
  title: "Sobha Dream Acres",
  price: "₹67.68 L - ₹1.03 Cr",
  location: "Sector 10, Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/sobha dream acres.pdf",
    description: "Official Sobha Dream Acres brochure with floor plans, amenities, specifications and pricing details."
  },

  images: [
    "/Team Photo/sdhd4.jpg",
    "/Team Photo/sdhd2.jpg",
    "/Team Photo/sdhd3.jpg",
    "/Team Photo/sd1.webp",
    "/Team Photo/sdhd5.jpg"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 3,
  bathrooms: 3,
  parking: 1,
  area: "1000 - 1500 sq ft",

  rating: 4.7,
  reviews: 150,

  description: `Sobha Dream Acres is a premium residential development in Greater Noida West designed by Sobha Limited, one of India's most reputed real estate developers. The project offers elegantly designed 2 & 3 BHK apartments crafted with superior construction quality and modern layouts.

Spread across lush green landscapes, Sobha Dream Acres combines smart planning, natural ventilation, world-class amenities and a secure gated community environment. With excellent connectivity and high growth potential, the project stands as a strong choice for both end-users and investors.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "Sobha Limited",
    description: `Sobha Limited is one of India’s most trusted and premium real estate developers known for delivering high-quality residential and commercial projects across major cities. The brand is synonymous with superior construction standards, attention to detail, and timely delivery.

Sobha follows a backward integration model which ensures complete control over construction quality and materials, making their projects stand out in durability and finish.`,
    keyStrengths: [
      "Pan India Premium Developer",
      "Backward Integration Model",
      "Superior Construction Quality",
      "On-Time Delivery Record",
      "Luxury Design Standards",
      "High Customer Satisfaction"
    ],
    commitment: [
      "Premium Construction Standards",
      "Timely Possession",
      "Customer Transparency",
      "Sustainable Development",
      "World-Class Lifestyle Amenities",
      "Long-Term Investment Value"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Developed by Sobha Limited",
    "Prime Location in Greater Noida West",
    "High Appreciation Potential",
    "2 & 3 BHK Premium Apartments",
    "Gated Community Living",
    "Excellent NCR Connectivity",
    "Modern Lifestyle Amenities",
    "Trusted Brand Value"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Flexible Construction Linked Payment Plan",
    banks: ["HDFC", "SBI", "ICICI Bank", "Axis Bank", "PNB"],
    possession: "Ready to Move",
    totalUnits: 500,
    towers: 4,
    priceRange: "₹67.68 L - ₹1.03 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Vastu Compliant Homes",
    "Landscaped Gardens",
    "Modern Clubhouse",
    "Premium Flooring",
    "Spacious Balconies",
    "High-Speed Elevators",
    "Power Backup",
    "Earthquake Resistant Structure"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Gated Community",
      "Video Door Phone"
    ],
    Lifestyle: [
      "Clubhouse",
      "Swimming Pool",
      "Landscaped Gardens",
      "Party Lawn",
      "Multipurpose Hall"
    ],
    Sports: [
      "Gymnasium",
      "Jogging Track",
      "Badminton Court",
      "Kids Play Area"
    ],
    Convenience: [
      "Power Backup",
      "Lift Facility",
      "Visitor Parking",
      "Water Supply"
    ]
  },

  developer: "Sobha Limited",
  possession: "Ready to Move",
  totalFloors: 15,
  totalUnits: 500,
  carpetArea: "850 - 1400 sq ft",
  facing: "East / North Facing Options Available",
  badge: "Premium",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹3/sq ft",

  seoKeywords: [
    "Sobha Dream Acres Greater Noida West",
    "Sobha Limited projects",
    "Luxury flats Noida Extension",
    "2 BHK 3 BHK Sobha flats",
    "Premium apartments Greater Noida"
  ],

  virtualTour: null,
  yearBuilt: 2023,
  propertyAge: "1 Year",

  locationAdvantages: [
    "Prime Location in Greater Noida West",
    "Close to Noida & Delhi Connectivity",
    "Near Upcoming Metro Corridor",
    "Close to Schools & Hospitals",
    "Developed Social Infrastructure",
    "Wide Roads & Green Surroundings",
    "High Growth Investment Zone"
  ]
},


"18": {
  id: 18,
  title: "Sikka Premium Towers",
  price: "₹33.28 Lac - ₹1.00 Cr",
  location: "Sector 10, Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/sikka premium towers.pdf",
    description: "Official Sikka Premium Towers brochure including floor plans, specifications, amenities and pricing details."
  },

  images: [
    "/Team Photo/sphd1.jpg",
    "/Team Photo/sphd2.jpg",
    "/Team Photo/sphd3.jpg",
    "/Team Photo/sp4.webp",
    "/Team Photo/sphd5.jpg"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 4,
  bathrooms: 4,
  parking: 2,
  area: "2200 - 3800 sq ft",

  rating: 4.9,
  reviews: 180,

  description: `Sikka Premium Towers is an ultra-luxury residential development by Sikka Group located in Sector 10, Greater Noida West. Designed for elite urban living, the project offers spacious 3, 4 & 5 BHK premium residences with private lift access, expansive balconies and high-end specifications.

Strategically positioned near GN West Link Road, the project ensures seamless connectivity to Noida, Delhi and major NCR hubs. With modern architecture, premium clubhouse facilities and luxury interiors, Sikka Premium Towers offers an elevated lifestyle experience for discerning homebuyers and investors.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "Sikka Group",
    description: `Sikka Group is a well-established real estate developer in NCR known for delivering residential and commercial landmarks. With decades of experience, the group focuses on premium construction quality, strategic locations and value-driven developments.

Sikka Group projects are recognized for strong infrastructure planning, lifestyle amenities and long-term investment growth.`,
    keyStrengths: [
      "Established NCR Developer",
      "Premium High-Rise Expertise",
      "Luxury Residential Developments",
      "Strong Construction Quality",
      "Customer-Focused Approach",
      "Strategic Location Selection"
    ],
    commitment: [
      "Timely Project Delivery",
      "Premium Specifications",
      "Modern Architecture",
      "Secure Gated Communities",
      "Transparent Transactions",
      "Long-Term Value Creation"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Ultra Luxury High-Rise Towers",
    "Private Elevator Access",
    "Large Configuration Apartments",
    "Prime Sector 10 Location",
    "Excellent NCR Connectivity",
    "High Appreciation Potential",
    "Premium Clubhouse Facilities",
    "Strong Rental Demand Area"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Flexible Construction Linked Plan",
    banks: ["HDFC", "SBI", "ICICI Bank", "Axis Bank", "PNB"],
    possession: "Under Construction",
    totalUnits: 300,
    towers: 3,
    priceRange: "₹33.28 Lac - ₹1.00 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Private Elevator Access",
    "Home Theater Provision",
    "Servant Quarters",
    "Premium Marble Flooring",
    "Modular Kitchen",
    "Large Balconies",
    "High Ceiling Design",
    "Smart Home Provisions"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Video Door Phone",
      "Gated Community"
    ],
    Luxury: [
      "Private Elevator",
      "Home Theater",
      "Grand Entrance Lobby",
      "High-Speed Elevators"
    ],
    Lifestyle: [
      "Clubhouse",
      "Swimming Pool",
      "Landscaped Gardens",
      "Party Lawn",
      "Multipurpose Hall"
    ],
    Sports: [
      "Gymnasium",
      "Tennis Court",
      "Jogging Track",
      "Kids Play Area"
    ],
    Convenience: [
      "Power Backup",
      "Ample Parking",
      "Lift Facility",
      "Water Supply"
    ]
  },

  developer: "Sikka Group",
  possession: "Under Construction",
  totalFloors: 25,
  totalUnits: 300,
  carpetArea: "2000 - 3500 sq ft",
  facing: "North / East Facing Options Available",
  badge: "Ultra Luxury",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹3.5/sq ft",

  seoKeywords: [
    "Sikka Premium Towers Greater Noida",
    "Luxury flats Noida Extension",
    "Ultra luxury apartments NCR",
    "Sikka Group residential project",
    "High-rise apartments Greater Noida West"
  ],

  virtualTour: null,
  yearBuilt: 2026,
  propertyAge: "New Project",

  locationAdvantages: [
    "Prime Location in Sector 10 Greater Noida West",
    "0.2 KM from GN West Link Road",
    "Easy Connectivity to Noida & Delhi",
    "Close to Schools & Hospitals",
    "Developed Residential Catchment Area",
    "Upcoming Infrastructure Growth",
    "High Appreciation Investment Zone"
  ]
},

"20": {
  id: 20,
  title: "Godrej Air",
  price: "₹2.5 Cr - ₹3.8 Cr",
  location: "Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/godrej air.pdf",
    description: "Official Godrej Air brochure including floor plans, green features, amenities and pricing details."
  },

  images: [
    "/Team Photo/ghd6.jpg",
    "/Team Photo/ghd2.jpg",
    "/Team Photo/g3.webp",
    "/Team Photo/g4.webp",
    "/Team Photo/ghd5.jpg"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 4,
  bathrooms: 4,
  parking: 2,
  area: "2800 - 4000 sq ft",

  rating: 4.9,
  reviews: 210,

  description: `Godrej Air is a premium residential development by Godrej Properties in Greater Noida West, designed around the concept of healthy and sustainable living. The project focuses on clean air technology, green landscaping and eco-conscious architecture.

Spread across expansive acres, the development features luxury 2, 3 & 4 BHK residences with spacious layouts, panoramic views and abundant natural light. With modern lifestyle amenities, smart-home features and world-class infrastructure, Godrej Air offers a refined urban living experience in NCR.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "Godrej Properties",
    description: `Godrej Properties is one of India’s most trusted and reputed real estate developers, backed by the 125+ year legacy of the Godrej Group. Known for innovation, sustainability and excellence, the company has delivered landmark residential and commercial projects across India.

Godrej Properties combines cutting-edge design with environmental responsibility to create future-ready urban communities.`,
    keyStrengths: [
      "Part of 125+ Year Old Godrej Group",
      "Pan-India Real Estate Presence",
      "Sustainable Green Developments",
      "Premium Luxury Projects",
      "Strong Brand Reputation",
      "High Customer Trust"
    ],
    commitment: [
      "Green & Sustainable Construction",
      "Timely Delivery",
      "Premium Quality Standards",
      "Innovation in Design",
      "Customer Satisfaction",
      "Transparent Dealings"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Premium Luxury High-Rise Towers",
    "Air Purification & Green Living Concept",
    "Prime Greater Noida West Location",
    "Strong Brand Value of Godrej",
    "High Appreciation Potential",
    "Spacious Large Layout Apartments",
    "Modern Smart-Home Features",
    "Premium Clubhouse & Lifestyle Amenities"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Flexible Construction Linked Plan",
    banks: ["HDFC", "SBI", "ICICI Bank", "Axis Bank", "PNB"],
    possession: "Ready to Move",
    totalUnits: 350,
    towers: 4,
    priceRange: "₹2.5 Cr - ₹3.8 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Panoramic City Views",
    "Private Terrace Options",
    "Smart Home Automation",
    "Premium Imported Flooring",
    "Modular Kitchen with Chimney & Hob",
    "Large Balconies",
    "High-Speed Elevators",
    "EV Charging Provisions"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Video Door Phone",
      "Gated Community"
    ],
    Lifestyle: [
      "Grand Clubhouse",
      "Swimming Pool",
      "Landscaped Gardens",
      "Jogging Track",
      "Party Lawn"
    ],
    Luxury: [
      "Smart Home System",
      "Private Terrace",
      "High-End Lobby Design",
      "Premium Interiors"
    ],
    Sports: [
      "Gymnasium",
      "Tennis Court",
      "Yoga Deck",
      "Children Play Area"
    ],
    Sustainability: [
      "Rainwater Harvesting",
      "Solar Power Provision",
      "Air Purification System",
      "EV Charging Stations"
    ],
    Convenience: [
      "Power Backup",
      "Ample Parking",
      "High-Speed Lifts",
      "Water Supply"
    ]
  },

  developer: "Godrej Properties",
  possession: "Ready to Move",
  totalFloors: 30,
  totalUnits: 350,
  carpetArea: "2500 - 3700 sq ft",
  facing: "South-East / Multiple Options Available",
  badge: "Luxury Living",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹4/sq ft",

  seoKeywords: [
    "Godrej Air Greater Noida",
    "Luxury flats Noida Extension",
    "Godrej Properties NCR project",
    "Premium apartments Greater Noida West",
    "Green living apartments NCR"
  ],

  virtualTour: null,
  yearBuilt: 2024,
  propertyAge: "New Project",

  locationAdvantages: [
    "Prime Location in Greater Noida West",
    "Excellent Connectivity to Noida & Delhi",
    "Close to Schools & Hospitals",
    "Near Upcoming Metro Connectivity",
    "Well-Developed Social Infrastructure",
    "High Growth Investment Corridor",
    "Proximity to Expressways"
  ]
},

// "22": {
//   id: 22,
//   title: "Godrej Nature's Basket",
//   price: "₹4.5 Crores",
//   location: "Mumbai Bandra",
//   images: [
//     "/Team Photo/godrej-nature1.jpg",
//     "/Team Photo/godrej-nature2.jpg",
//     "/Team Photo/godrej-nature3.jpg",
//     "/Team Photo/godrej-nature4.jpg",
//     "/Team Photo/godrej-nature5.jpg",
//     "/Team Photo/godrej-nature6.jpg"
//   ],
//   video: null,
//   videoThumbnail: null,
//   bedrooms: 4,
//   bathrooms: 4,
//   parking: 2,
//   area: "2800 sq ft",
//   rating: 4.9,
//   reviews: 190,
//   description: "Godrej Nature's Basket is a premium luxury residential project in Bandra offering sea views, private garden spaces and smart home automation features. Designed for elite urban living with world-class amenities.",
//   features: ["Sea View", "Private Garden", "Smart Home"],
//   amenities: {
//     Security: ["24x7 Security", "CCTV Surveillance", "Gated Community"],
//     Lifestyle: ["Sea Facing Apartments", "Private Garden", "Clubhouse"],
//     Luxury: ["Smart Home Automation", "Infinity Pool", "Premium Interiors"],
//     Sports: ["Gymnasium", "Yoga Deck"]
//   },
//   developer: "Godrej Properties",
//   possession: "Ready to Move",
//   totalFloors: 28,
//   totalUnits: 220,
//   carpetArea: "2500 sq ft",
//   facing: "Sea Facing",
//   badge: "Ultra Luxury",
//   status: "For Sale",
//   type: "Residential Apartment",
//   propertyType: "residential",
//   seoKeywords: [
//     "Godrej Nature's Basket",
//     "Luxury flats in Bandra",
//     "Mumbai sea facing apartments",
//     "Godrej Bandra property"
//   ],
//   virtualTour: null, 
//   yearBuilt: 2024,
//   propertyAge: "New Project"
// },

"24": {
  id: 24,
  title: "Sobha Silicon Oasis",
  price: "₹2.07 Cr - ₹4.03 Cr",
  location: "Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/Sobha Silicon Oasis.pdf",
    description: "Official Sobha Silicon Oasis brochure with luxury specifications, amenities and floor plans."
  },

  images: [
    "/Team Photo/ssohd1.webp",
    "/Team Photo/ssohd2.webp",
    "/Team Photo/ssohd3.jpeg",
    "/Team Photo/ssohd4.jpg",
    "/Team Photo/ssohd5.jpg"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 3,
  bathrooms: 3,
  parking: 2,
  area: "1650 - 2800 sq ft",

  rating: 4.6,
  reviews: 150,

  description: `Sobha Silicon Oasis is a premium luxury residential project designed to redefine modern urban living in Greater Noida West. Developed by Sobha Developers, the project features elegantly crafted 2, 3 & 4 BHK residences with spacious layouts, superior construction quality and contemporary architecture.

The development emphasizes green building practices, open landscaped areas and world-class lifestyle amenities. With excellent connectivity and strong investment potential, Sobha Silicon Oasis offers a perfect balance of luxury, comfort and long-term value appreciation.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "Sobha Developers",
    description: `Sobha Developers is one of India’s leading real estate brands known for premium construction standards and architectural excellence. With decades of experience, Sobha has delivered landmark residential and commercial projects across major Indian cities.

The brand is recognized for its backward integration model, ensuring unmatched quality control, timely delivery and premium finishing standards.`,
    keyStrengths: [
      "Pan-India Premium Real Estate Brand",
      "Backward Integration Construction Model",
      "High-Quality Finishing Standards",
      "Strong Customer Trust",
      "Luxury Residential Expertise",
      "Timely Project Delivery"
    ],
    commitment: [
      "Premium Construction Quality",
      "On-Time Possession",
      "Customer Satisfaction",
      "Sustainable Development",
      "Innovative Architecture",
      "Long-Term Investment Value"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Prime Location in Greater Noida West",
    "Luxury 2, 3 & 4 BHK Apartments",
    "Green Building Design",
    "Strong Appreciation Potential",
    "Developed Social Infrastructure",
    "Modern Clubhouse & Lifestyle Amenities",
    "Trusted Sobha Brand Value",
    "Excellent NCR Connectivity"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Flexible Construction Linked Plan",
    banks: ["HDFC", "SBI", "ICICI Bank", "Axis Bank", "PNB"],
    possession: "Ready to Move",
    totalUnits: 300,
    towers: 3,
    priceRange: "₹2.07 Cr - ₹4.03 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "IT Corridor Connectivity",
    "Modern Architectural Design",
    "Green Building Certification",
    "Premium Imported Flooring",
    "Spacious Balconies",
    "Modular Kitchen",
    "High-Speed Elevators",
    "Earthquake Resistant Structure"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Video Door Phone",
      "Gated Community"
    ],
    Lifestyle: [
      "Clubhouse",
      "Swimming Pool",
      "Landscaped Gardens",
      "Multipurpose Hall",
      "Party Lawn"
    ],
    Sports: [
      "Gymnasium",
      "Jogging Track",
      "Badminton Court",
      "Kids Play Area"
    ],
    Community: [
      "Landscaped Gardens",
      "Senior Citizen Zone",
      "Yoga & Meditation Area"
    ],
    Convenience: [
      "Power Backup",
      "Ample Parking",
      "Lift Facility",
      "Water Supply"
    ]
  },

  developer: "Sobha Developers",
  possession: "Ready to Move",
  totalFloors: 20,
  totalUnits: 300,
  carpetArea: "1500 - 2500 sq ft",
  facing: "East / North-East Options Available",
  badge: "Premium Luxury",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹4/sq ft",

  seoKeywords: [
    "Sobha Silicon Oasis Greater Noida",
    "Luxury flats Noida Extension",
    "Sobha Developers residential project",
    "Premium apartments NCR",
    "Green building luxury homes"
  ],

  virtualTour: null,
  yearBuilt: 2024,
  propertyAge: "New Project",

  locationAdvantages: [
    "Prime Location in Greater Noida West",
    "Excellent Connectivity to Noida & Delhi",
    "Close to IT & Commercial Hubs",
    "Near Upcoming Metro Corridor",
    "Close to Schools & Hospitals",
    "Developed Residential Infrastructure",
    "High Appreciation Investment Zone"
  ]
},

// 

"26": {
  id: 26,
  title: "La Residentia Urban",
  price: "₹74.8 Lac - ₹1.75 Cr",
  location: "Greater Noida West (Noida Extension)",

  brochure: {
    available: true,
    downloadLink: "/brochures/La Residentia Urban.pdf",
    description: "Official La Residentia Urban brochure including floor plans, amenities, specifications and pricing."
  },

  images: [
    "/Team Photo/lrhd1.jpg",
    "/Team Photo/lrhd2.jpg",
    "/Team Photo/lrhd3.webp",
    "/Team Photo/lrhd4.jpeg",
    "/Team Photo/lrhd5.jpg"
  ],

  video: null,
  videoThumbnail: null,

  bedrooms: 2,
  bathrooms: 2,
  parking: 1,
  area: "950 - 1650 sq ft",

  rating: 4.5,
  reviews: 95,

  description: `La Residentia Urban is a thoughtfully designed residential project located in Greater Noida West. The development offers compact yet spacious 2 & 3 BHK apartments crafted with modern interiors and contemporary architecture.

Designed for comfortable urban living, the project combines elegant layouts, landscaped surroundings and essential lifestyle amenities. With strong connectivity and high growth potential in Noida Extension, La Residentia Urban is an excellent option for both end-users and investors seeking value-driven homes.`,

  /* ---------------- DEVELOPER INFO ---------------- */

  developerInfo: {
    name: "La Residentia Group",
    description: `La Residentia Group is a growing real estate developer known for delivering modern residential projects in prime NCR locations. The developer focuses on quality construction, customer satisfaction and timely possession.

With an emphasis on affordability blended with comfort, La Residentia Group aims to provide thoughtfully planned homes that meet the needs of modern families.`,
    keyStrengths: [
      "Quality Residential Developments",
      "Customer-Centric Planning",
      "Modern Construction Techniques",
      "Timely Project Delivery",
      "Strategic Location Selection",
      "Affordable Luxury Concept"
    ],
    commitment: [
      "On-Time Possession",
      "Transparent Dealings",
      "Premium Construction Standards",
      "Customer Satisfaction",
      "Sustainable Development",
      "Modern Urban Living"
    ]
  },

  /* ---------------- INVESTMENT HIGHLIGHTS ---------------- */

  investmentHighlights: [
    "Prime Location in Greater Noida West",
    "Compact Luxury Apartments",
    "High Appreciation Potential",
    "Well-Developed Residential Catchment",
    "Close to Schools & Hospitals",
    "Excellent NCR Connectivity",
    "Modern Lifestyle Amenities",
    "Value for Money Investment"
  ],

  /* ---------------- FINANCIAL DETAILS ---------------- */

  financialDetails: {
    paymentPlan: "Flexible Construction Linked Plan",
    banks: ["HDFC", "SBI", "ICICI Bank"],
    possession: "Ready to Move",
    totalUnits: 180,
    towers: 2,
    priceRange: "₹74.8 Lac - ₹1.75 Cr"
  },

  /* ---------------- FEATURES ---------------- */

  features: [
    "Compact Luxury Living",
    "City Views",
    "Modern Interiors",
    "Spacious Balconies",
    "Modular Kitchen",
    "Premium Flooring",
    "High-Speed Elevators",
    "Power Backup"
  ],

  /* ---------------- AMENITIES ---------------- */

  amenities: {
    Security: [
      "24x7 Security",
      "CCTV Surveillance",
      "Gated Community",
      "Intercom Facility"
    ],
    Lifestyle: [
      "Clubhouse",
      "Landscaped Gardens",
      "Multipurpose Hall",
      "Party Lawn"
    ],
    Sports: [
      "Gymnasium",
      "Jogging Track",
      "Indoor Games Area"
    ],
    Community: [
      "Children Play Area",
      "Senior Citizen Zone",
      "Community Seating Area"
    ],
    Convenience: [
      "Power Backup",
      "Lift Facility",
      "Visitor Parking",
      "Water Supply"
    ]
  },

  developer: "La Residentia Group",
  possession: "Ready to Move",
  totalFloors: 14,
  totalUnits: 180,
  carpetArea: "900 - 1500 sq ft",
  facing: "North / East Options Available",
  badge: "Luxury Living",
  status: "For Sale",
  type: "Residential Apartment",
  propertyType: "residential",

  floor: "Multiple Floors Available",
  maintenance: "₹2.5/sq ft",

  seoKeywords: [
    "La Residentia Urban Greater Noida West",
    "Luxury flats Noida Extension",
    "Affordable apartments NCR",
    "2 BHK 3 BHK flats Greater Noida",
    "Residential project Noida Extension"
  ],

  virtualTour: null,
  yearBuilt: 2023,
  propertyAge: "New Project",

  locationAdvantages: [
    "Prime Location in Greater Noida West",
    "Close to Noida & Delhi Connectivity",
    "Near Upcoming Metro Corridor",
    "Close to Schools & Hospitals",
    "Developed Social Infrastructure",
    "Wide Roads & Green Surroundings",
    "High Growth Investment Zone"
  ]
},


// "28": {
//   id: 26,
//   title: "Nirala Estate Premium",
//   price: "₹1.45 - 2.21 Cr",
//   location: "Chennai OMR",
//   images: [
//     "/Team Photo/nirala-estate1.jpg",
//     "/Team Photo/nirala-estate2.jpg",
//     "/Team Photo/nirala-estate3.jpg",
//     "/Team Photo/nirala-estate4.jpg",
//     "/Team Photo/nirala-estate5.jpg",
//     "/Team Photo/nirala-estate6.jpg"
//   ],
//   video: null,
//   videoThumbnail: null,
//   bedrooms: 4,
//   bathrooms: 3,
//   parking: 2,
//   area: "2200 sq ft",
//   rating: 4.7,
//   reviews: 140,
//   description: "Nirala Estate Premium is a luxury residential development in Chennai OMR offering large balconies, premium finishes and close proximity to IT parks.",
//   features: ["IT Park Proximity", "Premium Finishes", "Large Balconies"],
//   amenities: {
//     Security: ["24x7 Security", "CCTV"],
//     Lifestyle: ["Clubhouse", "Swimming Pool"],
//     Sports: ["Gymnasium", "Tennis Court"],
//     Community: ["Landscaped Gardens"]
//   },
//   developer: "Nirala Group",
//   possession: "Under Construction",
//   totalFloors: 18,
//   totalUnits: 250,
//   carpetArea: "2000 sq ft",
//   facing: "East",
//   badge: "Premium",
//   status: "For Sale",
//   type: "Residential Apartment",
//   propertyType: "residential",
//   seoKeywords: [
//     "Nirala Estate Premium",
//     "Chennai OMR flats",
//     "Luxury apartments Chennai"
//   ],
//   virtualTour: null,
//   yearBuilt: 2025,
//   propertyAge: "Under Construction"
// },





  // Commercial Properties (Odd IDs)
  "1": {
    id: 1,
    title: "Premium Office Space - Nx-One",
    price: "₹1 Crore",
    location: "Techzone 4 Greater Noida West, Greater Noida",
    images: [
      "/images/nx1.jpg",
      "/images/nx5.png",
      "/images/nx-layout.jpg",
      "/images/nx8.png",
      "/images/nx-work.jpg",
      "/images/nx7.png"
    ],
    video: "images/arkvideo.mp4",
    videoThumbnail: "/images/nx6.png",
    bathrooms: "Common Toilet",
    parking: 1,
    area: "856 sq ft",
    rating: 4.8,
    reviews: 100,
    description: `NX One presents an exceptional property investment opportunity in the heart of Greater Noida's thriving commercial landscape. This ready-to-move project in Techzone 4, Greater Noida West offers premium commercial spaces designed for maximum returns on investment. As Greater Noida's most desirable commercial project, NX One combines strategic location with modern infrastructure and excellent connectivity, making it the perfect choice for discerning investors and businesses alike.

Strategically positioned in Techzone 4 Greater Noida West, the project offers unparalleled visibility and high footfalls, ensuring your business gets the exposure it deserves. With 1976 units spread across 3 towers, NX One provides diverse property configurations to suit various budget ranges and business requirements.`,

    // About DAH Greentech
    developerInfo: {
      name: "DAH Greentech Group",
      description: `DAH Greentech Group is recognized as one of the most trusted names in the real estate space of Delhi NCR. It is known for developing beautifully designed spaces using the most environmentally sustainable construction technology to deliver before the promised time and at the most reasonable prices.

The company believes in delivering utmost satisfaction to the customers by introducing innovations within the real estate sector. It is committed to providing world-class spaces to its esteemed customers by being innovative, sensible and efficient.`,
      keyStrengths: [
        "Trusted name in Delhi NCR real estate",
        "Environmentally sustainable construction technology",
        "Timely delivery before promised deadlines",
        "Reasonable and competitive pricing",
        "Customer satisfaction focused",
        "Innovative real estate solutions",
        "World-class space development"
      ],
      commitment: [
        "Environmentally Sustainable Construction",
        "Timely Project Delivery",
        "Competitive Pricing",
        "Customer Satisfaction",
        "Innovation in Real Estate",
        "Quality Assurance"
      ]
    },

    // Investment highlights
    investmentHighlights: [
      "Bank Approved by HDFC, Corporation Bank & PNB",
      "Attractive 50:50 Payment Plan",
      "Ready to Move Project",
      "1976 Units Across 3 Towers",
      "Multiple Property Configurations",
      "High Visibility Location",
      "Superior Infrastructure in Techzone 4",
      "Backed by DAH Greentech Group"
    ],

    financialDetails: {
      paymentPlan: "50:50 Payment Plan",
      banks: ["HDFC", "Corporation Bank", "Punjab National Bank"],
      possession: "Ready to Move",
      totalUnits: 1976,
      towers: 3,
      priceRange: "Varied budget options available"
    },

    features: [
      "Premium Corporate Space", 
      "High-Speed Internet", 
      "Meeting Rooms", 
      "Cafeteria", 
      "Modular Workstations", 
      "Conference Facilities",
      "Bank Approved Project",
      "Multiple Configuration Options",
      "High Footfall Location",
      "Green Building Technology"
    ],

    amenities: {
      'Financial Advantages': [
        "Approved by Major Banks (HDFC, Corporation, PNB)",
        "50:50 Payment Plan Available",
        "Ready for Immediate Possession",
        "Investment Grade Property",
        "Backed by Reputed Developer"
      ],
      'Project Specifications': [
        "1976 Commercial Units",
        "3 Modern Towers",
        "Multiple Configuration Options",
        "Varied Budget Range Availability",
        "Environmentally Sustainable Design"
      ],
      'Business Facilities': [
        "Conference Hall", 
        "Video Conferencing", 
        "Business Lounge", 
        "Reception Area",
        "Client Meeting Rooms",
        "Modern Workstations"
      ],
      'Infrastructure': [
        "24/7 Power Backup", 
        "Advanced Security", 
        "HVAC System", 
        "Ample Parking",
        "High Visibility Location",
        "Green Building Features"
      ],
      'Technology': [
        "Fiber Optic Internet", 
        "IT Support", 
        "Server Room", 
        "WiFi",
        "Smart Building Systems",
        "Energy Efficient Solutions"
      ],
      'Services': [
        "Housekeeping", 
        "Cafeteria", 
        "Reception Services", 
        "Maintenance",
        "Security Staff",
        "Property Management"
      ]
    },

    developer: "DAH Greentech Group",
    possession: "Ready to Move",
    totalFloors: 15,
    totalUnits: 1976,
    carpetArea: "3200 sq ft",
    facing: "Main Road",
    badge: "Premium Investment",
    status: "For Sale",
    type: "Commercial Space",
    propertyType: "commercial",
    floor: "Multiple Floors Available",
    leaseAvailable: true,
    maintenance: "₹15/sq ft",
    
    // SEO optimization
    seoKeywords: [
      "NX One Greater Noida",
      "Commercial property investment Greater Noida",
      "Techzone 4 Greater Noida West",
      "Ready to move commercial space",
      "Bank approved project Greater Noida",
      "Commercial project Greater Noida",
      "Office space Techzone 4",
      "Property investment Greater Noida",
      "NX One commercial space",
      "Greater Noida business property",
      "DAH Greentech projects",
      "Sustainable commercial building"
    ],

    virtualTour: "https://example.com/virtual-tour-nx-one",
    yearBuilt: 2024,
    propertyAge: "New Construction",
    
    // Brochure information
    brochure: {
      available: true,
      downloadLink: "/public/Team Photo/NX-ONE ARK BROCHURE.pdf",
      description: "Official project brochure detailing features, USPs, and amenities for investors"
    },

    // Location advantages
    locationAdvantages: [
      "Prime location in Techzone 4 Greater Noida West",
      "Excellent connectivity to NCR regions",
      "High visibility and footfalls",
      "Superior infrastructure compared to other commercial zones",
      "Promising growth potential",
      "Easy access to major highways and metro"
    ]
  },

  "7": {
    id: 7,
    title: "Commercial Investment - Ashrai Golden Grande",
    price: "Varied Budget Options",
    location: "Techzone 4 Greater Noida West, Greater Noida",
    images: [
      "/images/golden-grande.jpg",
      "/images/golden-grande-1.jpg",
      "/images/golden-grande-2.jpg",
      "/images/golden-grande-3.jpg",
      "/images/golden-grande-4.jpg",
      "/images/golden-grande-5.jpg"
    ],
    // video: "images/golden.mp4",
    videoThumbnail: "/public/Team Photo/golden grande 5.jpg",
    bathrooms: "Common Toilet",
    parking: "Ample Parking",
    area: "12.63 acres",
    rating: 4.5,
    reviews: 85,
    description: "Looking for property investment opportunities in Greater Noida, Ashrai Golden Grande can be the right bet for you. It is an under construction project in Techzone 4 Greater Noida West, Greater Noida, offering investment options within your budget. For those looking for exciting returns on investment, Ashrai Golden Grande is Greater Noida's most desirable commercial project, where property options are available in varied budget range. Ashrai Golden Grande Techzone 4 Greater Noida West has commercial properties, offering maximum visibility and high footfalls.\n\nAshrai Golden Grande Greater Noida is spread over 12.63 acres and have 1686 units to offer. This project has all major facilities to offer to cater to all kinds of working professionals. Ashrai Golden Grande is a new-generation project, which has all modern facilities and amenities. Not just strategic location, Techzone 4 Greater Noida West has promising infrastructure as compared to other commercial zones in Greater Noida with improving connectivity.",
    developerInfo: {
      name: "Ashrai Group",
      description: "Ashrai Group is emerging as a promising real estate developer in the Delhi NCR region, focusing on creating commercial spaces that cater to modern business needs. The group is committed to delivering quality construction with attention to detail and timely project completion.\n\nWith a focus on sustainable development and customer satisfaction, Ashrai Group aims to create commercial ecosystems that drive business growth and investment returns.",
      keyStrengths: [
        "Growing presence in Delhi NCR",
        "Focus on commercial real estate",
        "Quality construction standards",
        "Customer-centric approach",
        "Strategic location selection",
        "Modern infrastructure development",
        "Timely project delivery focus",
        "Competitive pricing strategy"
      ],
      commitment: [
        "Quality Construction Standards",
        "Timely Project Execution",
        "Customer Satisfaction Focus",
        "Sustainable Development Practices",
        "Transparent Business Operations",
        "Post-Possession Support",
        "Innovative Real Estate Solutions",
        "Budget-Friendly Pricing"
      ]
    },
    investmentHighlights: [
      "Large Scale Project - 12.63 Acres",
      "1686 Commercial Units Available",
      "Strategic Techzone 4 Location",
      "Varied Budget Range Options",
      "Promising Growth Potential",
      "Superior Infrastructure Development",
      "High Visibility Location",
      "Maximum Footfall Potential",
      "Under Construction - Early Investment Advantage",
      "Multiple Property Configurations",
      "Modern Facilities & Amenities",
      "Future Commercial Hotspot in Greater Noida"
    ],
    financialDetails: {
      paymentPlan: "Flexible Payment Plans Available",
      banks: ["Bank Approvals in Process"],
      possession: "Under Construction",
      totalUnits: 1686,
      towers: "Multiple Commercial Blocks",
      priceRange: "Budget-friendly options available",
      projectArea: "12.63 acres (51,100 sq.m.)",
      investmentType: "Commercial Property Investment",
      targetReturns: "Exciting ROI Potential"
    },
    features: [
      "Large Scale Commercial Project",
      "Modern Architecture Design",
      "High Visibility Commercial Units",
      "Strategic Techzone 4 Location",
      "Multiple Configuration Options",
      "Budget-Friendly Investment Options",
      "Future Growth Potential",
      "Commercial Hub Development",
      "Maximum Visibility & Footfalls",
      "New-Generation Project Facilities",
      "Promising Infrastructure Location",
      "Varied Property Types Available"
    ],
    amenities: {
      "Project Scale & Specifications": [
        "12.63 Acre Mega Commercial Project",
        "1686 Commercial Units Total",
        "Multiple Commercial Blocks",
        "Integrated Business Ecosystem",
        "Large Scale Development",
        "RCC Structure with Concrete Blocks"
      ],
      "Construction Quality & Finishes": [
        "Elegant Granite/Marble Lobby Flooring",
        "Premium Vitrified Tile Flooring Throughout",
        "Reputed Brand Sanitaryware (Jaguar/Hindware/Parryware)",
        "Quality CP Fittings & Mixer Taps",
        "Concealed Electrical Wiring with Copper Wires",
        "Modular Switches & Electrical Points"
      ],
      "Infrastructure & Security": [
        "24/7 Security with CCTV Coverage",
        "100% Power Backup for Common Areas",
        "Ample Parking Space Available",
        "Modern Automatic Lifts in Every Block",
        "Fire Safety Systems Installed",
        "Advanced Water Management Systems",
        "Backup Generator for Common Areas"
      ],
      "Location & Business Advantages": [
        "Prime Techzone 4 Strategic Location",
        "High Footfall Potential Area",
        "Excellent NCR Connectivity",
        "Growing Commercial Hub Location",
        "Superior Infrastructure Development",
        "Maximum Business Visibility"
      ],
      "Commercial Facilities": [
        "Commercial Shop Spaces",
        "Office Units & Workspaces",
        "Retail Store Areas",
        "Food Court & Dining Zones",
        "Service Commercial Spaces",
        "Business Lounge Areas"
      ]
    },
    developer: "Ashrai Group",
    possession: "Under Construction",
    totalFloors: "Multiple Floors Available",
    totalUnits: 1686,
    carpetArea: "Various Sizes Available (Multiple Configurations)",
    facing: "Multiple Orientations Available",
    badge: "Budget Investment Opportunity",
    status: "For Sale",
    type: "Commercial Space",
    propertyType: "commercial",
    floor: "Multiple Floors Available",
    leaseAvailable: true,
    maintenance: "To be announced (Post Possession)",
    seoKeywords: [
      "Ashrai Golden Grande",
      "Commercial property Greater Noida",
      "Techzone 4 commercial project",
      "Budget commercial space Greater Noida",
      "Under construction commercial project",
      "Greater Noida West commercial property",
      "Ashrai Group projects",
      "Commercial investment opportunity",
      "Greater Noida business property",
      "Affordable commercial space NCR",
      "Golden Grande Techzone 4",
      "1686 commercial units Greater Noida",
      "12.63 acre commercial project"
    ],
    virtualTour: "https://example.com/virtual-tour-golden-grande",
    yearBuilt: "Under Construction (2025-2026 Expected)",
    propertyAge: "New Project",
    brochure: {
      available: true,
      downloadLink: "/public/Team Photo/ASHRAI-GOLDEN-GRANDE-BROCHURE.pdf",
      description: "Official project brochure detailing project specifications, investment highlights, construction details and future potential. This prospectus is crafted especially for investors to make them understand what the future holds for them at Ashrai Golden Grande."
    },
    locationAdvantages: [
      "Prime location in Techzone 4 Greater Noida West",
      "Strategic position in growing commercial corridor",
      "Excellent connectivity to NCR regions",
      "High visibility and footfall potential",
      "Superior infrastructure compared to other commercial zones",
      "Promising growth potential with improving connectivity",
      "Easy access to major highways and transportation routes",
      "Maximum business exposure and visibility"
    ],
    constructionSpecifications: {
      overview: {
        units: 1686,
        totalProjectArea: "12.63 acres (51.1K sq.m.)",
        projectType: "Commercial Complex"
      },
      structure: "RCC structure with concrete block/RCC walls",
      lobby: {
        groundFloor: "Elegant ground floor lobby flooring and cladding in Granite/Marble/Natural stone",
        upperFloors: "Upper floor lobby flooring in vitrified tiles and lift cladding in natural stone/vitrified tiles",
        wallsCeilings: "All lobby walls in texture/emulsion paint and ceilings in OBD",
        serviceAreas: "Service staircase and service lobby in Kota or equivalent"
      },
      lifts: "Automatic lifts of suitable capacity in every block",
      flooring: "Vitrified tile flooring in the Foyer and common areas",
      commonWashroom: {
        tiles: "Ceramic/Vitrified tiles for flooring and dado upto false ceiling",
        fixtures: "EWCs of Jaguar/Hindware/Parryware or equivalent",
        fittings: "CP fittings Jaguar or equivalent",
        basins: "Wash basin with counter and CP mixer taps"
      },
      painting: {
        interior: "Acrylic Emulsion paint for walls and OBD for ceilings",
        exterior: "Exterior Emulsion paint/Textured paint"
      },
      securitySystems: "Round the clock security with CCTV coverage for selected areas",
      electrical: "All electrical wiring is concealed with PVC insulated copper wires with modular switches. Suitable points for power and lighting provided.",
      powerBackup: {
        generator: "Backup generator provided for all common area, lifts and pumps",
        coverage: "100% backup power for common facilities"
      }
    },
    whyInvest: [
      "New-generation project with modern facilities and amenities",
      "Strategic location in Techzone 4 with promising infrastructure",
      "Multiple property options available for various budget ranges",
      "Superior infrastructure compared to other commercial zones",
      "Improving connectivity and growth potential",
      "All major facilities to cater to working professionals",
      "Maximum visibility and high footfalls location",
      "Budget-friendly investment options with exciting ROI potential"
    ],
    projectHighlights: {
      scale: "One of the largest commercial projects in Greater Noida West",
      units: "1686 units offering diverse commercial spaces",
      location: "Techzone 4 - Most promising commercial zone",
      investment: "Varied budget ranges to suit different investors",
      potential: "High growth potential with infrastructure development"
    },
    targetAudience: [
      "Property investors looking for budget opportunities",
      "Business owners seeking commercial spaces",
      "Retail investors wanting commercial exposure",
      "Entrepreneurs looking for business locations",
      "Investors seeking early-bird advantages in under-construction projects"
    ],
    connectivity: [
      "Well-connected to Greater Noida areas",
      "Access to major highways and expressways",
      "Proximity to NCR regions",
      "Developing infrastructure in Techzone 4",
      "Easy accessibility for customers and employees"
    ],
    brochureDownload: {
      process: "To know more features, USPs and amenities available at this project, download the official brochure of Ashrai Golden Grande now. This prospectus is crafted especially for investors to make them understand what the future holds for them at Ashrai Golden Grande. Click the 'download' icon to get the brochure in one click.",
      purpose: "Detailed project information for investor decision making"
    }
  },
  "9": {
    id: 9,
    title: "Apex Park Square",
    price: "₹27.6 Lakh – ₹1.34 Crore",
    location: "Sector 16B, Greater Noida West (Noida Extension)",
    images: [
      "/images/apex.jpg",
      "/images/apex-2.jpg",
      "/images/apex-3.jpg",
      "/images/apex-4.jpg",
      "/images/apex-5.jpg",
      "/images/apex-6.jpg"
    ],
    video: null,
    videoThumbnail: null,
    bathrooms: "Common / Shared Washrooms",
    parking: "Ample Parking",
    area: "2.38 acres",
    rating: 4.3,
    reviews: 67,
    description: "Apex Park Square is a 100% commercial project developed by Viable Venture Pvt. Ltd. & Apex Floral Group in Greater Noida West. The project offers retail shops, offices, food court, multiplex and other high-street commercial spaces in a prime location.\n\nStrategically located in Sector 16B with excellent connectivity, the project is surrounded by a large residential catchment area and is near to a proposed metro station, making it an ideal commercial investment opportunity in the rapidly developing Noida Extension region.",
    developerInfo: {
      name: "Viable Venture Pvt. Ltd. & Apex Floral Group",
      description: "Apex Floral Group, in partnership with Viable Venture Pvt. Ltd., has developed Apex Park Square as a premier high-street commercial destination in Greater Noida West. The developers bring expertise in creating sustainable and profitable commercial spaces in the NCR region.",
      keyStrengths: [
        "Prime location in Noida Extension",
        "Diverse commercial configuration (shops, offices, F&B)",
        "High visibility plot with three-side open design",
        "Large residential catchment area (over 2 lakh families)",
        "Assured returns and lease-guarantee options",
        "Proven track record in commercial development"
      ],
      commitment: [
        "Quality commercial construction standards",
        "Modern amenities and business infrastructure",
        "Sustainable development in NCR region",
        "Customer and investor trust building",
        "Timely project delivery and handover"
      ]
    },
    investmentHighlights: [
      "287 Commercial Units (shops, offices, retail spaces)",
      "Strategic three-side open plot for maximum visibility",
      "Assured return and lease-guarantee options available",
      "Close to proposed metro station (approximately 1 km)",
      "Located on wide 130-meter main road",
      "Integrated commercial complex with food court and multiplex",
      "High-street retail branding opportunities",
      "Ready for possession commercial project"
    ],
    financialDetails: {
      paymentPlan: "Flexible Payment Options Available",
      banks: ["Multiple Bank Financing Options"],
      possession: "Ready for Possession",
      totalUnits: 287,
      towers: "Single Integrated Commercial Complex",
      priceRange: "₹27.6 Lakh – ₹1.34 Crore",
      projectArea: "2.38 acres"
    },
    features: [
      "Retail Shops of Various Sizes",
      "Modern Office Spaces",
      "Multi-cuisine Food Court",
      "Entertainment Multiplex",
      "High-street Mixed-use Development",
      "Escalators & High-speed Lifts",
      "Three-side Open Layout Design",
      "High Footfall Optimized Design",
      "Modern Architecture",
      "Energy Efficient Design"
    ],
    amenities: {
      "Infrastructure & Security": [
        "24×7 Security with CCTV Surveillance",
        "100% Power Backup for Common Areas",
        "High-speed Lifts and Escalators",
        "Advanced Fire-Fighting System",
        "Ample Car Parking Space",
        "Modern Water Management System"
      ],
      "Business & Commercial Facilities": [
        "Multi-cuisine Food Court",
        "Entertainment Multiplex/Theatre",
        "ATM Kiosks and Banking Spaces",
        "High-Street Retail Units",
        "Office and Workspace Areas",
        "Conference and Meeting Spaces"
      ],
      "Location & Connectivity Benefits": [
        "Proximity to Proposed Metro Station (0.5-1 km)",
        "Adjacent to 130-meter Wide Main Road",
        "Excellent Expressway Connectivity",
        "Large Residential Catchment (2+ Lakh Families)",
        "Growing Commercial Hub Location"
      ]
    },
    developer: "Viable Venture Pvt. Ltd. & Apex Floral Group",
    possession: "Ready for Possession",
    totalFloors: "G + 3 Floors (Mall-type Structure)",
    totalUnits: 287,
    carpetArea: "Varied Sizes (100 sq ft – 2462 sq ft super area)",
    facing: "Three-sided Open Plot",
    badge: "High-Street Commercial Investment",
    status: "For Sale / Investment",
    type: "Commercial Space",
    propertyType: "commercial",
    floor: "Multiple Floors Available",
    leaseAvailable: true,
    maintenance: "To be confirmed upon enquiry",
    seoKeywords: [
      "Apex Park Square",
      "Commercial property Greater Noida West",
      "Noida Extension commercial investment",
      "Retail shops Greater Noida",
      "High street mall Greater Noida",
      "Apex Floral Group project",
      "Sector 16B Noida Extension",
      "Ready commercial space Noida",
      "Commercial complex Greater Noida",
      "Shop office space Noida Extension"
    ],
    virtualTour: null,
    yearBuilt: 2024,
    propertyAge: "New Project",
    brochure: {
      available: true,
      downloadLink: "/public/Team Photo/APEX-PARK-SQUARE-BROCHURE.pdf",
      description: "Project brochure detailing unit sizes, pricing, and commercial facilities"
    },
    locationAdvantages: [
      "Prime location in Sector 16B Greater Noida West",
      "Excellent road connectivity with 130-meter wide main road",
      "Proximity to proposed metro station (approximately 1 km)",
      "High footfall potential from surrounding residential population",
      "Growing commercial hub in Noida Extension",
      "Easy access to NCR regions and expressways",
      "Strategic position in developing commercial corridor"
    ],
    projectSpecifications: {
      projectType: "High-street Commercial Complex",
      totalLandArea: "2.38 acres",
      totalUnits: 287,
      floorConfiguration: "Ground + 3 Floors",
      unitSizes: "Varied from 100 sq ft to 2462 sq ft (super area)",
      layout: "Three-side open plot for maximum visibility"
    },
    commercialComponents: {
      retail: "Various sized retail shops",
      officeSpaces: "Commercial office units",
      entertainment: "Multiplex and entertainment zones",
      foodBeverage: "Multi-cuisine food court",
      services: "Banking and service commercial spaces"
    },
    targetAudience: [
      "Retail business owners",
      "Commercial office investors",
      "Food and beverage entrepreneurs",
      "Entertainment business investors",
      "High-street retail investors",
      "Mixed-use commercial investors"
    ],
    investmentPotential: {
      assuredReturns: "Lease-guarantee options available",
      rentalYield: "High potential due to location and footfall",
      appreciation: "Strong growth potential in developing area",
      occupancy: "High expected occupancy rates"
    }
  },
  "11": {
  "id": 11,
  "title": "ATS Kabana High - Premium Commercial Tower",
  "price": "₹47 Lakhs – ₹55.25 Lakhs",
  "location": "Techzone IV, Amprapali Dream Valley, Greater Noida / Sector 4, Greater Noida West",
  "images": [
    "/images/ATS1.png",
    "/images/ATS2.png",
    "/images/ATS3.png",
   "/images/ATS4.png",
   "/images/ATS5.png",
   "/images/ATS6.png" 
  ],
  "video": null,
  "videoThumbnail": null,
  "bathrooms": "8 bathrooms & 2 shared washrooms",
  "parking": "Ample Parking Available",
  "area": "2.5 acres",
  "rating": 4.8,
  "reviews": 89,
  "description": "ATS Kabana High is a premium 29-story commercial development by ATS GRAND RETAILS PVT LTD in Greater Noida West. This landmark tower on 2.5 acres combines office spaces, retail shops, and innovation facilities in an integrated business hub. Designed as a tech-enabled campus, it features collaborative workspaces, innovation labs, and dedicated IT infrastructure for modern businesses.\n\nThe project offers both ready-to-move and under-construction units, providing flexibility for immediate business operations or future expansion. With STPI approval and a focus on work-life balance through recreational amenities, ATS Kabana High is crafted to ensure enterprise growth in the rapidly developing Noida Extension region.",
  
  "developerInfo": {
    "name": "ATS GRAND RETAILS PVT LTD",
    "description": "ATS GRAND RETAILS PVT LTD is a distinguished real estate developer specializing in premium commercial and retail projects across the NCR region. With a strong focus on innovation, quality construction, and sustainable development, the company has established itself as a trusted name in commercial real estate.\n\nKnown for their commitment to creating business-friendly environments, ATS GRAND RETAILS PVT LTD combines architectural excellence with practical business solutions, delivering projects that offer excellent returns on investment and superior working environments.",
    "keyStrengths": [
      "Specialized in commercial and retail developments",
      "Premium 29-story commercial landmark expertise",
      "STPI approved for IT/ITeS companies",
      "Tech-enabled campus infrastructure development",
      "Innovation labs and R&D facilities integration",
      "Prime location selection in growing business hubs",
      "Modern architecture and sustainable design approach",
      "Proven track record in commercial property development"
    ],
    "commitment": [
      "Quality Construction Standards",
      "Timely Project Delivery",
      "Customer Satisfaction Focus",
      "Sustainable Development Practices",
      "Innovative Business Solutions",
      "Post-Possession Support",
      "Transparent Business Operations",
      "Investment Value Creation"
    ]
  },
  
  "investmentHighlights": [
    "29-story premium commercial tower",
    "STPI approved for tax and customs benefits",
    "Tech-enabled campus with dedicated IT infrastructure",
    "Innovation labs and incubation center",
    "Collaborative workspaces and meeting facilities",
    "Sports complex and entertainment zone",
    "Ready-to-move office spaces available",
    "Strategic location in Greater Noida West",
    "High investment potential in developing area",
    "Flexible unit sizes (171 sq ft to 650+ sq ft)",
    "Backed by ATS GRAND RETAILS PVT LTD"
  ],
  
  "financialDetails": {
    "paymentPlan": "Flexible Payment Options Available",
    "banks": ["Multiple Bank Financing Options"],
    "possession": "Ready for Possession (partial) & Dec 2025",
    "totalUnits": "Multiple units across 29 floors",
    "towers": "Single 29-story tower",
    "priceRange": "₹47 Lakhs – ₹55.25 Lakhs",
    "projectArea": "2.5 acres"
  },
  
  "features": [
    "Tech-Enabled Campus",
    "Collaborative Workspaces",
    "Innovation Labs",
    "Dedicated IT Infrastructure",
    "29-story Modern Tower",
    "Premium Office and Retail Spaces",
    "Incubation Center",
    "R&D Facilities",
    "Sports Complex",
    "Entertainment Zone",
    "High-speed Internet",
    "Modern Architecture",
    "Energy Efficient Design",
    "Green Building Features",
    "STPI Approved Campus"
  ],
  
  "amenities": {
    "Infrastructure & Security": [
      "24×7 Security with CCTV Surveillance",
      "100% Power Backup",
      "High-speed Elevators",
      "Advanced Fire-Fighting System",
      "Ample Car Parking Space",
      "Modern Water Management System",
      "Separate Utility Meters"
    ],
    "Business & Innovation Facilities": [
      "Incubation Center for Startups",
      "R&D Facilities",
      "Collaborative Workspaces",
      "Innovation Labs",
      "Meeting Rooms and Cabins",
      "Dedicated IT Infrastructure",
      "High-speed Internet Connectivity",
      "Video Conferencing Facilities",
      "STPI Approved Spaces"
    ],
    "Recreation & Lifestyle": [
      "Sports Complex",
      "Entertainment Zone",
      "Cafeteria/Food Court",
      "Retail Shopping Options",
      "Landscaped Common Areas",
      "Recreational Zones",
      "Wellness Facilities"
    ]
  },
  
  "developer": "ATS GRAND RETAILS PVT LTD",
  "possession": "Ready for Possession (partial) & December 2025",
  "totalFloors": "29 Floors",
  "totalUnits": "Multiple Commercial Units",
  "carpetArea": "Varied Sizes (171 sq ft – 650+ sq ft)",
  "facing": "Multiple Orientations Available",
  "badge": "STPI Approved Tech Campus",
  "status": "For Sale / Investment",
  "type": "Commercial Space",
  "propertyType": "commercial",
  "floor": "Multiple Floors Available (8th to 14th ready units)",
  "leaseAvailable": true,
  "maintenance": "To be confirmed upon enquiry",
  
  "seoKeywords": [
    "ATS Kabana High",
    "ATS GRAND RETAILS PVT LTD",
    "STPI approved office space",
    "Commercial property Greater Noida West",
    "Tech-enabled campus Noida",
    "Office and retail shops Noida Extension",
    "Ready to move office Noida",
    "Innovation labs Greater Noida",
    "29-story commercial tower",
    "Commercial investment Noida",
    "ATS Grand Retail projects",
    "Premium commercial space Greater Noida"
  ],
  
  "virtualTour": null,
  "yearBuilt": 2025,
  "propertyAge": "New Project",
  "brochure": {
    "available": true,
    "downloadLink": "/public/Team Photo/Kabana High - Ebrochure.pdf (1).pdf",
    "description": "Project brochure detailing tech-enabled features, unit specifications, and commercial facilities"
  },
  
  "locationAdvantages": [
    "Prime location in Techzone IV, Greater Noida",
    "Excellent connectivity to NCR regions",
    "Proximity to residential catchment areas",
    "Well-connected commercial corridor",
    "Access to major highways and expressways",
    "Growing business hub in Noida Extension",
    "Strategic position in developing commercial zone",
    "Close to proposed infrastructure developments"
  ],
  
  "projectSpecifications": {
    "projectType": "29-story Commercial Tower",
    "totalLandArea": "2.5 acres",
    "totalUnits": "Multiple commercial units",
    "floorConfiguration": "29 Floors with commercial spaces",
    "unitSizes": "Varied from 171 sq ft to 650+ sq ft",
    "layout": "Modern tower design with mixed-use spaces"
  },
  
  "commercialComponents": {
    "officeSpaces": "Premium office units",
    "retail": "Retail shops and commercial spaces",
    "innovation": "Innovation labs and R&D facilities",
    "collaboration": "Collaborative workspaces",
    "services": "Business support services"
  },
  
  "targetAudience": [
    "Startups & Tech Companies (STPI benefits)",
    "Professional Services Firms",
    "Corporate Branch Offices",
    "Retail Business Owners",
    "Commercial Investors",
    "IT/ITeS Companies",
    "Research & Development Organizations",
    "Mixed-use Commercial Investors"
  ],
  
  "investmentPotential": {
    "assuredReturns": "High rental yield potential",
    "rentalYield": "Strong due to STPI approval and location",
    "appreciation": "High growth potential in developing area",
    "occupancy": "Expected high occupancy due to tech features"
  },
  
  "unitDetails": [
    {
      "unitId": "KBN001",
      "type": "Office and Retail Shop",
      "price": "₹47 Lakhs",
      "carpetArea": "171 sq ft",
      "configuration": "0 Bedroom, 8 Bathrooms",
      "possession": "December 2025",
      "status": "Under Construction",
      "description": "Commercial unit suitable for office or retail shop with tech-enabled features"
    },
    {
      "unitId": "KBN002",
      "type": "Ready-to-Move Office Space",
      "price": "₹55.25 Lakhs",
      "superBuiltupArea": "650 sq ft",
      "carpetArea": "425 sq ft",
      "capacity": "8-10 seats",
      "floors": "7 floors (8th to 14th)",
      "facilities": "1 meeting room, 2 cabins, 2 shared washrooms",
      "possession": "Ready to Move",
      "status": "Available Immediately",
      "description": "650 sq ft ready-to-move office space priced at ₹8,500 per sq ft, ideal for immediate business operations"
    }
  ],
  
  "additionalInfo": {
    "approvals": ["RERA Approved", "STPI Approved"],
    "popularityScore": 97,
    "dateAdded": "2024-01-20",
    "lastUpdated": "2024-03-15",
    "projectStage": "Under Construction (partial ready)",
    "constructionStatus": "Partially completed with ready units",
    "developerExperience": "ATS GRAND RETAILS PVT LTD - Specialized commercial developer",
    "projectType": "Tech-enabled commercial campus"
  }
},
  "10": {
    id: 10,
    title: "ATS Kabana High",
    price: "₹45.5 Lakhs - ₹1.2 Crores",
    location: "Sector 1, Greater Noida West",
    images: [
      "/public/Team Photo/ats-kabana-1.jpg",
      "/public/Team Photo/ats-kabana-2.jpg",
      "/public/Team Photo/ats-kabana-3.jpg",
      "/public/Team Photo/ats-kabana-4.jpg",
      "/public/Team Photo/ats-kabana-5.jpg",
      "/public/Team Photo/ats-kabana-6.jpg"
    ],
    video: "/public/Team Photo/ats-kabana-video.mp4",
    videoThumbnail: "/public/Team Photo/ats-kabana-thumbnail.jpg",
    bathrooms: "2-3 per unit",
    parking: "2 covered parking per 3/4 BHK",
    area: "2.5 acres",
    rating: 4.7,
    reviews: 234,
    description: "ATS Kabana High is a premium residential project by ATS Group in Sector 1, Greater Noida West. This luxurious high-rise development offers 2, 3, and 4 BHK apartments with world-class amenities and superior construction quality. The project features 6 towers with 18 floors each, providing 576 residential units in a well-planned community setting.\n\nStrategically located in one of the most sought-after sectors of Greater Noida West, ATS Kabana High promises a lifestyle of comfort, convenience, and luxury with excellent connectivity to NCR regions and upcoming infrastructure developments.",
    developerInfo: {
      name: "ATS Group",
      description: "ATS Group is one of North India's most trusted and renowned real estate developers with over two decades of experience in creating premium residential and commercial spaces. Known for their commitment to quality, timely delivery, and innovative designs, ATS has delivered numerous landmark projects across the NCR region.\n\nThe group is recognized for its customer-centric approach, sustainable construction practices, and creating value-driven properties that stand the test of time.",
      keyStrengths: [
        "Over 20 years of real estate expertise",
        "Proven track record of timely delivery",
        "Premium quality construction standards",
        "Strong customer trust and satisfaction",
        "Innovative architectural designs",
        "Sustainable development practices",
        "Excellent after-sales service",
        "Strong financial stability"
      ],
      commitment: [
        "Timely Project Delivery",
        "Premium Quality Construction",
        "Customer Satisfaction Focus",
        "Sustainable Development",
        "Transparent Business Practices",
        "Innovative Design Solutions",
        "Post-Possession Support",
        "Value Creation for Investors"
      ]
    },
    investmentHighlights: [
      "Premium residential project by reputed ATS Group",
      "576 units across 6 towers with 18 floors each",
      "2.5 acres of well-planned residential development",
      "2, 3 & 4 BHK luxury apartments",
      "Excellent location in Sector 1, Greater Noida West",
      "World-class amenities and facilities",
      "Strong appreciation potential",
      "Ready-to-move-in options available"
    ],
    financialDetails: {
      paymentPlan: "Flexible Payment Plans Available",
      banks: ["HDFC", "SBI", "ICICI", "Axis Bank", "PNB"],
      possession: "Dec 2026 (Under Construction)",
      totalUnits: 576,
      towers: 6,
      priceRange: "₹45.5 Lakhs - ₹1.2 Crores",
      projectArea: "2.5 acres"
    },
    features: [
      "2, 3 & 4 BHK Luxury Apartments",
      "Modern Architecture",
      "Spacious Balconies",
      "Modular Kitchen",
      "Vitrified Flooring",
      "Premium Sanitaryware",
      "Landscaped Gardens",
      "Swimming Pool",
      "Club House",
      "Children's Play Area"
    ],
    amenities: {
      "Recreational Facilities": [
        "Swimming Pool",
        "Club House with Gym",
        "Landscaped Gardens",
        "Children's Play Area",
        "Sports Court",
        "Jogging Track",
        "Meditation Area",
        "Senior Citizen Zone"
      ],
      "Security & Infrastructure": [
        "24/7 Security with CCTV",
        "Video Door Phone",
        "Fire Fighting System",
        "Power Backup",
        "Water Supply System",
        "Waste Management",
        "Elevators in Each Tower",
        "Ample Parking Space"
      ],
      "Community Facilities": [
        "Community Hall",
        "Party Lawn",
        "Guest Rooms",
        "Library & Reading Room",
        "Yoga & Aerobics Area",
        "Indoor Games Room",
        "Banquet Hall",
        "Retail Shops"
      ]
    },
    developer: "ATS Group",
    possession: "Dec 2026",
    totalFloors: 18,
    totalUnits: 576,
    carpetArea: "Varied (2 BHK: 950-1150 sq ft, 3 BHK: 1350-1650 sq ft, 4 BHK: 1850-2250 sq ft)",
    facing: "East, West, North, South (Multiple Options)",
    badge: "Premium Residential",
    status: "Under Construction",
    type: "Residential Apartment",
    propertyType: "residential",
    floor: "Multiple Floors Available",
    leaseAvailable: true,
    maintenance: "₹2.5/sq ft",
    seoKeywords: [
      "ATS Kabana High",
      "ATS Group Greater Noida",
      "Residential project Greater Noida West",
      "2 BHK flats Greater Noida",
      "3 BHK apartments Noida Extension",
      "Premium apartments Greater Noida",
      "ATS Kabana High Sector 1",
      "Luxury flats Greater Noida West",
      "ATS Group new project",
      "Greater Noida West residential"
    ],
    virtualTour: "https://example.com/virtual-tour-ats-kabana",
    yearBuilt: 2026,
    propertyAge: "Under Construction",
    brochure: {
      available: true,
      downloadLink: "/public/Team Photo/ATS-KABANA-HIGH-BROCHURE.pdf",
      description: "Complete project brochure with floor plans, amenities, pricing, and location details"
    },
    locationAdvantages: [
      "Prime location in Sector 1, Greater Noida West",
      "Excellent connectivity to Noida and Delhi",
      "Proximity to proposed metro station",
      "Close to educational institutions and hospitals",
      "Well-developed social infrastructure",
      "Growing residential hub with good appreciation",
      "Easy access to expressways and highways"
    ],
    projectSpecifications: {
      projectType: "Residential High-Rise Apartments",
      totalLandArea: "2.5 acres",
      totalUnits: 576,
      totalTowers: 6,
      floorsPerTower: 18,
      unitTypes: "2 BHK, 3 BHK, 4 BHK",
      possessionDate: "December 2026"
    },
    unitConfigurations: {
      "2BHK": {
        carpetArea: "950 - 1150 sq ft",
        configuration: "2 Bedrooms, Hall, Kitchen, 2 Bathrooms",
        priceRange: "₹45.5 - ₹65 Lakhs"
      },
      "3BHK": {
        carpetArea: "1350 - 1650 sq ft",
        configuration: "3 Bedrooms, Hall, Kitchen, 2-3 Bathrooms",
        priceRange: "₹75 Lakhs - ₹95 Lakhs"
      },
      "4BHK": {
        carpetArea: "1850 - 2250 sq ft",
        configuration: "4 Bedrooms, Hall, Kitchen, 3-4 Bathrooms",
        priceRange: "₹1.0 - ₹1.2 Crores"
      }
    },
    constructionQuality: {
      structure: "RCC framed structure with earthquake-resistant design",
      walls: "AAC blocks with plaster on both sides",
      flooring: "Vitrified tiles in living/dining, anti-skid ceramic in bathrooms",
      kitchen: "Modular kitchen with granite countertop",
      doors: "Main door: Decorative flush door, Internal: Teak wood frames",
      windows: "Aluminum/PVC windows with glass panes",
      paint: "Premium quality exterior and interior paint"
    },
    targetAudience: [
      "Families looking for premium residential spaces",
      "Professionals working in NCR region",
      "Investors seeking capital appreciation",
      "NRIs looking for property in India",
      "Upgraders seeking better lifestyle"
    ],
    investmentPotential: {
      appreciation: "High potential due to location and developer reputation",
      rentalYield: "Good rental demand in developed area",
      demand: "Strong demand for ATS Group projects",
      growth: "Consistent price appreciation expected"
    }
  },
  "3": {
    id: 3,
    title: "Golden-I Commercial Hub - Ocean Infrastructures",
    price: "₹85 Lakhs - ₹2.5 Crores",
    location: "Techzone IV, Amprapali Dream Valley, Itehra, Greater Noida, Uttar Pradesh 201009",
    images: [
      "/images/golden-i.jpg",
      "/images/goldeni-1.jpg",
      "/images/goldeni-2.jpg",
      "/images/goldeni-3.jpg",
      "/images/goldeni-4.jpg",
      "/images/goldeni-5.jpg"
    ],
    // video: "/public/Team Photo/Golden i.mp4",
    // videoThumbnail: "/public/Team Photo/golden i 5.jpg",
    bathrooms: "Common & Private Toilets",
    parking: 2,
    area: "600 - 2000 sq ft",
    rating: 4.7,
    reviews: 89,
    description: `Golden-I stands as a magnificent commercial marvel developed by Ocean Infrastructures Pvt Ltd, strategically positioned in the thriving Retail and Technology hub of Greater Noida West. Spanning across 25 acres of prime real estate, this project is enveloped by 1,000 acres of residential development that will accommodate over 1 million residents within the next three to five years.

Situated in the heart of Techzone IV, Golden-I offers unparalleled investment opportunities in one of Delhi NCR's fastest-growing commercial corridors. With the trust of 1800+ satisfied customers, Ocean Infrastructures has established itself as the most rapidly expanding commercial real estate firm in the region, creating sought-after business destinations that promise exceptional value and returns.`,

    // About Ocean Infrastructures
    developerInfo: {
      name: "Ocean Infrastructures Pvt Ltd",
      description: `Ocean Infrastructures Pvt Ltd has emerged as the fastest-growing commercial real estate firm in Delhi NCR, building trust through exceptional project delivery and customer satisfaction. With a portfolio of 1800+ satisfied customers, the company has established itself as a reliable name in commercial real estate development.

The company's vision focuses on creating premium business destinations that combine strategic location, modern architecture, and sustainable development practices. Ocean Infrastructures is committed to delivering projects that not only meet but exceed investor expectations while contributing to the economic growth of the regions they operate in.`,
      keyStrengths: [
        "Fastest-growing commercial real estate firm in Delhi NCR",
        "Trusted by 1800+ customers",
        "Strategic location selection",
        "Modern architectural designs",
        "Timely project delivery",
        "Customer-centric approach",
        "Proven track record"
      ],
      commitment: [
        "Quality Construction Standards",
        "Timely Project Completion",
        "Customer Satisfaction",
        "Strategic Location Development",
        "Sustainable Growth",
        "Transparent Business Practices"
      ]
    },

    // Investment highlights
    investmentHighlights: [
      "25 Acre Mega Commercial Development",
      "Surrounded by 1000+ Acres Residential Zone",
      "1 Million+ Potential Customer Base",
      "1800+ Trusted Customer Base",
      "Prime Retail & Technology Hub Location",
      "Multiple Unit Configurations Available",
      "Future Growth Potential",
      "Backed by Reputed Developer"
    ],

    financialDetails: {
      paymentPlan: "Flexible Payment Options",
      banks: ["HDFC", "ICICI", "State Bank of India", "Axis Bank"],
      possession: "Under Construction",
      totalUnits: "Multiple configurations",
      towers: "Integrated Commercial Complex",
      priceRange: "₹85 Lakhs - ₹2.5 Crores"
    },

    features: [
      "Premium Retail Spaces", 
      "Modern Office Complex", 
      "Technology Hub Facilities", 
      "Food Court & Cafeteria", 
      "Ample Parking Space", 
      "Conference Facilities",
      "Bank Approved Project",
      "Multiple Configuration Options",
      "High Footfall Location",
      "Modern Architecture"
    ],

    amenities: {
      'Financial Advantages': [
        "Approved by Major Banks",
        "Flexible Payment Plans Available",
        "Attractive Investment Opportunity",
        "Proven Developer Track Record",
        "High Appreciation Potential"
      ],
      'Project Specifications': [
        "25 Acre Integrated Development",
        "Multiple Commercial Unit Options",
        "Modern Architectural Design",
        "Sustainable Development Approach",
        "Future Expansion Capabilities"
      ],
      'Business Facilities': [
        "Conference Centers", 
        "Business Lounges", 
        "Meeting Rooms", 
        "Retail Showrooms",
        "Food Court & Dining Areas",
        "Modern Work Spaces"
      ],
      'Infrastructure': [
        "24/7 Power Backup", 
        "Advanced Security Systems", 
        "Central Air Conditioning", 
        "Ample Vehicle Parking",
        "High Visibility Location",
        "Green Building Elements"
      ],
      'Technology': [
        "High-Speed Internet", 
        "IT Infrastructure", 
        "Digital Security", 
        "Smart Building Management",
        "Energy Efficient Systems",
        "Advanced Connectivity"
      ],
      'Services': [
        "Professional Management", 
        "Housekeeping Services", 
        "Security Personnel", 
        "Maintenance Team",
        "Retail Support Services",
        "Business Center Operations"
      ]
    },

    developer: "Ocean Infrastructures Pvt Ltd",
    possession: "Under Construction",
    totalFloors: "G+5",
    totalUnits: "Multiple configurations available",
    carpetArea: "600 - 2000 sq ft",
    facing: "Multiple orientations available",
    badge: "Value Investment",
    status: "For Sale",
    type: "Commercial Hub",
    propertyType: "commercial",
    floor: "Multiple Floors Available",
    leaseAvailable: true,
    maintenance: "₹12/sq ft",
    
    // SEO optimization
    seoKeywords: [
      "Golden-I Greater Noida",
      "Ocean Infrastructures commercial project",
      "Techzone IV Greater Noida West",
      "Commercial property Greater Noida",
      "Retail and Technology hub",
      "Commercial project Greater Noida",
      "Office space Techzone IV",
      "Property investment Greater Noida",
      "Golden-I commercial space",
      "Greater Noida business property",
      "Ocean Infrastructures projects",
      "25 acre commercial development"
    ],

//     "30": {
//   id: 30,
//   title: "NX1 Techzone 4 Tower 5 (ARC)",
//   price: "₹70 - 80 Lakhs",
//   location: "Techzone 4, Greater Noida West (Noida Extension)",

//   images: [
//     "/Team Photo/nx one 1.jpg",
//     "/Team Photo/nx one 5.png",
//     "/Team Photo/NX ONE 7.png",
//     "/Team Photo/nx one work.jpg"
//   ],

//   video: null,
//   videoThumbnail: null,

//   bathrooms: "Common Washrooms",
//   parking: 1,
//   area: "856 sq ft",
//   rating: 4.8,
//   reviews: 92,

//   description: `NX1 Tower 5 (ARC) located in Techzone 4, Greater Noida West is a premium commercial project offering fully luxurious office spaces designed for modern businesses, startups, and corporate professionals.

// Strategically positioned in the heart of Noida Extension, this commercial hub provides high footfall, excellent connectivity, and world-class infrastructure. The project is ideal for investment as well as self-use with strong rental returns and appreciation potential.`,

//   // Developer Information
//   developerInfo: {
//     name: "DAH Greentech Group",
//     description: `DAH Greentech Group is a reputed real estate developer in Delhi NCR known for delivering premium commercial and residential projects with sustainable construction and modern infrastructure.`,
//     keyStrengths: [
//       "Timely Project Delivery",
//       "Premium Commercial Developments",
//       "Strategic NCR Locations",
//       "Strong Investment Returns"
//     ],
//     commitment: [
//       "Quality Construction",
//       "Modern Infrastructure",
//       "Investor Friendly Plans",
//       "Long-Term Value Creation"
//     ]
//   },

//   // Investment Highlights
//   investmentHighlights: [
//     "Prime location in Techzone 4",
//     "Luxury Office Spaces",
//     "High Rental Yield Potential",
//     "Ready to Move Commercial Units",
//     "Strong Footfall & Visibility",
//     "Excellent Metro & Highway Connectivity"
//   ],

//   financialDetails: {
//     paymentPlan: "Flexible Payment Plan Available",
//     banks: ["HDFC", "ICICI", "PNB"],
//     possession: "Ready to Move",
//     totalUnits: 500,
//     towers: 3,
//     priceRange: "₹70 - 80 Lakhs",
//     expectedRent: "₹40,000 / Month"
//   },

//   features: [
//     "Fully Furnished Office Options",
//     "Luxury Reception Lobby",
//     "Conference Rooms",
//     "High-Speed Elevators",
//     "Power Backup",
//     "Modern Glass Facade"
//   ],

//   amenities: {
//     Security: [
//       "24/7 Security",
//       "CCTV Surveillance",
//       "Access Control Entry"
//     ],
//     Business: [
//       "Conference Hall",
//       "Meeting Rooms",
//       "Business Lounge"
//     ],
//     Infrastructure: [
//       "100% Power Backup",
//       "Ample Parking",
//       "Central Air Conditioning"
//     ],
//     Technology: [
//       "Fiber Internet",
//       "Smart Building System"
//     ],
//     Services: [
//       "Maintenance Staff",
//       "Housekeeping",
//       "Property Management"
//     ]
//   },

//   developer: "DAH Greentech Group",
//   possession: "Ready to Move",
//   totalFloors: 15,
//   totalUnits: 500,
//   carpetArea: "750 sq ft",
//   facing: "Main Road Facing",
//   badge: "New Launch",
//   status: "For Sale & Rent",
//   type: "Commercial Office Space",
//   propertyType: "commercial",

//   rent: "₹40,000 / Month",

//   seoKeywords: [
//     "NX1 Tower 5 ARC",
//     "Techzone 4 commercial office",
//     "Noida Extension office space",
//     "Luxury office space Greater Noida West",
//     "Office for sale in Noida Extension",
//     "Commercial property Techzone 4"
//   ],

//   virtualTour: null,
//   yearBuilt: 2024,
//   propertyAge: "New Launch",

//   brochure: {
//     available: true,
//     downloadLink: "/brochures/NX1-Tower5-ARC.pdf",
//     description: "Official project brochure with investment details and floor plans"
//   },

//   locationAdvantages: [
//     "Located in Techzone 4, Greater Noida West",
//     "Close to upcoming Metro Station",
//     "Easy connectivity to Noida & Delhi",
//     "Surrounded by residential societies",
//     "High Business Growth Zone"
//   ]
// },


    virtualTour: "https://example.com/virtual-tour-golden-i",
    yearBuilt: 2024,
    propertyAge: "New Launch",
    
    // Brochure information
    brochure: {
      available: true,
      downloadLink: "/public/Team Photo/GOLDEN-I-BROCHURE-NEW-13-Jan-2020.pdf",
      description: "Comprehensive project brochure detailing investment opportunities, features, and growth potential"
    },

    // Location advantages
    locationAdvantages: [
      "Prime location in Techzone IV Greater Noida West",
      "Surrounded by 1000+ acres residential development",
      "Potential customer base of 1 million+ residents",
      "Excellent connectivity to Delhi NCR regions",
      "Rapidly developing retail and technology corridor",
      "Strategic position in growing commercial hub",
      "Easy access to major transportation networks"
    ],

    // Additional unique features for Golden-I
    projectScale: "25 Acre Mega Development",
    surroundingDevelopment: "1000+ Acres Residential Zone",
    potentialCustomerBase: "1 Million+ Residents",
    customerTrust: "1800+ Satisfied Customers",
    developmentStage: "Fastest-growing commercial destination"
  },
};

// Type for media items
interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt: string;
  thumbnail?: string;
}

// Type for property
interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  images: string[];
  video: string | null;
  videoThumbnail: string | null;
  bedrooms?: number;
  bathrooms: string | number;
  parking: string | number;
  area: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  amenities: Record<string, string[]>;
  developer: string;
  possession: string;
  totalFloors: string | number;
  totalUnits: string | number;
  carpetArea: string;
  facing: string;
  badge: string;
  status: string;
  type: string;
  propertyType: 'residential' | 'commercial';
  seoKeywords: string[];
  virtualTour: string | null;
  yearBuilt: string | number;
  propertyAge: string;
  brochure?: {
    available: boolean;
    downloadLink: string;
    description: string;
  };
  // Additional properties for commercial listings
  developerInfo?: {
    name: string;
    description: string;
    keyStrengths: string[];
    commitment: string[];
  };
  investmentHighlights?: string[];
  financialDetails?: {
    paymentPlan: string;
    banks: string[];
    possession: string;
    totalUnits: string | number;
    towers: string | number;
    priceRange?: string;
  };
  locationAdvantages?: string[];
  projectScale?: string;
  surroundingDevelopment?: string;
  potentialCustomerBase?: string;
  customerTrust?: string;
  developmentStage?: string;
  floor?: string;
  leaseAvailable?: boolean;
  maintenance?: string;
}

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeMedia, setActiveMedia] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
const [showBrochureForm, setShowBrochureForm] = useState(false);

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phoneNumber: ""
});

const handleBrochureSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.fullName || !formData.email || !formData.phoneNumber) {
    alert("Please fill all fields");
    return;
  }

  setShowBrochureForm(false);

  if (property?.brochure?.downloadLink) {
    const link = document.createElement("a");
    link.href = property.brochure.downloadLink;
    link.download = "";
    link.click();
  }
};




  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Combine images and video for media gallery
  const mediaItems: MediaItem[] = property ? [
    ...property.images.map((img: string, index: number) => ({ 
      type: 'image' as const, 
      url: img, 
      alt: `${property.title} - Image ${index + 1}` 
    })),
    ...(property.video ? [{ 
      type: 'video' as const, 
      url: property.video, 
      thumbnail: property.videoThumbnail || property.images[0],
      alt: `${property.title} - Video Tour`
    }] : [])
  ] : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      const propertyId = id || "2";
      let foundProperty = propertyData[propertyId];
      
      if (!foundProperty) {
        const idNum = parseInt(propertyId);
        if (idNum % 2 === 0) {
          foundProperty = {
            ...defaultResidentialProperty,
            id: idNum,
            title: `Residential Property ${idNum}`,
            price: `₹${75 + (idNum * 5)} Lakhs`
          };
        } else {
          foundProperty = {
            ...defaultCommercialProperty,
            id: idNum,
            title: `Commercial Space ${idNum}`,
            price: `₹${1.2 + (idNum * 0.1)} Crores`
          };
        }
      }
      
      setProperty(foundProperty);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
        company: formData.company,
        propertyId: id,
        propertyTitle: property?.title,
        propertyType: property?.propertyType
      };

      console.log('Sending enquiry to API:', apiPayload);

      const response = await fetch('http://https://asrudra-backend-1.onrender.com/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: "", email: "", phoneNumber: "", message: "", company: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      try {
        const enquiries = JSON.parse(localStorage.getItem('propertyEnquiries') || '[]');
        const newEnquiry = {
          ...formData,
          propertyId: id,
          propertyTitle: property?.title,
          propertyType: property?.propertyType,
          id: Date.now(),
          timestamp: new Date().toISOString(),
          status: 'pending'
        };
        enquiries.push(newEnquiry);
        localStorage.setItem('propertyEnquiries', JSON.stringify(enquiries));
        setIsSuccess(true);
        setFormData({ fullName: "", email: "", phoneNumber: "", message: "", company: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('There was an error submitting your enquiry. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setShowLightbox(true);
    if (mediaItems[index].type === 'video') {
      setIsVideoPlaying(true);
    }
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (lightboxIndex + 1) % mediaItems.length;
    } else {
      newIndex = (lightboxIndex - 1 + mediaItems.length) % mediaItems.length;
    }
    setLightboxIndex(newIndex);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showLightbox) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
        case ' ':
          if (mediaItems[lightboxIndex]?.type === 'video') {
            e.preventDefault();
            toggleVideoPlayback();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox, lightboxIndex, mediaItems]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  if (!property) {
    return (
      <Layout>
        <div className="text-center py-20">
          <div className="bg-red-50 border-l-4 border-red-600 p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center">
              <Home className="h-5 w-5 text-red-600 mr-3" />
              <p className="text-sm text-red-700 font-medium">Property not found.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const isCommercial = property.propertyType === 'commercial';
  const pageTitle = `${property.title} | ${isCommercial ? 'Commercial Property' : 'Residential Property'} | EstateOasis`;
  const pageDescription = property.description;

  return (  
    <Layout>
      {/* Enhanced SEO Meta Tags */}
      <head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={property.seoKeywords?.join(', ') || `${property.type}, ${property.location}, ${isCommercial ? 'commercial property' : 'residential property'}, real estate`} />
        <meta property="og:title" content={property.title} />
        <meta property="og:description" content={property.description} />
        <meta property="og:image" content={property.images[0]} />
        <meta property="og:type" content={isCommercial ? 'business.property' : 'property'} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={property.title} />
        <meta name="twitter:description" content={property.description} />
        <meta name="twitter:image" content={property.images[0]} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": isCommercial ? "CommercialProperty" : "Residence",
            "name": property.title,
            "description": property.description,
            "price": property.price,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": property.location
            },
            "image": property.images,
            "video": property.video ? {
              "@type": "VideoObject",
              "name": `${property.title} Video Tour`,
              "description": `Video tour of ${property.title}`,
              "contentUrl": property.video,
              "thumbnailUrl": property.images[0]
            } : undefined,
            "rating": {
              "@type": "AggregateRating",
              "ratingValue": property.rating,
              "reviewCount": property.reviews
            },
            "floorSize": property.area,
            "numberOfRooms": property.bedrooms || 1,
            "yearBuilt": property.yearBuilt
          })}
        </script>
      </head>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <nav className="flex items-center space-x-2 text-sm text-slate-600">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link to={isCommercial ? "/office-spaces" : "/residential"} className="hover:text-blue-600">
                {isCommercial ? "Commercial" : "Residential"}
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">{property.title}</span>
            </nav>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Property Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Enhanced Media Gallery with 6 Images + 1 Video */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white rounded-xl shadow-lg overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Main Media Display */}
                      <div className="relative h-96 bg-black rounded-t-xl overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeMedia}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                          >
                            {mediaItems[activeMedia]?.type === 'video' ? (
                              <div className="relative w-full h-full">
                                <video
                                  ref={videoRef}
                                  src={mediaItems[activeMedia].url}
                                  className="w-full h-full object-cover cursor-pointer"
                                  onClick={toggleVideoPlayback}
                                  onPlay={() => setIsVideoPlaying(true)}
                                  onPause={() => setIsVideoPlaying(false)}
                                  poster={mediaItems[activeMedia].thumbnail}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  {!isVideoPlaying && (
                                    <motion.button
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      whileHover={{ scale: 1.1 }}
                                      onClick={toggleVideoPlayback}
                                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl backdrop-blur-sm"
                                    >
                                      <Play className="w-8 h-8" />
                                    </motion.button>
                                  )}
                                </div>
                                {isVideoPlaying && (
                                  <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={toggleVideoPlayback}
                                    className="absolute bottom-4 left-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                                  >
                                    <Pause className="w-5 h-5" />
                                  </motion.button>
                                )}
                              </div>
                            ) : (
                              <img
                                src={mediaItems[activeMedia]?.url}
                                alt={mediaItems[activeMedia]?.alt}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => openLightbox(activeMedia)}
                              />
                            )}
                          </motion.div>
                        </AnimatePresence>
                        
                        {/* Navigation Arrows */}
                        {mediaItems.length > 1 && (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setActiveMedia((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all"
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setActiveMedia((prev) => (prev + 1) % mediaItems.length)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </motion.button>
                          </>
                        )}

                        {/* Media Counter */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {activeMedia + 1} / {mediaItems.length}
                        </div>

                        {/* Price Badge */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-xl font-bold shadow-lg">
                          {property.price}
                        </div>

                        {/* Property Type Badge */}
                        <div className="absolute top-16 left-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                          {isCommercial ? 'Commercial' : 'Residential'}
                        </div>

                        {/* Property Badge */}
                        {property.badge && (
                          <div className="absolute top-28 left-4 bg-gradient-to-r from-green-600 to-green-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                            {property.badge}
                          </div>
                        )}

                        {/* Expand Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => openLightbox(activeMedia)}
                          className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                        >
                          <Expand className="w-5 h-5" />
                        </motion.button>
                      </div>

                      {/* Thumbnail Navigation - 6 Images + 1 Video */}
                      <div className="p-4 bg-slate-50">
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                          {mediaItems.map((item: MediaItem, index: number) => (
                            <motion.button
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setActiveMedia(index)}
                              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                activeMedia === index 
                                  ? 'border-blue-600 scale-105 shadow-md' 
                                  : 'border-transparent hover:border-blue-400'
                              }`}
                            >
                              {item.type === 'video' ? (
                                <div className="relative w-full h-full bg-slate-800 flex items-center justify-center">
                                  <img
                                    src={item.thumbnail}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover opacity-60"
                                  />
                                  <Video className="w-6 h-6 text-white absolute" />
                                  <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                              ) : (
                                <img
                                  src={item.url}
                                  alt={`nirala ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Property Details */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-white rounded-xl shadow-lg border-0">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-3xl font-bold text-slate-800">
                          {property.title}
                        </CardTitle>
                        <div className="flex items-center text-slate-600 mb-2 mt-2">
                          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                          <span className="text-lg">{property.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center bg-slate-100 px-3 py-2 rounded-full">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="ml-1 font-medium text-slate-800">
                            {property.rating}/5
                          </span>
                        </div>
                        <span className="text-slate-500">({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {isCommercial ? (
                        <>
                          <InfoCard 
                            icon={<Building2 className="w-6 h-6 text-blue-600" />} 
                            label="Property Type" 
                            value={property.type} 
                          />
                          <InfoCard 
                            icon={<Bath className="w-6 h-6 text-blue-600" />} 
                            label="Bathrooms" 
                            value={property.bathrooms} 
                          />
                          <InfoCard 
                            icon={<Car className="w-6 h-6 text-blue-600" />} 
                            label="Parking" 
                            value={property.parking} 
                          />
                          <InfoCard 
                            icon={<Ruler className="w-6 h-6 text-blue-600" />} 
                            label="Area" 
                            value={property.area} 
                          />
                        </>
                      ) : (
                        <>
                          <InfoCard 
                            icon={<Bed className="w-6 h-6 text-blue-600" />} 
                            label="Bedrooms" 
                            value={`${property.bedrooms} BHK`} 
                          />
                          <InfoCard 
                            icon={<Bath className="w-6 h-6 text-blue-600" />} 
                            label="Bathrooms" 
                            value={property.bathrooms} 
                          />
                          <InfoCard 
                            icon={<Car className="w-6 h-6 text-blue-600" />} 
                            label="Parking" 
                            value={property.parking} 
                          />
                          <InfoCard 
                            icon={<Ruler className="w-6 h-6 text-blue-600" />} 
                            label="Area" 
                            value={property.area} 
                          />
                        </>
                      )}
                    </div>

                    <Section title="Description">
                      <div className="text-slate-700 leading-relaxed text-lg space-y-4">
                        {property.description.split('\n\n').map((paragraph: string, index: number) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </Section>

                    {/* Developer Information Section */}
                    {property.developerInfo && (
                      <Section title="About the Developer">
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                          <div className="flex items-center mb-4">
                            <Award className="w-8 h-8 text-green-600 mr-3" />
                            <h3 className="text-2xl font-bold text-slate-800">{property.developerInfo.name}</h3>
                          </div>
                          
                          <div className="text-slate-700 leading-relaxed mb-6 space-y-3">
                            {property.developerInfo.description.split('\n\n').map((paragraph: string, index: number) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-3 flex items-center text-lg">
                                <Target className="w-5 h-5 text-green-600 mr-2" />
                                Key Strengths
                              </h4>
                              <ul className="space-y-2">
                                {property.developerInfo.keyStrengths.map((strength: string, idx: number) => (
                                  <li key={idx} className="flex items-center text-slate-600">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    {strength}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-3 flex items-center text-lg">
                                <Leaf className="w-5 h-5 text-green-600 mr-2" />
                                Company Commitment
                              </h4>
                              <ul className="space-y-2">
                                {property.developerInfo.commitment.map((item: string, idx: number) => (
                                  <li key={idx} className="flex items-center text-slate-600">
                                    <Clock className="w-4 h-4 mr-2 text-green-500" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Section>
                    )}

                    {/* Investment Highlights */}
                    {property.investmentHighlights && (
                      <Section title="Investment Highlights">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {property.investmentHighlights.map((highlight: string, idx: number) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                              <span className="text-slate-700 font-medium">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </Section>
                    )}

                    {/* Financial Details */}
                    {property.financialDetails && (
                      <Section title="Financial Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-slate-800 mb-3 text-lg">Payment & Banking</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center text-slate-600">
                                <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                                <strong>Payment Plan:</strong> {property.financialDetails.paymentPlan}
                              </li>
                              <li className="flex items-center text-slate-600">
                                <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                                <strong>Approved Banks:</strong> {property.financialDetails.banks.join(', ')}
                              </li>
                              <li className="flex items-center text-slate-600">
                                <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                                <strong>Possession:</strong> {property.financialDetails.possession}
                              </li>
                              {property.financialDetails.priceRange && (
                                <li className="flex items-center text-slate-600">
                                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                                  <strong>Price Range:</strong> {property.financialDetails.priceRange}
                                </li>
                              )}
                            </ul>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <h4 className="font-semibold text-slate-800 mb-3 text-lg">Project Scale</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center text-slate-600">
                                <Building2 className="w-4 h-4 mr-2 text-green-500" />
                                <strong>Total Units:</strong> {property.financialDetails.totalUnits}
                              </li>
                              <li className="flex items-center text-slate-600">
                                <Layers className="w-4 h-4 mr-2 text-green-500" />
                                <strong>Towers:</strong> {property.financialDetails.towers}
                              </li>
                              <li className="flex items-center text-slate-600">
                                <Home className="w-4 h-4 mr-2 text-green-500" />
                                <strong>Configurations:</strong> Multiple Options Available
                              </li>
                              <li className="flex items-center text-slate-600">
                                <Leaf className="w-4 h-4 mr-2 text-green-500" />
                                <strong>Developer:</strong> {property.developer}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Section>
                    )}

                    {/* Project Scale for Golden-I */}
                    {property.projectScale && (
                      <Section title="Project Scale">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6 text-center shadow-lg"
                          >
                            <Building2 className="w-8 h-8 mx-auto mb-3" />
                            <h4 className="font-bold text-lg mb-2">Project Area</h4>
                            <p className="text-2xl font-bold">{property.projectScale}</p>
                          </motion.div>
                          
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl p-6 text-center shadow-lg"
                          >
                            <Home className="w-8 h-8 mx-auto mb-3" />
                            <h4 className="font-bold text-lg mb-2">Surrounding Area</h4>
                            <p className="text-2xl font-bold">{property.surroundingDevelopment}</p>
                          </motion.div>
                          
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6 text-center shadow-lg"
                          >
                            <Users className="w-8 h-8 mx-auto mb-3" />
                            <h4 className="font-bold text-lg mb-2">Potential Customers</h4>
                            <p className="text-2xl font-bold">{property.potentialCustomerBase}</p>
                          </motion.div>
                          
                          <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-xl p-6 text-center shadow-lg"
                          >
                            <Target className="w-8 h-8 mx-auto mb-3" />
                            <h4 className="font-bold text-lg mb-2">Happy Customers</h4>
                            <p className="text-2xl font-bold">{property.customerTrust}</p>
                          </motion.div>
                        </div>
                      </Section>
                    )}

                    <Section title="Key Features">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {property.features.map((f: string, idx: number) => (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700 font-medium">{f}</span>
                          </motion.div>
                        ))}
                      </div>
                    </Section>

                    <Section title={isCommercial ? "Business Amenities" : "Amenities"}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(property.amenities).map(
                          ([category, items]: [string, string[]]) => (
                            <motion.div 
                              key={category} 
                              className="bg-slate-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-slate-200"
                              whileHover={{ y: -2 }}
                            >
                              <h4 className="font-semibold text-slate-800 mb-3 flex items-center text-lg">
                                {getAmenityIcon(category, isCommercial)}
                                <span className="ml-2">{category}</span>
                              </h4>
                              <ul className="space-y-2">
                                {items.map((item: string, i: number) => (
                                  <li key={i} className="flex items-center text-slate-600">
                                    <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )
                        )}
                      </div>
                    </Section>

                    {/* Location Advantages */}
                    {property.locationAdvantages && (
                      <Section title="Location Advantages">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {property.locationAdvantages.map((advantage: string, idx: number) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
                            >
                              <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-slate-700 font-medium">{advantage}</span>
                            </motion.div>
                          ))}
                        </div>
                      </Section>
                    )}

                    {/* Brochure Download */}
                    {property.brochure?.available && (
                      <Section title="Project Brochure">
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 text-center border border-blue-200">
                          <div className="max-w-md mx-auto">
                            <h4 className="font-semibold text-slate-800 mb-2 text-lg">Download Detailed Brochure</h4>
                            <p className="text-slate-600 mb-4">
                              Get complete project details, features, USPs, and amenities in our official brochure.
                            </p>
                            <motion.a
                              href={property.brochure.downloadLink}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                              download
                            >
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Download Brochure
                            </motion.a>


                          </div>
                        </div>
                      </Section>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar - Contact Form & Property Info */}
            <div className="space-y-6">
              {/* Contact Form */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="sticky top-6"
              >
                <Card className="bg-white rounded-xl shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      {isCommercial ? "Business Inquiry" : "Schedule a Viewing"}
                    </CardTitle>
                    <p className="text-slate-600 text-sm">
                      {isCommercial ? "Get commercial space details" : "Get more details or book a site visit"}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {isSuccess ? (
                      <div className="text-center py-6">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">Thank You!</h3>
                        <p className="text-slate-600">We'll contact you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                          <Label className="text-slate-700">Full Name *</Label>
                          <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-slate-400" />
                            </div>
                            <Input
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="Your name"
                              className="pl-10 text-slate-800"
                              required
                            />
                          </div>
                        </div>

                        {isCommercial && (
                          <div>
                            <Label className="text-slate-700">Company Name</Label>
                            <div className="relative mt-1">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building2 className="h-5 w-5 text-slate-400" />
                              </div>
                              <Input
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                placeholder="Your company"
                                className="pl-10 text-slate-800"
                              />
                            </div>
                          </div>
                        )}

                        <div>
                          <Label className="text-slate-700">Email *</Label>
                          <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-slate-400" />
                            </div>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder={isCommercial ? "company@example.com" : "your.email@example.com"}
                              className="pl-10 text-slate-800"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-slate-700">Phone *</Label>
                          <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-5 w-5 text-slate-400" />
                            </div>
                            <Input
                              value={formData.phoneNumber}
                              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                              placeholder="Your phone number"
                              className="pl-10 text-slate-800"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-slate-700">Message</Label>
                          <Textarea
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder={isCommercial ? "Your business requirements..." : "Any specific requirements or questions..."}
                            className="mt-1 text-slate-800"
                          />
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-6 text-lg font-semibold shadow-lg disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Submitting...
                              </>
                            ) : (
                              isCommercial ? 'Request Business Details' : 'Request Details'
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Property Details */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="bg-white rounded-xl shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      Property Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <InfoRow icon={<Building2 className="w-5 h-5 text-blue-600" />} label="Developer" value={property.developer} />
                    <InfoRow icon={<Calendar className="w-5 h-5 text-blue-600" />} label="Possession" value={property.possession} />
                    <InfoRow icon={<Layers className="w-5 h-5 text-blue-600" />} label="Total Floors" value={property.totalFloors} />
                    <InfoRow icon={<Home className="w-5 h-5 text-blue-600" />} label="Total Units" value={property.totalUnits} />
                    <InfoRow icon={<Ruler className="w-5 h-5 text-blue-600" />} label="Carpet Area" value={property.carpetArea} />
                    <InfoRow icon={<MapPin className="w-5 h-5 text-blue-600" />} label="Facing" value={property.facing} />
                    <InfoRow icon={<Eye className="w-5 h-5 text-blue-600" />} label="Status" value={property.status} />
                    <InfoRow icon={<Home className="w-5 h-5 text-blue-600" />} label="Type" value={property.type} />
                    {property.yearBuilt && (
                      <InfoRow icon={<Calendar className="w-5 h-5 text-blue-600" />} label="Year Built" value={property.yearBuilt} />
                    )}
                    {property.propertyAge && (
                      <InfoRow icon={<Eye className="w-5 h-5 text-blue-600" />} label="Property Age" value={property.propertyAge} />
                    )}
                    
                    {/* Commercial Specific Details */}
                    {isCommercial && property.floor && (
                      <InfoRow icon={<Layers className="w-5 h-5 text-blue-600" />} label="Floor" value={property.floor} />
                    )}
                    {isCommercial && property.leaseAvailable !== undefined && (
                      <InfoRow icon={<CheckCircle className="w-5 h-5 text-blue-600" />} label="Lease Available" value={property.leaseAvailable ? 'Yes' : 'No'} />
                    )}
                    {isCommercial && property.maintenance && (
                      <InfoRow icon={<Shield className="w-5 h-5 text-blue-600" />} label="Maintenance" value={property.maintenance} />
                    )}
                    
                    {/* Golden-I Specific Details */}
                    {property.projectScale && (
                      <InfoRow icon={<Building2 className="w-5 h-5 text-blue-600" />} label="Project Scale" value={property.projectScale} />
                    )}
                    {property.developmentStage && (
                      <InfoRow icon={<Target className="w-5 h-5 text-blue-600" />} label="Development Stage" value={property.developmentStage} />
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Location Map */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="bg-white rounded-xl shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      Location Map
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                        title={`Location of ${property.title}`}
                      ></iframe>
                    </div>
                    <div className="mt-4 text-center">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {showLightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Navigation Arrows */}
                {mediaItems.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => navigateLightbox('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 shadow-lg transition-all z-10"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => navigateLightbox('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 shadow-lg transition-all z-10"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </motion.button>
                  </>
                )}

                {/* Media Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {mediaItems[lightboxIndex]?.type === 'video' ? (
                    <div className="relative w-full max-w-4xl">
                      <video
                        ref={videoRef}
                        src={mediaItems[lightboxIndex].url}
                        className="w-full h-auto max-h-[80vh] rounded-lg"
                        controls
                        autoPlay
                      />
                    </div>
                  ) : (
                    <motion.img
                      key={lightboxIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={mediaItems[lightboxIndex]?.url}
                      alt={mediaItems[lightboxIndex]?.alt}
                      className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                  )}
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2 overflow-x-auto max-w-4xl px-4 py-2 bg-black/50 rounded-lg">
                    {mediaItems.map((item: MediaItem, index: number) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLightboxIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all ${
                          lightboxIndex === index 
                            ? 'border-blue-500 scale-110' 
                            : 'border-transparent hover:border-blue-300'
                        }`}
                      >
                        {item.type === 'video' ? (
                          <div className="relative w-full h-full bg-slate-800 rounded flex items-center justify-center">
                            <img
                              src={item.thumbnail}
                              alt="Video Thumbnail"
                              className="w-full h-full object-cover rounded opacity-60"
                            />
                            <Video className="w-4 h-4 text-white absolute" />
                          </div>
                        ) : (
                          <img
                            src={item.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover rounded"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Media Counter in Lightbox */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {lightboxIndex + 1} / {mediaItems.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </Layout>




  );
};

// {showBrochureForm && (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded-xl w-full max-w-md">
//       <h3 className="text-lg font-bold mb-4">Enter Details to Download</h3>

//       <form onSubmit={handleBrochureSubmit} className="space-y-3">

//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full border p-2 rounded"
//           value={formData.fullName}
//           onChange={(e) =>
//             setFormData({ ...formData, fullName: e.target.value })
//           }
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 rounded"
//           value={formData.email}
//           onChange={(e) =>
//             setFormData({ ...formData, email: e.target.value })
//           }
//         />

//         <input
//           type="tel"
//           placeholder="Phone Number"
//           className="w-full border p-2 rounded"
//           value={formData.phoneNumber}
//           onChange={(e) =>
//             setFormData({ ...formData, phoneNumber: e.target.value })
//           }
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded"
//         >
//           Submit & Download
//         </button>

//         <button
//           type="button"
//           onClick={() => setShowBrochureForm(false)}
//           className="w-full mt-2 text-gray-500"
//         >
//           Cancel
//         </button>

//       </form>
//     </div>
//   </div>
// )}



// Helper components
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
      {title}
    </h2>
    {children}
  </div>
);

const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <motion.div 
    whileHover={{ y: -3 }}
    className="flex flex-col items-center p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors border border-slate-200"
  >
    {icon}
    <div className="text-sm text-slate-600 mt-2">{label}</div>
    <div className="font-semibold text-slate-800 text-lg">{value}</div>
  </motion.div>
);

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string; value: string | number }) => (
  <div className="flex items-center">
    <div className="mr-3">
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="font-medium text-slate-800">{value}</div>
    </div>
  </div>
);

const getAmenityIcon = (category: string, isCommercial: boolean) => {
  if (isCommercial) {
    switch (category) {
      case 'Business':
        return <Briefcase className="w-5 h-5 text-blue-600" />;

      case 'Technology':
        return <Wifi className="w-5 h-5 text-blue-600" />;
      case 'Services':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'Facilities':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'Mall Facilities':
        return <Coffee className="w-5 h-5 text-blue-600" />;
      case 'Studio Features':
        return <Monitor className="w-5 h-5 text-blue-600" />;
      case 'Location':
        return <MapPin className="w-5 h-5 text-blue-600" />;
      case 'Utilities':
        return <Shield className="w-5 h-5 text-blue-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  } else {
    switch (category) {
      case 'Security':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Lifestyle':
        return <CupSoda className="w-5 h-5 text-blue-600" />;
      case 'Sports':
        return <Dumbbell className="w-5 h-5 text-blue-600" />;
      case 'Luxury':
        return <Star className="w-5 h-5 text-blue-600" />;
      case 'Convenience':
        return <Wifi className="w-5 h-5 text-blue-600" />;
      case 'Community':
        return <TreePine className="w-5 h-5 text-blue-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  }
};

// Default properties with enhanced data
const defaultResidentialProperty: Property = {
  id: 0,
  title: "Premium Residential Property",
  price: "₹75 Lakhs",
  location: "Prime Location, City",
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop"
  ],
  video: "https://assets.mixkit.co/videos/preview/mixkit-a-residential-building-44737-large.mp4",
  videoThumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  area: "1200 sq ft",
  rating: 4.5,
  reviews: 100,
  description: "Beautiful residential property with modern amenities and premium features.",
  features: ["Modern Design", "Quality Construction", "Good Location", "Amenities"],
  amenities: {
    'Security': ["24/7 Security", "CCTV"],
    'Lifestyle': ["Basic Amenities", "Garden"],
    'Convenience': ["Power Backup", "Water Supply"]
  },
  developer: "Reputed Builder",
  possession: "Ready to Move",
  totalFloors: 10,
  totalUnits: 50,
  carpetArea: "1100 sq ft",
  facing: "North",
  badge: "Standard",
  status: "For Sale",
  type: "Apartment",
  propertyType: "residential",
  seoKeywords: ["residential property", "apartment", "premium housing"],
  virtualTour: "https://example.com/virtual-tour",
  yearBuilt: 2021,
  propertyAge: "3 Years"
};

const defaultCommercialProperty: Property = {
  id: 0,
  title: "Premium Commercial Space",
  price: "₹1.2 Crores",
  location: "Business District, City",
  images: [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448205-97abe3a22b63?w=800&h=600&fit=crop"
  ],
  video: "https://assets.mixkit.co/videos/preview/mixkit-modern-office-space-44735-large.mp4",
  videoThumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
  bathrooms: 2,
  parking: 5,
  area: "1500 sq ft",
  rating: 4.3,
  reviews: 80,
  description: "Premium commercial space suitable for offices, retail, or studio use. Great location with excellent connectivity.",
  features: ["Prime Location", "Modern Facilities", "Good Connectivity", "Business Ready"],
  amenities: {
    'Business': ["Basic Facilities", "Parking"],
    'Location': ["Good Connectivity", "Accessible"],
    'Utilities': ["Power Backup", "Water Supply"]
  },
  developer: "Commercial Developers",
  possession: "Ready to Move",
  totalFloors: 8,
  totalUnits: 20,
  carpetArea: "1400 sq ft",
  facing: "Main Road",
  badge: "Commercial",
  status: "For Sale",
  type: "Commercial Space",
  propertyType: "commercial",
  seoKeywords: ["commercial property", "office space", "business space"],
  virtualTour: "https://example.com/virtual-tour",
  yearBuilt: 2020,
  propertyAge: "4 Years"
};

export default PropertyDetail;
