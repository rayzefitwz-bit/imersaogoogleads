
import React from 'react';

const modules = [
  {
    num: "00",
    title: "Módulo 0: Fundamentos Rápidos",
    desc: "Ecossistema de IA (LLMs, automação, dados e agentes). Quando usar prompt, RAG, automação ou fine-tune.",
    items: ["LLM Ecosystem", "Strategy", "Fine-tuning"]
  },
  {
    num: "01",
    title: "Módulo 1: Engenharia de Prompt",
    desc: "Prompt estruturado, saída em JSON, extração e classificação de dados e padronização de respostas.",
    items: ["JSON Output", "Data Extraction", "Standardization"]
  },
  {
    num: "02",
    title: "Módulo 2: N8N e Automação",
    desc: "Subworkflows, processamento assíncrono, retry inteligente, logs e webhooks para produtos de IA.",
    items: ["n8n Workflows", "Async Processing", "Webhooks"]
  },
  {
    num: "03",
    title: "Módulo 3: Guardrails (IA Segura)",
    desc: "Validação de entrada e saída, anti-alucinação, fallback de modelo e controle de custo.",
    items: ["Safety", "Cost Control", "Fallback"]
  },
  {
    num: "04",
    title: "Módulo 4: Memória e RAG",
    desc: "Criação de base de conhecimento, vetorização, embeddings e busca inteligente de contexto.",
    items: ["Vector DB", "Embeddings", "Context Search"]
  },
  {
    num: "05",
    title: "Módulo 5: Agentes de IA",
    desc: "Agentes de atendimento, vendas e internos. Tool calling e tomada de decisão automatizada.",
    items: ["AI Agents", "Tool Calling", "Decision Making"]
  },
  {
    num: "06",
    title: "Módulo 6: IA para Dados e Decisão",
    desc: "Leitura automática de relatórios, geração de insights e análise de desempenho com banco de dados.",
    items: ["Data Insights", "Reports", "DB Connection"]
  },
  {
    num: "07",
    title: "Módulo 7: Casos Reais e Playbooks",
    desc: "WhatsApp IA, classificação de leads, resumo de reuniões e relatórios automáticos.",
    items: ["WhatsApp IA", "Lead Scoring", "Meeting Summary"]
  }
];

const Curriculum: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 sticky top-32">
          <h2 className="text-4xl font-bold mb-6">Conteúdo <span className="text-blue-500">Programático</span></h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Uma jornada disruptiva de 3 dias projetada para levar você da ideia ao produto digital ativo no mercado.
          </p>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <div className="text-blue-500 font-bold text-2xl mb-2">24 Horas</div>
            <div className="text-sm text-slate-400 uppercase tracking-widest">3 dias de conteúdo 100% prático</div>
          </div>
        </div>

        <div className="lg:w-2/3 w-full space-y-6">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-8 hover:bg-slate-900/50 transition-all">
              <div className="text-5xl font-black text-slate-800">{m.num}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.items.map((item, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
