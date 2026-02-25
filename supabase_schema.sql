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
('Abordagem Inicial', 'Primeiro Contato', 'Olá [Nome], vi que você tem interesse na nossa Imersão de Google Ads + IA. Como está a sua operação hoje?'),
('Quebra de Objeção', 'Foco em ROI', 'Entendo o ponto do investimento, mas imagine o custo de continuar perdendo dinheiro em campanhas que não convertem por falta de dados inteligentes...');

-- Escala 2026
INSERT INTO marketing_strategies (title, description, points) VALUES
('Escala 2026', 'A meta para 2026 é consolidar a Imperium como a maior aceleradora de negócios através de IA e tráfego pago no Brasil.', ARRAY['Expansion para novos mercados latinos', 'Implementação de modelos proprietários de IA']);

-- Links
INSERT INTO sales_links (category, label, url) VALUES
('registration', 'Voucher Antecipado', '#'),
('registration', 'Lista de Espera VIP', '#'),
('registration', 'Inscrição Direta', '#'),
('payment', 'À Vista (PIX)', '#'),
('payment', 'Parcelado (Cartão)', '#');
