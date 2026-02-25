import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const [wishlistProperties, setWishlistProperties] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('http://localhost:4001/Property');
        setWishlistProperties(response.data || []);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, []);

  const removeFromWishlist = (propertyId: number) => {
    setWishlistProperties(prev =>
      prev.filter(property => property.id !== propertyId)
    );
  };

  const clearWishlist = () => {
    setWishlistProperties([]);
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                My <span className="text-sky-600">Wishlist</span>
              </h1>
              <p className="text-lg text-gray-600">
                Properties you've saved for future consideration
              </p>
            </div>

            {wishlistProperties.length > 0 && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={clearWishlist}
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              </motion.div>
            )}
          </div>

          {wishlistProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-effect shadow-lg bg-white/60 backdrop-blur-md rounded-2xl border">
                <CardContent className="flex flex-col items-center justify-center py-20">
                  <Heart className="w-20 h-20 text-sky-500 mb-6 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-600 text-center mb-6 max-w-md">
                    Click the <Heart className="inline w-4 h-4 text-red-500" /> icon on a property to save it here for later.
                  </p>
                  <Button
                    onClick={() => window.location.href = '/'}
                    className="bg-sky-600 text-white hover:bg-sky-700 transition px-6 py-2 rounded-lg"
                  >
                    Browse Properties
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                {wishlistProperties.length} propert{wishlistProperties.length === 1 ? 'y' : 'ies'} in your wishlist
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlistProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: property.id * 0.1 }}
                    className="relative bg-white rounded-xl shadow-xl overflow-hidden"
                  >
                    <PropertyCard property={property} />

                    <motion.button
                      onClick={() => removeFromWishlist(property.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute top-4 right-4 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-full transition z-10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>

                    <div className="absolute bottom-4 left-4 bg-white/80 text-gray-700 text-xs px-2 py-1 rounded z-10 shadow-sm">
                      Added: {property.addedDate}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Wishlist;
