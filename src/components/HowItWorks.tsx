import { Upload, ShoppingBag, Sparkles, Heart } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    number: "01",
    icon: Upload,
    title: "Upload your photo",
    description: "Take or upload a clear, full-body photo against a plain background. We guide you with a pose outline for best results."
  }, {
    number: "02",
    icon: ShoppingBag,
    title: "Pick an outfit",
    description: "Choose tops, bottoms, dresses, or full looks from the catalog. Filter by size, fit, occasion, and brand."
  }, {
    number: "03",
    icon: Sparkles,
    title: "AI generates your look",
    description: "Our model maps the outfit to your body shape and pose to create a realistic try-on preview."
  }, {
    number: "04",
    icon: Heart,
    title: "Save or buy",
    description: "Save the look, share it with friends, or continue to the brand/store to purchase."
  }];
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="bg-hero-gradient bg-clip-text text-transparent">TryOnX</span> works
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <div key={index} className="relative group">
                {/* Connector line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-y-1/2 z-0" />}
                
                {/* Card */}
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>;
        })}
        </div>

        {/* Privacy notice */}
        <div className="max-w-2xl mx-auto mt-16">
          
        </div>
      </div>
    </section>;
};
export default HowItWorks;