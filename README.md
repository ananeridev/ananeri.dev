# Personal Link Hub

My personal site! Finally LOL

Inspired by [weslley.io](https://github.com/wellwelwel/weslley.io) - TKS man!

## Features

- 🎨 Modern & responsive design
- 🌍 Multi-language support (PT/EN)
- 🎥 YouTube, LinkedIn & Substack integration
- 🚀 **Automatic deployment via GitHub Actions**
- ⚡ Built with React + Vite + Tailwind CSS

## Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build
```

## Configuration that makes easy for me

**Profile, links & content:** Edit `src/data/config.json`

```json
{
  "profile": {
    "name": "Your Name",
    "avatarUrl": "/avatar.jpg"
  },
  "mainLinks": [
    {
      "name": "YouTube",
      "url": "https://youtube.com/@yourhandle",
      "icon": "youtube"
    }
  ]
}
```

**Presentations:** Edit `src/data/speeches.json`

**Translations:** Edit `src/i18n/locales/pt.json` and `en.json`

## Tech Stack

React 18 • TypeScript • Vite • Tailwind CSS • React Router • Lucide Icons

## License

AGPL-3.0

---

Built with React + Vite + Tailwind CSS (No purely CSS yet)
