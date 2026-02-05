# Ana Neri - Personal Link Hub

Um website moderno e responsivo para compartilhar seus principais links, conteúdo em destaque, palestras e oportunidades de colaboração.

Este projeto foi inspirado no template [weslley.io](https://github.com/wellwelwel/weslley.io) e mantém a mesma licença AGPL-3.0.

## Características

- 🎨 Design moderno com cores personalizáveis (padrão: rosa, preto e branco)
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🌍 Suporte a múltiplos idiomas (Português e Inglês)
- 🎥 Integração com YouTube, LinkedIn Newsletter e Substack
- 📊 Seção de conteúdo em destaque
- 🎤 Página dedicada para palestras e apresentações
- 💼 Seção de media kit e links de indicação/patrocínios
- 🎨 Ícones animados de fundo personalizáveis
- 🚀 Deploy automático via GitHub Actions
- ⚡ Construído com React, Vite e Tailwind CSS

## Estrutura de Arquivos

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Avatar.tsx      # Componente de avatar do perfil
│   ├── Background.tsx  # Padrão de fundo animado
│   ├── Card.tsx        # Componente de cartão
│   ├── FeaturedBanner.tsx # Banner de conteúdo em destaque
│   ├── Footer.tsx      # Rodapé
│   ├── Header.tsx      # Cabeçalho/Menu
│   ├── LanguageSwitcher.tsx # Seletor de idioma
│   ├── Profile.tsx     # Seção de perfil principal
│   └── Social.tsx      # Ícones de redes sociais
├── pages/              # Páginas da aplicação
│   ├── ContentPage.tsx # Página de conteúdo dinâmico
│   └── Speeches.tsx    # Lista de palestras
├── data/               # Arquivos de configuração JSON
│   ├── config.json     # Configuração principal
│   ├── featured.json   # Conteúdo em destaque
│   ├── speeches.json   # Lista de palestras
│   └── pages.json      # Páginas customizáveis
├── i18n/               # Arquivos de tradução
│   └── locales/
│       ├── pt.json     # Português
│       └── en.json     # Inglês
├── contexts/           # Contextos React
│   └── LanguageContext.tsx # Gerenciamento de idioma
├── hooks/              # Hooks customizados
│   └── useLatestContent.ts # Hook para conteúdo mais recente
├── utils/              # Funções utilitárias
│   └── featuredContent.ts # Utilitários de conteúdo
└── types/              # Definições de tipos TypeScript
    └── index.ts        # Types da aplicação
```

## Como Personalizar

### 1. Informações do Perfil

Edite `src/data/config.json`:

```json
{
  "profile": {
    "name": "Seu Nome",
    "bio": "Sua bio aqui",
    "avatarUrl": "URL da sua foto"
  }
}
```

### 2. Links Principais

Adicione ou modifique os links em `src/data/config.json`:

```json
"mainLinks": [
  {
    "name": "YouTube",
    "url": "https://www.youtube.com/@SeuCanal",
    "description": "Descrição do link",
    "icon": "youtube"
  }
]
```

Ícones disponíveis:
- `youtube` - Ícone do YouTube
- `newsletter` - Ícone de newsletter em português (livro)
- `newsletter-en` - Ícone de newsletter em inglês (livro)
- `linkedin` - Ícone do LinkedIn
- `github` - Ícone do GitHub
- `external` - Ícone de link externo

### 3. Conteúdo em Destaque

Edite `src/data/featured.json`:

```json
{
  "featured": [
    {
      "id": 1,
      "title": "Título do Conteúdo",
      "description": "Descrição",
      "image": "URL da imagem",
      "link": "URL do conteúdo",
      "type": "video" ou "newsletter",
      "date": "2024-01-15"
    }
  ]
}
```

### 4. Palestras e Apresentações

Edite `src/data/speeches.json` para adicionar suas palestras:

```json
{
  "speeches": [
    {
      "id": "id-unico",
      "title": "Título da Palestra",
      "event": "Nome do Evento",
      "date": "2024-03-15",
      "description": "Descrição da palestra",
      "videoUrl": "Link do vídeo (opcional)",
      "slidesUrl": "Link dos slides (opcional)",
      "githubUrl": "Link do GitHub (opcional)",
      "imageUrl": "URL da imagem"
    }
  ]
}
```

**Campos disponíveis:**
- `id`: Identificador único (string)
- `title`: Título da palestra (string)
- `event`: Nome do evento/conferência (string)
- `date`: Data da palestra (ISO format: YYYY-MM-DD)
- `description`: Descrição da palestra (string)
- `imageUrl`: URL da imagem (obrigatório)
- `videoUrl`: URL do vídeo (opcional)
- `slidesUrl`: URL dos slides (opcional)
- `githubUrl`: URL do repositório GitHub (opcional)

As palestras aparecem automaticamente em `/palestras` ordenadas por data (mais recentes primeiro).

### 5. Ícones de Fundo

Para personalizar os ícones animados do fundo, edite `src/components/Background.tsx`:

```typescript
import { Code, Dumbbell, BookOpen, Cat, Dog, Flower2 } from 'lucide-react';

const icons = [
  { Icon: Code, x: '10%', y: '20%', delay: '0s' },
  { Icon: Flower2, x: '85%', y: '15%', delay: '1s' },
  // ... mais ícones
];
```

Ícones inclusos por padrão:
- `Code` - Ícone de código
- `Dumbbell` - Ícone de academia/fitness
- `BookOpen` - Ícone de leitura
- `Cat` - Ícone de gato
- `Dog` - Ícone de cachorro
- `Flower2` - Ícone com vibe de yoga/bem-estar

Veja todos os ícones disponíveis em [lucide.dev](https://lucide.dev)

### 6. Cores

Customize as cores editando as classes Tailwind. As cores padrão são:
- `pink-500` e `pink-600` - Cor primária
- `black` - Texto e bordas
- `white` - Fundo e contraste

### 7. Idiomas

Adicione ou modifique traduções em `src/i18n/locales/`:

**Portuguese (pt.json):**
```json
{
  "home": {
    "featuredContent": "Conteúdo em Destaque",
    "mainLinks": "Links Principais",
    "speeches": "Palestras"
  }
}
```

**English (en.json):**
```json
{
  "home": {
    "featuredContent": "Featured Content",
    "mainLinks": "Main Links",
    "speeches": "Speeches"
  }
}
```

## Desenvolvimento

### Instalação

```bash
npm install
```

### Rodar o servidor de desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

### Verificar tipos TypeScript

```bash
npm run typecheck
```

### Corrigir erros de linting

```bash
npm run lint:fix
```

## Deploy

### GitHub Pages (Configurado automaticamente! 🚀)

Este projeto já vem configurado com GitHub Actions para deploy automático no GitHub Pages!

**Como usar:**

1. Faça push do repositório para o GitHub
2. Vá em `Settings` → `Pages` do seu repositório
3. Em `Source`, selecione `GitHub Actions`
4. Pronto! A cada push na branch `main`, o site será atualizado automaticamente

**Atualizando conteúdo:**
- Edite `src/data/config.json` com seus novos links
- Commit e push para a branch `main`
- Aguarde 2-3 minutos para o deploy automático

**Configurando domínio personalizado:**
- O arquivo `public/CNAME` já está configurado para `ananeri.dev`
- Edite este arquivo se usar outro domínio
- Configure os DNS do seu provedor conforme instruções em `DEPLOY.md`

**Deploy manual (opcional):**
```bash
npm run deploy
```

### Outras Plataformas

#### Vercel
1. Conecte seu repositório ao Vercel
2. Selecione "Vite" como framework
3. Deploy automático acontecerá a cada push

#### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o comando de build: `npm run build`
3. Configure a pasta de deploy: `dist`

Para mais detalhes sobre deploy, consulte `DEPLOY.md`.

## Licença

Este projeto está sob licença **AGPL-3.0**.

Este site foi construído usando o template [weslley.io](https://github.com/wellwelwel/weslley.io) sob licença AGPL-3.0.

## Tecnologias

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## Dicas de Customização

### Adicionar novas páginas

1. Crie um arquivo em `src/pages/SuaPagina.tsx`
2. Importe em `src/App.tsx`
3. Adicione a rota:

```typescript
<Route path="/sua-rota" element={<SuaPagina />} />
```

### Integrar conteúdo dinâmico

Você pode integrar APIs externas (YouTube, LinkedIn, etc.) para buscar conteúdo dinâmico. Veja `src/hooks/useLatestContent.ts` como exemplo.

### Adicionar seções customizadas

1. Crie um novo arquivo JSON em `src/data/`
2. Importe nos componentes necessários
3. Exiba os dados usando componentes React

## Suporte

Para dúvidas ou sugestões, abra uma issue no repositório ou entre em contato através dos links de redes sociais.

---

Feito com React + Vite + Tailwind CSS
