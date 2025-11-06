import { Shield, Zap, Lock } from "lucide-react";

const TrustRow = () => {
  const features = [
    {
      icon: Zap,
      title: "No coding needed to start",
      description: "Simple upload and instant results"
    },
    {
      icon: Shield,
      title: "Privacy-first image handling",
      description: "Your photos stay secure and private"
    },
    {
      icon: Lock,
      title: "Built-in content filters",
      description: "Safe and appropriate AI processing"
    }
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-accent transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustRow;
