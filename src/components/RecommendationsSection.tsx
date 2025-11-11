import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

interface Recommendation {
  productId: string;
  title: string;
  reason: string;
  styleMatch: string;
}

interface RecommendationsSectionProps {
  userId: string;
}

const RecommendationsSection = ({ userId }: RecommendationsSectionProps) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchRecommendations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-recommendations', {
        body: { userId }
      });

      if (error) {
        console.error("Function error:", error);
        
        if (error.message?.includes("429") || error.message?.includes("rate limit")) {
          toast.error("Too many requests. Please try again in a moment.");
          return;
        }
        
        if (error.message?.includes("402") || error.message?.includes("payment")) {
          toast.error("AI service requires payment. Please contact support.");
          return;
        }
        
        throw error;
      }

      if (data?.recommendations) {
        setRecommendations(data.recommendations);
      }
    } catch (error: any) {
      console.error("Failed to fetch recommendations:", error);
      toast.error("Failed to load recommendations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRecommendations();
    }
  }, [userId]);

  const getProductImage = (productId: string) => {
    const product = products.find(p => p.id === productId);
    return product?.image || products[0]?.image;
  };

  const getProductName = (productId: string) => {
    const product = products.find(p => p.id === productId);
    return product?.name || productId;
  };

  if (isLoading && recommendations.length === 0) {
    return (
      <Card className="p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-hero-gradient rounded-lg">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-semibold">AI Recommendations</h2>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-muted-foreground">Analyzing your style preferences...</p>
          </div>
        </div>
      </Card>
    );
  }

  if (!isLoading && recommendations.length === 0) {
    return null;
  }

  return (
    <Card className="p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-hero-gradient rounded-lg">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">AI Recommendations</h2>
            <p className="text-sm text-muted-foreground">Personalized picks based on your saved looks</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={fetchRecommendations}
          disabled={isLoading}
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src={getProductImage(rec.productId)}
                alt={rec.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <div className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  {rec.styleMatch}
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <h3 className="font-semibold text-sm">{getProductName(rec.productId)}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{rec.reason}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => navigate(`/product/${rec.productId}`)}
              >
                View Product
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default RecommendationsSection;
