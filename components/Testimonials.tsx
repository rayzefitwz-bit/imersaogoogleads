
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Andréia Santini',
    role: 'Gerente de Marketing e E-commerce',
    content: 'Experiência transformadora para o Grupo Cristina, aplicando IA em escala real.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    videoUrl: 'https://www.youtube.com/embed/bL1kZxAraDU'
  },
  {
    id: 2,
    name: 'Juliano Matias',
    role: 'Corretor e Proprietário de Imobiliária',
    content: 'Domínio total do tráfego pago com estratégias avançadas de segmentação.',
    image: 'https://i.pravatar.cc/150?u=juliano-m',
    videoUrl: 'https://www.youtube.com/embed/norPhE2ZcaI'
  },
  {
    id: 3,
    name: 'Djonatan Porto',
    role: 'Advogado e Sócio',
    content: 'Resultados expressivos na advocacia através de tráfego pago e IA.',
    image: 'https://i.pravatar.cc/150?u=djonatan',
    videoUrl: 'https://www.youtube.com/embed/xRf-8N6cLH4'
  },
  {
    id: 4,
    name: 'Samanta Richartz',
    role: 'Proprietária de Agência de Marketing',
    content: 'Elevou o nível das entregas para clientes usando o método Imperium.',
    image: 'https://i.pravatar.cc/150?u=samanta',
    videoUrl: 'https://www.youtube.com/embed/Zz5OZsLKgTk'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#1a1c23] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-600/10 border border-blue-500/30 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full backdrop-blur-md">
              Provas Reais
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-white tracking-tighter uppercase">
            O QUE NOSSOS <span className="text-blue-600">ALUNOS DIZEM</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-medium">
            Resultados reais de quem decidiu dominar Google ads e a inteligência artificial na prática e multiplicou seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#1a1c23]/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-[2.5rem] flex flex-col hover:border-blue-500/30 transition-all duration-300 group shadow-2xl"
            >
              {t.videoUrl ? (
                <div className="relative aspect-video mb-8 rounded-3xl overflow-hidden border border-slate-800 shadow-inner group-hover:border-blue-500/20 transition-colors">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={t.videoUrl}
                    title={t.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-800 group-hover:border-blue-500/30 transition-colors shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white shadow-xl">
                      ★
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">{t.name}</h3>
                    <p className="text-blue-500 text-xs font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              )}

              <div className="relative">
                <svg className="absolute -top-4 -left-2 w-10 h-10 text-blue-600/10 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8H6v2a2 2 0 002 2h2v4H8a6 6 0 01-6-6v-8a2 2 0 012-2h4zm14 0v8h-4v2a2 2 0 002 2h2v4h-2a6 6 0 01-6-6v-8a2 2 0 012-2h4z" />
                </svg>
                <div className="pl-8">
                  <h3 className="text-white font-bold text-lg mb-1">{t.name}</h3>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">{t.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed italic relative z-10 font-medium">
                    "{t.content}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
