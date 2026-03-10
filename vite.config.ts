import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import youtubeRssPlugin from './plugins/youtube-rss-plugin';

export default defineConfig({
  plugins: [youtubeRssPlugin(), react()],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
