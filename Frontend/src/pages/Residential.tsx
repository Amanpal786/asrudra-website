import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Home, Star, ChevronDown, ChevronUp } from 'lucide-react';

const Residential = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [bedrooms, setBedrooms] = useState<number[]>([]);
  const [developers, setDevelopers] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const residentialProperties = [
    {
      "id": 6,
      "title": "Nirala Estate",
      "location": "GH - 04, Techzone 4, Greater Noida",
      "price": " ₹90.57 L - 2.31 Cr",
      "type": "residential",
      "bedrooms": 3,
      "bathrooms": 2,
      "area": "1250 sq ft",
      "image": "https://www.nirala-estate.in/img/nirala-estate-1.jpg",
      "features": ["Swimming Pool", "Gymnasium", "Club House", "Parking"],
      "amenities": {
        "Lifestyle": ["Landscaped Gardens", "Party Hall"],
        "Security": ["24/7 CCTV Surveillance", "Guarded Gates"]
      },
      "rating": 4.5,
      "developer": "Nirala World",
      "possession": "Ready to Move",
      "approvals": ["HMDA Approved", "RERA Registered"],
      "popularity": 95,
      "dateAdded": "2024-01-15"
    },
    {
      "id": 8,
      "title": "FORBES",
      "location": "Gurgaon Sector 70",
      "price": "₹1.44 cr - 1.65 cr",
      "type": "residential",
      "bedrooms": 3,
      "bathrooms": 3,
      "area": "1850 sq ft",
      "image": "https://tse1.mm.bing.net/th/id/OIP.gLvtvuLWz0yjckLNiYT3YgHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
      "features": ["Clubhouse", "Jogging Track", "Tennis Court"],
      "amenities": {
        "Sports": ["Badminton Court", "Swimming Pool"],
        "Community": ["Amphitheater", "Senior Citizen Zone"]
      },
      "rating": 4.7,
      "developer": "Nirala",
      "possession": "Dec 2025",
      "approvals": ["RERA Approved", "Banks Approved"],
      "popularity": 92,
      "dateAdded": "2024-02-20"
    },
    // {
    //   "id": 10,
    //   "title": "La Residentia Grande",
    //   "location": "Noida Expressway",
    //   "price": "61.6 L - 1.45 cr",
    //   "type": "residential",
    //   "bedrooms": 4,
    //   "bathrooms": 4,
    //   "area": "3200 sq ft",
    //   "image": "https://manavproperties.com/wp-content/uploads/2025/04/Site-Photos-36-Vihaan-Greens-Noida-5027531_1505_2000-23.jpg",
    //   "features": ["Private Terrace", "Home Automation", "Servant Room"],
    //   "amenities": {
    //     "Luxury": ["Concierge Service", "Infinity Pool"],
    //     "Security": ["Biometric Access", "Patrol Guards"]
    //   },
    //   "rating": 4.9,
    //   "developer": "La Residentia",
    //   "possession": "Mar 2026",
    //   "approvals": ["RERA Approved", "OC Received"],
    //   "popularity": 98,
    //   "dateAdded": "2024-03-10"
    // },
    {
      "id": 12,
      "title": "Sikka Kaamya Greens",
      "location": "Bangalore Whitefield",
      "price": "1.04 - 2.25 Cr",
      "type": "residential",
      "bedrooms": 3,
      "bathrooms": 3,
      "area": "2100 sq ft",
      "image": "https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-36-Sikka-Kaamya-Greens-Noida-5070349_600_800_310_462.jpg",
      "features": ["Sky Lounge", "Yoga Deck", "Kids Play Area"],
      "amenities": {
        "Wellness": ["Spa", "Meditation Zone"],
        "Convenience": ["EV Charging", "Pet Park"]
      },
      "rating": 4.8,
      "developer": "Sikka",
      "possession": "Ready to Move",
      "approvals": ["RERA Approved", "BBMP Approved"],
      "popularity": 96,
      "dateAdded": "2024-01-25"
    },
    {
      "id": 14,
      "title": "CRC MAESTA",
      "location": "Greater Noida West",
      "price": "70 L - 2.38 Cr",
      "type": "residential",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": "1200 sq ft",
      "image": "https://th.bing.com/th/id/OIP.whRg_l4aGA03_pq8XMGDjQHaEH?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "features": ["Affordable Luxury", "Green Spaces", "Power Backup"],
      "amenities": {
        "Community": ["Retail Shops", "Community Hall"],
        "Connectivity": ["Shuttle Service", "Near Metro"]
      },
      "rating": 4.4,
      "developer": "Nirala",
      "possession": "Oct 2024",
      "approvals": ["RERA Approved", "Bank Approved"],
      "popularity": 88,
      "dateAdded": "2024-02-15"
    },
    // {
    //   "id": 22,
    //   "title": "Godrej Nature's Basket",
    //   "location": "Mumbai Bandra",
    //   "price": "₹4.5 Crores",
    //   "type": "residential",
    //   "bedrooms": 4,
    //   "bathrooms": 4,
    //   "area": "2800 sq ft",
    //   "image": "https://tse1.mm.bing.net/th/id/OIP.isA9KiS-amp5OSJXAcZxIAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    //   "features": ["Sea View", "Private Garden", "Smart Home"],
    //   "amenities": {
    //     "Luxury": ["Infinity Pool", "Private Theater"],
    //     "Services": ["Concierge", "Valet Parking"]
    //   },
    //   "rating": 4.9,
    //   "developer": "Godrej",
    //   "possession": "Ready to Move",
    //   "approvals": ["RERA Approved", "MCGM Approved"],
    //   "popularity": 99,
    //   "dateAdded": "2024-03-01"
    // },
    {
      "id": 16,
      "title": "Sobha Dream Gardens",
      "location": "Bangalore Sarjapur",
      "price": "₹ 67.68 L - 1.03 Cr",
      "type": "residential",
      "bedrooms": 3,
      "bathrooms": 3,
      "area": "1950 sq ft",
      "image": "https://sobhaapartments.com/wp-content/uploads/2022/06/Sobha-Dream-Garden-Images-10.jpg",
      "features": ["Vastu Compliant", "Landscaped Gardens", "Clubhouse"],
      "amenities": {
        "Sports": ["Tennis Court", "Basketball Court"],
        "Community": ["Amphitheater", "Senior Citizen Area"]
      },
      "rating": 4.7,
      "developer": "Sobha",
      "possession": "Jun 2025",
      "approvals": ["RERA Approved", "BBMP Approved"],
      "popularity": 94,
      "dateAdded": "2024-02-28"
    },
    {
      "id": 18,
      "title": "Sikka Premium Towers",
      "location": "Noida Extention",
      "price": "₹33.28 Lac - 1.00 Crs",
      "type": "residential",
      "bedrooms": 5,
      "bathrooms": 5,
      "area": "3800 sq ft",
      "image": "https://www.sikka.in/assets/images/slide-4.jpg",
      "features": ["Private Elevator", "Home Theater", "Servant Quarters"],
      "amenities": {
        "Exclusive": ["Wine Cellar", "Library Lounge"],
        "Services": ["Butler Service", "Car Wash Bay"]
      },
      "rating": 4.9,
      "developer": "Sikka",
      "possession": "Dec 2026",
      "approvals": ["RERA Approved", "DTCP Approved"],
      "popularity": 97,
      "dateAdded": "2024-03-05"
    },
// {
//   "id": 30,
//   "title": "NX1 ARC Tower 5",
//   "location": "Noida Extension, Greater Noida West",
//   "price": "₹70 - 80 Lakhs",
//   "type": "commercial",
//   "bathrooms": 2,
//   "area": "856 sq ft",
//   "image": "/Team Photo/nx one 1.jpg",
//   "features": [
//     "Luxury Office Spaces",
//     "Modern Glass Elevation",
//     "High-Speed Elevators",
//     "Conference Rooms",
//     "Power Backup",
//     "Premium Business Environment"
//   ],
//   "amenities": {
//     "Security": ["24x7 Security", "CCTV Surveillance"],
//     "Business": ["Conference Hall", "Meeting Rooms"],
//     "Infrastructure": ["Power Backup", "Ample Parking"],
//     "Technology": ["Fiber Internet", "Smart Building"]
//   },
//   "rating": 4.8,
//   "developer": "DAH Greentech Group",
//   "possession": "Ready to Move",
//   "approvals": ["RERA Approved", "GNIDA Approved"],
//   "popularity": 95,
//   "dateAdded": "2024-05-15",
//   "rent": "₹40,000 / month",
//   "badge": "New Launch"
// },


    {
      "id": 20,
      "title": "Godrej Air",
      "location": "Delhi Golf Course Road",
      "price": "₹2.29cr - 6.24cr",
      "type": "residential",
      "bedrooms": 5,
      "bathrooms": 5,
      "area": "4200 sq ft",
      "image": "https://res.cloudinary.com/jll-global-gdim/image/upload/IN/Horizon/Resi/Prod/JLL_Ggn_Godrej_Air_27_ELV_primary.jpg",
      "features": ["Panoramic City Views", "Smart Automation", "Private Terrace"],
      "amenities": {
        "Luxury": ["Infinity Pool", "Private Spa"],
        "Security": ["Biometric Access", "24/7 Security"]
      },
      "rating": 4.9,
      "developer": "Godrej",
      "possession": "Mar 2027",
      "approvals": ["RERA Approved", "MCD Approved"],
      "popularity": 99,
      "dateAdded": "2024-03-12"
    },
    {
      "id": 24,
      "title": "Sobha Silicon Oasis",
      "location": "Bangalore Electronic City",
      "price": "₹2.07 - 4.03 Cr",
      "type": "residential",
      "bedrooms": 3,
      "bathrooms": 2,
      "area": "1650 sq ft",
      "image": "https://im.proptiger.com/1/653263/6/silicon-oasis-images-for-elevation-of-sobha-silicon-oasis-923554.jpeg?width=1336&height=768",
      "features": ["IT Corridor Location", "Modern Design", "Green Building"],
      "amenities": {
        "Convenience": ["Shopping Arcade", "Food Court"],
        "Recreation": ["Swimming Pool", "Gymnasium"]
      },
      "rating": 4.6,
      "developer": "Sobha",
      "possession": "Aug 2025",
      "approvals": ["RERA Approved", "Green Building Certified"],
      "popularity": 91,
      "dateAdded": "2024-02-10"
    },
    {
      "id": 26,
      "title": "La Residentia Urban",
      "location": "Pune Kharadi",
      "price": "₹ 61.6 L - 1.45 Cr",
      "type": "residential",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": "1100 sq ft",
      "image": "https://newprojects.99acres.com/projects/3c/La_Residentia/images/h12.jpg",
      "features": ["Compact Luxury", "City Views", "Modern Interiors"],
      "amenities": {
        "Community": ["Rooftop Garden", "Community Hall"],
        "Convenience": ["Retail Spaces", "Cafeteria"]
      },
      "rating": 4.5,
      "developer": "La Residentia",
      "possession": "Ready to Move",
      "approvals": ["RERA Approved", "PMC Approved"],
      "popularity": 89,
      "dateAdded": "2024-01-20"
    },
    // {
    //   "id": 28,
    //   "title": "Nirala Estate Premium",
    //   "location": "Chennai OMR",
    //   "price": "₹1.45 - 2.21cr ",
    //   "type": "residential",
    //   "bedrooms": 4,
    //   "bathrooms": 3,
    //   "area": "2200 sq ft",
    //   "image": "https://th.bing.com/th/id/R.8297efd4eb99a0fb9a0f49787a779be9?rik=5aFoZ0iQegZg0g&riu=http%3a%2f%2fwww.niralaestate.net.in%2fnirala-estate-phase-2%2fimages%2fgallery%2f3actual-construction-update-image-gallery-of-nirala-estate-phase-2.jpg&ehk=JnSwiIEz2rHAaWfQqngxSyJ6OE7OsdA9n4kqLBla4%2fU%3d&risl=&pid=ImgRaw&r=0",
    //   "features": ["IT Park Proximity", "Premium Finishes", "Large Balconies"],
    //   "amenities": {
    //     "Lifestyle": ["Clubhouse", "Swimming Pool"],
    //     "Sports": ["Tennis Court", "Cricket Practice Nets"]
    //   },
    //   "rating": 4.7,
    //   "developer": "Nirala",
    //   "possession": "Dec 2025",
    //   "approvals": ["RERA Approved", "CMDA Approved"],
    //   "popularity": 93,
    //   "dateAdded": "2024-03-08"
    // }
  ];

  const developersList = [...new Set(residentialProperties.map(p => p.developer))];
  const bedroomOptions = [1, 2, 3, 4, 5];

  const sortProperties = (properties: any[], sortBy: string) => {
    switch (sortBy) {
      case 'price-low':
        return [...properties].sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\sLakhsCrores]/g, '')) * (a.price.includes('Crores') ? 10000000 : 100000);
          const priceB = parseFloat(b.price.replace(/[₹,\sLakhsCrores]/g, '')) * (b.price.includes('Crores') ? 10000000 : 100000);
          return priceA - priceB;
        });
      case 'price-high':
        return [...properties].sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\sLakhsCrores]/g, '')) * (a.price.includes('Crores') ? 10000000 : 100000);
          const priceB = parseFloat(b.price.replace(/[₹,\sLakhsCrores]/g, '')) * (b.price.includes('Crores') ? 10000000 : 100000);
          return priceB - priceA;
        });
      case 'popularity':
        return [...properties].sort((a, b) => b.popularity - a.popularity);
      case 'newest':
        return [...properties].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
      case 'rating':
        return [...properties].sort((a, b) => b.rating - a.rating);
      default:
        return properties;
    }
  };

  const filterProperties = (properties: any[]) => {
    return properties.filter(property => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.developer.toLowerCase().includes(searchQuery.toLowerCase());

      // Price filter
      const propertyPrice = parseFloat(property.price.replace(/[₹,\sLakhsCrores]/g, '')) * 
        (property.price.includes('Crores') ? 10000000 : 100000);
      const matchesPrice = propertyPrice >= priceRange[0] && propertyPrice <= priceRange[1];

      // Bedrooms filter
      const matchesBedrooms = bedrooms.length === 0 || bedrooms.includes(property.bedrooms);

      // Developer filter
      const matchesDevelopers = developers.length === 0 || developers.includes(property.developer);

      return matchesSearch && matchesPrice && matchesBedrooms && matchesDevelopers;
    });
  };

  const filteredProperties = filterProperties(residentialProperties);
  const sortedProperties = sortProperties(filteredProperties, sortBy);

  const toggleBedroom = (bedroom: number) => {
    setBedrooms(prev => 
      prev.includes(bedroom) 
        ? prev.filter(b => b !== bedroom)
        : [...prev, bedroom]
    );
  };

  const toggleDeveloper = (developer: string) => {
    setDevelopers(prev =>
      prev.includes(developer)
        ? prev.filter(d => d !== developer)
        : [...prev, developer]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 50000000]);
    setBedrooms([]);
    setDevelopers([]);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-sky-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-sky-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-sky-300 rounded-full animate-pulse delay-75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-sky-900 mb-6 leading-tight">
              Premium <span className="text-sky-600">Residential</span> Properties
            </h1>
            <p className="text-xl md:text-2xl text-sky-800 max-w-4xl mx-auto leading-relaxed">
              Discover luxury living with India's top developers - Nirala, Sikka, Godrej, Sobha, and La Residentia
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400 w-6 h-6" />
              <Input
                type="text"
                placeholder="Search by project name, location, or developer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-sky-200 rounded-2xl focus:border-sky-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in delay-150">
            {[
              { label: 'Total Projects', value: residentialProperties.length },
              { label: 'Top Developers', value: developersList.length },
              { label: 'Cities', value: 6 },
              { label: 'Happy Families', value: '5000+' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-sky-600 mb-2">{stat.value}</div>
                <div className="text-sky-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          {/* Filters and Sort Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="flex items-center space-x-2 border-sky-500 text-sky-500 hover:bg-sky-50"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
              
              {(searchQuery || bedrooms.length > 0 || developers.length > 0) && (
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  className="text-sky-600 hover:text-sky-800 hover:bg-sky-100"
                >
                  Clear All
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sky-700">
                <span className="font-semibold text-sky-600">{sortedProperties.length}</span> properties found
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-sky-700">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-white border-sky-300 focus:border-sky-500">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-sky-300">
                    <SelectItem value="relevance" className="hover:bg-sky-50 focus:bg-sky-50 text-sky-700">Relevance</SelectItem>
                    <SelectItem value="price-low" className="hover:bg-sky-50 text-sky-700">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="hover:bg-sky-50 text-sky-700">Price: High to Low</SelectItem>
                    <SelectItem value="popularity" className="hover:bg-sky-50 text-sky-700">Popularity</SelectItem>
                    <SelectItem value="newest" className="hover:bg-sky-50 text-sky-700">Newest First</SelectItem>
                    <SelectItem value="rating" className="hover:bg-sky-50 text-sky-700">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white rounded-2xl p-6 mb-8 animate-slide-down border border-sky-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-sky-900 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="50000000"
                      step="1000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-sky-500"
                    />
                    <div className="flex justify-between text-sm text-sky-700">
                      <span>₹0</span>
                      <span>₹5 Cr+</span>
                    </div>
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <h3 className="font-semibold text-sky-900 mb-4">Bedrooms</h3>
                  <div className="flex flex-wrap gap-2">
                    {bedroomOptions.map(bedroom => (
                      <Badge
                        key={bedroom}
                        variant={bedrooms.includes(bedroom) ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-2 ${
                          bedrooms.includes(bedroom)
                            ? 'bg-sky-500 text-white hover:bg-sky-600'
                            : 'border-sky-500 text-sky-500 hover:bg-sky-50'
                        }`}
                        onClick={() => toggleBedroom(bedroom)}
                      >
                        {bedroom} BHK
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Developers */}
                <div>
                  <h3 className="font-semibold text-sky-900 mb-4">Developers</h3>
                  <div className="flex flex-wrap gap-2">
                    {developersList.map(developer => (
                      <Badge
                        key={developer}
                        variant={developers.includes(developer) ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-2 ${
                          developers.includes(developer)
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'border-blue-500 text-blue-500 hover:bg-blue-50'
                        }`}
                        onClick={() => toggleDeveloper(developer)}
                      >
                        {developer}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Filters */}
          {(bedrooms.length > 0 || developers.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
              {bedrooms.map(bedroom => (
                <Badge key={bedroom} variant="secondary" className="bg-sky-100 text-sky-800 border-sky-200">
                  {bedroom} BHK
                </Badge>
              ))}
              {developers.map(developer => (
                <Badge key={developer} variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  {developer}
                </Badge>
              ))}
            </div>
          )}

          {/* Properties Grid */}
          {sortedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProperties.map((property, index) => (
                <div 
                  key={property.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PropertyCard 
                    property={property} 
                    cardClassName="bg-white border border-sky-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    iconColor="text-sky-500"
                    textColor="text-sky-900"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <Home className="w-24 h-24 text-sky-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-sky-600 mb-2">No properties found</h3>
              <p className="text-sky-500 mb-6">Try adjusting your filters or search criteria</p>
              <Button onClick={clearFilters} className="bg-sky-500 hover:bg-sky-600 text-white">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Developer Showcase */}
          <div className="mt-20 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-sky-900 mb-12">
              Trusted by India's <span className="text-sky-600">Leading Developers</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {developersList.map((developer, index) => (
                <div 
                  key={developer}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-sky-900 text-lg">{developer}</h3>
                  <p className="text-sm text-sky-600 mt-2">
                    {residentialProperties.filter(p => p.developer === developer).length} Projects
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-150">
            Connect with our property experts and get personalized assistance in finding the perfect residential property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 text-lg px-8 py-4">
              Schedule Site Visit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 py-4">
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Residential;