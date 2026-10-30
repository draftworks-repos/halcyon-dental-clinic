export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "anxiety-pain",
    question: "Does it hurt? I'm genuinely anxious.",
    answer:
      "Most patients feel nothing beyond gentle pressure. We offer profound topical numbing gel before injections, heated massage dental chairs, noise-canceling headphones, warm blankets, nitrous oxide, and full conscious sedation. Above all, we operate on your cue: we will always pause immediately the moment you raise a hand.",
  },
  {
    id: "pricing-cost",
    question: "How much will treatment cost me?",
    answer:
      "We provide itemized, guaranteed price estimates before any procedure begins — with zero surprise bills. We work transparently with most PPO dental plans to maximize your benefits, and provide zero-interest monthly payment plans through CareCredit and Proceed Finance starting at ₹49/mo.",
  },
  {
    id: "children",
    question: "Do you see children?",
    answer:
      "Yes! We adore treating whole families. Our pediatric appointments are paced to match your child’s curiosity, featuring gentle show-and-tell explanations, non-invasive fluoride protection, and zero pressure.",
  },
  {
    id: "appointment-speed",
    question: "How fast can I be seen?",
    answer:
      "We reserve daily emergency and priority appointment slots for sudden discomfort or chipped teeth. Most routine new patient consultations and preventive cleanings can be scheduled within the current or following week.",
  },
  {
    id: "insurance-coverage",
    question: "What insurance plans do you accept?",
    answer:
      "We accept and file claims with virtually all PPO dental plans (including Delta Dental, MetLife, Cigna, Aetna, Guardian, and Humana). Our team verifies your benefits prior to your visit so you know your exact out-of-pocket coverage ahead of time.",
  },
  {
    id: "invisalign-duration",
    question: "How long does Invisalign take compared to traditional braces?",
    answer:
      "Average treatment times range from 4 to 12 months, which is often 30% faster than traditional bracket orthodontics. Because our scans are 3D computer-optimized, tooth movements occur with maximum mechanical efficiency.",
  },
];
