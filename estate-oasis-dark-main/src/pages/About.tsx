
import Layout from '../components/Layout';
import { Award, Users, Building, TrendingUp, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize real estate'
    },
    {
      year: '2015',
      title: 'First Major Award',
      description: 'Real Estate Excellence Award for outstanding service'
    },
    {
      year: '2018',
      title: '1000+ Properties Sold',
      description: 'Reached milestone of thousand successful transactions'
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Launched AI-powered property matching platform'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as top real estate company in the region'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction and client interaction'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open and honest communication builds trust and lasting relationships'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our business practices'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="gradient-primary bg-clip-text text-transparent">EstateHub</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over a decade of excellence in real estate, we've been connecting dreams with reality, 
              building communities, and creating lasting value for our clients and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 2010, EstateHub began as a small team with a big vision: to transform 
                  the real estate industry through innovation, integrity, and exceptional service. 
                  What started as a local real estate agency has grown into a leading property 
                  solutions company.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey has been marked by continuous growth, technological advancement, and 
                  an unwavering commitment to our clients. We've successfully facilitated thousands 
                  of property transactions, helped families find their dream homes, and assisted 
                  businesses in securing prime commercial spaces.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we pride ourselves on being more than just a real estate company. We're 
                  community builders, dream facilitators, and trusted advisors who understand that 
                  every property transaction represents a significant milestone in our clients' lives.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect rounded-xl p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">5,000+</h3>
                <p className="text-muted-foreground">Properties Sold</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">12,000+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">25+</h3>
                <p className="text-muted-foreground">Industry Awards</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">14+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-effect rounded-xl p-8">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional real estate services that exceed client expectations while 
                building sustainable communities and creating lasting value for all stakeholders. 
                We are committed to innovation, integrity, and excellence in everything we do.
              </p>
            </div>
            
            <div className="glass-effect rounded-xl p-8">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative real estate company, known for transforming 
                the way people buy, sell, and invest in properties. We envision a future where 
                technology and human expertise combine to create seamless real estate experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-effect rounded-xl p-8 text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our company and defined our success
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div key={achievement.year} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 gradient-primary rounded-full border-4 border-background"></div>
                    
                    {/* Content */}
                    <div className="ml-16 glass-effect rounded-xl p-6 flex-1">
                      <div className="flex items-center mb-2">
                        <span className="gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mr-4">
                          {achievement.year}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
