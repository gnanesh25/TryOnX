import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Database, Clock, Filter, Share2, AlertTriangle } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "What we collect",
      content: "We collect your uploaded photo, generated try-on images, and basic account info."
    },
    {
      icon: Shield,
      title: "Why we collect it",
      content: "To generate virtual try-on previews, improve fit suggestions, and help you save outfits."
    },
    {
      icon: Clock,
      title: "How long we keep it",
      content: "You can delete your photo and generated images anytime from your dashboard. We auto-delete inactive uploads after 30 days."
    },
    {
      icon: Filter,
      title: "Content filtering",
      content: "We use automated checks to block:",
      list: [
        "Nudity or sexual content",
        "Images of minors",
        "Non-consensual or harmful content",
        "Violent or hateful content"
      ]
    },
    {
      icon: Share2,
      title: "Sharing",
      content: "We never sell your images. We only share looks when you explicitly click \"Share\"."
    },
    {
      icon: AlertTriangle,
      title: "Report abuse",
      content: "If someone uploads your photo without consent, contact us → \"Report image\"."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Your image. Your control.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take your privacy and safety seriously. Here's how we protect your data.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-3">{section.content}</p>
                    {section.list && (
                      <ul className="space-y-2 mt-4">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.title === "Report abuse" && (
                      <Button className="mt-4" variant="outline">
                        Report Image
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
