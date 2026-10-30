export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "the-psychology-of-dental-anxiety",
    title:
      "The Psychology of Dental Anxiety: How Slow Dentistry Restores Agency",
    category: "Gentle Care",
    readTime: "4 min read",
    date: "October 14, 2026",
    excerpt:
      "Dental fear rarely stems from teeth; it stems from a loss of control. Discover how transparency, unhurried time, and non-verbal pause signals rewire the nervous system.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    content: [
      "For over half of adults who delay dental appointments, the primary barrier is not pain — it is the feeling of vulnerability and loss of control while lying supine in a sterile chair.",
      'At Draftworks, our clinical protocol replaces the traditional hurried assembly-line approach with "Slow Dentistry." This begins before you ever recline: we hold initial discussions in a consultation lounge with ambient light, not while you are under an overhead spotlight.',
      "During every treatment, we introduce the simple hand-raise signal. The instant you lift your left hand, your dentist stops immediately. Knowing you have an absolute brake restores subconscious agency and dramatically reduces cortisol spikes.",
      "Combined with warm weighted blankets, tailored noise-canceling headphones, and buffered local anesthetics that numb tissue without stinging, dental care transforms from an ordeal to a peaceful hour of restorative self-care.",
    ],
  },
  {
    slug: "invisalign-vs-composite-bonding",
    title:
      "Aligners vs. Composite Bonding: Choosing the Right Path for Natural Symmetry",
    category: "Orthodontics & Aesthetics",
    readTime: "6 min read",
    date: "September 28, 2026",
    excerpt:
      "A comprehensive guide on when to move teeth, when to reshape enamel, and how combining minimal orthodontic alignment with biomimetic composite yields the most organic result.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    content: [
      "Patients often ask whether they should invest six months into clear aligners or opt for immediate composite bonding. The answer frequently lies in preserving maximum natural tooth structure.",
      "Clear aligners physically move misaligned teeth into their ideal arch positions. When teeth are properly aligned, the need to aggressively shave or contour healthy enamel for veneers or bonding drops to near zero.",
      "Our favorite conservative approach is often a brief, targeted 4-month aligner treatment to align the bite, followed by delicate edge bonding using micro-hybrid composites. This repairs micro-chips and harmonizes proportions while keeping 99% of your virgin enamel intact.",
      "Every smile plan at Draftworks starts with an iTero 3D digital scan, allowing you to preview the exact expected tooth movement and decide with complete clarity.",
    ],
  },
  {
    slug: "biomimetic-dentistry-explained",
    title:
      "Why Biomimetic Dentistry Replaces Traditional Crowns and Heavy Drilling",
    category: "Restorative Tech",
    readTime: "5 min read",
    date: "August 19, 2026",
    excerpt:
      "Explore how biomimetic restorative techniques emulate the natural flexibility of teeth, preventing fractures and avoiding root canals.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    content: [
      "Traditional dentistry often treated tooth decay by cutting away large portions of sound tooth structure to seat a bulky rigid crown. Over time, rigid crowns transfer occlusal stresses down into the tooth root, leading to cracks and emergency root canals.",
      'Biomimetic dentistry ("mimicking biology") takes the opposite path. We remove only damaged tissue, preserving the delicate pulp and reinforcing remaining tooth structure with flexible, high-tensile composite ribbons.',
      "By matching the natural modulus of elasticity of dentin and enamel, biomimetic restorations flex harmoniously with your natural bite forces. Studies show biomimetic restorations reduce the incidence of future root canals by up to 80%.",
    ],
  },
];
