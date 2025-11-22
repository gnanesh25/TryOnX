import { Wand2, Shirt, Ruler, Users, Shield, Share2, Store } from "lucide-react";
const Features = () => {
  const features = [{
    icon: Wand2,
    title: "AI Virtual Try-On",
    description: "Upload once, try multiple outfits. See fit, drape, and style in one place."
  }, {
    icon: Shirt,
    title: "Mix & Match Outfits",
    description: "Combine tops, bottoms, jackets and accessories to create full looks."
  }, {
    icon: Ruler,
    title: "Size & Fit Guidance",
    description: "Get smart suggestions based on brand size charts and your body measurements."
  }, {
    icon: Users,
    title: "Demo Mode",
    description: "Try the experience using sample models — no photo required."
  }, {
    icon: Shield,
    title: "Safe & Ethical Use",
    description: "All uploads are checked by content filters to block inappropriate or non-consensual images."
  }, {
    icon: Share2,
    title: "Save & Share Looks",
    description: "Download or share your try-ons with friends or stylists for feedback."
  }, {
    icon: Store,
    title: "Merchant / Brand Ready",
    description: "Brands can upload their products and let users try them on instantly."
  }];
  return <section className="py-24 bg-subtle-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      
    </section>;
};
export default Features;