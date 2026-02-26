
import React from 'react';

interface InPersonProps {
  onGarantir: (url: string) => void;
}

const InPerson: React.FC<InPersonProps> = ({ onGarantir }) => {
  return (
    <section className="py-24 bg-[#1a1c23] border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Logística da Imersão</h2>
           <p className="text-slate-500 mt-4 font-medium">🚨 Edição Confirmada – Gramado/RS</p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#1a1c23]/50 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Info Side */}
            <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-slate-800">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Gramado / RS</h3>
              </div>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">📅</div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Data</p>
                    <p className="text-white font-bold text-lg">24, 25 e 26 de Abril de 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">🕘</div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Horário</p>
                    <p className="text-white font-bold text-lg">Das 09h00 às 17h00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">📍</div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Modalidade</p>
                    <p className="text-white font-bold text-lg">Presencial | Turma Confirmada</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onGarantir("https://pay.hotmart.com/S104554315A")}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20"
              >
                Garantir Minha Vaga
              </button>
            </div>

            {/* Location Side */}
            <div className="p-10 md:p-16 bg-[#1a1c23]/30">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xl">📍</div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Local do Evento</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-blue-500 font-black text-xl mb-2">Hotel Laghetto Canela</h4>
                  <p className="text-slate-300 leading-relaxed">
                    R. Rodolfo Schilieper, 64 – Centro, Canela/RS<br />
                    CEP: 95680-000
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-800">
                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-lg">📞</div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Contato Local</p>
                      <p className="text-white font-bold">(54) 3295-7394</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="aspect-video w-full bg-slate-800 rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" 
                      alt="Hotel Laghetto" 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">Ver no Mapa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InPerson;
