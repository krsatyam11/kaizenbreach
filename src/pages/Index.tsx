import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import LearningSection from "@/components/home/LearningSection"; // Import the new section
import FeaturesSection from "@/components/home/FeaturesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      {/* Added the Learning Section here */}
      <LearningSection />
      <FeaturesSection />
    </Layout>
  );
};

export default Index;