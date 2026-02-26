
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BonusModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalUrl: string;
}

const BonusModal: React.FC<BonusModalProps> = ({ isOpen, onClose, originalUrl }) => {
  const communityUrl = "https://chat.whatsapp.com/ISdaiUnz2Ss7exxuW2oo9G";

  const handleAccessNow = () => {
    window.open(communityUrl, '_blank');
    // After opening the community, we also want to proceed to the original destination
    // or at least give the user the option. 
    // The user said "antes de direcionar", so maybe we should redirect the current window now?
    window.location.href = originalUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1a1c23]/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-[#1a1c23] border border-blue-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600/10 rounded-full blur-2xl -z-10"></div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-3xl mb-8 border border-blue-500/30">
                <span className="text-4xl">🎁</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                VOCÊ ACABOU DE <br />
                <span className="text-blue-500">GANHAR UM PRESENTE!</span>
              </h2>
              
              <div className="bg-[#1a1c23]/50 border border-slate-800 rounded-2xl p-6 mb-10">
                <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                  Você ganhou <span className="text-white font-bold">um mês</span> da nossa <span className="text-blue-400">comunidade secreta</span>!
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-blue-500 font-black uppercase tracking-widest text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Aula ao vivo toda quarta 20:00 as 21:00
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleAccessNow}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
                >
                  Acessar Agora
                </button>
                
                <button
                  onClick={() => {
                    onClose();
                    window.location.href = originalUrl;
                  }}
                  className="text-slate-500 hover:text-slate-300 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Continuar para inscrição sem o bônus
                </button>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BonusModal;
