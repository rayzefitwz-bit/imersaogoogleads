import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={countRef} className="text-center p-6">
      <div className="text-3xl md:text-5xl font-black text-blue-600 mb-2 tracking-tighter">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="text-slate-900 text-[10px] font-black uppercase tracking-[0.3em]">
        {label}
      </div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const stats = [
    { value: 13000, label: "Alunos", suffix: "+" },
    { value: 200, label: "Turmas", suffix: "+" },
    { value: 23, label: "Estados", suffix: "" },
    { value: 50, label: "Cidades", suffix: "+" },
  ];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
            Nossa escola não para de <span className="text-blue-600">crescer</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
            Somos o maior centro especializado na realização de cursos de alta performance do Brasil.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-200">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
