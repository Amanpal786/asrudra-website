
import { useState } from 'react';
import { MapPin, Search, TrendingUp, Users, Building } from 'lucide-react';

const LocationSearch = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const locations = [
    {
      id: 'downtown',
      name: 'Downtown',
      icon: Building,
      properties: 245,
      avgPrice: '$750,000',
      trend: '+12%',
      color: 'from-blue-500 to-blue-600',
      image: 'photo-1486718448742-163732cd1544'
    },
    {
      id: 'suburbs',
      name: 'Suburbs',
      icon: Users,
      properties: 189,
      avgPrice: '$450,000',
      trend: '+8%',
      color: 'from-green-500 to-green-600',
      image: 'photo-1721322800607-8c38375eef04'
    },
    {
      id: 'waterfront',
      name: 'Waterfront',
      icon: MapPin,
      properties: 76,
      avgPrice: '$1,200,000',
      trend: '+18%',
      color: 'from-purple-500 to-purple-600',
      image: 'photo-1487958449943-2429e8be8625'
    },
    {
      id: 'business',
      name: 'Business District',
      icon: Building,
      properties: 134,
      avgPrice: '$920,000',
      trend: '+15%',
      color: 'from-orange-500 to-orange-600',
      image: 'photo-1486718448742-163732cd1544'
    },
    {
      id: 'tech',
      name: 'Tech Hub',
      icon: TrendingUp,
      properties: 98,
      avgPrice: '$680,000',
      trend: '+22%',
      color: 'from-indigo-500 to-indigo-600',
      image: 'photo-1487958449943-2429e8be8625'
    },
    {
      id: 'historic',
      name: 'Historic Area',
      icon: MapPin,
      properties: 67,
      avgPrice: '$580,000',
      trend: '+6%',
      color: 'from-red-500 to-red-600',
      image: 'photo-1466442929976-97f336a657be'
    }
  ];

  const handleLocationClick = (locationId: string) => {
    setSelectedLocation(locationId);
    console.log('Selected location:', locationId);
    // Here you would filter properties by location
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Search by Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover properties in your preferred neighborhoods and explore market trends
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <div className="relative h-96 bg-gradient-to-br from-secondary to-muted rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">Interactive Location Map</h3>
                <p className="text-muted-foreground">Click on location cards below to explore properties</p>
              </div>
            </div>
            
            {/* Floating location indicators */}
            <div className="absolute top-6 left-6 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-12 w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-12 left-20 w-5 h-5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-6 right-6 w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location) => (
            <div
              key={location.id}
              onClick={() => handleLocationClick(location.id)}
              className={`glass-effect rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                selectedLocation === location.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${location.image}?w=400&h=300&fit=crop`}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${location.color} opacity-80`}></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <location.icon className="w-8 h-8" />
                    <div className="text-right">
                      <div className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {location.trend}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                    <div className="space-y-1 text-sm opacity-90">
                      <p>{location.properties} Properties</p>
                      <p>Avg: {location.avgPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">View Properties</span>
                  <Search className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Location Properties Preview */}
        {selectedLocation !== 'all' && (
          <div className="glass-effect rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Properties in {locations.find(l => l.id === selectedLocation)?.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-effect rounded-lg p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Total Properties</h4>
                <p className="text-3xl font-bold text-primary">
                  {locations.find(l => l.id === selectedLocation)?.properties}
                </p>
              </div>
              
              <div className="glass-effect rounded-lg p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Market Trend</h4>
                <p className="text-3xl font-bold text-green-500">
                  {locations.find(l => l.id === selectedLocation)?.trend}
                </p>
              </div>
              
              <div className="glass-effect rounded-lg p-6 text-center">
                <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Average Price</h4>
                <p className="text-3xl font-bold text-purple-500">
                  {locations.find(l => l.id === selectedLocation)?.avgPrice}
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                View All Properties in {locations.find(l => l.id === selectedLocation)?.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationSearch;
