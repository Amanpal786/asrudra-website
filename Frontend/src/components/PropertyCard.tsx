import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, BarChart3, MapPin, Home, Star, Bath, Square, Eye } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  area: string;
  image: string;
  features: string[];
  rating: number;
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
  cabins?: number;
  openSeats?: number;
  plotType?: string;
  facing?: string;
  approvals?: string[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log(`Property ${property.id} ${isWishlisted ? 'removed from' : 'added to'} wishlist`);
  };

  const addToComparison = () => {
    console.log(`Property ${property.id} added to comparison`);
  };

  return (
    <Card className="bg-white rounded-2xl overflow-hidden border border-sky-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-sky-500 text-white border-0 font-semibold">
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </Badge>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-bold text-sky-900">{property.rating}</span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-16 right-4 flex flex-col space-y-2">
          <Button
            size="icon"
            onClick={toggleWishlist}
            className={`w-10 h-10 rounded-full backdrop-blur-sm ${
              isWishlisted 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white/90 text-sky-600 hover:bg-white hover:text-red-500'
            } transition-all duration-300`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
          <Button
            size="icon"
            onClick={addToComparison}
            className="w-10 h-10 rounded-full bg-white/90 text-sky-600 hover:bg-white hover:text-sky-700 backdrop-blur-sm transition-all duration-300"
          >
            <BarChart3 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Property Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-sky-900 group-hover:text-sky-700 transition-colors line-clamp-1">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-lg">
            {property.price}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-sky-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex justify-between text-sm text-sky-700 mb-4">
          {property.bedrooms && (
            <div className="flex items-center">
              <Home className="w-4 h-4 text-sky-500 mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 text-sky-500 mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="w-4 h-4 text-sky-500 mr-1" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-sky-50 text-sky-700 border-sky-200 text-xs font-medium"
              >
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="outline" className="bg-sky-50 text-sky-600 border-sky-200 text-xs">
                +{property.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Additional Info */}
        {(property.plotType || property.facing) && (
          <div className="mb-4 p-3 bg-sky-50 rounded-lg border border-sky-100">
            <div className="flex flex-wrap gap-2 text-xs text-sky-700">
              {property.plotType && (
                <span className="font-medium">Plot: {property.plotType}</span>
              )}
              {property.facing && (
                <span className="font-medium">Facing: {property.facing}</span>
              )}
            </div>
          </div>
        )}

        {/* View Details Button */}
        <Link to={`/property/${property.id}`}>
          <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-sky-200 transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;