import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="pt-24 pb-16 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* About Section */}
            <section className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                About TryOnX
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                TryOnX was built to reduce the guesswork in online fashion. Shoppers return clothes 
                because they can't see how it will look on them. We fix that using AI, computer vision, 
                and realistic rendering — with privacy by design.
              </p>
            </section>

            {/* Mission Statement */}
            <section className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Mission Statement</h2>
              <p className="text-xl md:text-2xl font-medium text-foreground italic">
                "To make online fashion try-before-you-buy, for everyone."
              </p>
            </section>

            {/* Contact Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Contact</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">General Inquiries</h3>
                        <a 
                          href="mailto:hello@tryonx.app" 
                          className="text-primary hover:underline"
                        >
                          hello@tryonx.app
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">Partnerships</h3>
                        <a 
                          href="mailto:partners@tryonx.app" 
                          className="text-primary hover:underline"
                        >
                          partners@tryonx.app
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Submit a Product Line
                </h3>
                <Button size="lg" className="px-8">
                  Become a Partner Brand
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
