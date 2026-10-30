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
  return <section className="py-16 bg-subtle-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Why you'll <span className="bg-hero-gradient bg-clip-text text-transparent">love TryOnX</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to see the look before you buy it.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>;
};
export default Features;
