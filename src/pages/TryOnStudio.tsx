import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UploadPanel from "@/components/studio/UploadPanel";
import OutfitSelector from "@/components/studio/OutfitSelector";
import PreviewArea from "@/components/studio/PreviewArea";
import FitDetails from "@/components/studio/FitDetails";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const TryOnStudio = () => {
  const [searchParams] = useSearchParams();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  // Pre-select outfit from URL parameter
  useEffect(() => {
    const outfitParam = searchParams.get('outfit');
    if (outfitParam) {
      setSelectedOutfit(outfitParam);
    }
  }, [searchParams]);

  const handleReset = () => {
    setSelectedOutfit(null);
    setGeneratedImage(null);
    // Keep uploadedImage so the user can try another outfit with the same photo
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            Virtual <span className="bg-hero-gradient bg-clip-text text-transparent">Try-On Studio</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Upload a photo. Choose an outfit. Get your look.
          </p>
        </div>

        {/* Main grid layout */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Left sidebar - Upload & Outfit Selection */}
          <div className="lg:col-span-1 space-y-4">
            <UploadPanel onImageUpload={setUploadedImage} />
            <OutfitSelector onOutfitSelect={setSelectedOutfit} />
          </div>

          {/* Center & Right - Preview and Details */}
          <div className="lg:col-span-2 space-y-4">
            <PreviewArea 
              uploadedImage={uploadedImage} 
              selectedOutfit={selectedOutfit}
              generatedImage={generatedImage}
              onGenerate={setGeneratedImage}
            />
            <FitDetails 
              selectedOutfit={selectedOutfit}
              onReset={handleReset}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TryOnStudio;
