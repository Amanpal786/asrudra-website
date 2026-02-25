import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const Exclusive = () => {
  const [properties, setProperties] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://https://asrudra-backend-1.onrender.com/exclusive');
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exclusive properties:', error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const sortProperties = (properties: any[], sortBy: string) => {
    switch (sortBy) {
      case 'price-low':
        return [...properties].sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
      case 'price-high':
        return [...properties].sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
      case 'popularity':
        return [...properties].sort((a, b) => b.popularity - a.popularity);
      case 'newest':
        return [...properties].sort(
          (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      case 'rating':
        return [...properties].sort((a, b) => b.rating - a.rating);
      default:
        return properties;
    }
  };

  const extractPrice = (priceStr: string) => {
    if (!priceStr) return 0;
    let cleaned = priceStr.replace(/[₹,\s]/g, '');
    if (cleaned.includes('Crores')) {
      return parseFloat(cleaned.replace('Crores', '')) * 10000000;
    } else if (cleaned.includes('Lakhs')) {
      return parseFloat(cleaned.replace('Lakhs', '')) * 100000;
    }
    return parseFloat(cleaned);
  };

  

  const sortedProperties = sortProperties(properties, sortBy);

  return (
    <Layout>
      <section className="py-20 bg-sky-100 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-sky-900 mb-4">
              Exclusive <span className="text-sky-600">Properties</span>
            </h1>
            <p className="text-xl text-sky-700">
              Premium hand-picked properties with exceptional features
            </p>
          </div>

          {/* Sort Filter */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sky-800 font-medium">
              {loading ? 'Loading properties...' : `${sortedProperties.length} exclusive properties found`}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-sky-700 font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-white border border-sky-300 text-sky-700">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white text-sky-800 border border-sky-300">
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

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map((property: any) => (
              <div
                key={property._id || property.id}
                className="bg-white rounded-xl shadow-md p-4 transition-all duration-300 hover:bg-sky-100 hover:shadow-xl"
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};



export default Exclusive;
