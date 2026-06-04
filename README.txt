================================================================================
  PRISMA — CORPORATE WEBSITE
  Empowering Places With Science
================================================================================

  Website institucional da Prisma, empresa especializada em inteligência
  espacial, analytics territorial e consultoria baseada em evidências.

--------------------------------------------------------------------------------
  STACK TÉCNICA
--------------------------------------------------------------------------------

  Framework      React 18 + TypeScript
  Build Tool     Vite
  Estilização    TailwindCSS v4 (@tailwindcss/vite)
  Roteamento     React Router v7
  Mapa           React Leaflet + OpenStreetMap
  Ícones         Lucide React
  Utilitários    clsx + tailwind-merge

  Fonte          Inter / IBM Plex Sans (Google Fonts)
  Sem backend    Todos os dados são estáticos (TypeScript)

--------------------------------------------------------------------------------
  COMO EXECUTAR
--------------------------------------------------------------------------------

  Pré-requisito: Node.js 18+

  # Instalar dependências
  npm install

  # Servidor de desenvolvimento (http://localhost:5173)
  npm run dev

  # Build de produção (pasta /dist)
  npm run build

  # Pré-visualizar o build
  npm run preview

--------------------------------------------------------------------------------
  ESTRUTURA DO PROJETO
--------------------------------------------------------------------------------

  /
  ├── index.html                  Ponto de entrada HTML (inclui Leaflet CSS)
  ├── vite.config.ts              Configuração Vite + Tailwind + alias @/
  ├── tsconfig.app.json           TypeScript config
  ├── package.json
  │
  └── src/
      ├── main.tsx                Entry point React
      ├── App.tsx                 BrowserRouter + Layout + Rotas
      ├── index.css               Importação Tailwind + fontes + tema
      │
      ├── lib/
      │   └── utils.ts            cn() — merge de classes Tailwind
      │
      ├── data/
      │   ├── projects.ts         5 estudos de caso completos
      │   └── insights.ts         6 artigos de análise
      │
      ├── components/
      │   ├── Header.tsx          Header fixo, transparente → branco no scroll
      │   ├── Footer.tsx          Rodapé escuro com parceiros e contatos
      │   ├── PrismaLogo.tsx      Logo SVG (prisma geométrico, 3 faces)
      │   └── HeroBackground.tsx  Background SVG hero (malha triangulada)
      │
      └── pages/
          ├── Home.tsx            Página inicial completa
          ├── Manifesto.tsx       Manifesto editorial
          ├── Portfolio.tsx       Listagem de projetos com filtros
          ├── ProjectDetail.tsx   Estudo de caso individual
          ├── Insights.tsx        Listagem de artigos com busca e filtros
          ├── InsightDetail.tsx   Artigo individual
          └── Contact.tsx         Formulário + mapa Leaflet interativo

--------------------------------------------------------------------------------
  PÁGINAS E ROTAS
--------------------------------------------------------------------------------

  /                   Home
  /manifesto          Manifesto
  /portfolio          Portfolio (listagem)
  /portfolio/:id      Estudo de caso (detalhe)
  /insights           Insights (listagem)
  /insights/:id       Artigo (detalhe)
  /contact            Contato

--------------------------------------------------------------------------------
  IDENTIDADE VISUAL
--------------------------------------------------------------------------------

  PALETA DE CORES

  Cores neutras (90% do uso):
    #FFFFFF    Branco
    #F7F7F7    Off-white (fundos de seção)
    #E5E5E5    Cinza claro (bordas, divisores)
    #D0D0D0    Cinza médio
    #333333    Cinza escuro (textos secundários)
    #111111    Near-black (textos principais)
    #0A0F1E    Fundo escuro (hero, footer, painéis)

  Cores de acento (10% do uso — ícones, destaques, hover):
    #B9CBEA    Azul suave
    #2E7CF6    Azul profundo (cor primária de destaque)
    #7AD83D    Verde suave
    #F3E07A    Amarelo suave

  TIPOGRAFIA
    Inter (principal) / IBM Plex Sans (fallback)
    Hierarquia forte, espaçamento generoso, lettering em uppercase para labels

  LOGO
    SVG geométrico em src/components/PrismaLogo.tsx
    Prisma triangular com 3 faces visíveis
    Variantes: color | dark | light

  TAGLINE
    Empowering Places With Science

