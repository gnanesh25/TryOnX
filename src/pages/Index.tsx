import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustRow />
      <HowItWorks />
    </div>
  );
};

export default Index;
