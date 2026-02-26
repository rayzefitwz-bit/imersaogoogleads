import React, { useState } from 'react';

interface SalesDashboardProps {
    user: string;
    onLogout: () => void;
}

const SalesDashboard: React.FC<SalesDashboardProps> = ({ user, onLogout }) => {
    const [activeTab, setActiveTab] = useState<'scripts' | 'escala' | 'registration' | 'payment'>('scripts');

    const menuItems = [
        { id: 'scripts', label: 'Scripts de Vendas', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { id: 'escala', label: 'Escala 2026', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        { id: 'registration', label: 'Links de Inscrição', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
        { id: 'payment', label: 'Links de Pagamento', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'scripts':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">Scripts de Vendas</h2>
                        <div className="grid gap-4">
                            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="text-blue-500 font-bold mb-3 uppercase text-xs tracking-widest">Abordagem Inicial</h3>
                                <p className="text-slate-300 text-sm leading-relaxed italic">"Olá [Nome], vi que você tem interesse na nossa Imersão de Google Ads + IA. Como está a sua operação hoje?"</p>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                                <h3 className="text-blue-500 font-bold mb-3 uppercase text-xs tracking-widest">Quebra de Objeção (Preço)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed italic">"Entendo o ponto do investimento, mas imagine o custo de continuar perdendo dinheiro em campanhas que não convertem por falta de dados inteligêntes..."</p>
                            </div>
                        </div>
                    </div>
                );
            case 'escala':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">Escala 2026</h2>
                        <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl">
                            <p className="text-slate-300 leading-relaxed mb-6">A meta para 2026 é consolidar a Imperium como a maior aceleradora de negócios através de IA e tráfego pago no Brasil.</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Expansion para novos mercados latinos
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Implementação de modelos proprietários de IA
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            case 'registration':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">Links de Inscrição</h2>
                        <div className="space-y-4">
                            {['Voucher Antecipado', 'Lista de Espera VIP', 'Inscrição Direta'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                                    <span className="text-white font-medium text-sm">{item}</span>
                                    <button className="text-blue-500 text-xs font-black uppercase tracking-widest hover:text-blue-400">Copiar Link</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'payment':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">Links de Pagamento</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl border-t-4 border-t-green-500">
                                <h3 className="text-white font-bold mb-2">À Vista (PIX)</h3>
                                <p className="text-slate-400 text-xs mb-4">Processamento instantâneo</p>
                                <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all">Gerar Link PIX</button>
                            </div>
                            <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl border-t-4 border-t-blue-500">
                                <h3 className="text-white font-bold mb-2">Parcelado (Cartão)</h3>
                                <p className="text-slate-400 text-xs mb-4">Ate 12x com juros</p>
                                <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all">Link de Checkout</button>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0b0e] flex text-slate-300">
            {/* Sidebar */}
            <aside className="w-80 bg-[#12141a] border-r border-slate-800 flex flex-col pt-12">
                <div className="px-8 mb-12">
                    <div className="flex flex-col -space-y-1">
                        <span className="text-xl font-bold tracking-tight text-white uppercase">Imperium</span>
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Dashboard</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id as any)}
                            className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${activeTab === item.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                            </svg>
                            <span className="font-bold text-sm tracking-tight">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 mt-auto">
                    <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 mb-4">
                        <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-1">Logado como</p>
                        <p className="text-xs text-white font-bold truncate">{user}</p>
                    </div>
                    <button
                        onClick={onLogout}
                        className="w-full py-4 bg-slate-800/50 hover:bg-red-500/10 hover:text-red-500 text-slate-400 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-3 border border-slate-800"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sair
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-12 overflow-y-auto">
                <div className="max-w-4xl">
                    <header className="mb-12">
                        <p className="text-blue-500 text-xs font-black uppercase tracking-[0.4em] mb-2">Sales Portal</p>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Bem-vindo de volta, <span className="text-blue-600">Vendedor.</span></h1>
                    </header>

                    <div className="bg-[#12141a]/50 border border-slate-800 p-10 rounded-[2.5rem] backdrop-blur-md">
                        {renderContent()}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SalesDashboard;
