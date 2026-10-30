export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  priceStarting: string;
  isDark?: boolean;
  featured?: boolean;
  details?: {
    overview: string;
    timeline: string;
    anesthesiaOptions: string;
    benefits: string[];
  };
  image?: string;
}

export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: "preventive-care",
    number: "01",
    title: "Preventive Care",
    description:
      "Cleanings, sealants and check-ups that keep problems small — or gone before they start.",
    priceStarting: "FROM ₹89",
    isDark: false,
    featured: true,
    image: "/temp/clinic-7.webp",
  },
  {
    id: "invisalign-aligners",
    number: "02",
    title: "Invisalign & Aligners",
    description:
      "Discreet, removable, and mapped in 3D so you see the result before you begin.",
    priceStarting: "FROM ₹2,900",
    isDark: true, // Special dark forest card in the reference
    featured: true,
    image: "/temp/clinic-4.webp",
  },
  {
    id: "cosmetic-veneers",
    number: "03",
    title: "Cosmetic & Veneers",
    description:
      "Hand-crafted porcelain shaped to your face — natural, not Hollywood-fake.",
    priceStarting: "FROM ₹650/TOOTH",
    isDark: false,
    featured: true,
    image: "/temp/clinic-6.webp",
  },
  {
    id: "implants-restoration",
    number: "04",
    title: "Implants & Restoration",
    description:
      "Titanium roots and lifelike crowns that let you bite, chew and laugh again.",
    priceStarting: "FROM ₹1,850",
    isDark: false,
    featured: true,
    image: "/temp/clinic-5.webp",
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "preventive-care",
    number: "01",
    title: "General & Preventive Care",
    description:
      "Comprehensive cleanings, gentle ultrasonic calculus removal, digital low-radiation radiography, and biomimetic enamel sealants.",
    priceStarting: "FROM ₹89",
    details: {
      overview:
        "Our preventive care appointments are unhurried, comfortable, and tailored to your specific oral biome. We use warm water rinses and topical numbing pastes before even gentle cleanings if your gums are sensitive.",
      timeline: "45–60 minutes per appointment",
      anesthesiaOptions:
        "Topical anesthetic gel, nitrous oxide available upon request",
      benefits: [
        "Gentle piezoelectric scaling without scraping noise",
        "High-resolution intraoral photography so you see what we see",
        "Personalized remineralization protocols",
        "Salivary diagnostic screening",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "invisalign-aligners",
    number: "02",
    title: "Invisalign® & Clear Aligners",
    description:
      "Discreet, virtually invisible custom trays mapped with iTero 3D digital imaging. Straighten teeth with zero metal brackets and minimal disruption.",
    priceStarting: "FROM ₹2,900",
    isDark: true,
    details: {
      overview:
        "As Diamond Top 1% Invisalign Providers, our orthodontists use advanced clincheck algorithms to move teeth safely, preserving root architecture and creating broad, harmonious smiles.",
      timeline: "4 to 12 months average duration",
      anesthesiaOptions: "Non-invasive, no anesthesia needed",
      benefits: [
        "Instant 3D digital outcome simulation before starting",
        "Removable for meals, flossing, and special occasions",
        "Remote monitoring check-ins between in-studio visits",
        "Complementary professional whitening included upon completion",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cosmetic-veneers",
    number: "03",
    title: "Cosmetic Veneers & Bonding",
    description:
      "Hand-crafted micro-thin ceramic and biomimetic composite bonding designed to complement your facial structure with subtle translucency.",
    priceStarting: "FROM ₹650/TOOTH",
    details: {
      overview:
        'We eschew the opaque, chiclet-like "Hollywood" look. Every veneer is individually layered by master ceramists with organic texture, delicate translucency, and natural incisal halos.',
      timeline: "2–3 appointments over 2 weeks",
      anesthesiaOptions:
        "Local numbing with vibration distraction; sedation optional",
      benefits: [
        "Minimal-prep and no-prep porcelain designs preserving tooth enamel",
        "Trial smile preview in resin before final bonding",
        "High-durability lithium disilicate (E.max) or feldspathic porcelain",
        "Custom shade matching under full-spectrum clinical lighting",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "implants-restoration",
    number: "04",
    title: "Dental Implants & Restoration",
    description:
      "Permanent titanium and zirconia roots paired with custom-sculpted ceramic crowns that restore total chewing strength and aesthetic integrity.",
    priceStarting: "FROM ₹1,850",
    details: {
      overview:
        "Guided 3D surgical placement ensures micro-millimeter precision. Implants prevent bone resorption and preserve facial symmetry while functioning like natural teeth.",
      timeline:
        "Single-stage or multi-phase depending on bone density (3–6 months)",
      anesthesiaOptions:
        "Local anesthesia, nitrous oxide, or twilight conscious sedation",
      benefits: [
        "Computer-guided flapless placement minimizing recovery time",
        "Grade-5 biocompatible titanium or metal-free ceramic implants",
        "Preserves adjacent natural teeth without filing",
        "Lifetime structural warranty on implant fixtures",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "teeth-whitening",
    number: "05",
    title: "In-Studio & Take-Home Whitening",
    description:
      "Sensitivity-free laser whitening and bespoke formulated gel trays that brighten smiles up to 8 shades safely.",
    priceStarting: "FROM ₹250",
    details: {
      overview:
        "Our buffered hydrogen peroxide formulations incorporate potassium nitrate and amorphous calcium phosphate to desensitize nerve endings while dissolving deep coffee, tea, and tobacco stains.",
      timeline: "60 minutes in chair or 10-day overnight home kit",
      anesthesiaOptions: "None required (desensitizing protocol applied prior)",
      benefits: [
        "Zero post-treatment enamel sensitivity guarantee",
        "Deep intrinsic stain breakdown",
        "Custom-scalloped trays for precise at-home maintenance",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "root-canal-therapy",
    number: "06",
    title: "Gentle Endodontics (Root Canals)",
    description:
      "Microscopic root canal treatment that eliminates toothache pain immediately and preserves your natural tooth with painless rotary technology.",
    priceStarting: "FROM ₹780",
    details: {
      overview:
        "Root canals have an outdated reputation. With modern high-powered surgical microscopes and rotary nickel-titanium instruments, the treatment feels identical to getting a routine filling.",
      timeline: "Single 60–75 minute session",
      anesthesiaOptions:
        "Profound local anesthesia; twilight sleep sedation available",
      benefits: [
        "Immediate relief from throbbing infection or temperature sensitivity",
        "Saves natural tooth root from extraction",
        "3D CBCT imaging of microscopic canal branches",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pediatric-dentistry",
    number: "07",
    title: "Gentle Family & Pediatric Care",
    description:
      "Playful, trauma-free dentistry for infants, children, and teens that builds a lifelong positive relationship with the dentist.",
    priceStarting: "FROM ₹75",
    details: {
      overview:
        "We introduce children to dental care through tell-show-do demonstrations, ceiling-mounted cartoons, sensory headphones, and gentle encouragement. No restraints, no pressure.",
      timeline: "30–45 minutes",
      anesthesiaOptions:
        'Nitrous oxide ("laughing gas") with sweet fruit scents',
      benefits: [
        "BPA-free protective molar sealants",
        "Gentle cavity-arresting silver diamine fluoride (SDF)",
        "Early interceptive orthodontic guidance",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
];
