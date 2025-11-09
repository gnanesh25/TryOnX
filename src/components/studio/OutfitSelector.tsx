import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";

interface OutfitSelectorProps {
  onOutfitSelect: (outfitId: string) => void;
}

const OutfitSelector = ({ onOutfitSelect }: OutfitSelectorProps) => {
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("most-tried");

  const categories = [
    { value: "all", label: "All Items" },
    { value: "top", label: "Top" },
    { value: "bottom", label: "Bottom" },
    { value: "dress", label: "Dress" },
    { value: "ethnic", label: "Ethnic" },
    { value: "casual", label: "Casual" },
    { value: "formal", label: "Formal" }
  ];

  const sortOptions = [
    { value: "most-tried", label: "Most tried" },
    { value: "best-fit", label: "Best fit" },
    { value: "new-arrivals", label: "New arrivals" }
  ];

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => {
    if (category === "all") return true;
    if (category === "casual" || category === "formal") {
      return product.occasion.toLowerCase() === category;
    }
    return product.category.toLowerCase() === category;
  });

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-card-foreground">Select Outfit</h2>
        <Button variant="ghost" size="sm">
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Filters */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full bg-background">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Sort by</label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full bg-background">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Outfit Grid */}
      <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto">
        {filteredProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => onOutfitSelect(product.name)}
            className="group bg-muted rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"
          >
            <div className="aspect-square bg-secondary flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <p className="text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate">
                {product.name}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OutfitSelector;
