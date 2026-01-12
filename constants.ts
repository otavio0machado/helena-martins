import { Video, FileText, Activity, Instagram, Linkedin, Mail } from 'lucide-react';
import { ServiceItem, FAQItem, SocialLink } from './types';

export const BIO_TEXT = {
  greeting: "Nutrição que se adapta à sua vida, não o contrário.",
  intro: "Especialista em reeducação alimentar e nutrição esportiva. Transforme sua relação com a comida sem dietas restritivas.",
  description: "Acredito em uma abordagem gentil e baseada em evidências. Meu objetivo é ajudar você a alcançar seus objetivos de saúde através de escolhas conscientes, respeitando sua rotina, cultura e preferências, sem julgamentos e sem extremismos.",
  credentials: [
    "Doutora em Nutrição Clínica pela USP",
    "Especialista em Comportamento Alimentar",
    "Membro da Sociedade Brasileira de Nutrição"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Consulta Online",
    description: "Atendimento completo via videochamada, com análise de exames e definição de metas no conforto da sua casa.",
    Icon: Video
  },
  {
    title: "Plano Personalizado",
    description: "Cardápios flexíveis e estratégias nutricionais desenhadas especificamente para sua rotina e paladar.",
    Icon: FileText
  },
  {
    title: "Acompanhamento",
    description: "Monitoramento contínuo da sua evolução, com ajustes no plano e suporte para dúvidas via chat.",
    Icon: Activity
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Aceita convênios médicos?",
    answer: "Atualmente trabalho no modelo particular para garantir a qualidade e o tempo necessário para cada atendimento. Forneço toda a documentação para solicitação de reembolso."
  },
  {
    question: "Como funciona o retorno?",
    answer: "O retorno está incluso e acontece geralmente 30 dias após a primeira consulta. Nele, avaliamos sua adaptação, conquistas e fazemos os ajustes necessários no plano."
  },
  {
    question: "O atendimento é por vídeo?",
    answer: "Sim! Utilizo uma plataforma segura e fácil de usar. Você recebe o link por e-mail/WhatsApp. A experiência é muito próxima do presencial, com a vantagem da comodidade."
  },
  {
    question: "Trabalha com nutrição vegetariana?",
    answer: "Sim, sou especializada em transição para o vegetarianismo e veganismo, garantindo aporte nutricional adequado e saboroso."
  }
];

export const SOCIALS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: Instagram
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: Linkedin
  }
];