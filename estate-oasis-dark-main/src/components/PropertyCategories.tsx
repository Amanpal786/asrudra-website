
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, MapPin, ArrowRight, Calendar, BedDouble, Car } from 'lucide-react';

const PropertyCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      id: 'residential',
      title: 'Residential Properties',
      description: 'Find your perfect home with our premium residential listings',
      icon: Home,
      count: '2,500+',
      path: '/residential',
      gradient: 'from-blue-500 to-purple-600',
      properties: [
        {
          id: 1,
          title: 'Luxury Villa in Downtown',
          price: '$850,000',
          location: 'Downtown Area',
          image: 'photo-1721322800607-8c38375eef04',
          bedrooms: 4,
          parking: 2,
          area: '3,200 sq ft'
        },
        {
          id: 2,
          title: 'Modern Apartment Complex',
          price: '$320,000',
          location: 'City Center',
          image: 'photo-1487958449943-2429e8be8625',
          bedrooms: 3,
          parking: 1,
          area: '1,850 sq ft'
        },
        {
          id: 3,
          title: 'Family House with Garden',
          price: '$420,000',
          location: 'Suburban Area',
          image: 'photo-1721322800607-8c38375eef04',
          bedrooms: 5,
          parking: 3,
          area: '2,800 sq ft'
        }
      ]
    },
    {
      id: 'office',
      title: 'Office Spaces',
      description: 'Premium commercial spaces for your business needs',
      icon: Building,
      count: '800+',
      path: '/office',
      gradient: 'from-green-500 to-teal-600',
      properties: [
        {
          id: 4,
          title: 'Corporate Tower Office',
          price: '$1,200,000',
          location: 'Business District',
          image: 'photo-1486718448742-163732cd1544',
          area: '5,000 sq ft',
          floors: 2,
          parking: 20
        },
        {
          id: 5,
          title: 'Modern Workspace',
          price: '$650,000',
          location: 'Tech Hub',
          image: 'photo-1487958449943-2429e8be8625',
          area: '2,800 sq ft',
          floors: 1,
          parking: 10
        },
        {
          id: 6,
          title: 'Executive Suite',
          price: '$890,000',
          location: 'Financial Center',
          image: 'photo-1486718448742-163732cd1544',
          area: '3,500 sq ft',
          floors: 1,
          parking: 15
        }
      ]
    },
    {
      id: 'plots',
      title: 'Land & Plots',
      description: 'Invest in prime land with high growth potential',
      icon: MapPin,
      count: '1,200+',
      path: '/plots',
      gradient: 'from-orange-500 to-red-600',
      properties: [
        {
          id: 7,
          title: 'Commercial Plot - Highway',
          price: '$2,100,000',
          location: 'Highway Junction',
          image: 'photo-1466442929976-97f336a657be',
          area: '15,000 sq ft',
          type: 'Commercial',
          zoning: 'Mixed Use'
        },
        {
          id: 8,
          title: 'Residential Development Land',
          price: '$980,000',
          location: 'New Town',
          image: 'photo-1466442929976-97f336a657be',
          area: '8,500 sq ft',
          type: 'Residential',
          zoning: 'Residential'
        },
        {
          id: 9,
          title: 'Industrial Land Package',
          price: '$1,650,000',
          location: 'Industrial Zone',
          image: 'photo-1466442929976-97f336a657be',
          area: '25,000 sq ft',
          type: 'Industrial',
          zoning: 'Industrial'
        }
      ]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const PropertyCard = ({ property, category }: { property: any, category: any }) => (
    <div className="glass-effect rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={`https://images.unsplash.com/${property.image}?w=400&h=300&fit=crop`}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{property.title}</h3>
        <p className="text-muted-foreground mb-4 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {property.bedrooms && (
            <span className="flex items-center">
              <BedDouble className="w-4 h-4 mr-1" />
              {property.bedrooms} Beds
            </span>
          )}
          {property.parking && (
            <span className="flex items-center">
              <Car className="w-4 h-4 mr-1" />
              {property.parking} Parking
            </span>
          )}
          <span>{property.area}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Property Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of properties across different categories
          </p>
        </div>

        {/* Category Slider */}
        <div className="relative overflow-hidden rounded-2xl mb-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {categories.map((category, index) => (
              <div key={category.id} className="w-full flex-shrink-0">
                <div className={`relative bg-gradient-to-r ${category.gradient} rounded-2xl p-8 md:p-12 text-white`}>
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                      <div className="flex items-center justify-center md:justify-start mb-4">
                        <category.icon className="w-12 h-12 mr-4" />
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold">{category.title}</h3>
                          <p className="text-lg opacity-90">{category.count} Properties Available</p>
                        </div>
                      </div>
                      <p className="text-lg opacity-90 mb-6 max-w-md">{category.description}</p>
                      <Link
                        to={category.path}
                        className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Explore {category.title}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-2/3">
                      {category.properties.map((property) => (
                        <PropertyCard key={property.id} property={property} category={category} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="glass-effect rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.count} Available</p>
                </div>
              </div>
              <p className="text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
