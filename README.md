# Ana Neri Dev - Site Pessoal

🫰🏻 Este site é open-source e pode ser usado como template. Sinta-se livre para editar e adaptar de acordo com suas necessidades.

## 🚀 Como Usar

### Deploy e Domínio

Para fazer deploy e associar o domínio `ananeri.dev`, consulte o arquivo [DEPLOY.md](./DEPLOY.md) com instruções detalhadas.

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd ananeri.dev
```

2. Instale as dependências:
```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento e ver suas mudanças em tempo real:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build

Para criar uma build de produção:

```bash
npm run build
```

Para visualizar a build:

```bash
npm run preview
```

### Outros Comandos

```bash
# Verificar erros de tipo TypeScript
npm run typecheck

# Corrigir erros de lint automaticamente
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Avatar.tsx      # Componente de avatar redondo
│   ├── Background.tsx  # Fundo com textura dinâmica
│   ├── Card.tsx        # Card para links principais
│   ├── FeaturedBanner.tsx  # Banner para conteúdo em destaque
│   ├── Profile.tsx     # Perfil com avatar e redes sociais
│   ├── Social.tsx      # Link social principal
│   └── SocialIcon.tsx  # Ícone de rede social colorido
├── data/               # Arquivos de configuração JSON
│   ├── config.json     # Configuração principal (perfil, links, etc.)
│   └── pages.json      # Páginas editáveis (palestras, projetos, etc.)
├── pages/              # Páginas da aplicação
│   ├── WorkWithMe.tsx  # Página "Work with me"
│   └── ContentPage.tsx # Página dinâmica para conteúdo editável
├── App.tsx             # Componente principal com rotas
└── main.tsx            # Ponto de entrada
```

## ⚙️ Configuração

### Personalizar Perfil e Links

Edite o arquivo `src/data/config.json`:

```json
{
  "profile": {
    "name": "Seu Nome",
    "bio": "Sua biografia",
    "avatarUrl": "URL_DO_SEU_AVATAR"
  },
  "socialLinks": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/seu-perfil"
    }
  ],
  "mainLinks": [
    {
      "name": "YouTube",
      "url": "https://youtube.com/@seu-canal",
      "description": "Descrição do link",
      "icon": "youtube"
    }
  ],
  "featuredContent": [
    {
      "title": "Título do Conteúdo",
      "imageUrl": "URL_DA_IMAGEM",
      "url": "URL_DO_CONTEUDO",
      "description": "Descrição do conteúdo"
    }
  ]
}
```

### Adicionar/Editar Páginas de Conteúdo

Edite o arquivo `src/data/pages.json` para adicionar ou modificar páginas como palestras, projetos, etc.

**Exemplo - Adicionar uma nova página de palestras:**

```json
{
  "palestras": {
    "title": "Palestras",
    "description": "Minhas palestras e apresentações",
    "items": [
      {
        "title": "Título da Palestra",
        "date": "2024-01-15",
        "event": "Nome do Evento",
        "description": "Descrição da palestra",
        "slidesUrl": "https://example.com/slides",
        "videoUrl": "https://example.com/video"
      }
    ]
  }
}
```

**Exemplo - Adicionar uma página de projetos:**

```json
{
  "projetos": {
    "title": "Projetos",
    "description": "Meus projetos",
    "items": [
      {
        "title": "Nome do Projeto",
        "description": "Descrição do projeto",
        "url": "https://example.com/project",
        "githubUrl": "https://github.com/user/project",
        "technologies": ["React", "TypeScript"]
      }
    ]
  }
}
```

Para acessar essas páginas, adicione links no `config.json` ou crie links na página inicial no `App.tsx`:

```tsx
<Link to="/palestras">Palestras</Link>
<Link to="/projetos">Projetos</Link>
```

### Personalizar Cores e Estilo

As cores principais estão definidas usando Tailwind CSS. Você pode personalizar:

- **Cores principais**: Edite as classes no código (ex: `bg-pink-500`, `text-pink-600`)
- **Fundo**: Modifique o `Background.tsx` para alterar a textura e ícones
- **Fontes**: Configure no `tailwind.config.js`

### Adicionar Redes Sociais

1. Adicione o ícone no componente `SocialIcon.tsx` se necessário
2. Adicione a entrada em `config.json`:

```json
{
  "socialLinks": [
    {
      "platform": "NomeDaPlataforma",
      "url": "https://..."
    }
  ]
}
```

Os ícones suportados atualmente:
- LinkedIn
- YouTube
- GitHub
- Twitter
- Email
- Newsletter

## 🎨 Características

- ✅ **Responsivo**: Funciona perfeitamente em mobile e desktop
- ✅ **Editável via JSON**: Configure tudo sem tocar no código
- ✅ **Fundo dinâmico**: Textura com ícones sutis animados
- ✅ **Ícones coloridos**: Redes sociais com cores oficiais
- ✅ **Featured Content**: Destaque para conteúdo mais recente
- ✅ **Rotas dinâmicas**: Páginas editáveis via JSON
- ✅ **TypeScript**: Tipagem forte para melhor desenvolvimento

## 📝 Licença

Este projeto está sob a licença AGPL-3.0. Ao usar este template:

- Seu código também precisa estar open-source e sob a mesma licença
- Você pode mudar tudo, exceto a licença
- É importante mencionar este repositório no seu site

Exemplo de menção:
> Este site foi construído usando o template [ananeri.dev](https://github.com/seu-usuario/ananeri.dev)

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **React Router** - Roteamento
- **Lucide React** - Ícones

## 📚 Recursos Úteis

- [Documentação do React](https://react.dev)
- [Documentação do Tailwind CSS](https://tailwindcss.com)
- [Documentação do Vite](https://vitejs.dev)
- [Documentação do React Router](https://reactrouter.com)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através das redes sociais configuradas no site.

---

Feito com ❤️ usando React + Vite + Tailwind CSS
