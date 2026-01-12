import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

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
    <section id="contato" className="py-24 px-6 md:px-12 bg-emerald-50/50">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-6">Vamos conversar?</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Dê o primeiro passo para uma vida mais leve e saudável. Preencha o formulário e entrarei em contato para agendarmos sua consulta.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>Atendimento 100% Online</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>Segunda a Sexta, 08h às 19h</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100/50">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-serif text-2xl text-slate-800 mb-2">Mensagem Enviada!</h3>
              <p className="text-slate-500">Obrigada pelo contato. Retornarei em breve.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-emerald-600 font-medium hover:underline"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border-0 rounded-xl focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border-0 rounded-xl focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border-0 rounded-xl focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                  placeholder="Como posso te ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-emerald-700 text-white rounded-xl font-medium hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-100 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
      </div>
    </section>
  );
};