
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const headerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Residential', path: '/residential' },
    { name: 'Office', path: '/office' },
    { name: 'Plots', path: '/plots' },
    { name: 'Login', path: '/login' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Comparison', path: '/comparison' }
  ];

  const services = [
    'Property Sales',
    'Property Rentals',
    'Property Management',
    'Investment Consulting',
    'Market Analysis',
    'Legal Assistance'
  ];

  const locations = [
    'Downtown District',
    'Business Quarter',
    'Suburban Areas',
    'Waterfront Properties',
    'Tech Hub Zone',
    'Historic District'
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">EstateHub</span>
            </Link>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Your trusted partner in real estate. We connect dreams with reality through premium properties and exceptional service.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <div className="space-y-3">
              {headerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-6">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="text-muted-foreground text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-6">Locations</h3>
            <div className="space-y-3">
              {locations.map((location) => (
                <div key={location} className="text-muted-foreground text-sm">
                  {location}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>123 Real Estate Avenue</p>
                  <p>Business District</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p>info@estatehub.com</p>
                  <p>sales@estatehub.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-secondary border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
                />
                <button className="gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} EstateHub. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
