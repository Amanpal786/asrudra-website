
import { useState } from 'react';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const OfficeSpaces = () => {
  const [sortBy, setSortBy] = useState('relevance');

  const officeProperties = [
    {
      id: 7,
      title: 'Tech Hub Office Complex',
      location: 'HITEC City',
      price: '₹45 Lakhs',
      type: 'office',
      area: '2500 sq ft',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      features: ['Conference Rooms', 'Parking', 'Cafeteria', 'High-Speed Internet'],
      rating: 4.6,
      floors: 1,
      cabins: 8,
      openSeats: 50,
      popularity: 85,
      dateAdded: '2024-06-02'
    },
    {
      id: 8,
      title: 'Business Center Plaza',
      location: 'Banjara Hills',
      price: '₹60 Lakhs',
      type: 'office',
      area: '3200 sq ft',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      features: ['Reception Area', 'Meeting Rooms', 'Parking', 'Security'],
      rating: 4.4,
      floors: 2,
      cabins: 12,
      openSeats: 75,
      popularity: 78,
      dateAdded: '2024-06-04'
    },
    {
      id: 9,
      title: 'Corporate Tower Office',
      location: 'Gachibowli',
      price: '₹85 Lakhs',
      type: 'office',
      area: '4500 sq ft',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
      features: ['Executive Suites', 'Board Room', 'Gym', 'Parking', 'Cafeteria'],
      rating: 4.7,
      floors: 1,
      cabins: 15,
      openSeats: 100,
      popularity: 88,
      dateAdded: '2024-06-06'
    },
    {
      id: 10,
      title: 'Innovation Hub',
      location: 'Madhapur',
      price: '₹70 Lakhs',
      type: 'office',
      area: '3800 sq ft',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      features: ['Co-working Space', 'Private Offices', 'Event Hall', 'Parking'],
      rating: 4.5,
      floors: 1,
      cabins: 10,
      openSeats: 80,
      popularity: 82,
      dateAdded: '2024-06-09'
    },
    {
      id: 11,
      title: 'Premium Office Suites',
      location: 'Jubilee Hills',
      price: '₹1.2 Crores',
      type: 'office',
      area: '6000 sq ft',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      features: ['Luxury Interiors', 'Private Lift', 'Terrace', 'Premium Parking'],
      rating: 4.8,
      floors: 2,
      cabins: 20,
      openSeats: 150,
      popularity: 92,
      dateAdded: '2024-06-11'
    },
    {
      id: 12,
      title: 'Smart Office Complex',
      location: 'Financial District',
      price: '₹95 Lakhs',
      type: 'office',
      area: '5200 sq ft',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=300&fit=crop',
      features: ['Smart Building', 'Video Conferencing', 'Lounge', 'Valet Parking'],
      rating: 4.6,
      floors: 1,
      cabins: 18,
      openSeats: 120,
      popularity: 87,
      dateAdded: '2024-06-12'
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

  const sortedProperties = sortProperties(officeProperties, sortBy);

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Office <span className="gradient-primary bg-clip-text text-transparent">Spaces</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium office spaces designed for modern businesses
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-muted-foreground">
              {officeProperties.length} office properties found
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

export default OfficeSpaces;
