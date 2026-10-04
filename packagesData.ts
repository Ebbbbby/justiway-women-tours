// types.ts
export interface TourPackage {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}


// packagesData.ts
// Every package is women-only. `safety` is shown on the card as the
// women-first detail that sets the trip apart.
export const packages = [
  {
    id: 1,
    title: "Women-Only Vacation Packages",
    description:
      "Beach breaks, city escapes and island getaways with a small group of women and a trained trip lead.",
    safety: "Screened stays and verified airport transfers included",
    image: "/images/vacation.jpg",
    category: "Vacation",
    heightClass: "h-[300px]",
    book: "Book Now",
  },
  {
    id: 2,
    title: "Girls' Getaways & Celebrations",
    description:
      "Birthdays, bridal showers and milestone trips planned end to end for you and your closest friends.",
    safety: "Private group itineraries with a dedicated trip lead",
    image: "/images/travelady.png",
    category: "Celebration",
    heightClass: "h-[320px]",
    book: "Book Now",
  },
  {
    id: 3,
    title: "Solo Women Group Tours",
    description:
      "Travelling alone? Join a small group of like-minded women, so you go solo but never alone.",
    safety: "Small groups of 8 to 12 with 24/7 support",
    image: "/images/waltz.jpg",
    category: "Group",
    heightClass: "h-[400px]",
    book: "Book Now",
  },
  {
    id: 4,
    title: "Heritage & Cultural Exploration",
    description:
      "Dive into the traditions, art and history of unique destinations, with guides who put your comfort first.",
    safety: "Vetted local guides, daytime-first itineraries",
    image: "/images/culture.jpg",
    category: "Cultural",
    heightClass: "h-[200px]",
    book: "Book Now",
  },
  {
    id: 5,
    title: "Wildlife Safaris & Eco-Tours",
    description:
      "Experience the wild, from African safaris to rainforest treks, in the company of women who love it too.",
    safety: "Licensed operators and briefed safety procedures",
    image: "/images/wildlife.jpg",
    category: "Adventure",
    heightClass: "h-[360px]",
    book: "Book Now",
  },
  {
    id: 6,
    title: "Women's Pilgrimage Journeys",
    description:
      "From Mecca to Jerusalem, a guided spiritual journey with group accommodation and respectful, women-aware planning.",
    safety: "Group accommodation and guided movement at busy sites",
    image: "/images/spiritual.jpg",
    category: "Spiritual",
    heightClass: "h-[300px]",
    book: "Book Now",
  },
  {
    id: 7,
    title: "Women's Adventure Travel",
    description:
      "Hiking, skiing, desert safaris and more, led by trained guides and built for confidence at every level.",
    safety: "Qualified guides and equipment checks before every activity",
    image: "/images/activities/ski2.jpg",
    category: "Adventure",
    heightClass: "h-[380px]",
    book: "Book Now",
  },
];
