import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import {
  Award,
  Users,
  Building,
  TrendingUp,
  Target,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useState, useRef } from "react";

// Data Arrays
const achievements = [
  {
    year: "2022",
    title: "Company Established",
    description:
      "AS Rudra Solutions was formed to redefine real estate standards in India.",
  },
  {
    year: "2023",
    title: "Rapid Expansion",
    description:
      "From 5 to 100+ employees with 1.5k worth of property sales.",
  },
  {
    year: "2024",
    title: "Trusted Industry Partner",
    description: "Recognized as a bridge between developers and customers.",
  },
];

const values = [
  {
    icon: Target,
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in all our dealings, ensuring transparency and trust with every client interaction.",
  },
  {
    icon: Heart,
    title: "Client-Centricity",
    description:
      "Our clients' needs and aspirations are at the heart of everything we do, driving us to deliver exceptional service and results.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously embrace new technologies and methodologies to stay ahead in the dynamic real estate industry.",
  },
];

// Team data with all required fields
const teamMembers = [
  {
    name: "Mr. Shubham Gupta",
    role: "Associate Director ",
    image: "/Team Photo/shubham gupta.jpg",
    experience: 8,
    qualification: {
      degree: " BTech CS(IT)+ MBA in Real Estate",
      year: 2016
    },
    professionalBackground:
      "With over 8+ years of dynamic experience in the real estate industry, I specialize in luxury residential and high-value commercial investments. My focus is not just on closing deals — but on building long-term relationships and delivering strategic investment solutions.I believe real estate is not just about property  its about vision, growth, and legacy creation",
    keyAchievements: [
      "Closed deals worth over ₹50 crore in the past year.",
      "Grew the luxury portfolio by 40% in two years.",
      "Mentored a team of 15 high-performing sales managers.",
    ],
    personalInterests: ["Cricket", "Architectural Digests", "Traveling"],
  },
  {
    name: "Ms. Riya Kumari",
    role: "SBDM",
    image: "/Team Photo/riya.jpg",
    experience: 5,
    qualification: {
      degree: "BBA, Marketing",
      year: 2019
    },
    professionalBackground:
      "Riya is an expert in client relations and property management. Her exceptional negotiation skills have consistently earned customer satisfaction ratings above 95%.",
    keyAchievements: [
      "Maintained a 98% client satisfaction rate for 3 consecutive years.",
      "Negotiated over 200 successful property deals.",
      "Implemented a new client feedback system.",
    ],
    personalInterests: ["Yoga", "Volunteering", "Exploring local cafes"],
  },
  // {
  //   name: "Mr. Arif Khan",
  //   role: "SBDM",
  //   image: "/Team Photo/arif.jpg",
  //   experience: 6,
  //   qualification: {
  //     degree: "Masters in Urban Planning",
  //     year: 2018
  //   },
  //   professionalBackground: "Arif is a specialist in commercial real estate, with deep knowledge of market trends and investment analysis. He excels at identifying high-growth opportunities for clients.",
  //   keyAchievements: [
  //       "Facilitated over ₹30 crore in commercial deals in the last 6 months.",
  //       "Authored a widely-read report on commercial real estate trends.",
  //       "Achieved 150% of his annual sales target in 2023."
  //   ],
  //   personalInterests: ["Photography", "Cricket", "Documentaries"]
  // },
  {
    name: "Mr. Sagar Handa",
    role: "SBDM",
    image: "/Team Photo/sagartl.jpg",
    experience: 7,
    qualification: {
      degree: "BBA + (Property Law)",
      year: 2017
    },
    professionalBackground: "Sagar is a results-driven real estate professional with a Bachelor of Business Administration (BBA) and over 7 years of proven success in the real estate industry. He brings a strong blend of strategic thinking, market intelligence, and hands-on transactional expertise that consistently drives revenue growth and client satisfaction With extensive experience across residential and commercial real estate, Sagar has successfully managed high-value property transactions, negotiated complex deals, and built long-term relationships with investors, developers, and end clients. His in-depth understanding of market dynamics, pricing strategies, and investment analysis enables him to identify lucrative opportunities and deliver measurable returnsRecognized for his professionalism, integrity, and performance-focused approach, Sagar has a strong track record of exceeding sales targets and contributing to organizational growth. His ability to combine business acumen with customer-centric strategies positions him as a trusted advisor in the real estate sector Ambitious, strategic, and growth-oriented, Sagar continues to elevate his impact by leveraging industry insights, strong negotiation skills, and a commitment to excellence",
    keyAchievements: [
        "Increased team conversion rates by 35% in Q2 2023.",
        "Developed a new sales training module adopted company-wide.",
        "Awarded 'Sales Strategist of the Year' in 2022,23,24."
    ],
    personalInterests: ["Trekking", "Board games", "Podcasts"]
  },
  {
    name: "Ms. Vishakha Sharma",
    role: "SBDM",
    image: "/Team Photo/vishakha sharma.jpg",
    experience: 6,
    qualification: {
      degree: "MBA(sales)",
      year: 2018
    },
    professionalBackground: "Vishakha manages large-scale real estate developments across India. She is currently overseeing a 50-acre township project in Gurugram with projected sales of ₹200 crore.",
    keyAchievements: [
        "Managing a ₹200 crore township project.",
        "Improved project delivery times by 15%.",
        "Expert in navigating local development regulations."
    ],
    personalInterests: ["Reading", "Hiking", "Modern Art"]
  },
  {
    name: "Mr. Sumit Negi",
    role: "BDM",
    image: "/Team Photo/sumit negi.jpg",
    experience: 4,
    qualification: {
      degree: "LLB, Corporate Law",
      year: 2015
    },
    professionalBackground: "Sumit specializes in real estate law and regulatory compliance. He has successfully navigated complex legal processes for over 15 major property developments, ensuring smooth and secure transactions.",
    keyAchievements: [
        "Handled legal compliance for 15+ major projects.",
        "Zero litigation cases on managed projects.",
        "Developed a streamlined compliance checklist for the company."
    ],
    personalInterests: ["Chess", "History Books", "Cycling"]
  },
  {
    name: "Ms. Aishwarya Sharma",
    role: "BDM",
    image: "/Team Photo/aishwarya sharma.jpg",
    experience: 3,
    qualification: {
      degree: "BBA",
      year: 2015
    },
    professionalBackground: "Aishwarya specializes in real estate law and regulatory compliance. She has successfully navigated complex legal processes for over 15 major property developments, ensuring smooth and secure transactions.",
    keyAchievements: [
        "Handled legal compliance for 15+ major projects.",
        "Zero litigation cases on managed projects.",
        "Developed a streamlined compliance checklist for the company."
    ],
    personalInterests: ["Chess", "History Books", "Cycling"]
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "BDM",
    image: "/Team Photo/rajesh kumar.jpg",
    experience: 3,
    qualification: {
      degree: "Engineering",
      year: 2015
    },
    professionalBackground: "Rajesh specializes in real estate law and regulatory compliance. He has successfully navigated complex legal processes for over 15 major property developments, ensuring smooth and secure transactions.",
    keyAchievements: [
        "Handled legal compliance for 15+ major projects.",
        "Zero litigation cases on managed projects.",
        "Developed a streamlined compliance checklist for the company."
    ],
    personalInterests: ["Chess", "History Books", "Cycling"]
  },
  {
    name: "Mr. Narendra Singh",
    role: "BDM",
    image: "/Team Photo/narendre sir.jpg",
    experience: "5+",
    qualification: {
      degree: "BA",
      year: 2018
    },
    professionalBackground: "Narendra is a seasoned expert in real estate and regulatory compliance, known for his strategic approach to complex legal frameworks. With hands-on experience across more than 15 major property developments, he has consistently ensured seamless approvals, risk mitigation, and legally secure transactions. His in-depth understanding of regulatory requirements and property laws enables clients to move forward with confidence, transparency, and long-term stability.",
    keyAchievements: [
  "Successfully led end-to-end legal and regulatory compliance for 15+ large-scale real estate developments.",
  "Maintained a 100% clean track record with zero litigation across all managed projects.",
  "Designed and implemented a comprehensive compliance framework and checklist, significantly improving approval timelines and operational efficiency."
],
    personalInterests: ["BOXING", "Bike Riding", "Cycling"]
  },
  {
    name: "Mr. Sandeep Bansal",
    role: "BDM",
    image: "/Team Photo/sandeep sir.jpg",
    experience: "5+",
    qualification: {
      degree: "BA",
      year: 2018
    },
    professionalBackground: "Sandeep specializes in real estate and regulatory compliance. He has successfully navigated complex legal processes for over 15 major property developments, ensuring smooth and secure transactions.",
    keyAchievements: [
        "Handled legal compliance for 15+ major projects.",
        "Zero litigation cases on managed projects.",
        "Developed a streamlined compliance checklist for the company."
    ],
    personalInterests: ["BOXING", "History Books", "Cycling"]
  },
  {
    name: "Mr. Vijay Kumar",
    role: "DBDM",
    image: "/Team Photo/vijay kumar.jpg",
    experience: "3+",
    qualification: {
      degree: "BSc",
      year: 2022
    },
    professionalBackground: "Vijay specializes in real estate and regulatory compliance. He has successfully navigated complex legal processes for over 15 major property developments, ensuring smooth and secure transactions.",
    keyAchievements: ["Successfully managed end-to-end legal and regulatory compliance for 15+ high-value real estate projects, ensuring timely approvals and full statutory adherence Achieved a 100% litigation-free record across all supervised developments through proactive risk assessment and legal due diligence Developed and implemented a structured compliance framework and checklist, optimizing internal processes and accelerating regulatory clearances"],
    personalInterests: ["Dancing", "gaming", "adventure"]
  },
  // {
  //   name: "Mr. Rahul Sharma",
  //   role: "BDM",
  //   image: "/Team Photo/rahul sharma.jpg",
  //   experience: "5+",
  //   qualification: {
  //     degree: "MBA",
  //     year: 2018
  //   },
  //   professionalBackground: "Rahul specializes in real estate and regulatory compliance. He has successfully navigated complex legal processes for over 15 major property developments, ensuring smooth and secure transactions.",
  //   keyAchievements: [
  //       "Handled legal compliance for 15+ major projects.",
  //       "Zero litigation cases on managed projects.",
  //       "Developed a streamlined compliance checklist for the company."
  //   ],
  //   personalInterests: ["BOXING", "History Books", "Cycling"]
  // },
];

