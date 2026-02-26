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
-- Avançado
('Abordagem (Adv)', '📲 ESCREVER', 'Olá, bom dia/boa tarde __________. Que é a Leiry da Imersão Inteligência Artificial para Negócios. Você se cadastrou para a edição presencial em Florianópolis, dias 28 e 29 de março. Posso te explicar de forma objetiva?'),
('Abordagem (Adv)', '🎙️ ÁUDIO (30–40s)', 'Prazer, Leiry aqui. Só para contextualizar: somos parceiros oficiais do Google no Brasil, já formamos mais de 13 mil alunos e realizamos imersões premium inclusive no Vale do Silício. A proposta aqui não é ensinar ferramenta. É estruturar aplicação estratégica.'),
('Sondagem (Adv)', '🎙️ ÁUDIO', 'Hoje você já usa IA no seu negócio, certo? Você aplica mais para produção, automação ou decisão estratégica? Você já vende isso como solução estruturada ou ainda é execução pontual? (Aguardar resposta)'),
('Espelho (Adv)', '📲 ESCREVER', 'Então hoje você já domina parte técnica, mas quer estruturar aplicação estratégica e monetização, certo?'),
('Monetização (Adv)', '📲 ESCREVER', 'Você pode estruturar: 💰 Implantação IA comercial R$ 3.000 a R$ 10.000 | 💰 Assistente integrado com CRM R$ 5.000 a R$ 15.000 | 💰 Retainer mensal R$ 2.000 a R$ 6.000. Um único projeto já paga a imersão.'),
('Investimento (Adv)', '📲 ESCREVER', 'Hoje estamos no 1º lote: R$ 2.337 ou 12x de R$ 241. Na virada sobe para R$ 3.500.'),
-- Iniciante
('1️⃣ ABERTURA (Ini)', '📲 ESCREVER', 'Olá, bom dia/boa tarde, tudo bem? Aqui é a Leiry, da equipe da Imersão Inteligência Artificial para Negócios. Você se cadastrou para receber informações sobre a edição presencial em Florianópolis, nos dias 28 e 29 de março. Posso te explicar rapidinho?'),
('1️⃣ ABERTURA (Ini)', '🎙️ ÁUDIO (40s)', 'Prazer, meu nome é Leiry, faço parte da equipe. Só resumidamente para você conhecer: hoje somos parceiros oficiais do Google no Brasil, já formamos mais de 13 mil alunos e também realizamos imersões no Vale do Silício, nos EUA. Trabalhamos com imersão premium, presencial e 100% prática.'),
('2️⃣ QUALIFICAÇÃO (Ini)', '🎙️ ÁUDIO', 'Para eu te orientar da forma certa, posso te fazer algumas perguntas rápidas? 1. Hoje você já trabalha com Inteligência Artificial ou está começando agora? 2. Você já usa IA no dia a dia ou ainda é bem básico? 3. Seu objetivo hoje é vender mais, ganhar tempo ou começar a prestar serviço? 4. Você aplicaria isso no seu negócio ou para clientes? (Aguardar resposta)'),
('4️⃣ EXPLICAÇÃO (Ini)', '🎙️ ÁUDIO (1 min)', 'A imersão é presencial em Florianópolis, nos dias 28 e 29 de março. São 2 dias intensivos, das 9h às 17h, no Castelmar Hotel, no centro da cidade. Você leva notebook e constrói tudo ao vivo. Não é teoria. É aplicação.'),
('5️⃣ APRENDIZADO (Ini)', '📲 ESCREVER', 'Durante os 2 dias você aprende a: ✔️ Entender onde IA entra no negócio, ✔️ Criar assistente de vendas com IA, ✔️ Classificar leads automaticamente, ✔️ Criar respostas inteligentes para WhatsApp, ✔️ Criar calendário de conteúdo profissa, ✔️ Criar relatórios de decisão, ✔️ Automatizar tarefas repetitivas. E método profissional de prompts (Papel, Contexto, Objetivo, Formato, Regras).'),
('7️⃣ MONETIZAÇÃO (Ini)', '📲 ESCREVER', 'Se você tem negócio próprio: Melhorar atendimento e conversão. Se é autônomo/agência: Vender como serviço (Implantação IA R$1.500-4.000, Funil inteligente R$4.000-12.000). Com 1 cliente você já paga a imersão.'),
('Investimento (Ini)', '📲 ESCREVER', 'Hoje estamos no primeiro lote: R$ 2.337 ou 12x de R$ 241. Na virada sobe para R$ 3.500.');

-- Links
INSERT INTO sales_links (category, label, url) VALUES
('registration', 'Ficha de Inscrição (Formulário) - florianópolos', 'https://docs.google.com/forms/d/1hk2QlsTRTBkHwxXZ1PLyE8R6oIxn9nHPGmDOBkc_Ees/preview'),
('payment', 'Link de Pagamento (Hotmart)', 'https://pay.hotmart.com/S104554315A?bid=1771712330808');
