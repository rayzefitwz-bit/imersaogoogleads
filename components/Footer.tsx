
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1c23] pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <img 
            src="https://i.ibb.co/BHdLjB43/Whats-App-Image-2026-02-24-at-15-08-44-removebg-preview.png" 
            alt="Imperium Logo" 
            className="w-24 h-24 rounded-2xl shadow-2xl shadow-blue-900/30 object-cover mb-4 transition-all"
          />
          <h2 className="text-2xl font-bold mb-2 uppercase tracking-tighter">Imperium Digital Global</h2>
          <p className="text-slate-500 text-sm max-w-md">Liderando a fronteira do conhecimento em soluções práticas com Inteligência Artificial.</p>
        </div>

        <div className="flex justify-center gap-8 mb-12 text-slate-500 text-sm font-medium">
          <a href="#" className="hover:text-blue-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-500 transition-colors">YouTube</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Política de Privacidade</a>
        </div>

        <div className="border-t border-slate-900 pt-8 text-xs text-slate-600">
          <p>© 2024 Imperium Digital Global. Todos os direitos reservados.</p>
          <p className="mt-2 font-mono tracking-tighter">HUMAN POWERED • AI ENHANCED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
