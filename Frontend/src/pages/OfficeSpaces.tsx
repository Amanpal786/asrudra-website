import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Building2, Star, ChevronDown, ChevronUp, Eye } from 'lucide-react';

const Commercial = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [developers, setDevelopers] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const commercialProperties = [
    {
      "id": 1,
      "title": "Nx-One Office Space",
      "location": " Techzone IV, Amprapali Dream Valley, Greater Noida",
      "price": "₹ 1 Crores",
      "type": "office",
      "bedrooms": 0,
      "bathrooms": "comman toilet",
      "area": "856 sq.ft",
      "image": "/public/Team Photo/nx one 1.jpg",
      "features": ["Premium Corporate Space", "High-Speed Internet", "Meeting Rooms", "Cafeteria"],
      "amenities": {
        "Business": ["Conference Hall", "Video Conferencing"],
        "Facilities": ["24/7 Power Backup", "Advanced Security"]
      },
      "rating": 4.8,
      "developer": "Nx-One",
      "possession": "Ready to Move",
      "approvals": ["RERA Approved", "NOIDA Authority"],
      "popularity": 96,
      "dateAdded": "2024-01-15"
    },
    {
      "id":3,
      "title": "Golden I",
      "location": "Techzone IV, Amprapali Dream Valley, Greater Noida",
      "price": "₹42 Lakh",
      "type": "office",
      "bedrooms": 0,
      "bathrooms":"comman toilet",
      "area": "(400-10000)sq ft",
      "image": "/public/Team Photo/golden i.jpg",
      "features": ["Intelligent Building", "Smart Office Solutions", "Flexible Workspaces", "Premium Finishes"],
      "amenities": {
        "Technology": ["IoT Integration", "Smart Access Control"],
        "Luxury": ["Landscaped Terraces", "Premium Clubhouse"]
      },
      "rating": 4.9,
      "developer": "Golden Group",
      "possession": "Mar 2025",
      "approvals": ["RERA Approved", "MCGM Approved"],
      "popularity": 97,
      "dateAdded": "2024-03-10"
    },

    {
      "id": 5,
      "title":"Apex Park Square",
      "location":"Sector 16B, Greater Noida (West)",
      "price":"₹30 LAKH - ₹1.45 Crores",
      "type":"Studio ",
      "bedrooms": 1,
      "bathrooms": 1,
      "area": "3800 sq ft",
      "image": "/public/Team Photo/apex.jpg",
      "features": ["IT Park Location", "Green Building Certified", "Modern Infrastructure", "Scalable Spaces"],
      "amenities": {
        "Sustainability": ["LEED Certified", "Rainwater Harvesting"],
        "Community": ["Food Court", "Retail Arcade"]
      },
      "rating": 4.6,
      "developer": "Apex Group",
      "possession": "Ready to Move",
      "approvals": ["RERA Approved", "BBMP Approved"],
      "popularity": 94,
      "dateAdded": "2024-02-15"
    },
    {
      "id": 7,
      "title": "Golden Grande Premium",
      "location": "Techzone IV,Amprapali Dream Valley,Greater Noida",
      "price": "₹ 50 Lakh ",
      "type": "office",
      "bedrooms": 0,
      "bathrooms": "comman",
      "area": "520 sq ft",
      "image": "/public/Team Photo/golden grande.jpg",
      "features": ["Corporate Headquarters", "Customizable Floors", "Premium Lobbies", "Executive Elevators"],
      "amenities": {
        "Exclusive": ["Private Terraces", "Executive Dining"],
        "Services": ["24/7 Facility Management", "IT Support"]
      },
      "rating": 4.9,
      "developer": "Golden Group",
      "possession": "Sep 2025",
      "approvals": ["RERA Approved", "DTCP Approved"],
      "popularity": 99,
      "dateAdded": "2024-02-28"
    },
    {
      "id": 9,
      "title": "Apex Park Square",
      "location": "Sector 16B, Greater Noida (West)",
      "price": "₹30 Lakh - ₹1.45 crores",
      "type": "office space",
      "bedrooms": 0,
      "bathrooms": "comman",
      "area": "120sq.ft-3200sq ft",
      "image": "/public/Team Photo/apex.jpg",
      "features": ["IT/ITES Ready", "Plug-and-Play Offices", "Conference Facilities", "Ample Parking"],
      "amenities": {
        "Business": ["Training Center", "Meeting Rooms"],
        "Convenience": ["Banking Facility", "Medical Room"]
      },
      "rating": 4.5,
      "developer": "Apex Group",
      "possession": "Aug 2024",
      "approvals": ["RERA Approved", "PMC Approved"],
      "popularity": 92,
      "dateAdded": "2024-03-12"
    },
    {
      "id": 11,
      "title": "ATS Kabana High",
      "location": "Techzone IV,Amprapali Dream Valley,Greater Noida",
      "price": "₹47 Lakhs",
      "type": "office and retail shops",
      "bedrooms": 0,
      "bathrooms": "comman toilet",
      "area": "171sq ft",
      "image": "public/Team Photo/ATS 1.png",
      "features": ["Tech-Enabled Campus", "Collaborative Workspaces", "Innovation Labs", "Dedicated IT Infrastructure"],
      "amenities": {
        "Innovation": ["Incubation Center", "R&D Facilities"],
        "Recreation": ["Sports Complex", "Entertainment Zone"]
      },
      "rating": 4.8,
      "developer": "ATS GROUP",
      "possession": "2027",
      "approvals": ["RERA Approved", "STPI Approved"],
      "popularity": 97,
      "dateAdded": "2019-01-20"
    },
    // More odd ID properties can be added here
    {
      "id": 13,
      "title": "Tech Hub Office Space",
      "location": "Hyderabad HITEC City",
      "price": "₹4.2 Crores",
      "type": "office",
      "bedrooms": 0,
      "bathrooms": 6,
      "area": "4500 sq ft",
      "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "features": ["IT Park Location", "Modern Infrastructure", "Conference Rooms", "Cafeteria"],
      "amenities": {
        "Business": ["Meeting Rooms", "Video Conferencing"],
        "Facilities": ["Power Backup", "Security"]
      },
      "rating": 4.7,
      "developer": "Tech Developers",
      "possession": "Ready to Move",
      "approvals": ["RERA Approved", "HMDA Approved"],
      "popularity": 95,
      "dateAdded": "2024-03-15"
    },
    {
      "id": 15,
      "title": "Corporate Business Center",
      "location": "Chennai OMR",
      "price": "₹3.8 Crores",
      "type": "office",
      "bedrooms": 0,
      "bathrooms": 5,
      "area": "4000 sq ft",
      "image": "https://images.unsplash.com/photo-1600607687989-c8baf9dd6a91",
      "features": ["IT Corridor", "Custom Interiors", "Premium Facilities", "Dedicated Support"],
      "amenities": {
        "Professional": ["Business Lounge", "Client Meeting Rooms"],
        "Facilities": ["Cafeteria", "Fitness Center"]
      },
      "rating": 4.6,
      "developer": "Corporate Builders",
      "possession": "Ready to Move",
      "approvals": ["RERA Approved", "CMDA Approved"],
      "popularity": 93,
      "dateAdded": "2024-02-10"
    }
  ];

  const developersList = [...new Set(commercialProperties.map(p => p.developer))];
  const propertyTypes = ["office", "retail", "industrial", "mixed-use"];

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
      case 'area':
        return [...properties].sort((a, b) => {
          const areaA = parseFloat(a.area.replace(' sq ft', ''));
          const areaB = parseFloat(b.area.replace(' sq ft', ''));
          return areaB - areaA;
        });
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

      // Property type filter
      const matchesPropertyType = propertyType.length === 0 || propertyType.includes(property.type);

      // Developer filter
      const matchesDevelopers = developers.length === 0 || developers.includes(property.developer);

      return matchesSearch && matchesPrice && matchesPropertyType && matchesDevelopers;
    });
  };

  const filteredProperties = filterProperties(commercialProperties);
  const sortedProperties = sortProperties(filteredProperties, sortBy);

  const togglePropertyType = (type: string) => {
    setPropertyType(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
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
    setPriceRange([0, 100000000]);
    setPropertyType([]);
    setDevelopers([]);
  };

  // Function to check if property ID is odd
  const isOddId = (id: number) => id % 2 !== 0;

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300 rounded-full animate-pulse delay-75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
              Premium <span className="text-blue-600">Commercial</span> Properties
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 max-w-4xl mx-auto leading-relaxed">
              Discover premium office spaces from India's top developers - Nx-One, Golden Group, ATS, and Apex Group
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-6 h-6" />
              <Input
                type="text"
                placeholder="Search by project name, location, or developer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-blue-200 rounded-2xl focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in delay-150">
            {[
              { label: 'Total Properties', value: commercialProperties.length },
              { label: 'Premium Developers', value: developersList.length },
              { label: 'Cities Covered', value: 8 },
              { label: 'Corporate Clients', value: '1200+' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-blue-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          {/* Filters and Sort Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="flex items-center space-x-2 border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
              
              {(searchQuery || propertyType.length > 0 || developers.length > 0) && (
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                >
                  Clear All
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-blue-700">
                <span className="font-semibold text-blue-600">{sortedProperties.length}</span> properties found
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-blue-700">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-white border-blue-300 focus:border-blue-500">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-blue-300">
                    <SelectItem value="relevance" className="hover:bg-blue-50 focus:bg-blue-50 text-blue-700">Relevance</SelectItem>
                    <SelectItem value="price-low" className="hover:bg-blue-50 text-blue-700">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="hover:bg-blue-50 text-blue-700">Price: High to Low</SelectItem>
                    <SelectItem value="area" className="hover:bg-blue-50 text-blue-700">Largest Area</SelectItem>
                    <SelectItem value="popularity" className="hover:bg-blue-50 text-blue-700">Popularity</SelectItem>
                    <SelectItem value="newest" className="hover:bg-blue-50 text-blue-700">Newest First</SelectItem>
                    <SelectItem value="rating" className="hover:bg-blue-50 text-blue-700">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white rounded-2xl p-6 mb-8 animate-slide-down border border-blue-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100000000"
                      step="5000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                    />
                    <div className="flex justify-between text-sm text-blue-700">
                      <span>₹0</span>
                      <span>₹10 Cr+</span>
                    </div>
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4">Property Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {propertyTypes.map(type => (
                      <Badge
                        key={type}
                        variant={propertyType.includes(type) ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-2 ${
                          propertyType.includes(type)
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'border-blue-500 text-blue-500 hover:bg-blue-50'
                        }`}
                        onClick={() => togglePropertyType(type)}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Developers */}
                <div>
                  <h3 className="font-semibold text-blue-900 mb-4">Developers</h3>
                  <div className="flex flex-wrap gap-2">
                    {developersList.map(developer => (
                      <Badge
                        key={developer}
                        variant={developers.includes(developer) ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-2 ${
                          developers.includes(developer)
                            ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                            : 'border-indigo-500 text-indigo-500 hover:bg-indigo-50'
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
          {(propertyType.length > 0 || developers.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
              {propertyType.map(type => (
                <Badge key={type} variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Badge>
              ))}
              {developers.map(developer => (
                <Badge key={developer} variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-200">
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
                  <div className="bg-white rounded-xl shadow-lg border border-blue-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                    <PropertyCard 
                      property={property} 
                      cardClassName="bg-transparent border-none shadow-none hover:shadow-none"
                      iconColor="text-blue-500"
                      textColor="text-blue-900"
                    />
                    {/* Custom View Details Button for Odd IDs */}
                    
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <Building2 className="w-24 h-24 text-blue-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-600 mb-2">No properties found</h3>
              <p className="text-blue-500 mb-6">Try adjusting your filters or search criteria</p>
              <Button onClick={clearFilters} className="bg-blue-500 hover:bg-blue-600 text-white">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Developer Showcase */}
          <div className="mt-20 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
              Trusted by India's <span className="text-blue-600">Leading Developers</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {developersList.map((developer, index) => (
                <div 
                  key={developer}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">{developer}</h3>
                  <p className="text-sm text-blue-600 mt-2">
                    {commercialProperties.filter(p => p.developer === developer).length} Properties
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Find Your Perfect Office Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-150">
            Connect with our commercial property experts and get personalized assistance in finding the ideal workspace for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Schedule Site Visit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;