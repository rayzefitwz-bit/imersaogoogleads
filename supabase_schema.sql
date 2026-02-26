-- Create tables for Sales Dashboard
CREATE TABLE sales_scripts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE marketing_strategies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    points TEXT[] NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE sales_links (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category TEXT NOT NULL CHECK (category IN ('registration', 'payment')),
    label TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert Initial Data (Matching current SalesDashboard.tsx)

-- Scripts
INSERT INTO sales_scripts (category, title, content) VALUES
('Abordagem', '📲 ESCREVER', 'Olá, bom dia/boa tarde __________. Aqui é a Leiry da Imersão Inteligência Artificial para Negócios. Você se cadastrou para a edição presencial em Florianópolis, dias 28 e 29 de março. Posso te explicar de forma objetiva?'),
('Abordagem', '🎙️ ÁUDIO (30–40s)', 'Prazer, Leiry aqui. Só para contextualizar: somos parceiros oficiais do Google no Brasil, já formamos mais de 13 mil alunos e realizamos imersões premium inclusive no Vale do Silício. A proposta aqui não é ensinar ferramenta. É estruturar aplicação estratégica.'),
('Sondagem', '🎙️ ÁUDIO', 'Hoje você já usa IA no seu negócio, certo? Você aplica mais para produção, automação ou decisão estratégica? Você já vende isso como solução estruturada ou ainda é execução pontual? (Aguardar resposta)'),
('Espelho', '📲 ESCREVER', 'Então hoje você já domina parte técnica, mas quer estruturar aplicação estratégica e monetização, certo?'),
('Espelho', '🎙️ ÁUDIO', 'Perfeito. É exatamente onde a maioria trava. Sabe fazer. Mas não transformou em sistema escalável.'),
('Explicação', '🎙️ ÁUDIO (1 min)', 'A imersão acontece em Florianópolis. 28 e 29 de março. Das 9h às 17h. No Castelmar Hotel. São dois dias 100% práticos. Você leva notebook. E trabalha: Estrutura comercial com IA, Assistente de vendas integrado, IA aplicada à decisão, Arquitetura de funil inteligente, Modelo replicável. Não é sobre aprender prompt. É sobre estruturar produto.'),
('Tradução', '📲 ESCREVER', 'Você já sabe usar IA. A pergunta é: Você está vendendo execução ou estruturando solução?'),
('Tradução', '🎙️ ÁUDIO', 'A maioria dos técnicos: Entrega projeto sob demanda, Cobra por hora, Fica dependente, Não cria modelo replicável. IA aplicada corretamente vira: Produto, Retainer, Escala, Previsibilidade.'),
('Monetização', '📲 ESCREVER', 'Você pode estruturar: 💰 Implantação IA comercial R$ 3.000 a R$ 10.000 | 💰 Assistente integrado com CRM R$ 5.000 a R$ 15.000 | 💰 Retainer mensal R$ 2.000 a R$ 6.000. Um único projeto já paga a imersão.'),
('Checagem', '🎙️ ÁUDIO', 'Faz sentido para você sair do papel de executor e virar estruturador de sistema? (Aguardar resposta)'),
('Bônus', '📲 ESCREVER', 'Além da imersão presencial você recebe: ✔️ 2 meses Comunidade Black, ✔️ Curso Tráfego Meta Ads. E acesso ao portal com conteúdos estratégicos.'),
('Confirmação', '🎙️ ÁUDIO', 'Se você sair de lá com modelo replicável estruturado, isso impacta diretamente sua receita, certo? (Aguardar SIM)'),
('Investimento', '📲 ESCREVER', 'Hoje estamos no 1º lote: R$ 2.337 ou 12x de R$ 241. Na virada sobe para R$ 3.500.'),
('Investimento', '🎙️ ÁUDIO', 'Sendo direto… Você está analisando como custo ou como investimento estratégico? O que está pesando mais: Valor? Tempo? Ou decisão?'),
('Objeções', '💰 VALOR (ÁUDIO)', 'Quanto você precisa fechar em 1 projeto para pagar isso?'),
('Objeções', '⏳ TEMPO (ÁUDIO)', 'São dois dias. Mas podem encurtar meses de tentativa e erro.'),
('Objeções', '🤔 VOU PENSAR (ESCREVER)', 'Pensar sobre o quê exatamente?'),
('Objeções', '🤔 VOU PENSAR (ÁUDIO)', 'Se eu resolver isso agora, você garante sua vaga?'),
('Dorm Futura', '🎙️ ÁUDIO', 'O mercado vai se dividir entre: Quem estruturou IA e quem apenas usou ferramenta. Você quer estar em qual lado?'),
('Fechamento', '📲 ESCREVER', 'Vamos garantir sua vaga no primeiro lote? Posso te enviar a ficha agora?');

-- Links
INSERT INTO sales_links (category, label, url) VALUES
('registration', 'Ficha de Inscrição (Formulário) - florianópolis', 'https://docs.google.com/forms/d/1hk2QlsTRTBkHwxXZ1PLyE8R6oIxn9nHPGmDOBkc_Ees/preview'),
('payment', 'Link de Pagamento (Hotmart)', 'https://pay.hotmart.com/S104554315A?bid=1771712330808');
