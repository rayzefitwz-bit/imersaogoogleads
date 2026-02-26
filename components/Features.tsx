import React, { useState, useEffect, useRef } from 'react';

const Features: React.FC = () => {
  const headerText = "Em 3 dias 100% práticos, você aprenderá:";
  const learningPoints = [
    {
      text: "Como criar campanhas do zero com estrutura profissional;"
    },
    {
      text: "Como usar IA para reduzir custos e aumentar lucro;"
    },
    {
      text: "E como transformar dados em decisões inteligentes para escalar seu negócio com previsibilidade."
    }
  ];

  const [typedHeader, setTypedHeader] = useState('');
  const [typedPoints, setTypedPoints] = useState<string[]>(['', '', '']);
  const [currentIndex, setCurrentIndex] = useState(-1); // -1: header, 0-2: points
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentSection);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (currentIndex === -1) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedHeader(headerText.slice(0, i + 1));
        i++;
        if (i >= headerText.length) {
          clearInterval(interval);
          setTimeout(() => setCurrentIndex(0), 500);
        }
      }, 30);
      return () => clearInterval(interval);
    }

    if (currentIndex >= 0 && currentIndex < learningPoints.length) {
      let i = 0;
      const targetText = learningPoints[currentIndex].text;
      const interval = setInterval(() => {
        setTypedPoints(prev => {
          const next = [...prev];
          next[currentIndex] = targetText.slice(0, i + 1);
          return next;
        });
        i++;
        if (i >= targetText.length) {
          clearInterval(interval);
          setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isVisible, currentIndex]);

  const renderHighlightedText = (text: string) => {
    if (!text) return null;
    return text.split(' ').map((word, idx) => {
      const highlights = ['criar', 'campanhas', 'zero', 'IA', 'reduzir', 'custos', 'aumentar', 'lucro', 'transformar', 'dados', 'decisões', 'inteligentes'];
      const cleanWord = word.replace(/[;,.]/g, '');
      if (highlights.includes(cleanWord)) {
        return <span key={idx} className="text-slate-900 font-bold">{word} </span>;
      }
      return word + ' ';
    });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.9]">
              Por que <span className="text-blue-600">participar</span> <br />
              dessa imersão?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="mt-1.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl text-slate-800 font-medium leading-tight">
                  O mercado digital evoluiu. Hoje, não basta impulsionar anúncios — é preciso entender dados, comportamento e usar a Inteligência Artificial para escalar resultados.
                </p>
              </div>

              <p className="text-lg text-slate-500 leading-relaxed max-w-xl ml-10">
                A Imersão Google Ads + IA foi criada para te ensinar como transformar tráfego em lucro, com o mesmo método usado por agências e especialistas que geram milhões em vendas.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm min-h-[450px]">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                {typedHeader}
                {currentIndex === -1 && <span className="w-2 h-6 bg-blue-600 animate-pulse inline-block"></span>}
              </h3>

              <ul className="space-y-8">
                {learningPoints.map((point, i) => (
                  <li key={i} className={`flex gap-5 items-start group transition-opacity duration-500 ${currentIndex >= i ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="shrink-0 w-10 h-10 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl text-slate-600 leading-snug">
                      {renderHighlightedText(typedPoints[i])}
                      {currentIndex === i && <span className="w-1.5 h-5 bg-blue-600 animate-pulse ml-1 inline-block"></span>}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Card */}
            <div className="bg-[#1a1c23] rounded-3xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 shadow-2xl shadow-blue-500/10 max-w-lg ml-auto">
              <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                  alt="Aluno"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-white text-sm md:text-base font-medium leading-tight mb-2">
                  "Antes do curso eu vendia 800 iPhones/mês. Depois da imersão, <span className="font-black text-blue-400">passei a vender quase 3.000.</span>"
                </blockquote>
                <cite className="text-slate-400 text-[10px] font-bold not-italic uppercase tracking-wider">
                  Aluno EBMD, Balneário Camboriú (2023)
                </cite>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
