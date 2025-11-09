import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/CartSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
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
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8">
                <Link 
                  to="/products"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Products
                </Link>
                <Link 
                  to="/studio"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Try On Studio
                </Link>
                <Link 
                  to="/pricing" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
                <Link 
                  to="/about" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <CartSidebar open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