const backendTeam = [
  {
    name: "Shivam Tiwari",
    role: "FULL STACK DEVELOPER ",
    image: "/Team Photo/Shivam Tiwari 1.png",
    experience: 2.5,
    qualification: {
      degree: "BCA + MCA in Computer Science",
      year: 2021
    },
    professionalBackground: "Full-stack developer with 2.5 years experience in real estate web solutions.",
    keyAchievements: [
      "Developed custom CRM system increasing team efficiency by 40%",
      "Optimized website performance, reducing load time by 35%",
      "Implemented automated reporting system saving 20+ hours weekly",
      "Integrated secure payment gateways for seamless transactions"
    ],
    personalInterests: ["Coding", "Gaming", "Travel"]
  },

   {
    name: "Aryan Sengar",
    role: " Frontend Developer",
    image: "/Team Photo/Aryan Sengar.jpg",
    experience: 0.3,
    qualification: {
      degree: "B.Tech in IT",
      year: 2023
    },
    professionalBackground: "Operations specialist with 4 months experience in Development.",
    keyAchievements: [
      "Optimized workflow processes reducing project delays by 30%",
      "Implemented quality control measures improving client satisfaction",
      "Coordinated cross-functional teams for 50+ successful projects",
      "Developed vendor management system reducing costs by 20%"
    ],
    personalInterests: ["Music", "Travel", "Technology"]
  },


 
  {
    name: "Muskan Mehra",
    role: "HR Manager",
    image: "/Team Photo/Muskan 1.jpg",
    experience: 3,
    qualification: {
      degree: "MBA in HR",
      year: 2019
    },
    professionalBackground: "Human Resources specialist with 3 years experience in talent acquisition and employee engagement.",
    keyAchievements: [
      "Improved hiring efficiency by 30% through process optimization",
      "Developed employee retention program reducing turnover by 25%",
      "Implemented training programs boosting employee satisfaction scores",
      "Restructured onboarding process for faster team integration"
    ],
    personalInterests: ["Reading", "Dancing", "Cooking"]
  },
  {
    name: "Utsav Jha",
    role: "Accounts Manager",
    image: "/Team Photo/utsav.jpg",
    experience: 4,
    qualification: {
      degree: "Accountant",
      year: 2018
    },
    professionalBackground: "Accountant with 4 years experience in real estate finance and accounting.",
    keyAchievements: [
      "Implemented financial tracking systems improving accuracy by 25%",
      "Reduced operational costs by 15% through budget optimization",
      "Streamlined invoice processing time by 40%",
      "Developed financial forecasting models with 90% accuracy"
    ],
    personalInterests: [ "Cricket", "Reading"]
  },
{
    name: "AMAN PAL",
    role: "FULL STACK DEVELOPER",
    image: "/Team Photo/aman1.jpg",
    experience: 1 ,
    qualification: {
      degree: "BTECH CS (AIML) + HONS(Cyber Security)",
      year: 2026
    },
    professionalBackground: "Full-stack developer with 1 year experience in IT Development",
    keyAchievements: [
      "Developed and deployed multiple full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with responsive UI and RESTful APIs.",
      "Built dynamic and secure web applications using Python (Django Framework) including authentication, admin panels, and database integration.",
      "Developed fully responsive websites compatible across mobile, tablet, and desktop devices.",
      "Strong understanding of end-to-end project lifecycle — from requirement analysis to deployment."
    ],
    personalInterests: ["Programming", "travelling", "Exploring"]
  },

  

  // {
  //   name: "AYUSHI PAL",
  //   role: "HR Recruiter",
  //   // image: "/Team Photo/ayushi.jpg",
  //   experience: 2 ,
  //   qualification: {
  //     degree: "BTECH CS (IT)",
  //     year: 2026
  //   },
  //   professionalBackground: "B.Tech professional with dual experience in Full Stack Development (MERN, Django, PHP) and HR Recruitment. Strong technical foundation with expertise in candidate sourcing, screening, and end-to-end hiring support. Combines analytical and interpersonal skills to drive both technical and talent goals.",
  //   keyAchievements: [
  //     "Improved hiring efficiency by shortlisting quality candidates aligned with technical requirements. * Delivered scalable, performance-driven web solutions with clean and optimized code practices.* Coordinated with cross-functional teams to ensure smooth project execution and talent acquisition"
  //   ],
  //   personalInterests: ["coding", "puzziling", "Exploring"]
  // },

];

