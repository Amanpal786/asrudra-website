
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, BedDouble, Car, Maximize, ArrowRight, Mail, User, Phone } from 'lucide-react';

const ExclusiveProperties = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const exclusiveProperties = [
    {
      id: 1,
      title: 'Luxury Penthouse with City View',
      price: '$2,500,000',
      location: 'Premium District',
      image: 'photo-1721322800607-8c38375eef04',
      bedrooms: 4,
      parking: 3,
      area: '4,500 sq ft',
      featured: true,
      rating: 4.9,
      badge: 'Exclusive'
    },
    {
      id: 2,
      title: 'Designer Villa with Pool',
      price: '$1,850,000',
      location: 'Elite Neighborhood',
      image: 'photo-1487958449943-2429e8be8625',
      bedrooms: 5,
      parking: 4,
      area: '5,200 sq ft',
      featured: true,
      rating: 4.8,
      badge: 'Premium'
    },
    {
      id: 3,
      title: 'Modern Smart Home',
      price: '$1,200,000',
      location: 'Tech Valley',
      image: 'photo-1486718448742-163732cd1544',
      bedrooms: 3,
      parking: 2,
      area: '3,800 sq ft',
      featured: true,
      rating: 4.7,
      badge: 'Smart Home'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    // Here you would typically save to Excel/database
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Exclusive Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Hand-picked premium properties with exceptional features and prime locations
            </p>
          </div>
          
          <Link
            to="/exclusive"
            className="hidden md:flex items-center gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            See All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Properties Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {exclusiveProperties.map((property) => (
              <div key={property.id} className="glass-effect rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {property.badge}
                    </span>
                    <div className="flex items-center bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {property.rating}
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-lg font-bold">
                    {property.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{property.title}</h3>
                  <p className="text-muted-foreground mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <BedDouble className="w-4 h-4 mr-1" />
                      {property.bedrooms} Beds
                    </span>
                    <span className="flex items-center">
                      <Car className="w-4 h-4 mr-1" />
                      {property.parking} Parking
                    </span>
                    <span className="flex items-center">
                      <Maximize className="w-4 h-4 mr-1" />
                      {property.area}
                    </span>
                  </div>
                  
                  <Link to={`/property/${property.id}`}>
                    <button className="w-full gradient-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Lead Capture Form */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get Exclusive Access
              </h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know about new exclusive properties and special offers.
              </p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Get Exclusive Access
                </button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Your information is secure and will only be used to contact you about properties.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile See All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link
            to="/exclusive"
            className="flex items-center gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            See All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProperties;
