import React, { useState } from 'react';

interface LoginProps {
    onBack: () => void;
    onLogin: (user: string) => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'vendedor@imperium.com' && password === 'escala2026') {
            onLogin(email);
        } else if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
        } else {
            setError('Credenciais inválidas. Use o e-mail e senha de teste.');
        }
    };

    return (
        <div className="min-h-screen bg-[#1a1c23] flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
            {/* Background IA elements (Sync with Hero/FAQ) */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 opacity-[0.10]"
                    style={{ backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px), radial-gradient(#1e40af 0.5px, #1a1c23 0.5px)`, backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}>
                </div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
            </div>

            <div className="w-full max-w-md">
                <div className="mb-10 text-center">
                    <div className="inline-block mb-6">
                        <span className="bg-blue-600/10 border border-blue-500/30 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full backdrop-blur-md">
                            Área Exclusiva
                        </span>
                    </div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
                        Login <span className="text-blue-600">Vendedor</span>
                    </h1>
                    <p className="text-slate-400 mt-4 font-medium uppercase text-xs tracking-[0.2em]">
                        Portal de Scripts e Estratégias
                    </p>
                </div>

                <div className="bg-[#1a1c23]/60 backdrop-blur-xl border border-slate-800/50 p-8 rounded-[2.5rem] shadow-2xl relative">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">E-mail ou Usuário</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-600/50 transition-all"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">Senha</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-600/50 transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] uppercase tracking-wider active:scale-95"
                        >
                            Entrar no Sistema
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-col gap-4 text-center">
                        <button className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                            Esqueci minha senha
                        </button>
                        <button
                            onClick={onBack}
                            className="text-blue-500 hover:text-blue-400 transition-colors text-xs font-black uppercase tracking-widest"
                        >
                            ← Voltar para a Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
