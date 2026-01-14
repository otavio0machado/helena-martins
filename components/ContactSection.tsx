import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, Phone, Clock } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

type Status = 'idle' | 'loading' | 'success';

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset after showing success message for a while
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 px-6 md:px-12 bg-gradient-to-br from-sage-50 via-cream-100 to-sage-100">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <ScrollReveal>
          <div>
            {/* Gold decorative accent */}
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-300 mb-6"></div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-semibold mb-6">Vamos conversar?</h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Dê o primeiro passo para uma vida mais leve e saudável. Preencha o formulário e entrarei em contato para agendarmos sua consulta.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-charcoal/70">
                <div className="w-10 h-10 bg-sage-200 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-sage-600" />
                </div>
                <span>Atendimento 100% Online</span>
              </div>
              <div className="flex items-center gap-4 text-charcoal/70">
                <div className="w-10 h-10 bg-sage-200 rounded-full flex items-center justify-center">
                  <Clock size={18} className="text-sage-600" />
                </div>
                <span>Segunda a Sexta, 08h às 19h</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-sage-100/50 relative overflow-hidden">
            {/* Gold accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent"></div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-serif text-2xl text-charcoal font-semibold mb-2">Mensagem Enviada!</h3>
                <p className="text-charcoal/60">Obrigada pelo contato. Retornarei em breve.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-sage-600 font-medium hover:text-gold-500 hover:underline transition-colors"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-cream-50 border border-sage-100 rounded-xl focus:ring-2 focus:ring-sage-200 focus:border-sage-300 focus:bg-white transition-all text-charcoal placeholder:text-charcoal/40"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-cream-50 border border-sage-100 rounded-xl focus:ring-2 focus:ring-sage-200 focus:border-sage-300 focus:bg-white transition-all text-charcoal placeholder:text-charcoal/40"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-cream-50 border border-sage-100 rounded-xl focus:ring-2 focus:ring-sage-200 focus:border-sage-300 focus:bg-white transition-all text-charcoal placeholder:text-charcoal/40 resize-none"
                    placeholder="Como posso te ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-xl font-medium hover:from-sage-600 hover:to-sage-700 focus:ring-4 focus:ring-sage-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
