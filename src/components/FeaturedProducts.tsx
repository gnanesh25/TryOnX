import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";
import { ShoppingCart, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Get first 6 products as featured
  const featuredProducts = products.slice(0, 6);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, "M");
    toast.success("Added to cart");
  };

  return (
    <section className="py-14 lg:py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3">
            Featured{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Try on our curated selection of trending styles
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {featuredProducts.map((product) => (
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
              </Link>
              <div className="p-2.5 space-y-1.5 flex-1 flex flex-col">
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                    {product.brand}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-[13px] leading-tight line-clamp-1 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                </div>
                <p className="text-sm font-semibold text-foreground">${product.price}</p>
                <div className="flex gap-1.5 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 text-xs px-2"
                    onClick={() => navigate("/studio")}
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    Try
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 h-8 text-xs px-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="sm"
            className="h-9"
            onClick={() => navigate("/products")}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
