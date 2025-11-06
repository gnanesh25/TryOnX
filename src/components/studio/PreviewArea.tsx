import { Button } from "@/components/ui/button";
import { Download, Share2, Save, Flag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PreviewAreaProps {
  uploadedImage: string | null;
  selectedOutfit: string | null;
}

const PreviewArea = ({ uploadedImage, selectedOutfit }: PreviewAreaProps) => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({ title: "Look saved", description: "Added to your saved looks" });
  };

  const handleDownload = () => {
    toast({ title: "Downloading", description: "Your try-on image is being downloaded" });
  };

  const handleShare = () => {
    toast({ title: "Share", description: "Share options coming soon" });
  };

  const handleReport = () => {
    toast({ title: "Report", description: "Thank you for helping us maintain quality" });
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
      {/* Preview Container */}
      <div className="aspect-[3/4] bg-muted rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
        {uploadedImage && selectedOutfit ? (
          <div className="relative w-full h-full">
            <img 
              src={uploadedImage} 
              alt="Try-on preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 text-center max-w-sm">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="font-semibold text-foreground mb-2">AI Processing...</p>
                <p className="text-sm text-muted-foreground">
                  Creating your virtual try-on. This takes about 10 seconds.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">👗</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Your AI Try-On will appear here
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              {!uploadedImage 
                ? "Upload a photo to get started" 
                : "Select an outfit to see how it looks on you"}
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleSave}
          disabled={!uploadedImage || !selectedOutfit}
        >
          <Save className="w-4 h-4" />
          Save
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleDownload}
          disabled={!uploadedImage || !selectedOutfit}
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleShare}
          disabled={!uploadedImage || !selectedOutfit}
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
        <Button 
          variant="ghost" 
          className="w-full"
          onClick={handleReport}
        >
          <Flag className="w-4 h-4" />
          Report
        </Button>
      </div>
    </div>
  );
};

export default PreviewArea;
