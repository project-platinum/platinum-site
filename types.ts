import { LucideIcon } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface TargetAudienceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}