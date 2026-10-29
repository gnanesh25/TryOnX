import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShoppingCart, User, Heart, LogOut, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { CartSidebar } from "@/components/CartSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { to: "/products", label: "Products" },
  { to: "/studio", label: "Try On Studio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { user, signOut } = useAuth();
  const cartCount = getCartCount();

  const linkClass =
    "text-sm font-medium text-foreground hover:text-primary transition-colors";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-hero-gradient rounded-lg shadow-elegant group-hover:shadow-gold transition-all">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display bg-hero-gradient bg-clip-text text-transparent">
                TryOnX
              </span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex items-center gap-7">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="p-1.5 bg-hero-gradient rounded-lg">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    TryOnX
                  </SheetTitle>
                  <div className="mt-6 flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-2" />
                    {user ? (
                      <>
                        <Link
                          to="/saved-looks"
                          onClick={() => setIsMenuOpen(false)}
                          className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors flex items-center gap-2"
                        >
                          <Heart className="w-4 h-4" />
                          Saved Looks
                        </Link>
                        <button
                          onClick={() => {
                            setIsMenuOpen(false);
                            signOut();
                          }}
                          className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors flex items-center gap-2 text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <Button asChild className="mt-2" onClick={() => setIsMenuOpen(false)}>
                        <Link to="/auth">Sign In</Link>
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gold text-primary text-[10px]"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/saved-looks" className="flex items-center gap-2 cursor-pointer">
                        <Heart className="w-4 h-4" />
                        Saved Looks
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 cursor-pointer">
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="hero" size="sm" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <CartSidebar open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
