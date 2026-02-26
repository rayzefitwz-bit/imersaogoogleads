
import React, { useState } from 'react';

// Added interface for FAQItem props to ensure proper type checking in JSX
interface FAQItemProps {
  question: string;
  answer: string;
}

// Defined FAQItem as a React.FC to handle React-specific props like 'key' correctly
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center group"
      >
        <span className={`font-semibold transition-colors ${isOpen ? 'text-blue-500' : 'text-slate-400 group-hover:text-white'}`}>{question}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45 text-blue-500' : 'text-slate-500'}`}>+</span>
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-400 text-sm leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Preciso levar notebook?",
      answer: "Sim, o curso é 100% prático e você aplicará tudo em tempo real."
    },
    {
      question: "Tem certificado?",
      answer: "Sim, com credencial personalizada e certificado Imperium Digital Global."
    },
    {
      question: "Há suporte após o evento?",
      answer: "Sim, via grupo de WhatsApp exclusivo por 12 meses."
    },
    {
      question: "Os bônus são presenciais?",
      answer: "Não, os cursos bônus são online e ficam disponíveis no Portal do Aluno."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#1a1c23]">
      {/* --- IA BACKGROUND ELEMENTS (Sync with Hero) --- */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.10]" 
             style={{ backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px), radial-gradient(#1e40af 0.5px, #1a1c23 0.5px)`, backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}>
        </div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
        <div className="absolute inset-0 opacity-20">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute top-0 animate-[scan_10s_linear_infinite]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">
            Perguntas <span className="text-blue-500">Frequentes</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full opacity-50"></div>
        </div>
        <div className="bg-[#1a1c23]/60 backdrop-blur-md rounded-3xl p-8 border border-slate-800/50 shadow-2xl">
          {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </div>

      <style>{`
        @keyframes scan {
            0% { top: -10%; opacity: 0; }
            5% { opacity: 0.5; }
            95% { opacity: 0.5; }
            100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
