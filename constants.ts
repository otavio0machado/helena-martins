import { Video, Stethoscope, Users, Instagram, Mail } from 'lucide-react';
import { Service, FAQItem, SocialLink, Credential } from './types';

export const PROFESSIONAL = {
  name: 'Helena Martins',
  crn: 'CRN-3 12.847',
  title: 'Nutricionista comportamental',
  yearsActive: 11,
  doctoraliaUrl: 'https://www.doctoralia.com.br/helena-martins-nutricionista',
  whatsAppUrl: 'https://wa.me/5511934821507',
  email: 'contato@helenamartins.nut.br',
  hours: 'Ter, qua, qui · 10h–19h (atendimento) · sex 14h–17h (retornos)',
};

export const HERO = {
  kicker: 'Nutrição comportamental · 100% online',
  title: 'Você não precisa de mais uma dieta.',
  lead:
    'Atendo mulheres adultas que já passaram por restrição alimentar suficiente — Vigilantes, low carb, jejum, contagem de calorias — e querem reorganizar a relação com a comida sem sair de uma dieta para entrar em outra.',
  detail:
    'Sessões de 60 minutos, online, com abordagem HAES (Health at Every Size®) e comer intuitivo (Tribole & Resch). Não prescrevo cardápio, não peso a paciente, não estabeleço meta de emagrecimento como objetivo terapêutico.',
};

export const APPROACH = {
  title: 'O que faço — e o que não faço.',
  yes: [
    'Atendimento de nutrição com sessões de 60 minutos',
    'Anamnese alimentar, avaliação laboratorial e adequação nutricional sem prescrição calórica',
    'Trabalho de comportamento alimentar baseado em comer intuitivo, mindful eating e ACT',
    'Acompanhamento conjunto com psicóloga parceira em casos de TCAP, anorexia e bulimia',
    'Recibo médico padrão CFN para reembolso de plano (ver detalhes na seção de valores)',
  ],
  no: [
    'Não prescrevo dieta restritiva, contagem de calorias ou planos de emagrecimento por meta de peso',
    'Não trabalho com bioimpedância nem dobras cutâneas como métricas de evolução',
    'Não atendo gestantes, atletas de alto rendimento ou crianças — não é minha especialidade clínica',
    'Não respondo dúvida nutricional por DM no Instagram fora da consulta',
  ],
};

export const SERVICES: Service[] = [
  {
    title: 'Primeira consulta',
    duration: '60 minutos',
    price: 'R$ 320',
    who: 'Para quem ainda não fez sessão comigo. Inclui anamnese alimentar completa, leitura de exames laboratoriais (se houver), e desenho do plano de acompanhamento.',
    description:
      'Conversamos sobre sua história alimentar, dietas anteriores, gatilhos, momentos do dia que costumam ser difíceis. No fim da sessão você sai com 1 ou 2 movimentos pequenos para a próxima semana — não com cardápio.',
    Icon: Stethoscope,
  },
  {
    title: 'Sessão de retorno',
    duration: '60 minutos',
    price: 'R$ 280',
    who: 'Para pacientes em acompanhamento. Frequência sugerida varia entre quinzenal nas primeiras 8 semanas e mensal depois.',
    description:
      'Revisamos o que aconteceu desde a última sessão (sem julgamento de adesão), ajustamos o que fez sentido, soltamos o que não fez. Você define a próxima ação.',
    Icon: Video,
  },
  {
    title: 'Sessão conjunta com psicóloga',
    duration: '90 minutos',
    price: 'R$ 480',
    who: 'Para casos com diagnóstico ou suspeita de transtorno alimentar (TCAP, anorexia, bulimia). Combinada caso a caso após a primeira consulta.',
    description:
      'Atendimento simultâneo com a psicóloga Dra. Renata Yano (CRP 06/118472), com quem trabalho desde 2019. Útil em fases iniciais de tratamento, quando dimensão alimentar e dimensão emocional estão muito entrelaçadas.',
    Icon: Users,
  },
];

export const CREDENTIALS: Credential[] = [
  {
    label: 'Registro profissional',
    value: 'CRN-3 12.847',
    source: 'Conselho Regional de Nutricionistas — São Paulo',
  },
  {
    label: 'Graduação',
    value: 'Nutrição · USP, 2014',
  },
  {
    label: 'Pós-graduação',
    value: 'Comportamento Alimentar · CEFAC, 2017',
  },
  {
    label: 'Formação complementar',
    value: 'Comer Intuitivo (EAT IT! Brasil, 2019) · ACT clínica (IBCT, 2021)',
  },
  {
    label: 'Apresentações',
    value: 'IV Congresso Brasileiro de Nutrição Comportamental, 2022 (mesa: "Atendimento HAES no SUS")',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Funciona se meu objetivo é emagrecer?',
    answer:
      'Honestamente: depende do que você entende por isso. Se é "perder X kg em N meses", não — não é o tipo de trabalho que faço. Se é "parar de pesar e despesar a vida toda, comer com menos sofrimento, e ver o corpo se ajustar onde ele se ajustar", sim. Vou te dizer com clareza na primeira consulta se faz sentido seguir, e indicar colega se não fizer.',
  },
  {
    question: 'Aceita convênio médico?',
    answer:
      'Trabalho exclusivamente como prestadora particular. Forneço recibo padrão CFN com CID nutricional aplicável (E66, F50.x, etc., quando há diagnóstico médico anterior) para reembolso. Bradesco Saúde Topo, SulAmérica Prestige e Amil 600 reembolsam parcialmente sessões de nutricionista — geralmente entre R$ 80 e R$ 180 por sessão. Outros planos não cobrem nutrição.',
  },
  {
    question: 'Como funciona online?',
    answer:
      'Atendo via Doctoralia Pro (vídeo dentro da própria plataforma, criptografia e prontuário com base legal LGPD para dados sensíveis de saúde). Você não precisa instalar nada além do navegador. Antes da primeira consulta você preenche um questionário de anamnese alimentar — leva uns 20 minutos. Se tiver exames recentes, pode anexar como PDF.',
  },
  {
    question: 'Vou ser pesada?',
    answer:
      'Não. Não trabalho com peso como métrica de evolução, nem peço para você se pesar antes da sessão. Se você quiser falar sobre peso — porque mexe com a sua experiência, não porque eu pedi — falamos. Mas o número não entra no plano.',
  },
  {
    question: 'Você prescreve cardápio?',
    answer:
      'Não. Não saio da sessão com lista de "café da manhã: 1 fatia de pão integral + 1 ovo + chá verde". Esse formato não me parece útil para o tipo de paciente que atendo (já fez vários cardápios, vários se cumpriram por uma semana, nenhum sustentou). O que sai da sessão é mais leve e mais específico — uma observação para a próxima semana, ou um experimento.',
  },
  {
    question: 'Vocês atendem TCAP, anorexia, bulimia?',
    answer:
      'Sim, com a psicóloga parceira (Dra. Renata Yano, CRP 06/118472) em sessão conjunta de 90 minutos. Casos com diagnóstico estabelecido geralmente entram nesse formato desde o início. Casos sem diagnóstico claro mas com suspeita começam por consulta individual com cada uma de nós, e na 3ª ou 4ª sessão decidimos se vale o conjunto.',
  },
];

export const SOCIALS: SocialLink[] = [
  {
    label: '@helena.nutri',
    href: 'https://instagram.com/helena.nutri',
    Icon: Instagram,
  },
  {
    label: PROFESSIONAL.email,
    href: `mailto:${PROFESSIONAL.email}`,
    Icon: Mail,
  },
];
