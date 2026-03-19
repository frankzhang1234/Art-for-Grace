/**
 * ============================================================
 * ARTWORK DATA
 * ============================================================
 * To add a new artwork:
 *   1. Place  image file in /public/artworks/
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
    src: "/artworks/seattle.png",
    title: "Seattle Afternoon",
    date: "March 19, 2026",
    description: "Wishing you a happy Thursday evening from Seattle <3",
  },
  {
    src: "/artworks/Sage Green Dress.png",
    title: "Sage Green Dress",
    date: "March 12, 2026",
    description: "A dress of the color sage green.",
  },
];

export default artworks;
