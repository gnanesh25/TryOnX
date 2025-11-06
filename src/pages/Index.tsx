import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <HowItWorks />
      <Features />
    </div>;
};
export default Index;