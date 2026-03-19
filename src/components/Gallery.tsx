import { useState, useEffect, useCallback } from "react";
import staticArtworks from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";
import Lightbox from "./Lightbox";
import UploadForm from "./UploadForm";
import type { Artwork } from "@/data/artworks";

const STORAGE_KEY = "portfolio-user-artworks";

const loadUserArtworks = (): Artwork[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const Gallery = () => {
  const [userArtworks, setUserArtworks] = useState<Artwork[]>(loadUserArtworks);
  const [selected, setSelected] = useState<Artwork | null>(null);

  const allArtworks = [...userArtworks, ...staticArtworks];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userArtworks));
  }, [userArtworks]);

  const handleAdd = useCallback((artwork: Artwork) => {
    setUserArtworks((prev) => [artwork, ...prev]);
  }, []);

  return (
    <>
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {allArtworks.map((artwork, index) => (
            <div key={index} className="break-inside-avoid">
              <ArtworkCard
                artwork={artwork}
                onClick={() => setSelected(artwork)}
              />
            </div>
          ))}
        </div>
      </section>

      <Lightbox artwork={selected} onClose={() => setSelected(null)} />
      <UploadForm onAdd={handleAdd} />
    </>
  );
};

export default Gallery;
