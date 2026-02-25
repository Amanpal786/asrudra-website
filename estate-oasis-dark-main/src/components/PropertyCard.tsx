
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BarChart3, MapPin, Home, Star } from 'lucide-react';

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
    <Card className="glass-effect hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={toggleWishlist}
            className={`${isWishlisted ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={addToComparison}
            className="text-muted-foreground hover:text-primary"
          >
            <BarChart3 className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{property.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">{property.price}</span>
          <div className="text-sm text-muted-foreground mt-1">
            {property.area}
            {property.bedrooms && (
              <span className="ml-2">• {property.bedrooms} BHK</span>
            )}
            {property.plotType && (
              <span className="ml-2">• {property.plotType}</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {property.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
              >
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <Link to={`/property/${property.id}`}>
          <Button className="w-full gradient-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
