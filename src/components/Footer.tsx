import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Main Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/studio" className="text-foreground hover:text-primary transition-colors">
              Try-On Studio
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Catalog
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              For Brands
            </Link>
          </div>

          <Separator />

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <Link to="/safety" className="text-muted-foreground hover:text-primary transition-colors">
              Safety & Reporting
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              AI-generated previews are estimates only. Always check the size chart.
            </p>
          </div>

          <Separator />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              TryOnX © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
