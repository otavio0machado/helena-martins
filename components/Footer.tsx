import React from 'react';
import { SOCIALS, PROFESSIONAL } from '../constants';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t rule py-14 text-sm bg-paper">
      <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-5">
          <p className="font-serif text-xl text-graphite mb-2 tracking-tight-2">
            {PROFESSIONAL.name}<span className="text-clay">.</span>
          </p>
          <p className="label-mono text-graphite-soft mb-3">{PROFESSIONAL.crn} · {PROFESSIONAL.title}</p>
          <p className="text-[13px] text-graphite-soft leading-relaxed max-w-sm">
            Atendimento online de nutrição comportamental para mulheres
            adultas com histórico de dietas restritivas. Sem prescrição
            calórica, sem meta de peso, sem julgamento.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="label-mono text-graphite-soft mb-3">Documentos</p>
          <ul className="space-y-2 text-[13px] text-graphite-soft">
            <li><a href="#duvidas" className="hover:text-clay transition-colors">Dúvidas frequentes</a></li>
            <li><a href="/lgpd.html" className="hover:text-clay transition-colors">Tratamento de dados (LGPD)</a></li>
            <li><a href="/cancelamento.html" className="hover:text-clay transition-colors">Política de cancelamento</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-mono text-graphite-soft mb-3">Acompanhar</p>
          <ul className="space-y-2 text-[13px]">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-graphite-soft hover:text-clay transition-colors"
                >
                  <s.Icon size={14} strokeWidth={1.5} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-mono text-graphite-soft mb-3">Em parceria</p>
          <p className="text-[13px] text-graphite-soft leading-relaxed">
            Dra. Renata Yano<br />
            CRP 06/118472<br />
            Psicóloga clínica
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 border-t rule pt-6 flex flex-col md:flex-row gap-3 justify-between text-[12px] text-graphite-soft">
        <p>© {year} {PROFESSIONAL.name}. Conteúdo do site é fictício, parte de um study case.</p>
        <p>
          Este é um <a className="underline hover:text-clay" href="https://github.com/otavio0machado/helena-martins" target="_blank" rel="noopener noreferrer">study case</a>, não é uma profissional em atendimento.
        </p>
      </div>
    </footer>
  );
};
