import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FitDetailsProps {
  selectedOutfit: string | null;
  onReset: () => void;
}

const FitDetails = ({ selectedOutfit, onReset }: FitDetailsProps) => {
  const navigate = useNavigate();

  const handleGoToProduct = () => {
    if (selectedOutfit) {
      navigate(`/product/${selectedOutfit}`);
    }
  };
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-card-foreground">Fit & Details</h2>

      {/* Size Recommendation */}
      <div className="bg-accent border border-primary/20 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold">M</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground mb-1">
              Suggested size: M
              <span className="ml-2 text-sm font-normal text-primary">(88% confidence)</span>
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              This style runs slightly slim.
            </p>
            <Button variant="link" className="h-auto p-0 text-primary">
              View size guide
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Info className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Based on your measurements and this brand's sizing</span>
        </div>
      </div>

      {/* Call to Actions */}
      <div className="space-y-3">
        <Button 
          variant="hero" 
          className="w-full" 
          size="lg"
          onClick={handleGoToProduct}
          disabled={!selectedOutfit}
        >
          <ExternalLink className="w-4 h-4" />
          Like this outfit? Go to product page
        </Button>
        <Button variant="outline" className="w-full" onClick={onReset}>
          <RefreshCw className="w-4 h-4" />
          Try another outfit
        </Button>
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          💡 Tip: Save multiple looks to compare later or share with friends for feedback
        </p>
      </div>
    </div>
  );
};

export default FitDetails;
