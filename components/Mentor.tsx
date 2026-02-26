
import React from 'react';

const Mentor: React.FC = () => {
  const stats = [
    { label: 'Alunos Formados', value: '+2.000', emoji: '🎓' },
    { label: 'Anos de Mercado', value: '+10', emoji: '⚡' },
    { label: 'Países Atendidos', value: '3', emoji: '🌎' },
    { label: 'Resultado Máximo', value: 'R$1 milhão em 7 dias', emoji: '💰' },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Mentor Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-full max-w-lg lg:max-w-xl mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-blue-500/10 shadow-[0_0_50px_-10px_rgba(59,130,246,0.1)] bg-white">
              <img 
                src="https://ebmd.com.br/wp-content/uploads/2024/02/leandro-costa.jpg" 
                alt="Leandro Costa - Mentor de IA" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-60"></div>
              
              {/* Name Tag Overlay */}
              <div className="absolute bottom-8 left-0 right-0 px-8 text-center">
                <div className="inline-block bg-blue-600 px-6 py-2 rounded-full border border-blue-400/30 shadow-xl">
                  <span className="text-white font-black tracking-tighter text-xl uppercase">Leandro Costa</span>
                </div>
              </div>
            </div>

            {/* Decorative Frames */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-slate-200 rounded-[3rem] -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>

          {/* Mentor Content Side */}
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Sobre o Professor</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8 text-slate-900 tracking-tighter leading-tight uppercase">
              Leandro <span className="text-blue-600">Costa</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 font-medium">
              <p>
                Especialista em Marketing Digital e Tecnologia com mais de 10 anos de experiência, apaixonado por tecnologia desde os 14 anos. Iniciou sua trajetória como professor em 1996, ensinando Windows e Microsoft Office em escolas públicas.
              </p>
              <p>
                Entrou no mercado digital atendendo o setor de Hotelaria, trabalhando com grandes players milionários. Hoje, atua com empresas locais, e-commerces e infoprodutores, alcançando resultados de R$1 milhão em 7 dias.
              </p>
              <p>
                Atende clientes no Brasil, Portugal e Austrália e já formou mais de 2.000 alunos. Reconhecido pela clareza didática e foco em resultados, Leandro é uma das referências mais influentes do cenário digital.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-slate-200 p-6 rounded-3xl hover:border-blue-500/30 transition-all group shadow-sm"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.emoji}
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mentor;