const Stats = ({ icon: Icon, value, label }: { icon: React.ComponentType<{ className?: string }>, value: string, label: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
    style={{
      boxShadow:
        "0 10px 25px -5px rgba(249, 115, 22, 0.1), 0 8px 10px -6px rgba(249, 115, 22, 0.1)",
    }}
  >
    <Icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
    <h3 className="text-3xl font-bold text-sky-900 mb-2">{value}</h3>
    <p className="text-sky-700">{label}</p>
  </motion.div>
);

const MissionCard = ({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>, title: string, text: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
    style={{
      boxShadow:
        "0 10px 25px -5px rgba(249, 115, 22, 0.1), 0 8px 10px -6px rgba(249, 115, 22, 0.1)",
    }}
  >
    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-sky-800 mb-4">{title}</h3>
    <p className="text-sky-700 leading-relaxed">{text}</p>
  </motion.div>
);

const TimelineItem = ({ year, title, description }: { year: string, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="relative flex items-start group"
  >
    <div className="absolute left-6 z-10">
      <div className="relative">
        <div className="absolute -inset-2 bg-orange-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="relative w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white">
          <span className="text-white font-bold text-sm">{year}</span>
        </div>
      </div>
    </div>

    <motion.div
      whileHover={{ y: -5 }}
      className="ml-16 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      style={{
        boxShadow:
          "0 10px 25px -5px rgba(249, 115, 22, 0.2), 0 8px 10px -6px rgba(249, 115, 22, 0.1)",
      }}
    >
      <h3 className="text-2xl font-bold text-sky-800 mb-4 flex items-center">
        {title}
        <ChevronRight className="w-6 h-6 text-orange-500 ml-2" />
      </h3>
      <p className="text-sky-700 leading-relaxed">{description}</p>
    </motion.div>
  </motion.div>
);

const TeamMemberCard = ({ member, onClick }: { member: any, onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer w-72 flex-shrink-0"
      onClick={onClick}
      style={{
        scrollSnapAlign: "start",
        boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.1), 0 8px 10px -6px rgba(14, 165, 233, 0.1)",
      }}
    >
      <div className="relative h-60 overflow-hidden group">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Experience badge */}
        <div className="absolute top-4 right-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-bold">
          {member.experience}+ years
        </div>
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-xl font-bold text-white truncate">{member.name}</h3>
          <p className="text-sky-200 text-sm">{member.role}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-sky-700 font-medium text-sm">{member.qualification.degree}</span>
          <span className="text-sky-500 text-xs">({member.qualification.year})</span>
        </div>
        
        <button className="mt-4 text-orange-600 hover:text-orange-800 font-medium text-sm w-full text-left">
          Read More →
        </button>
      </div>
    </motion.div>
  );
};

