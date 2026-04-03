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
    src: "/artworks/artemis.png",
    title: "Artemis II",
    date: "April 4, 2026",
    description: "Rare Mission, Rare Person. I'm so glad to have met you Grace <3",
  },
  {
    src: "/artworks/toast.png",
    title: "Breakfast for Us",
    date: "April 3, 2026",
    description: "Happy Friday! I made breakfast, hope u enjoy ^^",
  },
  {
    src: "/artworks/run.png",
    title: "My #1 Supporter - Thank You",
    date: "April 2, 2026",
    description: "Grace, thank you for accompanying me on my runs. You make them a lot easier and it means a lot to me!",
  },
  {
    src: "/artworks/pushups.png",
    title: "Grace Doing Pushups",
    date: "March 31, 2026",
    description: "I didn't know you checked my website, I will be a hard worker like you and keep this updated <3",
  },
  {
    src: "/artworks/Sheep.png",
    title: "A Knitting Sheep",
    date: "March 20, 2026",
    description: "Sorry I don't YET have the skills to make your knitting game Grace :(",
  },
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
