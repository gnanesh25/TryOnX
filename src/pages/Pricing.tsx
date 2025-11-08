import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const shopperFeatures = {
    free: [
      "3 try-ons/day",
      "Demo models",
      "Watermarked downloads",
      "Basic outfits"
    ],
    pro: [
      "Unlimited try-ons",
      "High-res images (no watermark)",
      "Save looks",
      "Priority processing"
    ]
  };

  const businessFeatures = [
    "Upload products",
    "Brand portal",
    "Analytics (try-ons per product)",
    "API / embed on your website",
    "Support & onboarding"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Simple plans for shoppers and brands
            </h1>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* For Shoppers */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">For Shoppers</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Free</CardTitle>
                    <CardDescription>Get started with virtual try-on</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {shopperFeatures.free.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="outline" asChild>
                      <Link to="/studio">Start Free</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary hover:shadow-xl transition-shadow relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Pro Shopper</CardTitle>
                    <CardDescription>Unlimited virtual try-ons</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {shopperFeatures.pro.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link to="/studio">Get Pro</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* For Brands / Stores */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">For Brands / Stores</h2>
              <div className="max-w-2xl mx-auto">
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Business</CardTitle>
                    <CardDescription>Enterprise virtual try-on solution</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-bold">Custom</span>
                      <span className="text-muted-foreground ml-2">Contact us</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {businessFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="hero">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