const TeamMemberModal = ({ member, isOpen, onClose }: { member: any, isOpen: boolean, onClose: () => void }) => {
  if (!member) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-1 shadow-md hover:bg-sky-50 transition-colors"
                >
                  <X className="w-6 h-6 text-sky-800" />
                </button>
                
                <div className="relative h-60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-bold">
                    {member.experience}+ years experience
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                    <p className="text-sky-200">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <h4 className="font-bold text-sky-800 mb-2">Qualification</h4>
                      <p className="text-sky-700">{member.qualification.degree}</p>
                      <p className="text-sky-500 text-sm">({member.qualification.year})</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold text-orange-800 mb-2">Experience</h4>
                      <p className="text-orange-700">{member.experience}+ years</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-sky-900 mb-3 border-b pb-2">Professional Background</h3>
                      <p className="text-sky-700 leading-relaxed">{member.professionalBackground}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-sky-900 mb-3 border-b pb-2">Key Achievements</h3>
                      <ul className="space-y-2">
                        {member.keyAchievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-sky-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-sky-900 mb-3 border-b pb-2">Personal Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.personalInterests.map((interest: string, index: number) => (
                          <span
                            key={index}
                            className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const backendScrollRef = useRef<HTMLDivElement>(null);

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-sky-100 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-sky-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-sky-700 text-xl max-w-2xl mx-auto">
            The talented professionals driving innovation and growth at A.S.
            Rudra Solutions.
          </p>
        </motion.div>

        {/* Sales Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-sky-800 mb-8 text-center">
            Sales & Business Development Team
          </h3>
          <div className="relative">
            <button
              onClick={() => scrollLeft(scrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-sky-50 transition-all -left-4"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-sky-600" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide space-x-8 py-4 px-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {teamMembers.map((member, idx) => (
                <TeamMemberCard
                  key={idx}
                  member={member}
                  onClick={() => handleMemberClick(member)}
                />
              ))}
            </div>

            <button
              onClick={() => scrollRight(scrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-sky-50 transition-all -right-4"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-sky-600" />
            </button>
          </div>
        </div>

        {/* Backend Team */}
        <div>
          <h3 className="text-2xl font-bold text-sky-800 mb-4 text-center">
            Backend & Support Team
          </h3>
          <p className="text-sky-700 text-center max-w-3xl mx-auto mb-8">
            Our dedicated support team works behind the scenes to ensure seamless operations, 
            from technology infrastructure to client support and financial management.
          </p>
          <div className="relative">
            <button
              onClick={() => scrollLeft(backendScrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-sky-50 transition-all -left-4"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-sky-600" />
            </button>

            <div
              ref={backendScrollRef}
              className="flex overflow-x-auto scrollbar-hide space-x-8 py-4 px-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {backendTeam.map((member, idx) => (
                <TeamMemberCard
                  key={`backend-${idx}`}
                  member={member}
                  onClick={() => handleMemberClick(member)}
                />
              ))}
            </div>

            <button
              onClick={() => scrollRight(backendScrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-sky-50 transition-all -right-4"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-sky-600" />
            </button>
          </div>
        </div>

        <TeamMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section with professional image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 min-h-[60vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=800&h=600&fit=crop"
            alt="A.S. Rudra Solutions corporate team"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-sky-700/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-orange-400">AS Rudra Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-sky-100 leading-relaxed max-w-3xl mx-auto"
          >
            Redefining real estate standards through innovation, integrity, and
            excellence since 2022.
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-sky-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-sky-700 text-lg leading-relaxed">
                <p>
                  Established in October 2022 by five co-founders with a shared vision 
                  to transform India's real estate landscape, A.S. Rudra Solutions 
                  began as a small but ambitious venture.
                </p>
                <p>
                  Our founders brought together diverse expertise spanning real estate 
                  development, sales, finance, and customer relations, creating a 
                  unique synergy that propelled our rapid growth.
                </p>
                <p>
                  Today, we proudly stand as a trusted partner in the industry, having 
                  successfully facilitated transactions worth 1.5k+ units while maintaining 
                  our commitment to transparency and client satisfaction.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Stats icon={Building} value="1.5k+ units" label="Property Sales" />
              <Stats icon={Users} value="100+" label="Team Members" />
              <Stats icon={Award} value="5" label="Founders" />
              <Stats icon={TrendingUp} value="2022" label="Founded Year" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <MissionCard
            icon={Target}
            title="Our Mission"
            text="To deliver trustworthy and customized real estate solutions that empower our clients to make informed decisions. We combine market expertise with innovative technology to create seamless property transactions that exceed expectations."
          />
          <MissionCard
            icon={Eye}
            title="Our Vision"
            text="To become India's most respected real estate solutions provider by setting new benchmarks in customer service, ethical practices, and professional excellence. We aim to be the preferred partner for both developers and property seekers nationwide."
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sky-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-sky-700 max-w-2xl mx-auto">
              The principles that guide every decision and interaction at A.S.
              Rudra Solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-sky-50 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(249, 115, 22, 0.1), 0 8px 10px -6px rgba(249, 115, 22, 0.1)",
                }}
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sky-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-sky-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sky-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-sky-700 max-w-2xl mx-auto">
              Key milestones in our growth story.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-sky-500 rounded-full"></div>
            <div className="space-y-16">
              {achievements.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-sky-900 text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Rudra Difference?
          </h2>
          <p className="text-xl text-sky-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've transformed their real
            estate journey with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg"
              style={{ boxShadow: "0 4px 14px rgba(249, 115, 22, 0.4)" }}
            >
              Contact Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-sky-100 text-sky-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
            >
              View Properties
            </motion.button>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default About;