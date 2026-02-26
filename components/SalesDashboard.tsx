import React, { useState } from 'react';

interface SalesDashboardProps {
    user: string;
    onLogout: () => void;
}

type ScriptSegment = 'iniciante' | 'avancado' | 'empresario';
type ScriptPhase = 'abordagem' | 'followup' | 'ligacao';

interface ScriptItem {
    cat: string;
    title: string;
    content: string;
}

const SalesDashboard: React.FC<SalesDashboardProps> = ({ user, onLogout }) => {
    const [activeTab, setActiveTab] = useState<'scripts' | 'escala' | 'registration' | 'payment'>('scripts');
    const [segment, setSegment] = useState<ScriptSegment>('iniciante');
    const [phase, setPhase] = useState<ScriptPhase>('abordagem');

    const menuItems = [
        { id: 'scripts', label: 'Scripts de Vendas', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { id: 'escala', label: 'Escala 2026', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        { id: 'registration', label: 'Links de Inscrição', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
        { id: 'payment', label: 'Links de Pagamento', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    ];

    const allScripts: Record<ScriptSegment, Record<ScriptPhase, ScriptItem[]>> = {
        iniciante: {
            abordagem: [
                { cat: '1️⃣ ABERTURA', title: '📲 ESCREVER', content: 'Olá, bom dia/boa tarde, tudo bem? Aqui é a Leiry, da equipe da Imersão Inteligência Artificial para Negócios. Você se cadastrou para receber informações sobre a edição presencial em Florianópolis, nos dias 28 e 29 de março. Posso te explicar rapidinho?' },
                { cat: '1️⃣ ABERTURA', title: '🎙️ ÁUDIO (40s)', content: 'Prazer, meu nome é Leiry, faço parte da equipe. Só resumidamente para você conhecer: hoje somos parceiros oficiais do Google no Brasil, já formamos mais de 13 mil alunos e também realizamos imersões no Vale do Silício, nos EUA. Trabalhamos com imersão premium, presencial e 100% prática.' },
                { cat: '2️⃣ QUALIFICAÇÃO', title: '🎙️ ÁUDIO', content: 'Para eu te orientar da forma certa, posso te fazer algumas perguntas rápidas? 1. Hoje você já trabalha com Inteligência Artificial ou está começando agora? 2. Você já usa IA no dia a dia ou ainda é bem básico? 3. Seu objetivo hoje é vender mais, ganhar tempo ou começar a prestar serviço? 4. Você aplicaria isso no seu negócio ou para clientes? (Aguardar resposta)' },
                { cat: '4️⃣ EXPLICAÇÃO', title: '🎙️ ÁUDIO (1 min)', content: 'A imersão é presencial em Florianópolis, nos dias 28 e 29 de março. São 2 dias intensivos, das 9h às 17h, no Castelmar Hotel, no centro da cidade. Você leva notebook e constrói tudo ao vivo. Não é teoria. É aplicação.' },
                { cat: '5️⃣ APRENDIZADO', title: '📲 ESCREVER', content: 'Durante os 2 dias você aprende a: ✔️ Entender onde IA entra no negócio, ✔️ Criar assistente de vendas com IA, ✔️ Classificar leads automaticamente, ✔️ Criar respostas inteligentes para WhatsApp, ✔️ Criar calendário de conteúdo profissa, ✔️ Criar relatórios de decisão, ✔️ Automatizar tarefas repetitivas. E método profissional de prompts (Papel, Contexto, Objetivo, Formato, Regras).' },
                { cat: 'Investimento', title: '📲 ESCREVER', content: 'Hoje estamos no primeiro lote: R$ 2.337 ou 12x de R$ 241. Na virada sobe para R$ 3.500.' },
            ],
            followup: [
                { cat: '📅 DIA 0 (10min)', title: 'IMEDIATO', content: '[Nome], gostei muito da nossa conversa. Principalmente quando você falou que quer começar em IA mas ainda se sente meio perdido. A Imersão IA Floripa é exatamente pra isso: Tirar você do zero e colocar num caminho estruturado. Te envio aqui um depoimento 👇' },
                { cat: '📅 DIA 1', title: 'SEGURANÇA', content: '[Nome], deixa eu te perguntar: Se você tivesse um passo a passo claro para aplicar IA no seu negócio, você começaria com mais confiança?' },
                { cat: '📅 DIA 2', title: 'PROVA SOCIAL', content: '[Nome], olha esse caso 👇 Pessoa que começou do zero. Saiu da imersão com assistente pronto e rotina organizada. Não precisa ser técnico. Precisa de método.' },
                { cat: '📅 DIA 4', title: 'AVISO LOTE', content: '[Nome], só pra você se organizar. A Imersão IA Floripa está virando lote. Hoje ainda está em R$ 2.337. Depois sobe para R$ 3.500.' },
            ],
            ligacao: [
                { cat: 'ABERTURA', title: 'CALL', content: 'Olá, bom dia/tarde, aqui é a Leiry. Você se cadastrou para a Imersão IA em Floripa dias 28/29 de Março. Consegue falar 2 min? Hoje somos parceiros oficiais do Google no Brasil...' },
                { cat: 'QUALIFICAÇÃO', title: 'CALL', content: 'Para eu te orientar: Trabalha com marketing? Usa IA no dia a dia? Objetivo: vender mais ou prestar serviço?' },
                { cat: 'FECHAMENTO', title: 'CALL', content: 'Vamos garantir sua vaga no 1º lote? Posso enviar a ficha agora?' }
            ]
        },
        avancado: {
            abordagem: [
                { cat: 'Abordagem', title: '📲 ESCREVER', content: 'Olá, bom dia/boa tarde __________. Aqui é a Leiry da Imersão Inteligência Artificial para Negócios. Você se cadastrou para a edição presencial em Florianópolis, dias 28 e 29 de março. Posso te explicar de forma objetiva?' },
                { cat: 'Abordagem', title: '🎙️ ÁUDIO (30–40s)', content: 'Prazer, Leiry aqui. Só para contextualizar: somos parceiros oficiais do Google no Brasil, já formamos mais de 13 mil alunos e realizamos imersões premium inclusive no Vale do Silício. A proposta aqui não é ensinar ferramenta. É estruturar aplicação estratégica.' },
                { cat: 'Sondagem', title: '🎙️ ÁUDIO', content: 'Hoje você já usa IA no seu negócio, certo? Você aplica mais para produção, automação ou decisão estratégica? Você já vende isso como solução estruturada ou ainda é execução pontual? (Aguardar resposta)' },
                { cat: 'Espelho', title: '📲 ESCREVER', content: 'Então hoje você já domina parte técnica, mas quer estruturar aplicação estratégica e monetização, certo?' },
                { cat: 'Monetização', title: '📲 ESCREVER', content: 'Você pode estruturar: 💰 Implantação IA comercial R$ 3.000 a R$ 10.000 | 💰 Assistente integrado com CRM R$ 5.000 a R$ 15.000 | 💰 Retainer mensal R$ 2.000 a R$ 6.000. Um único projeto já paga a imersão.' },
            ],
            followup: [
                { cat: '📅 DIA 0', title: 'ESTRATÉGIA', content: '[Nome], excelente nossa conversa. Principalmente sobre [gargalo]. A Imersão IA Floripa resolve exatamente isso: Estrutura + previsibilidade + decisão baseada em dado. Te envio o case 👇' },
                { cat: '📅 DIA 1', title: 'PROVOCAÇÃO', content: '[Nome], você já usa IA. Mas está usando como apoio ou como sistema operacional do seu negócio? A diferença é margem.' },
                { cat: '📅 DIA 3', title: 'VIRADA LOTE', content: '[Nome], a Imersão IA Floripa está virando lote. Depois vai para R$ 3.500. Transparência total.' },
            ],
            ligacao: [
                { cat: 'ABERTURA', title: 'CALL', content: 'Me chamo Leiry, parceiros oficiais Google... Imersão premium Vale do Silício... A proposta é implementar sistema no seu negócio.' },
                { cat: 'O QUE MUDA', title: 'CALL', content: 'Reduzir tarefas manuais, diminuir dependência de equipe, clareza de números. Sair do improviso.' }
            ]
        },
        empresario: {
            abordagem: [
                { cat: 'ABORDAGEM', title: '📲 ESCREVER', content: 'Olá, bom dia/boa tarde __________, tudo bem? Me chamo Leiry, da Imersão IA para Negócios. Você se cadastrou para a edição presencial em Floripa, 28 e 29 de março. Posso te explicar rapidinho?' },
                { cat: 'SONDAGEM', title: '🎙️ ÁUDIO', content: 'A imersão é para você mesmo? Hoje você já usa IA estruturada no negócio? Seu objetivo é vender mais ou organizar processos?' },
                { cat: 'MONETIZAÇÃO', title: '📲 ESCREVER', content: 'Aprende a criar assistente de vendas, automatizar atendimento e relatórios de decisão. Transforma IA básica em ferramenta estratégica.' },
            ],
            followup: [
                { cat: '📅 DIA 0', title: 'IMEDIATO', content: '[Nome], boa conversa. Te enviei o material que resolve aquele seu gargalo de [ponto mencionado].' },
                { cat: '📅 DIA 1', title: 'IMPACTO', content: '[Nome], se você estruturasse isso agora, qual impacto teria nos próximos 90 dias sem aumentar custo fixo?' },
            ],
            ligacao: [
                { cat: 'EXPLICAÇÃO', title: 'CALL', content: 'Castelmar Hotel. 100% prática. Você sai com pelo menos 1 estrutura funcionando. Nada de teoria.' },
                { cat: 'INVESTIMENTO', title: 'CALL', content: 'R$ 2.337 à vista ou 12x 241. Perto da virada sobe para R$ 3.500.' }
            ]
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Copiado para a área de transferência!');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'scripts':
                const activeScripts = allScripts[segment][phase];
                return (
                    <div className="space-y-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)}: {phase.charAt(0).toUpperCase() + phase.slice(1)}
                                </h2>

                                {/* Segment Selector */}
                                <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                                    {(['iniciante', 'avancado', 'empresario'] as ScriptSegment[]).map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSegment(s)}
                                            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${segment === s ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Phase Selector */}
                            <div className="flex flex-wrap gap-2">
                                {(['abordagem', 'followup', 'ligacao'] as ScriptPhase[]).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setPhase(p)}
                                        className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${phase === p ? 'bg-white text-black border-white' : 'bg-transparent text-slate-400 border-slate-800 hover:border-slate-600'}`}
                                    >
                                        {p === 'abordagem' ? '📲 Whats' : p === 'followup' ? '🔄 Follow-up' : '📞 Ligação'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {activeScripts.map((s, i) => (
                                <div key={i} className={`p-6 rounded-2xl border ${s.title.includes('ÁUDIO') || s.title.includes('CALL') ? 'bg-blue-600/5 border-blue-500/20' : 'bg-slate-900/50 border-slate-800'}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 block">{s.cat}</span>
                                            <h3 className={`font-bold uppercase text-xs tracking-widest ${s.title.includes('ÁUDIO') || s.title.includes('CALL') ? 'text-blue-400' : 'text-green-400'}`}>{s.title}</h3>
                                        </div>
                                        {(s.title.includes('ESCREVER') || s.title.includes('IMEDIATO') || s.title.includes('SEGURANÇA') || s.title.includes('PROVA') || s.title.includes('AVISO') || s.title.includes('ESTRATÉGIA') || s.title.includes('PROVOCAÇÃO') || s.title.includes('VIRADA') || s.title.includes('IMPACTO')) && (
                                            <button
                                                onClick={() => copyToClipboard(s.content)}
                                                className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20"
                                            >
                                                Copiar Texto
                                            </button>
                                        )}
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed italic whitespace-pre-wrap">{s.content}</p>
                                </div>
                            ))}
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
