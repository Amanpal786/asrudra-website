
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import PropertyCategories from '../components/PropertyCategories';
import ExclusiveProperties from '../components/ExclusiveProperties';
import LocationSearch from '../components/LocationSearch';
import DirectorsSection from '../components/DirectorsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PropertyCategories />
      <ExclusiveProperties />
      <LocationSearch />
      <DirectorsSection />
    </Layout>
  );
};

export default Index;
