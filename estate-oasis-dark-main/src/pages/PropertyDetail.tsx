
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, Star, Heart, BarChart3, Phone, Mail, User } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Mock property data - in real app, fetch based on ID
  const property = {
    id: parseInt(id || '1'),
    title: 'Sky Garden Residency',
    location: 'Banjara Hills, Hyderabad',
    price: '₹85 Lakhs',
    type: 'Residential',
    area: '1250 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    floor: '12th Floor',
    age: 'Under Construction',
    facing: 'East',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop'
    ],
    features: [
      'Swimming Pool', 'Gymnasium', 'Club House', 'Children Play Area',
      'Security System', 'Power Backup', 'Elevator', 'Parking Space',
      'Garden Area', 'Community Hall'
    ],
    amenities: {
      'Security Features': ['24/7 Security', 'CCTV Surveillance', 'Intercom'],
      'Recreational': ['Swimming Pool', 'Gymnasium', 'Club House', 'Garden'],
      'Utilities': ['Power Backup', 'Water Supply', 'Elevator', 'Parking']
    },
    description: `Experience luxury living at Sky Garden Residency, a premium residential project 
    located in the heart of Banjara Hills. This stunning 3 BHK apartment offers modern amenities 
    and world-class facilities designed for comfortable urban living. The project features 
    contemporary architecture with spacious layouts and premium finishes throughout.`,
    rating: 4.5,
    developer: 'EstateHub Developers',
    possession: 'December 2025',
    totalFloors: 18,
    totalUnits: 144
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Here you would save the form data
    alert('Thank you for your interest! We will contact you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout>
      <section className="py-8 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <Card className="glass-effect">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                    <div className="grid grid-cols-1 gap-2">
                      {property.images.slice(1).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${property.title} ${index + 2}`}
                          className="w-full h-32 md:h-39 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card className="glass-effect">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-2">
                        {property.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {property.location}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="icon" variant="outline">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <BarChart3 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{property.price}</span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="ml-1 font-medium">{property.rating}/5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-secondary rounded-lg">
                      <Home className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-sm text-muted-foreground">Area</div>
                      <div className="font-semibold">{property.area}</div>
                    </div>
                    <div className="text-center p-3 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Bedrooms</div>
                      <div className="font-semibold">{property.bedrooms} BHK</div>
                    </div>
                    <div className="text-center p-3 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Floor</div>
                      <div className="font-semibold">{property.floor}</div>
                    </div>
                    <div className="text-center p-3 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Facing</div>
                      <div className="font-semibold">{property.facing}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(property.amenities).map(([category, items]) => (
                        <div key={category}>
                          <h4 className="font-medium text-primary mb-2">{category}</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {items.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Sidebar */}
            <div className="space-y-6">
              <Card className="glass-effect sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Get Price Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Any specific requirements..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-primary text-primary-foreground">
                      Get Price Details
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Property Info */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Property Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer:</span>
                    <span className="font-medium">{property.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Possession:</span>
                    <span className="font-medium">{property.possession}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Floors:</span>
                    <span className="font-medium">{property.totalFloors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Units:</span>
                    <span className="font-medium">{property.totalUnits}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;
