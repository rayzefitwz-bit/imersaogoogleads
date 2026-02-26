import React, { useState } from 'react';
import { scriptsData, ScriptFile } from './SalesScripts';

interface SalesDashboardProps {
    user: string;
    onLogout: () => void;
}

const SalesDashboard: React.FC<SalesDashboardProps> = ({ user, onLogout }) => {
    const [activeTab, setActiveTab] = useState<'scripts' | 'escala' | 'registration' | 'payment'>('scripts');
    const [selectedScript, setSelectedScript] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState('');

    const menuItems = [
        { id: 'scripts', label: 'Scripts de Vendas', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { id: 'escala', label: 'Escala 2026', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        { id: 'registration', label: 'Links de Inscrição', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
        { id: 'payment', label: 'Links de Pagamento', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    ];

    const scripts: ScriptFile[] = scriptsData;

    const filteredScripts = scripts.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Copiado para a área de transferência!');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'scripts':
                return (
                    <div className="flex flex-col md:flex-row gap-8 h-[calc(100vh-250px)]">
                        {/* Script List Sidebar */}
                        <div className="w-full md:w-80 flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar script..."
                                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <svg className="w-4 h-4 text-slate-500 absolute right-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-slate-800">
                                {filteredScripts.map((s, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedScript(scripts.indexOf(s))}
                                        className={`w-full text-left p-4 rounded-xl border transition-all ${selectedScript === scripts.indexOf(s)
                                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'}`}
                                    >
                                        <p className="text-xs font-bold truncate">{s.name}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Viewer */}
                        <div className="flex-1 bg-slate-900/80 rounded-[2rem] border border-slate-800 overflow-hidden flex flex-col">
                            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-sm">
                                <h2 className="text-lg font-black text-white uppercase tracking-tight truncate mr-4">
                                    {scripts[selectedScript]?.name}
                                </h2>
                                <button
                                    onClick={() => copyToClipboard(scripts[selectedScript]?.content)}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all flex-shrink-0"
                                >
                                    Copiar Script Inteiro
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-slate-800">
                                <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans italic selection:bg-blue-500/30">
                                    {scripts[selectedScript]?.content}
                                </pre>
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
                            <div className="flex items-center justify-between bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                                <span className="text-white font-medium text-sm">Ficha de Inscrição (Formulário) - florianópolos</span>
                                <button
                                    onClick={() => copyToClipboard('https://docs.google.com/forms/d/1hk2QlsTRTBkHwxXZ1PLyE8R6oIxn9nHPGmDOBkc_Ees/preview')}
                                    className="text-blue-500 text-xs font-black uppercase tracking-widest hover:text-blue-400"
                                >
                                    Copiar Link
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'payment':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">Links de Pagamento</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl border-t-4 border-t-blue-500">
                                <h3 className="text-white font-bold mb-2">Link de Pagamento (Hotmart)</h3>
                                <p className="text-slate-400 text-xs mb-4">Primeiro Lote - R$ 2.337</p>
                                <button
                                    onClick={() => copyToClipboard('https://pay.hotmart.com/S104554315A?bid=1771712330808')}
                                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all"
                                >
                                    Copiar Link de Checkout
                                </button>
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
                <div className="max-w-6xl mx-auto">
                    <header className="mb-12">
                        <p className="text-blue-500 text-xs font-black uppercase tracking-[0.4em] mb-2">Sales Portal</p>
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Biblioteca de <span className="text-blue-600">Scripts.</span></h1>
                    </header>

                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default SalesDashboard;
