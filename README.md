# Helena Martins · landing study case

Landing fictícia para uma nutricionista brasileira que atende online com
abordagem **HAES (Health at Every Size®) e comer intuitivo** — não prescreve
dieta, não pesa paciente, não usa meta de emagrecimento como objetivo
terapêutico. Este repositório é um **study case** para portfolio — não há
profissional real, CRN real ou consultório em atendimento por trás.

## Sobre este study case

A versão original do repo era a landing genérica de qualquer "nutri" gerada
por IA: paleta sage + cream + gold de wellness, hero "Nutrição que se adapta
à sua vida, não o contrário", três serviços com 1 frase cada (*"Consulta
Online" · "Plano Personalizado" · "Acompanhamento"*), credenciais com
"Doutora em Nutrição Clínica pela USP" e "Membro da Sociedade Brasileira de
Nutrição" sem **CRN visível** — o que é violação direta do código de ética
da profissão (Resolução CFN nº 599/2018 obriga registro profissional em
qualquer material de divulgação) — e formulário de contato com `setTimeout`
simulando envio.

O exercício aqui foi pegar o "site bonito de qualquer profissional de
saúde" e dar uma identidade defensável e específica:

- **Posicionamento de nicho**: nutrição comportamental para mulheres
  adultas com histórico de dietas restritivas. Anti-prescrição. Cita
  literatura real (Tribole & Resch, HAES, ACT clínica).
- **Credenciais auditáveis** em formato de ficha clínica: CRN-3 12.847,
  USP 2014, CEFAC 2017, formação complementar específica, apresentação
  em congresso, parceira psicóloga com CRP visível.
- **Seção "O que faço / o que não faço"** explícita — dois lados, cada
  um com 4-5 itens. Anti-bullets simétricos.
- **Sessões com preço, duração e público explícitos** — R$ 320 / R$ 280
  / R$ 480, com explicação de para quem cada formato serve. Não é
  "Saiba mais" sem preço.
- **Reembolso de plano** com nome do plano e faixa de valor real
  (Bradesco Saúde Topo, SulAmérica Prestige, Amil 600 — entre R$ 80 e
  R$ 180/sessão). Não é "fornecemos recibo".
- **Formulário de contato removido** — substituído por link para
  agenda pública no Doctoralia (que é onde marcação de profissional
  da saúde brasileiro de fato acontece em 2024-2026). Formulário com
  setTimeout era teatro.
- **Página LGPD** com base legal específica (Art. 11, II, f da
  Lei 13.709/2018), retenção de 5 anos por Resolução CFN, e
  declaração explícita do que **não** acontece (sem pixel FB, sem
  uso de dados em post de Instagram).
- **Política de cancelamento** com a cláusula incomum de **estorno
  integral se a primeira consulta concluir mau encaixe** — tipo de
  política que profissional sério realmente oferece.

## Estrutura

| Seção | Por quê |
| ---- | ---- |
| Hero | Tagline anti-dieta direta + ficha profissional na coluna lateral |
| Abordagem | "O que faço / O que não faço" em colunas paralelas |
| Sessões e valores | 3 formatos com preço, duração, público específico |
| Dúvidas | 6 perguntas reais — "vou ser pesada?", "aceita convênio?", "trata TCAP?" |
| Agendar | Link Doctoralia + WhatsApp para dúvida de encaixe (não atendimento) |
| Footer | CRN, parceira psicóloga com CRP, links LGPD e cancelamento |

## Decisões de design

- **Paleta clínica** (off-white #FAF6F0, grafite #2A2A28, musgo #5B6B58,
  argila #B25D44) em vez de sage+cream+gold de IA-wellness. Sensação de
  consultório de bairro com livro de medicina, não consultório SaaS.
- **Tipografia tripla**: *Cormorant Garamond* serif para títulos
  editoriais, *IBM Plex Mono* para etiquetas de campo (label-mono) e
  números, *Inter* sans para corpo. As etiquetas mono dão sensação
  de prontuário.
- **Bordas retas** (rule editorial #E0D6C2) em vez de `rounded-organic
  50px` decorativo do template original. Inspiração em formulário
  clínico, não em UI orgânica.
- **Restrição de ícones**: 7 ícones funcionais (Stethoscope, Video,
  Users para sessões; Check, X para abordagem; ExternalLink,
  MessageCircle para CTA). Removidos: Leaf (logo), Phone, Clock, Send,
  CheckCircle, Loader2, ArrowRight.
- **Sem hover lift** em cards. As 3 sessões compartilham uma borda
  única de hairline com divisores de 1px. Editorial, não card-flutuante.

## Stack

`React 19` · `TypeScript` · `Vite 6` · `Tailwind via CDN` · `lucide-react` ·
`framer-motion` (mantido para o `ScrollReveal` original — funciona com
scroll instantâneo, ao contrário de IntersectionObserver manual)

## Rodar local

```bash
npm install
npm run dev
```

Vite roda em `http://localhost:3000` (porta definida no `vite.config.ts`).

## Aviso

Todo o conteúdo deste site — Helena Martins, CRN, valores das sessões,
parceira psicóloga Dra. Renata Yano, e-mails, links de Doctoralia e
WhatsApp, ressarcimentos de plano, faixa de horário — é **fictício**.
Foi escrito pra parecer plausível como página de profissional de saúde
brasileira, e não tem qualquer pretensão de induzir agendamento.
