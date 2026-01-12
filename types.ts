import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  Icon: LucideIcon;
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