--------------------------------------------------------------------------------
  CONTEÚDO DE DADOS
--------------------------------------------------------------------------------

  src/data/projects.ts — 5 projetos completos:
    1. Diagnóstico de Mobilidade Urbana — Região Metropolitana de Fortaleza
       (Mobility / destaque como Featured Project)
    2. Real Estate Intelligence — Corredor Costeiro
       (Real Estate Intelligence)
    3. Índice de Desigualdade Territorial — Nordeste Brasileiro
       (Urban Planning)
    4. Otimização de Rede Logística — Cadeia de Suprimentos Industrial
       (Market Analysis)
    5. Plataforma de Data Science Urbana — Recife
       (Spatial Data Science)

  Cada projeto contém:
    id, title, category, summary, description, client, year,
    featured?, image (Unsplash), challenge, methodology,
    findings[], impact, tags[]

  src/data/insights.ts — 6 artigos:
    1. Measuring Urban Accessibility: Beyond the 30-Minute City
    2. Understanding Territorial Inequality
    3. The Future of Location Intelligence
    4. What Data Science Can and Cannot Do for Urban Planning
    5. Passive Mobility Data: Methodological Rigor
    6. Spatial Econometrics in Real Estate

  Cada artigo contém:
    id, title, category, date, excerpt, readTime, featured?,
    author, content? (texto completo opcional)

--------------------------------------------------------------------------------
  FUNCIONALIDADES
--------------------------------------------------------------------------------

  Header
    - Fixo (sticky), z-index 50
    - Transparente na Home antes do scroll
    - Branco com blur após 40px de scroll
    - Logo + nome PRISMA à esquerda
    - Navegação desktop com underline na rota ativa
    - Menu mobile (hamburger) em telas pequenas
    - Fecha automaticamente ao navegar

  Home
    - Hero full-screen com fundo SVG (grid cartográfico + malha
      triangulada + pontos Voronoi + glow radial)
    - Seção "Quem Somos" em 2 colunas com ilustração espacial SVG
    - Metodologia em 4 etapas: Observe / Understand / Model / Decide
    - 3 serviços: Spatial Intelligence / Data Science / Strategic Consulting
    - Grid de 3 projetos em destaque
    - Últimos 3 artigos
    - Strip de clientes e parceiros
    - Banner CTA escuro

  Scroll Reveal
    - Fade-up com IntersectionObserver
    - Delay escalonado por elemento
    - Sem bibliotecas externas

  Portfolio
    - Filtros por categoria (botões)
    - Projeto "Featured" em destaque separado
    - Grid 2 colunas com imagem, categoria, cliente, ano, tags

  Estudo de Caso
    - Hero com imagem de fundo (opacidade)
    - Seções: Desafio / Metodologia (fundo cinza) / Achados numerados /
      Impacto (painel escuro)
    - Sidebar sticky: detalhes + tags + CTA para contato
    - Grid de outros 3 projetos relacionados

  Insights
    - Artigo em destaque com citação lateral
    - Busca por texto (título + excerpt)
    - Filtros por categoria
    - Grid de artigos com metadados

  Contato
    - Formulário com validação HTML5
    - Estado de sucesso com ícone de confirmação (sem backend)
    - Mapa Leaflet interativo (OpenStreetMap)
    - Marcador em Fortaleza, CE com popup
    - Cards de informações de contato com ícones coloridos

  Footer
    - Fundo #0A0F1E
    - Strip de parceiros em cinza
    - Colunas: Marca / Navegação / Contato
    - Copyright + tagline

