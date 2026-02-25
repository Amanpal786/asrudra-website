import { useState, useEffect, useRef } from "react";
import { SendHorizonal, MessageCircle, X, Minus, Square, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: string;
  title: string;
  type: 'residential' | 'commercial' | 'plot' | 'rental';
  price: string;
  location: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  features: string[];
  description: string;
  image: string;
  possession?: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{from: string, text: string, isTyping?: boolean, properties?: Property[]}>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<Record<string, string>>({});
  const [conversationFlow, setConversationFlow] = useState<'initial' | 'commercial' | 'residential' | 'rental' | 'plot' | 'enquiry'>('initial');
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Property Database
  const propertyDatabase: Record<string, Property[]> = {
    commercial: [
      {
        id: "1",
        title: "Premium Office Space - Tech Hub",
        type: "commercial",
        price: "₹8.5 Crores",
        location: "Hitech City, Hyderabad",
        area: "4200 sq ft",
        bathrooms: 6,
        parking: 15,
        features: ["Fiber Optic Internet", "Conference Rooms", "Cafeteria", "24/7 Power Backup", "Business Lounge"],
        description: "State-of-the-art office space in Hyderabad's IT hub with modern infrastructure and premium amenities.",
        image: "photo-1497366754035-f200968a6e72",
        possession: "Ready to Move"
      },
      {
        id: "3",
        title: "Corporate Business Center",
        type: "commercial",
        price: "₹6.2 Crores",
        location: "Bandra Kurla Complex, Mumbai",
        area: "3500 sq ft",
        bathrooms: 4,
        parking: 12,
        features: ["Smart Building", "Video Conferencing", "Reception Services", "Modular Workstations"],
        description: "Premium corporate office space in Mumbai's premier business district.",
        image: "photo-1560448204-603b3fc33ddc",
        possession: "Mar 2025"
      }
    ],
    residential: [
      {
        id: "2",
        title: "Luxury 3 BHK Apartment",
        type: "residential",
        price: "₹4.2 Crores",
        location: "Bandra West, Mumbai",
        area: "1850 sq ft",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        features: ["Sea View", "Smart Home", "Modular Kitchen", "Wooden Flooring", "Power Backup"],
        description: "Stunning 3 BHK apartment with panoramic sea views and premium finishes.",
        image: "photo-1613490493576-7fde63acd811",
        possession: "Ready to Move"
      },
      {
        id: "4",
        title: "Modern 2 BHK Villa",
        type: "residential",
        price: "₹3.8 Crores",
        location: "Gurgaon Sector 70",
        area: "2200 sq ft",
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
        features: ["Private Garden", "Smart Home", "Marble Flooring", "Private Terrace"],
        description: "Contemporary villa with modern architecture and luxury amenities.",
        image: "photo-1605146769289-440113cc3d00",
        possession: "Dec 2024"
      }
    ],
    rental: [
      {
        id: "5",
        title: "Fully Furnished Office Space",
        type: "rental",
        price: "₹2.5 Lakhs/month",
        location: "Whitefield, Bangalore",
        area: "1200 sq ft",
        bathrooms: 2,
        parking: 8,
        features: ["Fully Furnished", "High-Speed Internet", "Meeting Rooms", "Reception", "Housekeeping"],
        description: "Ready-to-move-in furnished office space with all modern amenities.",
        image: "photo-1497366216548-37526070297c",
        possession: "Immediate"
      },
      {
        id: "6",
        title: "Luxury Apartment for Rent",
        type: "rental",
        price: "₹85,000/month",
        location: "Juhu, Mumbai",
        area: "1100 sq ft",
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
        features: ["Fully Furnished", "Sea View", "Swimming Pool", "Gym", "24/7 Security"],
        description: "Beautiful 2 BHK apartment with modern furnishings and premium amenities.",
        image: "photo-1600607687644-c7171b42498b",
        possession: "Immediate"
      }
    ],
    plot: [
      {
        id: "7",
        title: "Residential Plot",
        type: "plot",
        price: "₹1.2 Crores",
        location: "Noida Expressway",
        area: "300 sq yd",
        features: ["Corner Plot", "Main Road Facing", "Clear Title", "Approved Layout"],
        description: "Premium residential plot in developing area with excellent connectivity.",
        image: "photo-1600585154340-be6161a56a0c",
        possession: "Freehold"
      }
    ]
  };

  const conversationSteps = {
    initial: [
      {
        question: "Namaste! 👋 I'm Anushka, your property expert at EstateOasis.",
        key: "welcome"
      },
      {
        question: "How can I assist you with your property needs today?",
        key: "assistance",
        options: [
          "🏢 Commercial Property",
          "🏠 Residential Property", 
          "💰 Rental Properties",
          "📐 Plots & Land",
          "💼 Business Inquiry"
        ]
      }
    ],
    commercial: [
      {
        question: "Great choice! Commercial properties are excellent investments. What type of commercial space are you looking for?",
        key: "commercial_type",
        options: ["Office Space", "Retail Shop", "Warehouse", "Showroom", "Any Commercial Space"]
      },
      {
        question: "Perfect! Which location are you interested in?",
        key: "commercial_location"
      },
      {
        question: "What's your budget range for the commercial property?",
        key: "commercial_budget",
        options: ["Under ₹2 Cr", "₹2-5 Cr", "₹5-10 Cr", "₹10 Cr+", "Flexible"]
      },
      {
        question: "Any specific area requirement?",
        key: "commercial_area"
      }
    ],
    residential: [
      {
        question: "Excellent! Residential properties provide great living experiences. What type of residential property?",
        key: "residential_type",
        options: ["2 BHK", "3 BHK", "4 BHK", "Villa", "Penthouse", "Any"]
      },
      {
        question: "Which location would you prefer?",
        key: "residential_location"
      },
      {
        question: "What's your budget range?",
        key: "residential_budget", 
        options: ["Under ₹1 Cr", "₹1-3 Cr", "₹3-5 Cr", "₹5 Cr+", "Flexible"]
      },
      {
        question: "Any specific requirements?",
        key: "residential_requirements"
      }
    ],
    rental: [
      {
        question: "Rental properties offer great flexibility! What type of rental are you looking for?",
        key: "rental_type",
        options: ["Residential Rental", "Commercial Rental", "Office Space", "Shop", "Any"]
      },
      {
        question: "Preferred location for rental?",
        key: "rental_location"
      },
      {
        question: "What's your monthly budget?",
        key: "rental_budget",
        options: ["Under ₹50k", "₹50k-1L", "₹1-2L", "₹2L+", "Flexible"]
      },
      {
        question: "Any specific duration or requirements?",
        key: "rental_requirements"
      }
    ],
    plot: [
      {
        question: "Plots are great for custom construction! What type of plot?",
        key: "plot_type",
        options: ["Residential Plot", "Commercial Plot", "Agricultural Land", "Industrial Plot"]
      },
      {
        question: "Preferred location for the plot?",
        key: "plot_location"
      },
      {
        question: "What's your budget range?",
        key: "plot_budget",
        options: ["Under ₹50 Lakhs", "₹50L-1Cr", "₹1-2Cr", "₹2Cr+", "Flexible"]
      },
      {
        question: "Any specific area or requirements?",
        key: "plot_requirements"
      }
    ],
    enquiry: [
      {
        question: "Thank you for the details! May I know your name?",
        key: "name",
        validation: (val: string) => val.length > 2,
        error: "Please enter a valid name"
      },
      {
        question: "Nice to meet you, {name}! What's your contact number?",
        key: "contact",
        validation: (val: string) => /^\d{10}$/.test(val),
        error: "Please enter a valid 10-digit number"
      },
      {
        question: "Perfect! And your email address?",
        key: "email",
        validation: (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        error: "Please enter a valid email address"
      },
      {
        question: "Thank you! Our expert will contact you shortly with personalized property options.",
        key: "completion"
      }
    ]
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      startConversation();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ 
        behavior: "smooth",
        block: "end"
      });
    }, 100);
  };

  const simulateTyping = (text: string, callback?: () => void) => {
    let typedText = "";
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        typedText += text.charAt(i);
        setMessages(prev => {
          const newMessages = [...prev];
          if (newMessages[newMessages.length - 1]?.isTyping) {
            newMessages[newMessages.length - 1] = {
              ...newMessages[newMessages.length - 1],
              text: typedText
            };
          } else {
            newMessages.push({ from: "bot", text: typedText, isTyping: true });
          }
          return newMessages;
        });
        i++;
        scrollToBottom();
      } else {
        clearInterval(typingInterval);
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            ...newMessages[newMessages.length - 1],
            isTyping: false
          };
          return newMessages;
        });
        scrollToBottom();
        callback?.();
      }
    }, 100);
  };

  const startConversation = () => {
    const initialSteps = conversationSteps.initial;
    let currentIndex = 0;

    const typeNextMessage = () => {
      if (currentIndex < initialSteps.length) {
        const step = initialSteps[currentIndex];
        simulateTyping(step.question, () => {
          currentIndex++;
          if (currentIndex < initialSteps.length) {
            setTimeout(typeNextMessage, 800);
          }
        });
      }
    };

    typeNextMessage();
  };

  const handleOptionSelect = (option: string) => {
    setInput(option);
    handleSend();
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages(prev => [...prev, { from: "user", text: input }]);
    scrollToBottom();
    
    const userInput = input.trim().toLowerCase();
    const currentSteps = conversationSteps[conversationFlow];
    const currentStepData = currentSteps?.[currentStep];

    // Detect property type from user input
    if (conversationFlow === 'initial') {
      if (userInput.includes('commercial') || userInput.includes('office') || userInput.includes('business') || userInput.includes('corporate')) {
        setConversationFlow('commercial');
        setCurrentStep(0);
        setTimeout(() => showProperties('commercial'), 500);
        setInput("");
        return;
      } else if (userInput.includes('residential') || userInput.includes('house') || userInput.includes('apartment') || userInput.includes('2bhk') || userInput.includes('3bhk') || userInput.includes('villa')) {
        setConversationFlow('residential');
        setCurrentStep(0);
        setTimeout(() => showProperties('residential'), 500);
        setInput("");
        return;
      } else if (userInput.includes('rent') || userInput.includes('rental') || userInput.includes('lease')) {
        setConversationFlow('rental');
        setCurrentStep(0);
        setTimeout(() => showProperties('rental'), 500);
        setInput("");
        return;
      } else if (userInput.includes('plot') || userInput.includes('land') || userInput.includes('empty')) {
        setConversationFlow('plot');
        setCurrentStep(0);
        setTimeout(() => showProperties('plot'), 500);
        setInput("");
        return;
      }
    }

    if (currentStepData?.validation && !currentStepData.validation(input)) {
      simulateTyping(currentStepData.error);
      setInput("");
      return;
    }

    const newUserData = { ...userData, [currentStepData?.key || 'response']: input };
    setUserData(newUserData);
    setInput("");

    const nextStep = currentStep + 1;
    if (nextStep < currentSteps.length) {
      setCurrentStep(nextStep);
      const nextQuestion = currentSteps[nextStep].question.replace(/{(\w+)}/g, (_, k) => newUserData[k] || "");
      
      if (currentSteps[nextStep].options) {
        setTimeout(() => {
          simulateTyping(nextQuestion, () => {
            showOptions(currentSteps[nextStep].options || []);
          });
        }, 800);
      } else {
        setTimeout(() => simulateTyping(nextQuestion), 800);
      }
    } else {
      // End of current flow, move to enquiry
      if (conversationFlow !== 'enquiry') {
        setConversationFlow('enquiry');
        setCurrentStep(0);
        const enquirySteps = conversationSteps.enquiry;
        const firstEnquiryQuestion = enquirySteps[0].question.replace(/{(\w+)}/g, (_, k) => newUserData[k] || "");
        setTimeout(() => simulateTyping(firstEnquiryQuestion), 800);
      } else {
        // Final completion
        setTimeout(() => {
          simulateTyping("Thank you for your interest! Our team will contact you within 24 hours. Have a great day! 🏡");
        }, 800);
      }
    }
  };

  const showProperties = (type: string) => {
    const properties = propertyDatabase[type] || [];
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          from: "bot", 
          text: `🏢 Here are some ${type} properties that might interest you:`,
          properties: properties.slice(0, 2)
        }
      ]);
      scrollToBottom();
      
      // Show next question after properties
      setTimeout(() => {
        const currentSteps = conversationSteps[conversationFlow];
        if (currentSteps && currentSteps.length > 0) {
          const nextQuestion = currentSteps[0].question;
          simulateTyping(nextQuestion);
        }
      }, 1500);
    }, 500);
  };

  const showOptions = (options: string[]) => {
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          from: "bot", 
          text: "Please choose an option:",
          properties: options.map(opt => ({
            id: Math.random().toString(),
            title: opt,
            type: 'option' as any,
            price: "",
            location: "",
            area: "",
            features: [],
            description: "",
            image: ""
          }))
        }
      ]);
      scrollToBottom();
    }, 300);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const PropertyCard = ({ property }: { property: Property }) => {
    if (property.type === 'option') {
      return (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleOptionSelect(property.title)}
          className="w-full text-left p-3 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700 mb-2 shadow-sm"
        >
          {property.title}
        </motion.button>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm mb-3"
      >
        <div className="flex">
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src={`https://images.unsplash.com/${property.image}?w=100&h=100&fit=crop&q=80`}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 flex-1 min-w-0">
            <h4 className="font-semibold text-sm text-gray-800 mb-1 truncate">{property.title}</h4>
            <p className="text-xs text-gray-600 mb-1 flex items-center">
              <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">{property.location}</span>
            </p>
            <p className="text-sm font-bold text-blue-600 mb-1">{property.price}</p>
            <div className="flex items-center text-xs text-gray-500 flex-wrap">
              <span className="mr-2">{property.area}</span>
              {property.bedrooms && <span className="mr-2">• {property.bedrooms} Beds</span>}
              {property.bathrooms && <span>• {property.bathrooms} Baths</span>}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className={`bg-white rounded-2xl shadow-2xl w-96 ${isMinimized ? 'h-16' : 'h-[500px]'} flex flex-col overflow-hidden border border-blue-200`}
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden border-2 border-white">
                    <img 
                      src="/api/placeholder/32/32" 
                      alt="Anushka" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-400 border border-white"></div>
                </div>
                <div className={isMinimized ? 'hidden' : 'block'}>
                  <h2 className="font-bold text-sm">Anushka - Property Expert</h2>
                  <p className="text-xs opacity-90">EstateOasis • Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button 
                  onClick={toggleMinimize}
                  className="text-white/80 hover:text-white p-1 transition-colors"
                >
                  {isMinimized ? <Square size={14} /> : <Minus size={14} />}
                </button>
                <button 
                  onClick={toggleChat}
                  className="text-white/80 hover:text-white p-1 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat messages */}
                <div 
                  ref={chatRef}
                  className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-blue-50/30"
                  style={{ maxHeight: 'calc(500px - 140px)' }}
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.from === "user" ? "justify-end" : "justify-start items-start"}`}
                    >
                      {msg.from === "bot" && (
                        <div className="mr-2 mt-1 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-blue-200">
                            <img 
                              src="/api/placeholder/24/24" 
                              alt="Anushka" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div className="max-w-[85%] min-w-0">
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className={`p-3 rounded-2xl text-sm ${
                            msg.from === "user" 
                              ? "bg-blue-600 text-white rounded-br-none" 
                              : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-200"
                          }`}
                        >
                          {msg.text}
                          {msg.isTyping && (
                            <div className="flex space-x-1 mt-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                            </div>
                          )}
                        </motion.div>
                        
                        {/* Property Cards */}
                        {msg.properties && msg.properties.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {msg.properties.map((property, idx) => (
                              <PropertyCard key={property.id || idx} property={property} />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input area */}
                <div className="border-t border-blue-200 p-3 bg-white flex-shrink-0">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-3 py-2 pr-10 text-sm rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500 bg-white"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSend}
                      disabled={input.trim() === ""}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 text-blue-600 hover:text-blue-800 disabled:text-gray-400 transition-colors"
                    >
                      <SendHorizonal size={16} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className={`p-3 rounded-full shadow-2xl ${isOpen ? 'hidden' : 'block'} bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 border border-blue-500`}
      >
        <MessageCircle size={20} />
      </motion.button>
    </div>
  );
};

export default Chatbot;