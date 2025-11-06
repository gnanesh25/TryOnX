import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-hero-gradient rounded-lg shadow-md group-hover:shadow-lg transition-all">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              TryOnX
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How it Works
            </Link>
            <Link 
              to="/catalog" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Catalog
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
