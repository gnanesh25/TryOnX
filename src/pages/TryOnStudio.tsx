import Navigation from "@/components/Navigation";
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Virtual <span className="bg-hero-gradient bg-clip-text text-transparent">Try-On Studio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload a photo. Choose an outfit. Get your look.
          </p>
        </div>

        {/* Main grid layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left sidebar - Upload & Outfit Selection */}
          <div className="lg:col-span-1 space-y-6">
            <UploadPanel onImageUpload={setUploadedImage} />
            <OutfitSelector onOutfitSelect={setSelectedOutfit} />
          </div>

          {/* Center & Right - Preview and Details */}
          <div className="lg:col-span-2 space-y-6">
            <PreviewArea 
              uploadedImage={uploadedImage} 
              selectedOutfit={selectedOutfit}
              generatedImage={generatedImage}
              onGenerate={setGeneratedImage}
            />
            <FitDetails />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TryOnStudio;
