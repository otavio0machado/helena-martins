import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  duration: string;
  price: string;
  who: string;
  Icon: LucideIcon;
}

export interface Credential {
  label: string;
  value: string;
  source?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  Icon: LucideIcon;
}
