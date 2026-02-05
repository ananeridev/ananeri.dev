# Personal Link Hub

My personal site! Finally LOL

Inspired by [weslley.io](https://github.com/wellwelwel/weslley.io) - AGPL-3.0 License

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

## 🔄 Automatic Updates

**Update your content in seconds!**

1. Edit `src/data/config.json` with your new links
2. Commit and push to `main` branch
3. Wait 2-3 minutes → Your site is live! ✨

No need to rebuild or redeploy manually. GitHub Actions handles everything automatically.

## Deploy

### GitHub Pages (Pre-configured)

1. Push to GitHub
2. Go to `Settings` → `Pages`
3. Select Source: `GitHub Actions`
4. Done! Every push to `main` deploys automatically

Edit `public/CNAME` to use a custom domain.

### Other Platforms

- **Vercel:** Connect repository → Auto-deploy
- **Netlify:** Build: `npm run build`, Output: `dist`

## Configuration

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

Built with React + Vite + Tailwind CSS
