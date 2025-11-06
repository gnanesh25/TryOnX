import { Wand2, Shirt, Ruler, Users, Shield, Share2, Store } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI Virtual Try-On",
      description: "Upload once, try multiple outfits. See fit, drape, and style in one place."
    },
    {
      icon: Shirt,
      title: "Mix & Match Outfits",
      description: "Combine tops, bottoms, jackets and accessories to create full looks."
    },
    {
      icon: Ruler,
      title: "Size & Fit Guidance",
      description: "Get smart suggestions based on brand size charts and your body measurements."
    },
    {
      icon: Users,
      title: "Demo Mode",
      description: "Try the experience using sample models — no photo required."
    },
    {
      icon: Shield,
      title: "Safe & Ethical Use",
      description: "All uploads are checked by content filters to block inappropriate or non-consensual images."
    },
    {
      icon: Share2,
      title: "Save & Share Looks",
      description: "Download or share your try-ons with friends or stylists for feedback."
    },
    {
      icon: Store,
      title: "Merchant / Brand Ready",
      description: "Brands can upload their products and let users try them on instantly."
    }
  ];

  return (
    <section className="py-24 bg-subtle-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to shop with{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">confidence</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-hero-gradient rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
