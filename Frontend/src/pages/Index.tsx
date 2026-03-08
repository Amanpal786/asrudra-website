
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import PropertyCategories from '../components/PropertyCategories';
import ExclusiveProperties from '../components/ExclusiveProperties';
import LocationSearch from '../components/LocationSearch';
import DirectorsSection from '../components/DirectorsSection';
import SEO from "../components/SEO";

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

function HomePage() {
  return (
    <>
      <SEO
        title="A.S. Rudra Solutions | Top 10 Projects & Office Spaces in Greater Noida West"
        description="Explore the Top 10 commercial and residential projects in Greater Noida West & Noida Extension. Discover premium office spaces, plots, and investment opportunities including NX One Ark."
        keywords="Top 10 Projects Greater Noida West, Best Office Space Noida Extension, NX One Ark Investment Guide, Property Dealer Greater Noida West, Commercial Property Noida Extension"
      />
      {/* Rest of your page content */}
    </>
  );
}

export default Index;
