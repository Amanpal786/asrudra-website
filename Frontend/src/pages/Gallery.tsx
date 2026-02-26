import { useState } from 'react';
import Layout from '../components/Layout';
import { 
  Calendar, 
  Camera, 
  Home, 
  MapPin, 
  Users, 
  Award, 
  Construction, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  X,
  Plus,
  Minus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[];
}

interface PropertyCategory {
  id: number;
  title: string;
  description: string;
  count: number;
  images: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: 'Annual Company Event 2024',
      date: 'December 24 , 2024',
      description: 'Annual Company Event 2024 – celebrating success, teamwork, and excellence at our yearly R&R! Let’s honor achievements and create lasting memories together.',
      images: [
        '/images/award.png',
        '/images/4 sbdm.png',
        '/images/legends team.png',
        '/images/1riya.jpg',
        '/images/raj2.png',
        '/images/backend.png'
      ]
    },
    {
      id: 2,
      title: 'NX-ONE  Tower-5  Project Launch',
      date: 'SEPTEMBER 8, 2025',
      description: 'NX One T-5 – Ultra-Luxury Commercial Spaces Experience world-class amenities: gym, swimming pool, auditorium, meeting halls & kids’ play zone — where luxury meets productivity.',
      images: [
        '/images/nx-one 2.png',
        '/images/nx-one 3.png',
        '/images/nx one 4.png',
        '/images/nx one 7.png',
        '/images/nx one .jpeg',
         '/images/nx one 3.jpg'
      ]
    },
    {
      id: 3,
      title: 'EMPLOYEE OF THE YEAR AWARDS 2025',
      date: 'DECEMBER 22, 2025',
      description: ' Anurodh Yadav is a Recognizing our top performer and celebrating achievements across all departments. Awards were given for excellence in sales, customer service, and innovation.',
      images: [
        '/images/anu1.jpg',
        '/images/EMPLOYEE OF THE YEAR 2.png',
        '/images/EMPLOYEE OF THE YEAR 3.png ',
        '/images/EMPLOYEE OF THE YEAR.png '      ]
    }
  ];

  const propertyCategories: PropertyCategory[] = [
    {
      id: 1,
      title: 'Luxury Villas',
      description: 'Premium villas with modern amenities and spacious designs in exclusive locations',
      count: 1000,
      images: [
        'https://www.villasinnoida.com/images/greater-noida/villas-in-greater-noida.jpg',
        'https://im.proptiger.com/1/3292215/6/signature-villas-elevation-148847820.jpeg?width=1336&height=768',
        'https://4.bp.blogspot.com/-EPIvqqOG7iM/V5BtWSRstlI/AAAAAAAADt0/lqq6rWLDzpUGf0-HIns2Z3ps0v9yG9o7QCLcB/s1600/contemporary%2Bbungalow%2Barchitect%2Brendering.jpg',
        'https://www.villasinnoida.com/images/escon-villas/escon-villas-in-noida.jpg',
        'https://www.villasinnoida.com/images/godrej-exquisite/godrej-exquisite-villas-in-greater-noida.jpg',
        'https://www.billionyards.com/images/folio/atspristinegolfvillas.jpg'
      ],
      icon: Home
    },
    {
      id: 2,
      title: 'Apartments',
      description: 'Luxury homes with seamless connectivity, world-class amenities, and thoughtfully designed living spaces by trusted developers.',
      count: 100,
      images: [
        'https://www.edificereality.com/uploads/projects/stellar-one-edifice-reality-016.png',
        'https://www.godrejproperties.com/blog/wp-content/uploads/2023/04/blog_img-4.jpg',
        'https://www.rgluxuryhome.co.in/rgluxury/landing-page/images/gallery/3.jpeg',
        'https://th.bing.com/th/id/R.48d34c8264291be51da2a8fc5d742748?rik=N6byZFUuk%2bzcGw&riu=http%3a%2f%2fwww.parasnoida.in%2fblogs%2fwp-content%2fuploads%2f2023%2f03%2f1-1024x504.jpeg&ehk=tk%2bWcDpjAffbXHh08CHtBNusvnOFH92H1fYAWoWMdxc%3d&risl=&pid=ImgRaw&r=0',
        'https://www.billionyards.com/images/folio/cleo-county.jpg',
        'https://luxuryresidences.co.in/blog/wp-content/uploads/2022/02/Gulshan-Dynasty-balcony-view-850x425.jpg'
      ],
      icon: Home
    },
    {
      id: 3,
      title: 'Under Construction',
      description: 'Sobha Upcoming projects with attractive pre-launch prices and modern amenities',
      count: 18,
      images: [
        'https://miro.medium.com/v2/resize:fit:1080/1*d-AnC1ECRzgJ0RvxdyVu8Q.jpeg',
        'https://media.gettyimages.com/id/469780252/photo/a-construction-site-of-a-residential-complex-in-noida.jpg?s=612x612&w=gi&k=20&c=MDQEojOcDvaBTc5Eho7KhKKBd8QFsXXswLgd5XwPdx0=',
        'https://www.hindustantimes.com/ht-img/img/2023/06/18/1600x900/The-Noida-authority--in-February-2016--started-wor_1680544363970_1687131416374.jpg',
        'https://files.prokerala.com/news/photos/imgs/1024/greater-noida-under-construction-skyscrapers-in-534773.jpg',
        'https://www.nbmcw.com/images/nbm-media/products/Scaffolding-Formwork/28080-maini.jpg',
        'https://www.commercialproperty.review/wp-content/uploads/2018/01/Galaxy-Diamond-Plaza-Mall-Greater-Noida-West.jpg'
      ],
      icon: Construction
    },
    {
      id: 4,
      title: 'Commercial Properties',
      description: 'Office spaces and retail outlets in prime business districts with high ROI',
      count: 27,
      images: [
        '/gallery/Project Photo/Office/NX ONE OFFICE.jpg',
        '/gallery/Project Photo/Office/Golden Grande.webp',
        '/gallery/Project Photo/Office/Mask-Group-61.jpg',
        '/gallery/Project Photo/Office/NX ONE 1.jpg',
        '/gallery/Project Photo/Office/NX ONE2.jpg',
        '/gallery/Project Photo/Office/golden i1.jpg'
      ],
      icon: MapPin
    }
  ];

  const allPropertyImages = propertyCategories.flatMap(category => 
    category.images.map(img => ({ image: img, category: category.title }))
  );

  const filteredImages = selectedCategory === 'all' 
    ? allPropertyImages 
    : allPropertyImages.filter(img => img.category === selectedCategory);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setZoomLevel(1);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const toggleEvent = (id: number) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop"
            alt="AS RUDRA SOLUTIONS Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            AS Rudra Solutions <span className="text-amber-400">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our portfolio of premium properties and company milestones
          </motion.p>
        </div>
      </section>

      {/* Property Categories Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Our Property Portfolio</h2>
            <p className="text-lg text-sky-700 max-w-3xl mx-auto">
              Browse through our diverse collection of residential and commercial properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {propertyCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: category.id * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={category.images[0]}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="flex items-center">
                      <div className="bg-amber-500 p-2 rounded-full mr-3">
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sky-700 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-sky-600">{category.count} properties</span>
                    <button 
                      onClick={() => setSelectedCategory(category.title)}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
                    >
                      View All
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === 'all' ? 'bg-amber-500 text-white' : 'bg-white text-sky-700 hover:bg-sky-100'}`}
            >
              All Properties
            </button>
            {propertyCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category.title ? 'bg-amber-500 text-white' : 'bg-white text-sky-700 hover:bg-sky-100'}`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Property Image Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openImageModal(item.image)}
              >
                <img
                  src={item.image}
                  alt={`Property ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Company Events</h2>
            <p className="text-lg text-sky-700 max-w-3xl mx-auto">
              Capturing the moments that define our journey and celebrate our achievements
            </p>
          </motion.div>

          <div className="space-y-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-sky-50 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-2 rounded-full mr-4">
                        <Calendar className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-sky-600">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-sky-900 mb-3">{event.title}</h3>
                    <p className="text-sky-700 mb-6">{event.description}</p>
                    
                    <button
                      onClick={() => toggleEvent(event.id)}
                      className="flex items-center text-amber-600 hover:text-amber-700 font-medium"
                    >
                      {activeEvent === event.id ? 'Hide Gallery' : 'View Event Gallery'}
                      <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${activeEvent === event.id ? 'rotate-90' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeEvent === event.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 overflow-hidden"
                        >
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {event.images.slice(1).map((image, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="relative group overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => openImageModal(image)}
                              >
                                <img
                                  src={image}
                                  alt={`${event.title} ${index + 1}`}
                                  className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <Camera className="w-6 h-6 text-white" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-sky-200 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence in real estate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, value: '500+', label: 'Properties Developed' },
              { icon: CheckCircle, value: '25+', label: 'Years of Experience' },
              { icon: Users, value: '10,000+', label: 'Happy Customers' },
              { icon: MapPin, value: '15+', label: 'Cities Presence' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-sky-800/30 rounded-xl"
              >
                <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-sky-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 z-10 text-white hover:text-amber-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex gap-2 absolute -top-12 left-0 z-10">
                <button
                  onClick={zoomIn}
                  className="bg-sky-800 text-white p-2 rounded hover:bg-sky-700 transition-colors"
                  disabled={zoomLevel >= 3}
                >
                  <Plus className="w-5 h-5" />
                </button>
                <button
                  onClick={zoomOut}
                  className="bg-sky-800 text-white p-2 rounded hover:bg-sky-700 transition-colors"
                  disabled={zoomLevel <= 0.5}
                >
                  <Minus className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-auto max-h-[70vh] object-contain"
                  style={{ scale: zoomLevel }}
                  drag
                  dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
