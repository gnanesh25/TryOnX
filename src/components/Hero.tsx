import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-subtle-gradient overflow-hidden py-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-5 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs sm:text-sm font-medium text-accent-foreground tracking-wide uppercase">
                AI-powered virtual try-on
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                TryOnX
              </span>
              <span className="text-foreground">… without trying them on.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              TryOnX lets you upload a full-body photo and see how clothes look on you — in seconds.
              Realistic AI visuals, safer uploads, and fewer wrong-size orders.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/studio">
                <Button variant="hero" size="lg" className="group">
                  Try it now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">
                  See how it works
                </Button>
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="AI-powered fashion try-on visualization"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-card p-3 sm:p-4 rounded-xl shadow-elegant border border-gold/30">
              <p className="text-xs sm:text-sm font-medium text-card-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Powered by advanced AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
