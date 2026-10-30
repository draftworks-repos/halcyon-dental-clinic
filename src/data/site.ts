export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Treatments", path: "/services" },
  { label: "Doctors", path: "/about#doctors" },
  { label: "Process", path: "/#process" },
  { label: "Reviews", path: "/#reviews" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const TICKER_ITEMS = [
  "INVISALIGN DIAMOND PROVIDER",
  "SEDATION DENTISTRY",
  "DIGITAL 3D SCANNING",
  "ZERO-INTEREST PLANS",
  "FAMILY FRIENDLY",
  "WARM BLANKETS & NOISE-CANCELING AUDIO",
  "BIOMIMETIC RESTORATIVE CARE",
  "SAME-WEEK APPOINTMENTS",
];

export const CLINIC_INFO = {
  name: "Draftworks Dental",
  fullName: "Draftworks Dental Studio",
  tagline: "The calm way to a confident smile.",
  description:
    "A boutique dental practice built around gentle care, quiet rooms, and dentistry that respects your time. No rush, no jargon — just healthier teeth and honest advice.",
  address: "128 Marina Blvd, San Francisco, CA 94123",
  phone: "(+91) 89596 90529",
  email: "hello@Draftworks.dental",
  hours: [
    { days: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
    { days: "Friday", time: "8:00 AM – 3:00 PM" },
    { days: "Saturday", time: "By appointment only" },
    { days: "Sunday", time: "Closed" },
  ],
  stats: [
    { value: "14k+", label: "smiles cared for" },
    { value: "4.9/5", label: "from 2,300 reviews" },
    { value: "Same-week", label: "appointments" },
  ],
};
