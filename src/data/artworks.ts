/**
 * ============================================================
 * ARTWORK DATA
 * ============================================================
 * To add a new artwork:
 *   1. Place your image file in /public/artworks/
 *   2. Add a new entry to the array below
 *   3. The gallery will automatically display it
 * ============================================================
 */

export interface Artwork {
  /** Path to the image file (relative to /public) */
  src: string;
  /** Title of the artwork */
  title: string;
  /** Date created (displayed as-is) */
  date: string;
  /** Optional description shown in the lightbox */
  description?: string;
}

const artworks: Artwork[] = [
  {
    src: "/artworks/pg1.png",
    title: "Grace Test",
    date: "March 19, 2026",
    description: "Firegirl",
  },
  {
    src: "/artworks/cat-windowsill.jpg",
    title: "Cat on a Windowsill",
    date: "February 14, 2026",
    description: "A quiet afternoon companion.",
  },
  {
    src: "/artworks/city-night.jpg",
    title: "City at Night",
    date: "January 20, 2026",
    description: "Neon skyline with pixelated stars.",
  },
  {
    src: "/artworks/flower-vase.jpg",
    title: "Flower Vase",
    date: "December 8, 2025",
    description: "Bold colors, simple shapes.",
  },
  {
    src: "/artworks/ocean-wave.jpg",
    title: "Ocean Wave",
    date: "November 15, 2025",
    description: "The crash of digital surf.",
  },
  {
    src: "/artworks/mountain-lake.jpg",
    title: "Mountain Lake",
    date: "October 3, 2025",
    description: "Stillness reflected in pixels.",
  },
];

export default artworks;
