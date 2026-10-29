import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Sparkles, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("All");

  const handleAddToCart = (product: typeof products[0]) => {
    const defaultSize = product.sizes[0];
    addToCart(product, defaultSize);
    toast({
      title: "Added to cart",
      description: `${product.name} (${defaultSize}) added to your cart`,
    });
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (selectedGender !== "All" && product.gender !== selectedGender && product.gender !== "Unisex") return false;
    if (selectedOccasion !== "All" && product.occasion !== selectedOccasion) return false;
    return true;
  });

  const categories = ["All", "Top", "Bottom", "Dress", "Ethnic", "Accessories"];
  const genders = ["All", "Men", "Women", "Unisex"];
  const occasions = ["All", "Casual", "Formal", "Ethnic"];

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedGender("All");
    setSelectedOccasion("All");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3">
            Explore outfits you can <span className="bg-hero-gradient bg-clip-text text-transparent">try right now</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Every item here supports AI try-on.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-2xl p-4 mb-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Gender</label>
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {genders.map((gender) => (
                    <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Occasion</label>
              <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {occasions.map((occasion) => (
                    <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        </div>

        {/* Products Grid — compact cards, ~30% smaller */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg hover:border-gold/40 transition-all flex flex-col">
              <Link
                to={`/product/${product.id}`}
                className="relative aspect-[4/5] overflow-hidden bg-muted"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 left-2 bg-hero-gradient text-primary-foreground border-0 text-[9px] px-1.5 py-0 gap-0.5">
                  <Sparkles className="w-2.5 h-2.5" />
                  Try-on
                </Badge>
              </Link>

              <CardContent className="p-2.5 pb-1 flex-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[13px] leading-tight line-clamp-1 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-[11px] text-muted-foreground mb-1">{product.brand}</p>
                <p className="text-sm font-semibold text-foreground">${product.price}</p>
              </CardContent>

              <CardFooter className="p-2.5 pt-1 gap-1.5">
                <Button
                  variant="hero"
                  size="sm"
                  className="flex-1 h-8 text-xs px-2"
                  onClick={() => navigate(`/studio?outfit=${product.name}`)}
                >
                  <Sparkles className="w-3 h-3" />
                  Try
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 h-8 text-xs px-2"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-3 h-3" />
                  Add
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-14">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-lg mb-2 text-foreground">No products found</h3>
            <p className="text-sm text-muted-foreground mb-4">Try adjusting your filters</p>
            <Button size="sm" onClick={resetFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
