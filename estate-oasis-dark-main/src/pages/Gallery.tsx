
import Layout from '../components/Layout';
import { Calendar, Camera, Users, Award } from 'lucide-react';

const Gallery = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Company Meeting 2024',
      date: 'December 15, 2024',
      description: 'Strategic planning and company updates for the upcoming year',
      images: [
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Customer Appreciation Meet',
      date: 'November 8, 2024',
      description: 'Celebrating our valued clients and their continued trust in our services',
      images: [
        'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=300&h=300&fit=crop'
      ]
    },
    {
      id: 3,
      title: 'Annual Appreciation Ceremony',
      date: 'September 22, 2024',
      description: 'Recognizing outstanding employees and celebrating achievements',
      images: [
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=300&fit=crop'
      ]
    }
  ];

  const propertyCategories = [
    {
      id: 1,
      title: 'Ready to Move In',
      description: 'Properties that are completed and ready for immediate possession',
      count: 45,
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Under Construction',
      description: 'Upcoming projects with attractive pre-launch prices',
      count: 28,
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop"
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="gradient-primary bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our events, celebrations, and property showcases
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Company Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Capturing the moments that bring our team together and celebrate our achievements
            </p>
          </div>

          <div className="space-y-16">
            {events.map((event, eventIndex) => (
              <div key={event.id} className="glass-effect rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">{event.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {event.images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${event.title} - Photo ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Property Showcase</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our diverse portfolio of properties
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {propertyCategories.map((category) => (
              <div key={category.id} className="glass-effect rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{category.count}</div>
                    <div className="text-sm text-muted-foreground">Properties</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${category.title} - Photo ${index + 1}`}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">24+</h3>
                <p className="text-muted-foreground">Annual Events</p>
              </div>
              
              <div>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Photos Captured</p>
              </div>
              
              <div>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">73+</h3>
                <p className="text-muted-foreground">Ready Properties</p>
              </div>
              
              <div>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">15+</h3>
                <p className="text-muted-foreground">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

