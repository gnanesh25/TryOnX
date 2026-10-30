import { Upload, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface UploadPanelProps {
  onImageUpload: (imageUrl: string) => void;
}

const UploadPanel = ({ onImageUpload }: UploadPanelProps) => {
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 10MB",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(result);
        toast({
          title: "Photo uploaded",
          description: "Now select an outfit to try on"
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 10MB",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onImageUpload(result);
        toast({
          title: "Photo uploaded",
          description: "Now select an outfit to try on"
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-md">
      <h2 className="text-base font-semibold mb-3 text-card-foreground">Upload full-body photo</h2>
      
      <div
        className={`border-2 border-dashed rounded-xl p-5 text-center transition-all ${
          isDragging 
            ? 'border-primary bg-primary/5' 
            : 'border-border hover:border-primary/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">
              Drop your photo here or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              JPEG, PNG up to 10MB
            </p>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="photo-upload"
          />
          <label htmlFor="photo-upload">
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>Choose Photo</span>
            </Button>
          </label>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-4 space-y-2">
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-primary" />
          <p>Stand straight, good lighting, plain background, face visible.</p>
        </div>
        
        <div className="bg-accent border border-primary/20 rounded-lg p-2.5 text-xs text-foreground">
          <p className="font-medium">🔒 Your photo is private and can be deleted anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default UploadPanel;
