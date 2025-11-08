import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;