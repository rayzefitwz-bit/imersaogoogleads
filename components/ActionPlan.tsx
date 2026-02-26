
import React, { useState } from 'react';

const steps = [
  // DIA 1
  {
    day: 1,
    step: "00",
    label: "Fundamentos e Estrutura Profissional",
    title: "O que você vai aprender na prática",
    description: "Ao final do primeiro dia, você terá suas campanhas Search configuradas e prontas para rodar. O primeiro dia é dedicado a criar bases sólidas e entender como o Google decide quem aparece primeiro.",
    icon: "🔰",
    topics: [
      "Como criar e configurar sua conta do zero",
      "O que o algoritmo realmente leva em conta para exibir anúncios",
      "Como escolher palavras-chave lucrativas e negativas inteligentes",
      "Estrutura profissional de campanhas de pesquisa (Search)",
      "Como analisar concorrência e planejar o funil do seu negócio",
      "Criação de anúncios com copy e segmentação estratégica"
    ]
  },
  // DIA 2
  {
    day: 2,
    step: "01",
    label: "Inteligência Artificial, Conversões e Performance",
    title: "O que você vai aprender na prática",
    description: "Ao final do segundo dia, você dominará o uso da Inteligência Artificial no tráfego pago. No segundo dia, o foco é performance e automação, usar IA para reduzir custos e escalar lucros.",
    icon: "🧠",
    topics: [
      "Configuração de ações de conversão e métricas avançadas",
      "Criação de campanhas de Display e Remarketing",
      "Construção de públicos personalizados e listas inteligentes",
      "Como analisar dados e tomar decisões baseadas em resultados",
      "Otimização de ROAS, CPL, CPA e LTV com ferramentas de IA",
      "Estratégias práticas de automação e análise de desempenho"
    ]
  },
  // DIA 3
  {
    day: 3,
    step: "02",
    label: "YouTube Ads e Estratégias Avançadas",
    title: "O que você vai aprender na prática",
    description: "Ao final da imersão, você sai com funis completos e campanhas rodando. O terceiro dia é o mais estratégico: o foco é posicionamento, branding e escala.",
    icon: "📈",
    topics: [
      "Criação de campanhas de YouTube Ads do zero",
      "Tipos de vídeos e formatos que mais convertem",
      "Como prender atenção e gerar ação com storytelling",
      "Estratégias para remarketing e funis multimídia",
      "Planejamento de campanhas omnichannel",
      "Checklist de performance com ajustes ao vivo"
    ]
  }
];

interface ActionPlanProps {
  onGarantir: () => void;
}

const ActionPlan: React.FC<ActionPlanProps> = ({ onGarantir }) => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const filteredSteps = steps.filter(s => s.day === activeDay);

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#1a1c23] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Grade Curricular Expandida</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-white tracking-tighter">
            CRONOGRAMA <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">PRÁTICO</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-medium">
            24 horas de imersão total. Do conceito à publicação em 3 dias intensivos.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-[#1a1c23]/50 border border-slate-800 rounded-2xl backdrop-blur-md overflow-x-auto max-w-full">
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => setActiveDay(d as 1|2|3)}
                className={`px-6 md:px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex flex-col items-center min-w-[120px] ${
                  activeDay === d ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>DIA 0{d}</span>
                <span className="text-[9px] opacity-60 uppercase tracking-widest font-black">
                  {d === 1 ? 'Identidade' : d === 2 ? 'Construção' : 'Lançamento'}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 animate-fade-in max-w-4xl mx-auto" key={activeDay}>
          {filteredSteps.map((s, i) => (
            <div key={i} className="group relative">
              <div className="bg-[#1a1c23]/30 border border-slate-800/50 p-6 md:p-10 rounded-[2rem] h-full transition-all duration-500 hover:bg-[#1a1c23]/60 hover:border-blue-500/40 hover:-translate-y-1.5 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 shrink-0 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors mb-2">{s.label}</h3>
                    <span className="text-blue-500 font-black text-xs tracking-widest uppercase mb-4">{s.title}</span>
                  </div>
                  <div className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-6">
                    {s.description}
                  </div>
                  <div className="bg-[#1a1c23]/50 rounded-2xl p-6 border border-slate-800/50">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Você aprenderá:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {s.topics?.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={onGarantir}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-sm hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
          >
            QUERO DOMINAR 24 HORAS
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionPlan;
