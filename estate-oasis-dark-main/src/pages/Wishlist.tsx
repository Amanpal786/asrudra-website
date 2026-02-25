
import { useState } from 'react';
import Layout from '../components/Layout';
import PropertyCard from '../components/PropertyCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlistProperties, setWishlistProperties] = useState([
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
      addedDate: '2024-01-15'
    },
    {
      id: 2,
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
      addedDate: '2024-01-20'
    },
    {
      id: 3,
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
      addedDate: '2024-02-01'
    }
  ]);

  const removeFromWishlist = (propertyId: number) => {
    setWishlistProperties(prev => prev.filter(property => property.id !== propertyId));
  };

  const clearWishlist = () => {
    setWishlistProperties([]);
  };

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                My <span className="gradient-primary bg-clip-text text-transparent">Wishlist</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Properties you've saved for later consideration
              </p>
            </div>
            
            {wishlistProperties.length > 0 && (
              <Button
                onClick={clearWishlist}
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>

          {wishlistProperties.length === 0 ? (
            <Card className="glass-effect">
              <CardContent className="flex flex-col items-center justify-center py-20">
                <Heart className="w-20 h-20 text-muted-foreground mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Your wishlist is empty</h3>
                <p className="text-muted-foreground text-center mb-6 max-w-md">
                  Start adding properties to your wishlist by clicking the heart icon on any property you like.
                </p>
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="gradient-primary text-primary-foreground"
                >
                  Browse Properties
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {wishlistProperties.length} propert{wishlistProperties.length === 1 ? 'y' : 'ies'} in your wishlist
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlistProperties.map((property) => (
                  <div key={property.id} className="relative">
                    <PropertyCard property={property} />
                    <Button
                      onClick={() => removeFromWishlist(property.id)}
                      size="sm"
                      variant="destructive"
                      className="absolute top-4 right-4 z-10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                        Added: {property.addedDate}
                      </span>
                    </div>
                  </div>
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
