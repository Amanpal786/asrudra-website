import { Star, Award, TrendingUp, Users, Building, Briefcase, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Director {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  background: string;
  achievements: string[];
  description: string;
  hobbies: string[];
  image: string;
  projects: number;
  clients: number;
}

interface StatItem {
  icon: React.ReactNode;
  count: number;
  label: string;
}

const AnimatedCounter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    let animationFrameId: number;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;

      if (deltaTime > 16) {
        start += increment;
        if (start >= end) {
          setCount(end);
          return;
        } else {
          setCount(Math.floor(start));
        }
        lastTimestamp = timestamp;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end]);

  return <>{count.toLocaleString()}</>;
};

const DirectorCard = ({ director, delay }: { director: Director; delay: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/95 backdrop-blur-md border border-slate-100 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={director.image || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop`}
          alt={director.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {director.experience}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-1">{director.name}</h3>
        <p className="text-orange-500 font-semibold mb-1">{director.position}</p>
        <p className="text-sm text-slate-500 mb-3">{director.education}</p>
        
        <motion.div
          animate={{ height: expanded ? 'auto' : '72px' }}
          className="overflow-hidden"
        >
          <p className="text-sm text-slate-600 mb-4">{director.description}</p>
        </motion.div>

        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-orange-500 text-xs font-medium mb-4 hover:underline"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 flex items-center mb-1">
                  <Briefcase className="w-4 h-4 text-orange-500 mr-2" />
                  Professional Background
                </h4>
                <p className="text-xs text-slate-600">{director.background}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 flex items-center mb-1">
                  <Award className="w-4 h-4 text-orange-500 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {director.achievements.map((achieve, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-700 flex items-center mb-1">
                  <Home className="w-4 h-4 text-orange-500 mr-2" />
                  Personal Interests
                </h4>
                <p className="text-xs text-slate-600">{director.hobbies.join(', ')}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="text-center bg-slate-50 rounded-lg py-2">
            <Building className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-blue-800">{director.projects}</p>
            <p className="text-xs text-slate-500">Projects</p>
          </div>
          <div className="text-center bg-slate-50 rounded-lg py-2">
            <Users className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-blue-800">{director.clients}</p>
            <p className="text-xs text-slate-500">Clients</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatsCard = ({ stats }: { stats: StatItem[] }) => {
  return (
    <motion.div
      className="mt-16 bg-white border border-slate-100 rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-slate-800">
              <AnimatedCounter end={stat.count} />+
            </h3>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const DirectorsSection = () => {
  const directors: Director[] = [
    {
      id: 1,
      name: 'Amit Lamba',
      position: 'Director',
      experience: '25+ Years Experience',
      education: 'MBA (1996)',
      background: 'Started career at Airtel in collections and corporate sales, later worked with Birla Sunlife before joining A.S. Rudra Solutions.',
      achievements: [
        'Built extensive professional network',
        'Expert in corporate sales strategy',
        'Key driver of company revenue growth'
      ],
      description: 'Dynamic leader with sharp focus on driving sales and enhancing revenue. His strategic vision has been instrumental in the company\'s expansion and continued excellence.',
      hobbies: ['Networking', 'Business strategy', 'Market analysis'],
      image: '/director/Amit Lamba sir.jpg',
      projects: '10K',
      clients: '8K'
    },
    {
      id: 2,
      name: 'Subodh Sengar',
      position: 'Director',
      experience: '18+ Years in Real Estate',
      education: 'MBA in Retail Management (2010)',
      background: 'Started with Earth Infrastructure, worked with Verve Infrastructure, Many Means Solutions, Touchstone Solutions, and Investors Clinic before founding A.S. Rudra Solutions in 2022.',
      achievements: [
        'Grew company from 5 to 65 employees in 2 years',
        'Achieved ₹100 crore sales',
        'Targeting ₹500 crore this financial year'
      ],
      description: 'Visionary leader with energetic approach to work. Heads the Sales department and is the driving force behind company growth.',
      hobbies: ['Cricket', 'Badminton', 'Poetry', 'Shayari'],
      image: '/director/subodh sir.jpg',
      projects: 320,
      clients: 2100
    },
    {
      id: 3,
      name: 'Rajesh Mishra',
      position: 'Director',
      experience: 'Entrepreneur & Businessman',
      education: 'Post Graduate in Mathematics',
      background: 'Former IT Head at an NGO. Founder of Vindhyachal Interiors with clients like Nykaa, Bluestone, Sugar, Kama Ayurveda. Also owns furniture manufacturing unit and apparel label.',
      achievements: [
        'Successful entrepreneur in multiple industries',
        'Brought ethical business practices to real estate',
        'Expert in market analysis and client relations'
      ],
      description: 'Brings vast knowledge of market, clientele and business aptitude to the company. Ensures ethical and moral business practices.',
      hobbies: ['Interior design', 'Furniture manufacturing', 'Fashion'],
      image: '/director/image.png',
      projects: 180,
      clients: 950
    },
    {
      id: 4,
      name: 'Anil Gusain',
      position: 'Director',
      experience: '17+ Years in Real Estate',
      education: 'MBA (IMT Ghaziabad), MCSE, CCNA, Rail Management Diploma',
      background: 'Worked at Colt Technology services before entering real estate. Experience with DLF, ERA, IndiaBulls, Earth Infrastructure and Investors Clinic.',
      achievements: [
        'Expert in builder relationships',
        'Technical knowledge in real estate',
        'Key contributor to company inception'
      ],
      description: 'Tactful leader who handles sensitive task of maintaining Builder relationships. His inputs have resulted in smooth company progress.',
      hobbies: ['Singing', 'Chess', 'Cricket'],
      image: '/director/anil sir.jpg',
      projects: 280,
      clients: 1200
    },
    {
      id: 5,
      name: 'Pankaj Sengar',
      position: 'Director',
      experience: 'Business & Real Estate Expert',
      education: 'B.Tech (Mechanical Engineering)',
      background: 'Handled distributorship of Havells India and BTW. Aided in establishment of Touchstone Solutions and worked with Investors Clinic before joining A.S. Rudra Solutions.',
      achievements: [
        'Star performer at Investors Clinic',
        'Exceptional customer relationship skills',
        'Leads CRM department'
      ],
      description: 'Maintains cordial relationships with customers for life through exceptional soft skills and trust-building.',
      hobbies: ['Badminton', 'Chess', 'Gaming'],
      image: '/director/pankaj sir.jpg',
      projects: 190,
      clients: 900
    }
  ];

  const stats: StatItem[] = [
    { icon: <TrendingUp size={24} />, count: 100, label: 'Years Combined Experience' },
    { icon: <Building size={24} />, count: 1240, label: 'Successful Projects' },
    { icon: <Users size={24} />, count: 6600, label: 'Happy Clients' },
    { icon: <Briefcase size={24} />, count: 500, label: 'Crore Sales Target' }
  ];

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  const title = "MEET OUR DIRECTORS";
  const subtitle = "The Visionaries Behind A.S. Rudra Solutions";

  return (
    <section className="py-20 bg-sky-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800">
              {title.split(" ").map((word, wordIndex) => (
                <motion.span 
                  key={wordIndex} 
                  className="inline-block mr-2"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      custom={wordIndex * 5 + letterIndex}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
            className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <DirectorCard key={director.id} director={director} delay={index * 0.1} />
          ))}
        </div>

        <StatsCard stats={stats} />
      </div>
    </section>
  );
};

export default DirectorsSection;