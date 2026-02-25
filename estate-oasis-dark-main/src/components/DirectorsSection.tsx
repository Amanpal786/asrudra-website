
import { Star, Award, TrendingUp, Users, Building } from 'lucide-react';

const DirectorsSection = () => {
  const directors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      experience: '15+ Years',
      specialization: 'Strategic Leadership',
      image: 'photo-1618160702438-9b02ab6515c9',
      achievements: ['Forbes 40 Under 40', 'Real Estate Leader Award', '500M+ in Sales'],
      description: 'Visionary leader driving innovation in real estate technology and sustainable development.',
      rating: 4.9,
      projects: 250,
      clients: 1200
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Director of Sales',
      experience: '12+ Years',
      specialization: 'Luxury Properties',
      image: 'photo-1487958449943-2429e8be8625',
      achievements: ['Top Sales Director', 'Million Dollar Club', 'Customer Excellence Award'],
      description: 'Expert in high-end residential and commercial property sales with proven track record.',
      rating: 4.8,
      projects: 180,
      clients: 850
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Director of Development',
      experience: '18+ Years',
      specialization: 'Urban Planning',
      image: 'photo-1721322800607-8c38375eef04',
      achievements: ['Urban Planning Excellence', 'Green Building Pioneer', 'Community Impact Award'],
      description: 'Leading sustainable urban development projects that shape communities for the future.',
      rating: 4.9,
      projects: 320,
      clients: 2100
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Director of Operations',
      experience: '14+ Years',
      specialization: 'Process Optimization',
      image: 'photo-1486718448742-163732cd1544',
      achievements: ['Operations Excellence', 'Efficiency Innovation', 'Team Leadership Award'],
      description: 'Streamlining operations and implementing cutting-edge technology solutions.',
      rating: 4.7,
      projects: 200,
      clients: 950
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Director of Finance',
      experience: '16+ Years',
      specialization: 'Investment Strategy',
      image: 'photo-1466442929976-97f336a657be',
      achievements: ['Financial Excellence', 'Investment Strategy Award', 'Risk Management Expert'],
      description: 'Managing financial strategies and investment portfolios for optimal growth.',
      rating: 4.8,
      projects: 160,
      clients: 750
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced directors who bring decades of expertise and innovation to real estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {directors.map((director, index) => (
            <div
              key={director.id}
              className="glass-effect rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${director.image}?w=300&h=400&fit=crop&face`}
                  alt={director.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-foreground text-sm font-semibold">{director.rating}</span>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {director.experience}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{director.name}</h3>
                <p className="text-primary font-semibold mb-2">{director.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{director.specialization}</p>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {director.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Building className="w-4 h-4 text-primary mr-1" />
                    </div>
                    <p className="text-lg font-bold text-foreground">{director.projects}</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-primary mr-1" />
                    </div>
                    <p className="text-lg font-bold text-foreground">{director.clients}</p>
                    <p className="text-xs text-muted-foreground">Clients</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground flex items-center">
                    <Award className="w-4 h-4 text-primary mr-2" />
                    Key Achievements
                  </h4>
                  <div className="space-y-1">
                    {director.achievements.slice(0, 2).map((achievement, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full mt-4 bg-secondary hover:bg-secondary/80 text-foreground py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 glass-effect rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">75+</h3>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">1,110+</h3>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">5,850+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">25+</h3>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
