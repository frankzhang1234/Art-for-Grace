import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import type { Artwork } from "@/data/artworks";

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

const Lightbox = ({ artwork, onClose }: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (artwork) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artwork, handleKeyDown]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors duration-300"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="flex flex-col items-center max-w-5xl w-full px-6 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={artwork.src}
          alt={artwork.title}
          className="max-h-[70vh] w-auto max-w-full object-contain"
        />
        <div className="mt-6 text-center space-y-1">
          <h2 className="font-display text-xl md:text-2xl font-medium">
            {artwork.title}
          </h2>
          <p className="text-muted-foreground text-xs tracking-wide">
            {artwork.date}
          </p>
          {artwork.description && (
            <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto font-light">
              {artwork.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
