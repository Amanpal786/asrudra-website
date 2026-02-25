
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const Exclusive = () => {
  const [sortBy, setSortBy] = useState('relevance');

  const exclusiveProperties = [
    {
      id: 101,
      title: 'Luxury Penthouse with City View',
      location: 'Premium District',
      price: '₹2.5 Crores',
      type: 'residential',
      bedrooms: 4,
      bathrooms: 3,
      area: '4,500 sq ft',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      features: ['Swimming Pool', 'Private Terrace', 'City View', 'Premium Parking'],
      rating: 4.9,
      popularity: 95,
      dateAdded: '2024-06-10'
    },
    {
      id: 102,
      title: 'Designer Villa with Pool',
      location: 'Elite Neighborhood',
      price: '₹1.85 Crores',
      type: 'residential',
      bedrooms: 5,
      bathrooms: 4,
      area: '5,200 sq ft',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      features: ['Private Pool', 'Garden', 'Premium Interiors', 'Security'],
      rating: 4.8,
      popularity: 88,
      dateAdded: '2024-06-12'
    },
    {
      id: 103,
      title: 'Modern Smart Home',
      location: 'Tech Valley',
      price: '₹1.2 Crores',
      type: 'residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '3,800 sq ft',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop',
      features: ['Smart Home Tech', 'Energy Efficient', 'Modern Design', 'Parking'],
      rating: 4.7,
      popularity: 82,
      dateAdded: '2024-06-14'
    },
    {
      id: 104,
      title: 'Premium Office Tower',
      location: 'Business District',
      price: '₹3.2 Crores',
      type: 'office',
      area: '8,000 sq ft',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      features: ['Executive Floors', 'Conference Halls', 'Premium Location', 'Valet Parking'],
      rating: 4.8,
      floors: 2,
      cabins: 25,
      openSeats: 200,
      popularity: 90,
      dateAdded: '2024-06-11'
    },
    {
      id: 105,
      title: 'Investment Grade Plot',
      location: 'Growth Corridor',
      price: '₹85 Lakhs',
      type: 'plot',
      area: '500 sq yards',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      features: ['Corner Plot', 'Investment Grade', 'Future Metro', 'Clear Title'],
      rating: 4.6,
      plotType: 'Investment',
      facing: 'North-East',
      approvals: ['DTCP', 'RERA', 'Investment Certified'],
      popularity: 85,
      dateAdded: '2024-06-13'
    },
    {
      id: 106,
      title: 'Waterfront Luxury Villa',
      location: 'Lake View Estate',
      price: '₹4.5 Crores',
      type: 'residential',
      bedrooms: 6,
      bathrooms: 5,
      area: '6,500 sq ft',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
      features: ['Waterfront', 'Private Dock', 'Infinity Pool', 'Premium Security'],
      rating: 4.9,
      popularity: 98,
      dateAdded: '2024-06-09'
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

  const sortedProperties = sortProperties(exclusiveProperties, sortBy);

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Exclusive <span className="gradient-primary bg-clip-text text-transparent">Properties</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium hand-picked properties with exceptional features
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-muted-foreground">
              {exclusiveProperties.length} exclusive properties found
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

export default Exclusive;
