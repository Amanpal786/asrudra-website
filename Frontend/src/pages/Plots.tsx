
import { useState } from 'react';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Plots = () => {
  const [sortBy, setSortBy] = useState('relevance');

  const plotProperties = [
    {
      id: 13,
      title: 'Green Valley Plot',
      location: 'Shamshabad',
      price: '₹25 Lakhs',
      type: 'plot',
      area: '200 sq yards',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      features: ['Corner Plot', 'Road Facing', 'Clear Title'],
      rating: 4.3,
      plotType: 'Residential',
      facing: 'East',
      approvals: ['DTCP', 'RERA'],
      popularity: 70,
      dateAdded: '2024-06-01'
    },
    {
      id: 14,
      title: 'Premium Villa Plot',
      location: 'Kompally',
      price: '₹45 Lakhs',
      type: 'plot',
      area: '300 sq yards',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      features: ['Gated Community', 'Park Facing', 'Utilities Ready'],
      rating: 4.6,
      plotType: 'Villa',
      facing: 'North',
      approvals: ['DTCP', 'RERA', 'HMDA'],
      popularity: 88,
      dateAdded: '2024-06-03'
    },
    {
      id: 15,
      title: 'Commercial Plot',
      location: 'Serilingampally',
      price: '₹1.2 Crores',
      type: 'plot',
      area: '500 sq yards',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      features: ['Main Road', 'Commercial Zone', 'High Visibility'],
      rating: 4.5,
      plotType: 'Commercial',
      facing: 'South',
      approvals: ['DTCP', 'Commercial License'],
      popularity: 82,
      dateAdded: '2024-06-05'
    },
    {
      id: 16,
      title: 'Farmhouse Plot',
      location: 'Chevella',
      price: '₹15 Lakhs',
      type: 'plot',
      area: '1000 sq yards',
      image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc2?w=400&h=300&fit=crop',
      features: ['Agricultural Land', 'Water Source', 'Peaceful Location'],
      rating: 4.2,
      plotType: 'Agricultural',
      facing: 'West',
      approvals: ['Village Revenue Records'],
      popularity: 65,
      dateAdded: '2024-06-07'
    },
    {
      id: 17,
      title: 'Highway Plot',
      location: 'Outer Ring Road',
      price: '₹80 Lakhs',
      type: 'plot',
      area: '400 sq yards',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      features: ['Highway Facing', 'Investment Grade', 'Future Metro', 'Clear Title'],
      rating: 4.4,
      plotType: 'Investment',
      facing: 'East',
      approvals: ['DTCP', 'Highway Authority'],
      popularity: 78,
      dateAdded: '2024-06-09'
    },
    {
      id: 18,
      title: 'Luxury Villa Plot',
      location: 'Nallagandla',
      price: '₹65 Lakhs',
      type: 'plot',
      area: '350 sq yards',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      features: ['Premium Location', 'Vastu Compliant', 'Amenities Nearby'],
      rating: 4.7,
      plotType: 'Villa',
      facing: 'North-East',
      approvals: ['DTCP', 'RERA', 'HMDA'],
      popularity: 85,
      dateAdded: '2024-06-11'
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

  const sortedProperties = sortProperties(plotProperties, sortBy);

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Land & <span className="gradient-primary bg-clip-text text-transparent">Plots</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium plots and land parcels for your dream projects
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-muted-foreground">
              {plotProperties.length} plot properties found
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

export default Plots;
