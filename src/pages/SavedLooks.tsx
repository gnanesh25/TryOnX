import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { products } from "@/data/products";

interface SavedLook {
  id: string;
  outfit_id: string;
  uploaded_image_url: string;
  generated_image_url: string;
  created_at: string;
}

const SavedLooks = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [savedLooks, setSavedLooks] = useState<SavedLook[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchSavedLooks();
    }
  }, [user]);

  const fetchSavedLooks = async () => {
    try {
      const { data, error } = await supabase
        .from("saved_looks")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSavedLooks(data || []);
    } catch (error: any) {
      toast.error("Failed to load saved looks");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("saved_looks")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setSavedLooks(savedLooks.filter(look => look.id !== id));
      toast.success("Look deleted");
    } catch (error: any) {
      toast.error("Failed to delete look");
    }
  };

  const getProductName = (outfitId: string) => {
    const product = products.find(p => p.id === outfitId);
    return product?.name || "Unknown Product";
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <p className="text-center text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Saved Looks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View and manage your favorite virtual try-on combinations
          </p>
        </div>

        {savedLooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No saved looks yet. Try on some outfits and save your favorites!</p>
            <Button onClick={() => navigate("/studio")}>Go to Try-On Studio</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedLooks.map((look) => (
              <Card key={look.id} className="overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={look.generated_image_url} 
                    alt="Saved look"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <p className="font-medium text-sm">{getProductName(look.outfit_id)}</p>
                  <p className="text-xs text-muted-foreground">
                    Saved {new Date(look.created_at).toLocaleDateString()}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => navigate(`/product/${look.outfit_id}`)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Product
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(look.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedLooks;
