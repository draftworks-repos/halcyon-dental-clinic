export interface Dentist {
  id: string;
  name: string;
  role: string;
  yearsExperience: string;
  degrees: string;
  image: string;
  bio: string;
  philosophy: string;
  specialties: string[];
}

export const DENTISTS: Dentist[] = [
  {
    id: "dr-elena-foss",
    name: "Dr. Elena Foss",
    role: "Founder · Cosmetic & Implants",
    yearsExperience: "18 yrs",
    degrees:
      "DDS, Harvard School of Dental Medicine; FICOI (Fellow, Int. Congress of Oral Implantologists)",
    image: "/temp/dentist.webp",
    bio: "Dr. Elena Foss founded Draftworks Dental Studio with one driving principle: dentistry should feel restorative, respectful, and entirely free of anxiety. Having trained in Boston, Zurich, and San Francisco, she specializes in biomimetic porcelain reconstructions and single-visit guided implant restorations.",
    philosophy:
      "“A great smile should never look constructed. It should feel like the truest, most radiant expression of your natural features.”",
    specialties: [
      "Cosmetic Rejuvenation",
      "Guided Bone & Implant Surgery",
      "Sedation Dentistry",
      "Full Mouth Rehabilitation",
    ],
  },
  {
    id: "dr-marcus-reid",
    name: "Dr. Marcus Reid",
    role: "Orthodontics · Invisalign Lead",
    yearsExperience: "12 yrs",
    degrees:
      "DDS, UCSF School of Dentistry; MS Orthodontics & Dentofacial Orthopedics",
    image: "/temp/dentist-headshot-1.webp",
    bio: "Recognized as an Invisalign Diamond Apex Provider, Dr. Reid has planned over 3,000 clear aligner cases. He focuses on non-extraction orthodontic protocols that expand airways and enhance natural cheekbone contours while aligning teeth effortlessly.",
    philosophy:
      "“We align teeth without altering the cadence of your daily life. Clear aligners should be invisible to your colleagues and completely comfortable for you.”",
    specialties: [
      "Adult Clear Aligners",
      "Airway Orthodontics",
      "Accelerated Tooth Movement",
      "Bite Optimization",
    ],
  },
  {
    id: "dr-priya-anand",
    name: "Dr. Priya Anand",
    role: "Family & Preventive Care",
    yearsExperience: "9 yrs",
    degrees:
      "DMD, University of Pennsylvania; General Practice Residency at Mount Sinai NY",
    image: "/temp/dentist-headshot-2.webp",
    bio: "Dr. Anand brings exceptional gentleness and patience to every hygiene exam and pediatric visit. Renowned for her calming bedside manner, she has helped hundreds of patients conquer decades of severe dental phobia with gentle pacing and empathetic listening.",
    philosophy:
      "“Listening is the most important clinical instrument I have. When a patient feels heard, their tension dissipates before treatment even begins.”",
    specialties: [
      "Anxiety-Free Dentistry",
      "Preventive Biome Optimization",
      "Pediatric Oral Development",
      "Conservative Restorations",
    ],
  },
];
