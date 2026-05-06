import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { PROFESSIONAL } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-28 border-t rule">
      <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10">
        <ScrollReveal className="md:col-span-7">
          <p className="label-mono text-clay mb-3">Agendar</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-graphite mb-5 leading-tight">
            Não tenho formulário de contato.
          </h2>
          <p className="text-graphite-soft leading-relaxed mb-5 max-w-xl">
            Agendamento direto pelo Doctoralia — você escolhe o horário no
            calendário público e paga a primeira consulta na hora. Se ficar com
            dúvida sobre encaixe entre o que você procura e o que faço, mande
            mensagem no WhatsApp antes de marcar.
          </p>
          <p className="text-graphite-soft leading-relaxed mb-8 max-w-xl text-[14px] italic">
            Não respondo dúvida nutricional por WhatsApp ou DM no Instagram —
            isso é trabalho de consulta. Mas se for uma pergunta de
            funcionamento (horário, recibo, plataforma), respondo no mesmo
            dia útil.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PROFESSIONAL.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-graphite text-paper px-5 py-3 hover:bg-graphite-soft transition-colors text-[15px]"
            >
              Abrir agenda no Doctoralia
              <ExternalLink size={16} />
            </a>
            <a
              href={PROFESSIONAL.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border rule px-5 py-3 hover:bg-paper-warm transition-colors text-[15px] text-graphite"
            >
              <MessageCircle size={16} />
              Dúvida de encaixe (WhatsApp)
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="md:col-span-5 md:border-l rule md:pl-10">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="label-mono text-graphite-soft mb-1.5">Atendimento</dt>
              <dd className="text-graphite leading-relaxed">
                Online via Doctoralia Pro<br />
                Sem consultório físico
              </dd>
            </div>
            <div>
              <dt className="label-mono text-graphite-soft mb-1.5">Horário</dt>
              <dd className="text-graphite leading-relaxed">{PROFESSIONAL.hours}</dd>
            </div>
            <div>
              <dt className="label-mono text-graphite-soft mb-1.5">Reembolso</dt>
              <dd className="text-graphite leading-relaxed">
                Bradesco Saúde Topo · SulAmérica Prestige · Amil 600 ressarcem
                parcial. Demais planos não cobrem.
              </dd>
            </div>
            <div>
              <dt className="label-mono text-graphite-soft mb-1.5">Cancelamento</dt>
              <dd className="text-graphite leading-relaxed">
                Até 24h antes, sem custo. Em até 12h, retém 50%. No-show
                retém 100% (não esperamos justificativa).
              </dd>
            </div>
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
};
