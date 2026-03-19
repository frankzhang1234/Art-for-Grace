import type { Artwork } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

const ArtworkCard = ({ artwork, onClick }: ArtworkCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full focus:outline-none"
    >
      <div className="overflow-hidden">
        <img
          src={artwork.src}
          alt={artwork.title}
          loading="lazy"
          className="w-full h-auto block transition-all duration-500 group-hover:opacity-80 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 space-y-0.5">
        <h3 className="font-display text-base md:text-lg font-medium">
          {artwork.title}
        </h3>
        <p className="text-muted-foreground text-xs tracking-wide">
          {artwork.date}
        </p>
      </div>
    </button>
  );
};

export default ArtworkCard;
