import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import PropertyCategories from '../components/PropertyCategories';
import ExclusiveProperties from '../components/ExclusiveProperties';
import LocationSearch from '../components/LocationSearch';
import DirectorsSection from '../components/DirectorsSection';
import FeedbackSection from '../components/FeedbackSection'; // ✅ ADD THIS

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PropertyCategories />
      <ExclusiveProperties />

      {/* 🔥 FEEDBACK SECTION YAHAN */}
      <FeedbackSection />

      {/* MAP / LOCATION */}
      <LocationSearch />

      <DirectorsSection />
    </Layout>
  );
};

export default Index;