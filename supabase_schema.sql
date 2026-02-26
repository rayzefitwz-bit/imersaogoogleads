-- Drop existing tables to allow re-running the script
DROP TABLE IF EXISTS sales_links;
DROP TABLE IF EXISTS sales_scripts;
DROP TABLE IF EXISTS marketing_strategies;

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
-- Iniciante
('Ini: Abordagem', '📲 ESCREVER', 'Olá, bom dia/boa tarde, tudo bem? Aqui é a Leiry, da equipe da Imersão Inteligência Artificial para Negócios. Você se cadastrou para receber informações sobre a edição presencial em Florianópolis, nos dias 28 e 29 de março. Posso te explicar rapidinho?'),
('Ini: Abordagem', '🎙️ ÁUDIO (40s)', 'Prazer, meu nome é Leiry, faço parte da equipe...'),
('Ini: Follow-up D0', '� WHATS', '[Nome], gostei muito da nossa conversa...'),
-- Avançado
('Adv: Abordagem', '📲 ESCREVER', 'Olá, bom dia/boa tarde __________. Aqui é a Leiry da Imersão Inteligência Artificial para Negócios...'),
('Adv: Follow-up D1', '🔄 WHATS', '[Nome], você já usa IA. Mas deixa eu te perguntar: Você está usando como apoio ou como sistema operacional?'),
-- Empresário
('Emp: Abordagem', '📲 ESCREVER', 'Olá, bom dia/boa tarde __________, tudo bem? Me chamo Leiry...'),
('Emp: Ligação', '� CALL', 'A imersão acontece em Florianópolis, dias 28 e 29 de março. Das 9h às 17h. No Castelmar Hotel.');

-- Links
INSERT INTO sales_links (category, label, url) VALUES
('registration', 'Ficha de Inscrição (Formulário) - florianópolos', 'https://docs.google.com/forms/d/1hk2QlsTRTBkHwxXZ1PLyE8R6oIxn9nHPGmDOBkc_Ees/preview'),
('payment', 'Link de Pagamento (Hotmart)', 'https://pay.hotmart.com/S104554315A?bid=1771712330808');
