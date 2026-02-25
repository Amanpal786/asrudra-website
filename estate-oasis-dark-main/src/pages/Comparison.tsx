
import { useState } from 'react';
import Layout from '../components/Layout';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Download, Plus } from 'lucide-react';

const Comparison = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authForm, setAuthForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    otp: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const [selectedProperties, setSelectedProperties] = useState([
    {
      id: 1,
      name: 'Sky Garden Residency',
      type: 'residential',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop',
      price: '₹85 Lakhs',
      swimmingPool: { available: true, size: '25m x 15m' },
      clubHouse: { available: true, size: '5000 sq ft' },
      bedrooms: { bhk: '3 BHK', size: '1250 sq ft' },
      towers: 4,
      gymnasium: { available: true, size: '2000 sq ft' },
      lobby: { available: true, size: '1500 sq ft' },
      parking: { available: true, spaces: 150 },
      lifts: 2,
      floors: 18,
      unitsPerFloor: 6,
      loading: '3 loading docks',
      rating: 4.5,
      brochure: '/brochures/sky-garden.pdf'
    },
    {
      id: 2,
      name: 'Metro Heights',
      type: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop',
      price: '₹95 Lakhs',
      swimmingPool: { available: false },
      clubHouse: { available: true, size: '3500 sq ft' },
      bedrooms: { bhk: '2 BHK', size: '1100 sq ft' },
      towers: 2,
      gymnasium: { available: false },
      lobby: { available: true, size: '1200 sq ft' },
      parking: { available: true, spaces: 80 },
      lifts: 3,
      floors: 22,
      unitsPerFloor: 4,
      loading: '2 loading docks',
      rating: 4.2,
      brochure: '/brochures/metro-heights.pdf'
    }
  ]);

  const handleAuth = () => {
    if (!otpSent) {
      setOtpSent(true);
      console.log('OTP sent to:', authForm.email);
    } else {
      setIsAuthenticated(true);
      setIsAuthOpen(false);
      console.log('User authenticated');
    }
  };

  const downloadBrochure = (brochureUrl: string, propertyName: string) => {
    console.log(`Downloading brochure for ${propertyName}`);
    // In a real app, this would trigger the download
  };

  const addProperty = () => {
    if (!isAuthenticated) {
      setIsAuthOpen(true);
      return;
    }
    // Logic to add more properties for comparison
    console.log('Add property clicked');
  };

  const ComparisonRow = ({ label, values }: { label: string; values: any[] }) => (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-border">
      <div className="font-medium text-foreground">{label}</div>
      {values.map((value, index) => (
        <div key={index} className="text-muted-foreground">
          {typeof value === 'boolean' ? (
            value ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />
          ) : (
            value || <X className="w-5 h-5 text-red-500" />
          )}
        </div>
      ))}
    </div>
  );

  if (!isAuthenticated) {
    return (
      <Layout>
        <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Property <span className="gradient-primary bg-clip-text text-transparent">Comparison</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please authenticate to compare properties
            </p>
            <Button onClick={() => setIsAuthOpen(true)} className="gradient-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        </section>

        <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
          <DialogContent className="glass-effect">
            <DialogHeader>
              <DialogTitle className="text-foreground">
                {otpSent ? 'Verify OTP' : 'Authentication Required'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {!otpSent ? (
                <>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={authForm.email}
                      onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={authForm.phone}
                      onChange={(e) => setAuthForm({...authForm, phone: e.target.value})}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={authForm.password}
                      onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                      placeholder="Enter password"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    value={authForm.otp}
                    onChange={(e) => setAuthForm({...authForm, otp: e.target.value})}
                    placeholder="Enter 6-digit OTP"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    OTP sent to {authForm.email}
                  </p>
                </div>
              )}
              <Button onClick={handleAuth} className="w-full gradient-primary text-primary-foreground">
                {otpSent ? 'Verify OTP' : 'Send OTP'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Property <span className="gradient-primary bg-clip-text text-transparent">Comparison</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Compare properties side by side to make informed decisions
            </p>
          </div>

          <div className="mb-8">
            <Button onClick={addProperty} className="gradient-primary text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Add Property to Compare
            </Button>
          </div>

          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-foreground">Property Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Property Headers */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div></div>
                {selectedProperties.map((property) => (
                  <div key={property.id} className="text-center">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold text-foreground mb-2">{property.name}</h3>
                    <p className="text-primary font-semibold">{property.price}</p>
                  </div>
                ))}
              </div>

              {/* Comparison Rows */}
              <div className="space-y-2">
                <ComparisonRow 
                  label="Swimming Pool" 
                  values={selectedProperties.map(p => p.swimmingPool.available ? p.swimmingPool.size : false)}
                />
                <ComparisonRow 
                  label="Club House" 
                  values={selectedProperties.map(p => p.clubHouse.available ? p.clubHouse.size : false)}
                />
                <ComparisonRow 
                  label="BHK Type" 
                  values={selectedProperties.map(p => p.bedrooms.bhk)}
                />
                <ComparisonRow 
                  label="Bedroom Size" 
                  values={selectedProperties.map(p => p.bedrooms.size)}
                />
                <ComparisonRow 
                  label="Number of Towers" 
                  values={selectedProperties.map(p => p.towers)}
                />
                <ComparisonRow 
                  label="Gymnasium" 
                  values={selectedProperties.map(p => p.gymnasium.available ? p.gymnasium.size : false)}
                />
                <ComparisonRow 
                  label="Lobby" 
                  values={selectedProperties.map(p => p.lobby.available ? p.lobby.size : false)}
                />
                <ComparisonRow 
                  label="Parking Spaces" 
                  values={selectedProperties.map(p => p.parking.available ? `${p.parking.spaces} spaces` : false)}
                />
                <ComparisonRow 
                  label="Lifts per Tower" 
                  values={selectedProperties.map(p => p.lifts)}
                />
                <ComparisonRow 
                  label="Number of Floors" 
                  values={selectedProperties.map(p => p.floors)}
                />
                <ComparisonRow 
                  label="Units per Floor" 
                  values={selectedProperties.map(p => p.unitsPerFloor)}
                />
                <ComparisonRow 
                  label="Loading Facilities" 
                  values={selectedProperties.map(p => p.loading)}
                />
                <ComparisonRow 
                  label="Rating" 
                  values={selectedProperties.map(p => `${p.rating}/5`)}
                />
                
                {/* Brochure Download */}
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-border mt-6">
                  <div className="font-medium text-foreground">Download Brochure</div>
                  {selectedProperties.map((property) => (
                    <Button
                      key={property.id}
                      onClick={() => downloadBrochure(property.brochure, property.name)}
                      variant="outline"
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Comparison;
