import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Sparkles, Eye } from "lucide-react";
import { products } from "@/data/products";

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("All");

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (selectedGender !== "All" && product.gender !== selectedGender && product.gender !== "Unisex") return false;
    if (selectedOccasion !== "All" && product.occasion !== selectedOccasion) return false;
    return true;
  });

  const categories = ["All", "Top", "Bottom", "Dress", "Ethnic", "Accessories"];
  const genders = ["All", "Men", "Women", "Unisex"];
  const occasions = ["All", "Casual", "Formal", "Ethnic"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Explore outfits you can <span className="bg-hero-gradient bg-clip-text text-transparent">try right now</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every item here supports AI try-on.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
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
              <label className="text-sm font-medium mb-2 block text-foreground">Gender</label>
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger>
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
              <label className="text-sm font-medium mb-2 block text-foreground">Occasion</label>
              <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                <SelectTrigger>
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

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <Button 
              variant="ghost" 
              onClick={() => {
                setSelectedCategory("All");
                setSelectedGender("All");
                setSelectedOccasion("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-3 left-3 bg-hero-gradient text-white border-0"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Virtual try-on
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                <p className="text-lg font-bold text-foreground">${product.price}</p>
              </CardContent>

              <CardFooter className="p-4 pt-0 gap-2 flex-col">
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => navigate(`/studio?outfit=${product.name}`)}
                >
                  <Sparkles className="w-4 h-4" />
                  Try on me
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <Eye className="w-4 h-4" />
                  View details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">No products found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
            <Button onClick={() => {
              setSelectedCategory("All");
              setSelectedGender("All");
              setSelectedOccasion("All");
            }}>
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
