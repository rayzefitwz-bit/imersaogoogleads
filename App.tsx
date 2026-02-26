
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import ActionPlan from './components/ActionPlan';
import Mentor from './components/Mentor';
import Features from './components/Features';
import InPerson from './components/InPerson';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AIAssistant from './components/AIAssistant';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './components/Login';
import SalesDashboard from './components/SalesDashboard';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'vendedor' | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleEnrollment = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (view === 'login') {
    return (
      <Login
        onBack={() => setView('landing')}
        onLogin={(user, role) => {
          setCurrentUser(user);
          setUserRole(role);
          setView('dashboard');
        }}
      />
    );
  }

  if (view === 'dashboard' && currentUser && userRole) {
    return <SalesDashboard user={currentUser} role={userRole} onLogout={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-[#1a1c23] selection:bg-blue-500 selection:text-white">
      <Navbar
        scrolled={scrolled}
        onParticipate={() => handleEnrollment("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20google%20ads%20e%20intelig%C3%AAncia%20artificial")}
        onLoginClick={() => setView('login')}
      />

      <main>
        <Hero onGarantir={() => handleEnrollment("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20google%20ads%20e%20intelig%C3%AAncia%20artificial")} />
        <StatsCounter />

        {/* Seção de Problema/Contexto */}
        <section className="py-20 bg-slate-950 border-y border-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Isso não é um curso. Formamos quem <span className="text-blue-500 italic">comanda o jogo.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Uma imersão premium, prática e intensiva. Você leva notebook, constrói ao vivo e sai com a estrutura implementada, com ajuda em tempo real da nossa equipe técnica.
            </p>
          </div>
        </section>

        <div id="features" className="scroll-mt-24">
          <Features />
        </div>

        <div id="plan" className="scroll-mt-24">
          <ActionPlan onGarantir={() => handleEnrollment("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20google%20ads%20e%20intelig%C3%AAncia%20artificial")} />
        </div>

        {/* Seção Para Quem É */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black mb-8 text-slate-900 uppercase tracking-tighter">
                    Para quem é <br />
                    <span className="text-blue-600">essa experiência</span>
                  </h2>
                  <div className="space-y-6 mb-8">
                    {[
                      { t: "Donos de empresas", d: "Que querem entender e dominar seus resultados;" },
                      { t: "Gestores de tráfego e marketing", d: "Que buscam performance real;" },
                      { t: "Agências e freelancers", d: "Que desejam entregar mais para seus clientes;" },
                      { t: "Empreendedores digitais", d: "Que querem vender todos os dias;" },
                      { t: "Profissionais", d: "Que desejam dominar Google Ads com estratégia e IA." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold mt-1 text-white">✓</div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-lg">{item.t}</h4>
                          <p className="text-slate-500 text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-600/5 border border-blue-500/10 p-6 rounded-2xl">
                    <p className="text-blue-600 font-medium italic text-lg leading-relaxed">
                      Essa é a diferença entre quem depende da sorte e quem domina o jogo.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://i.ibb.co/Vpz9PD1n/475675841-18108950941457556-2891202427485548242-n.jpg"
                    alt="Experiência Imersão"
                    className="rounded-3xl shadow-2xl transition-all duration-700 object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Transformação */}
        <section className="py-24 bg-[#1a1c23] border-y border-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">A Transformação</h2>
              <p className="text-slate-500 mt-4 font-medium">Deixe de ser um apertador de botões e torne-se um estrategista de alta performance.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-[#1a1c23]/40 p-10 rounded-3xl border border-red-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-red-500/20 text-4xl font-black">ANTES</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Onde você está hoje
                </h4>
                <ul className="space-y-4">
                  {["Campanhas sem estrutura e sem lucro", "Dependente da sorte para vender", "Cliques caros e baixo retorno (ROI)", "Não entende o que os dados dizem"].map((item, i) => (
                    <li key={i} className="text-slate-400 flex gap-3 items-center font-medium">
                      <span className="text-red-500">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-600/10 p-10 rounded-3xl border border-blue-500/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-blue-500/20 text-4xl font-black">DEPOIS</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Onde você vai chegar
                </h4>
                <ul className="space-y-4">
                  {["Estrutura profissional de alta conversão", "Domínio total do algoritmo com IA", "Escala previsível e ROI positivo", "Decisões inteligentes baseadas em dados"].map((item, i) => (
                    <li key={i} className="text-white flex gap-3 items-center font-bold">
                      <span className="text-blue-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div id="mentor" className="scroll-mt-24">
          <Mentor />
        </div>

        <div id="presencial" className="scroll-mt-24">
          <InPerson onGarantir={handleEnrollment} />
        </div>

        <div id="pricing" className="scroll-mt-24">
          <Pricing onGarantir={() => handleEnrollment("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20google%20ads%20e%20intelig%C3%AAncia%20artificial")} />
        </div>

        <Testimonials />

        <div id="faq" className="scroll-mt-24">
          <FAQ />
        </div>
      </main>

      <Footer />
      <AIAssistant />

      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button
          onClick={() => handleEnrollment("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20google%20ads%20e%20intelig%C3%AAncia%20artificial")}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg glow-blue transition-all uppercase tracking-widest text-sm"
        >
          Garantir Minha Vaga (24h de IA)
        </button>
      </div>
    </div>
  );
};

export default App;
