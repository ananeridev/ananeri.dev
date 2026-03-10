import type { Plugin } from 'vite';
import https from 'node:https';

const YOUTUBE_CHANNEL_ID = 'UCBjoWT-P17Bl66D52RwqdGA';
const VIRTUAL_MODULE_ID = 'virtual:latest-video';
const RESOLVED_ID = '\0' + VIRTUAL_MODULE_ID;

interface VideoData {
  url: string;
  videoId: string;
  title: string;
  thumbnail: string;
  fetchedAt: string;
}

function httpsGet(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        res.resume();
        return;
      }
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function fetchLatestVideo(): Promise<VideoData | null> {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

  try {
    const xml = await httpsGet(rssUrl);

    const videoIdMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = xml.match(/<entry>[\s\S]*?<title>([^<]+)<\/title>/);

    if (!videoIdMatch?.[1]) return null;

    const videoId = videoIdMatch[1];
    return {
      url: `https://www.youtube.com/watch?v=${videoId}`,
      videoId,
      title: titleMatch?.[1] ?? 'Último Vídeo',
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.warn('[youtube-rss-plugin] Falha ao buscar RSS no build:', err);
    return null;
  }
}

export default function youtubeRssPlugin(): Plugin {
  let videoData: VideoData | null = null;

  return {
    name: 'youtube-rss-plugin',

    async buildStart() {
      videoData = await fetchLatestVideo();
      if (videoData) {
        console.log(`[youtube-rss-plugin] Vídeo mais recente: "${videoData.title}" (${videoData.videoId})`);
      } else {
        console.warn('[youtube-rss-plugin] Não foi possível obter o vídeo mais recente no build');
      }
    },

    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_ID;
    },

    load(id) {
      if (id === RESOLVED_ID) {
        return `export default ${JSON.stringify(videoData)};`;
      }
    },
  };
}
