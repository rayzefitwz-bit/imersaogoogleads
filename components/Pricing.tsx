
import React from 'react';

const tiers = [
  {
    name: 'Lote 1',
    subtitle: 'Imersão Presencial',
    status: 'Vagas Limitadas',
    description: 'Aproveite o primeiro lote com bônus exclusivos para sua formação.',
    features: [
      '3 dias imersão',
      '2 meses comunidade vip gratuita',
      'curso gravado vendas sem limites',
      'certificado válido a nível nacional',
      'material de apoio digital',
      'procure saber sobre ingressos corporativos'
    ],
    highlight: true,
    cta: 'Garantir Vaga Lote 1'
  },
  {
    name: 'Lote 2',
    subtitle: 'Imersão Presencial',
    status: 'Em Breve',
    description: 'Garanta sua participação na imersão presencial.',
    features: [
      '3 dias imersão',
      'certificado válido a nível nacional',
      'material de apoio digital',
      'procure saber sobre ingressos corporativos'
    ],
    highlight: false,
    cta: 'Garantir Vaga Lote 2'
  }
];

interface PricingProps {
  onGarantir: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onGarantir }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Investimento</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900 tracking-tighter">
            DOMINE O FUTURO EM <span className="text-blue-600 underline decoration-blue-500/20 underline-offset-8">24 HORAS</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-medium">
            Seja online ou presencial, a Imperium Digital Global prepara você para construir e publicar soluções reais com IA em 3 dias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div 
              key={i}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${
                tier.highlight 
                  ? 'bg-white border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-20' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  MELHOR CUSTO-BENEFÍCIO
                </div>
              )}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                  <span className="text-[10px] font-black text-blue-600 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest">
                    {tier.subtitle}
                  </span>
                </div>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{tier.description}</p>
              </div>
              <div className="mb-8 border-b border-slate-100 pb-4">
                <div className="text-[10px] text-blue-600 font-black uppercase tracking-widest">{tier.status}</div>
              </div>
              <div className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className={`h-5 w-5 shrink-0 ${tier.highlight ? 'text-blue-600' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 text-xs font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={onGarantir}
                className={`w-full py-4 rounded-2xl font-black text-xs transition-all active:scale-95 text-center ${
                tier.highlight 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-[#1a1c23] hover:bg-slate-800 text-white'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
