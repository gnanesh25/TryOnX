import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles, ArrowLeft, Package, Truck, RefreshCcw } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const recommendedProducts = products.filter(p => 
    product.recommendations.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate("/products")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Badge 
              className="absolute top-4 left-4 bg-hero-gradient text-white border-0"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Virtual try-on available
            </Badge>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">{product.brand}</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-foreground mb-4">${product.price}</p>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <Separator />

            {/* Try On Button */}
            <Button 
              size="lg" 
              className="w-full"
              variant="hero"
              onClick={() => navigate(`/studio?outfit=${product.name}`)}
            >
              <Sparkles className="w-5 h-5" />
              Try this on →
            </Button>

            <Separator />

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" className="min-w-[3rem]">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Fit Info */}
            <Card className="bg-accent border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Fit: {product.fit}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This style has a {product.fit.toLowerCase()} fit for comfortable wear.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Fabric & Care */}
            <div>
              <h3 className="font-semibold mb-2 text-foreground">Fabric & Care</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Material:</strong> {product.fabric}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Care:</strong> {product.careInstructions}
              </p>
            </div>

            <Separator />

            {/* Delivery & Returns */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Delivery</p>
                  <p className="text-sm text-muted-foreground">{product.delivery}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCcw className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Returns</p>
                  <p className="text-sm text-muted-foreground">{product.returns}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Style it with</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendedProducts.map((rec) => (
                <Card 
                  key={rec.id} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/product/${rec.id}`)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img 
                      src={rec.image} 
                      alt={rec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <p className="font-medium text-sm line-clamp-2 text-foreground">{rec.name}</p>
                    <p className="text-sm text-muted-foreground">{rec.brand}</p>
                    <p className="font-bold text-foreground">${rec.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;
