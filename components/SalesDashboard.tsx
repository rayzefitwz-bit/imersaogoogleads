import React, { useState } from 'react';
import { dataService, ScaleEntry, SalesLink } from './dataService';

interface SalesDashboardProps {
    user: string;
    role: 'admin' | 'vendedor';
    onLogout: () => void;
}

const SalesDashboard: React.FC<SalesDashboardProps> = ({ user, role, onLogout }) => {
    const [activeTab, setActiveTab] = useState<'scripts' | 'escala' | 'registration' | 'payment'>('scripts');
    const [selectedScript, setSelectedScript] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState('');

    // Dynamic Data State
    const [scripts, setScripts] = useState(dataService.getScripts());
    const [scaleEntries, setScaleEntries] = useState(dataService.getScale());
    const [links, setLinks] = useState(dataService.getLinks());

    // Modal State
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newScript, setNewScript] = useState({ name: '', category: '', content: '' });
    const [newScale, setNewScale] = useState<ScaleEntry>({ status: 'ATIVO', dates: '', course: '', city: '', venue: '', professor: '', traffic: '' });
    const [newLink, setNewLink] = useState({ label: '', url: '', category: 'registration' as 'registration' | 'payment' });

    const menuItems = [
        { id: 'scripts', label: 'Scripts de Vendas', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { id: 'escala', label: 'Escala 2026', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        { id: 'registration', label: 'Links de Inscrição', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
        { id: 'payment', label: 'Links de Pagamento', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    ];

    const filteredScripts = scripts.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleAddScript = () => {
        const updated = dataService.saveScript(newScript);
        setScripts(updated);
        setIsAddModalOpen(false);
        setNewScript({ name: '', category: '', content: '' });
    };

    const handleAddScale = () => {
        const updated = dataService.saveScaleEntry(newScale);
        setScaleEntries(updated);
        setIsAddModalOpen(false);
        setNewScale({ status: 'ATIVO', dates: '', course: '', city: '', venue: '', professor: '', traffic: '' });
    };

    const handleAddLink = () => {
        const linkToAdd: SalesLink = {
            id: Date.now().toString(),
            category: newLink.category,
            label: newLink.label,
            url: newLink.url
        };
        const updated = dataService.saveLink(linkToAdd);
        setLinks(updated);
        setIsAddModalOpen(false);
        setNewLink({ label: '', url: '', category: 'registration' });
    };

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
                                {role === 'admin' && (
                                    <button
                                        onClick={() => setIsAddModalOpen(true)}
                                        className="w-full py-3 bg-blue-600/10 border border-blue-500/30 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 hover:text-white transition-all mb-4"
                                    >
                                        + Adicionar Novo Script
                                    </button>
                                )}
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
                    <div className="bg-slate-900/80 rounded-[2rem] border border-slate-800 overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm flex justify-between items-center">
                            <h2 className="text-lg font-black text-white uppercase tracking-tight">Escala de Eventos 2026</h2>
                            {role === 'admin' && (
                                <button
                                    onClick={() => setIsAddModalOpen(true)}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all"
                                >
                                    + Adicionar Evento
                                </button>
                            )}
                        </div>
                        <div className="flex-1 overflow-x-auto p-8 scrollbar-thin scrollbar-thumb-slate-800">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-800">
                                        <th className="py-4 px-4 text-xs font-black text-blue-500 uppercase tracking-widest">Status</th>
                                        <th className="py-4 px-4 text-xs font-black text-blue-500 uppercase tracking-widest">Datas</th>
                                        <th className="py-4 px-4 text-xs font-black text-blue-500 uppercase tracking-widest">Curso</th>
                                        <th className="py-4 px-4 text-xs font-black text-blue-500 uppercase tracking-widest">Cidade/UF</th>
                                        <th className="py-4 px-4 text-xs font-black text-blue-500 uppercase tracking-widest">Local</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/50">
                                    {scaleEntries.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                                            <td className="py-4 px-4">
                                                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.status.toLowerCase().includes('encerrada') || item.status.toLowerCase().includes('finalizado')
                                                    ? 'bg-red-500/10 text-red-500 border border-red-500/20'
                                                    : 'bg-green-500/10 text-green-500 border border-green-500/20'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-sm font-bold text-white uppercase">{item.dates}</td>
                                            <td className="py-4 px-4 text-sm text-slate-300">{item.course}</td>
                                            <td className="py-4 px-4 text-sm text-slate-300">{item.city}</td>
                                            <td className="py-4 px-4 text-sm text-slate-500 italic">{item.venue || 'A definir'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'registration':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Links de Inscrição</h2>
                            {role === 'admin' && (
                                <button
                                    onClick={() => {
                                        setNewLink({ label: '', url: '', category: 'registration' });
                                        setIsAddModalOpen(true);
                                    }}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all"
                                >
                                    + Adicionar Link
                                </button>
                            )}
                        </div>
                        <div className="space-y-4">
                            {links.filter(l => l.category === 'registration').map((link) => (
                                <div key={link.id} className="flex items-center justify-between bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                                    <span className="text-white font-medium text-sm">{link.label}</span>
                                    <button
                                        onClick={() => copyToClipboard(link.url)}
                                        className="text-blue-500 text-xs font-black uppercase tracking-widest hover:text-blue-400 font-bold"
                                    >
                                        Copiar Link
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'payment':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Links de Pagamento</h2>
                            {role === 'admin' && (
                                <button
                                    onClick={() => {
                                        setNewLink({ label: '', url: '', category: 'payment' });
                                        setIsAddModalOpen(true);
                                    }}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all"
                                >
                                    + Adicionar Link
                                </button>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {links.filter(l => l.category === 'payment').map((link) => (
                                <div key={link.id} className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl border-t-4 border-t-blue-500">
                                    <h3 className="text-white font-bold mb-2">{link.label}</h3>
                                    <button
                                        onClick={() => copyToClipboard(link.url)}
                                        className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all uppercase tracking-widest"
                                    >
                                        Copiar Link de checkout
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
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
                        <p className="text-[8px] uppercase font-black text-blue-500 tracking-[0.2em] mt-1">{role}</p>
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
                        <h1 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                            {activeTab === 'scripts' && (<>Biblioteca de <span className="text-blue-600">Scripts.</span></>)}
                            {activeTab === 'escala' && (<>Programação <span className="text-blue-600">Eventos 2026.</span></>)}
                            {activeTab === 'registration' && (<>Links de <span className="text-blue-600">Inscrição.</span></>)}
                            {activeTab === 'payment' && (<>Canais de <span className="text-blue-600">Pagamento.</span></>)}
                        </h1>
                    </header>

                    {renderContent()}
                </div>

                {/* Administration Modals */}
                {isAddModalOpen && (
                    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                        <div className="bg-[#12141a] border border-slate-800 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                                <h3 className="text-white font-black uppercase tracking-tight">Adicionar Novo Recurso</h3>
                                <button onClick={() => setIsAddModalOpen(false)} className="text-slate-500 hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div className="p-8 space-y-4">
                                {activeTab === 'scripts' && (
                                    <>
                                        <div>
                                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Título do Script</label>
                                            <input type="text" value={newScript.name} onChange={e => setNewScript({ ...newScript, name: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500" placeholder="Ex: Script de Abordagem" />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Conteúdo</label>
                                            <textarea rows={6} value={newScript.content} onChange={e => setNewScript({ ...newScript, content: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500" placeholder="Cole o roteiro aqui..." />
                                        </div>
                                        <button onClick={handleAddScript} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-600/20">Salvar Script</button>
                                    </>
                                )}
                                {activeTab === 'escala' && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Curso / Nome Evento</label>
                                            <input type="text" value={newScale.course} onChange={e => setNewScale({ ...newScale, course: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm" />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Cidade</label>
                                            <input type="text" value={newScale.city} onChange={e => setNewScale({ ...newScale, city: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm" />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Datas</label>
                                            <input type="text" value={newScale.dates} onChange={e => setNewScale({ ...newScale, dates: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm" />
                                        </div>
                                        <button onClick={handleAddScale} className="col-span-2 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-600/20 mt-4">Salvar Evento</button>
                                    </div>
                                )}
                                {(activeTab === 'registration' || activeTab === 'payment') && (
                                    <>
                                        <div>
                                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Rótulo (Link)</label>
                                            <input type="text" value={newLink.label} onChange={e => setNewLink({ ...newLink, label: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm" placeholder="Ex: Link Hotmart Promo" />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">URL</label>
                                            <input type="text" value={newLink.url} onChange={e => setNewLink({ ...newLink, url: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm" placeholder="https://..." />
                                        </div>
                                        <button onClick={handleAddLink} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-600/20">Salvar Link</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default SalesDashboard;
