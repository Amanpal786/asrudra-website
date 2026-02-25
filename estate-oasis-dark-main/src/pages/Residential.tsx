
import { useState } from 'react';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Residential = () => {
  const [sortBy, setSortBy] = useState('relevance');

  const residentialProperties = [
    {
      id: 1,
      title: 'Sky Garden Residency',
      location: 'Banjara Hills',
      price: '₹85 Lakhs',
      type: 'residential',
      bedrooms: 3,
      bathrooms: 2,
      area: '1250 sq ft',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      features: ['Swimming Pool', 'Gymnasium', 'Club House', 'Parking'],
      rating: 4.5,
      popularity: 78,
      dateAdded: '2024-06-01'
    },
    {
      id: 2,
      title: 'Metro Heights',
      location: 'Jubilee Hills',
      price: '₹95 Lakhs',
      type: 'residential',
      bedrooms: 2,
      bathrooms: 2,
      area: '1100 sq ft',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      features: ['Club House', 'Parking', 'Security'],
      rating: 4.2,
      popularity: 65,
      dateAdded: '2024-06-05'
    },
    {
      id: 3,
      title: 'Green Valley Apartments',
      location: 'Gachibowli',
      price: '₹75 Lakhs',
      type: 'residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '1400 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      features: ['Garden', 'Play Area', 'Parking'],
      rating: 4.3,
      popularity: 72,
      dateAdded: '2024-06-03'
    },
    {
      id: 4,
      title: 'Royal Palace Residency',
      location: 'Madhapur',
      price: '₹1.2 Crores',
      type: 'residential',
      bedrooms: 4,
      bathrooms: 4,
      area: '2200 sq ft',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      features: ['Swimming Pool', 'Gymnasium', 'Club House', 'Spa', 'Tennis Court'],
      rating: 4.8,
      popularity: 92,
      dateAdded: '2024-06-08'
    },
    {
      id: 5,
      title: 'City View Towers',
      location: 'HITEC City',
      price: '₹1.05 Crores',
      type: 'residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '1800 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      features: ['City View', 'Gymnasium', 'Parking', 'Elevator'],
      rating: 4.4,
      popularity: 80,
      dateAdded: '2024-06-07'
    },
    {
      id: 6,
      title: 'Sunset Villas',
      location: 'Kokapet',
      price: '₹2.5 Crores',
      type: 'residential',
      bedrooms: 5,
      bathrooms: 5,
      area: '3500 sq ft',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
      features: ['Private Pool', 'Garden', 'Parking', 'Security', 'Gym'],
      rating: 4.9,
      popularity: 95,
      dateAdded: '2024-06-10'
    }
  ];

  const sortProperties = (properties: any[], sortBy: string) => {
    switch (sortBy) {
      case 'price-low':
        return [...properties].sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\s]/g, '').replace('Crores', '00').replace('Lakhs', ''));
          const priceB = parseFloat(b.price.replace(/[₹,\s]/g, '').replace('Crores', '00').replace('Lakhs', ''));
          return priceA - priceB;
        });
      case 'price-high':
        return [...properties].sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\s]/g, '').replace('Crores', '00').replace('Lakhs', ''));
          const priceB = parseFloat(b.price.replace(/[₹,\s]/g, '').replace('Crores', '00').replace('Lakhs', ''));
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

  const sortedProperties = sortProperties(residentialProperties, sortBy);

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Residential <span className="gradient-primary bg-clip-text text-transparent">Properties</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find your dream home from our collection of premium residential properties
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-muted-foreground">
              {residentialProperties.length} residential properties found
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Residential;
