export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  treatment: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sofia-marchetti",
    quote:
      "“I hadn’t seen a dentist in six years out of pure fear. Draftworks changed that in one visit - I actually booked the next one on my way out. The quiet rooms and noise canceling headphones made the hour fly by. It felt more like a spa visit than a cleaning. They quoted me half what another clinic did and explained exactly why. No upsell.”",
    author: "Sofia Marchetti",
    treatment: "Invisalign patient",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "james-okonkwo",
    quote:
      "“They quoted me half what another clinic did and explained exactly why. No upsell.”",
    author: "James Okonkwo",
    treatment: "Implant patient",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "dana-whitfield",
    quote:
      "“My kids ask to go to the dentist now. That still sounds insane to type.”",
    author: "Dana Whitfield",
    treatment: "Family plan",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "marcus-chen",
    quote:
      "“The quiet rooms and noise-canceling headphones made the hour fly by. It felt more like a spa visit than a cleaning.”",
    author: "Marcus Chen",
    treatment: "Preventive Care",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
];
