import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";
import { ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Try on our curated selection of trending styles
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {product.brand}
                  </p>
                  <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                </div>
                <p className="text-xl font-bold">${product.price}</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => navigate("/studio")}
                  >
                    Try On
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
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