--------------------------------------------------------------------------------
  COMO ADICIONAR NOVOS PROJETOS
--------------------------------------------------------------------------------

  1. Abrir src/data/projects.ts
  2. Adicionar um novo objeto ao array `projects` seguindo a interface Project:

     {
       id: 'meu-projeto',           // slug único (usado na URL)
       title: 'Título do Projeto',
       category: 'Mobility',        // ver lista abaixo
       summary: 'Resumo curto...',
       description: 'Descrição completa...',
       client: 'Nome do cliente',
       year: '2025',
       featured: false,             // true = destaque no Portfolio
       image: 'https://...',        // URL de imagem (Unsplash recomendado)
       challenge: 'Descrição do desafio...',
       methodology: 'Descrição da metodologia...',
       findings: [
         'Achado 1...',
         'Achado 2...',
       ],
       impact: 'Descrição do impacto...',
       tags: ['Tag1', 'Tag2'],
     }

  Categorias disponíveis:
    Mobility | Urban Planning | Real Estate Intelligence |
    Market Analysis | Spatial Data Science

  Para adicionar nova categoria: editar o array `categories`
  também em src/data/projects.ts.

  O projeto aparecerá automaticamente em:
    - /portfolio (listagem)
    - /portfolio/:id (página de detalhe)
    - Grid de "Other Projects" nos detalhes de outros projetos

--------------------------------------------------------------------------------
  COMO ADICIONAR NOVOS ARTIGOS
--------------------------------------------------------------------------------

  1. Abrir src/data/insights.ts
  2. Adicionar ao array `insights`:

     {
       id: 'meu-artigo',
       title: 'Título do Artigo',
       category: 'Mobility',
       date: 'June 2025',
       excerpt: 'Parágrafo de abertura / resumo...',
       readTime: '7 min read',
       featured: false,
       author: 'Prisma Research Team',
       content: `Parágrafo 1.

     Parágrafo 2.

     Parágrafo 3.`,   // opcional — separar com linha em branco
     }

  Categorias disponíveis:
    Mobility | Cities | Data Science | Spatial Intelligence | Markets

--------------------------------------------------------------------------------
  MAPA (LEAFLET)
--------------------------------------------------------------------------------

  Configurado em src/pages/Contact.tsx

  Localização padrão: Fortaleza, CE (-3.7327, -38.5270)

  Para alterar:
    const POSITION: [number, number] = [LATITUDE, LONGITUDE]

  Tiles: OpenStreetMap (gratuito, sem API key)
  CSS do Leaflet: carregado via CDN no index.html

--------------------------------------------------------------------------------
  BUILD E DEPLOY
--------------------------------------------------------------------------------

  npm run build     → gera /dist (arquivos estáticos)

  Compatível com qualquer host de arquivos estáticos:
    Netlify, Vercel, GitHub Pages, AWS S3, Nginx, Apache

  Para Netlify / Vercel com React Router:
    Configurar redirect: /* → /index.html (status 200)

  Netlify (_redirects):
    /*    /index.html   200

  Vercel (vercel.json):
    {
      "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
    }

--------------------------------------------------------------------------------
  EMPRESA
--------------------------------------------------------------------------------

  Nome          PRISMA
  Tagline       Empowering Places With Science
  Sede          Fortaleza, Ceará, Brasil
  Email         contact@prisma.com.br
  LinkedIn      linkedin.com/company/prisma

  Áreas de atuação:
    - Inteligência Espacial
    - Location Intelligence
    - Geospatial Analytics
    - Urban Analytics
    - Mobility Studies
    - Spatial Data Science
    - Decision Support Systems
    - Territorial Planning
    - Evidence-Based Consulting

  Público-alvo:
    Governos, agências públicas, operadores de infraestrutura, bancos,
    investidores, incorporadores, urbanistas, instituições de pesquisa,
    empresas privadas.

================================================================================
