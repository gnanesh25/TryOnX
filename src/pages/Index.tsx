import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;