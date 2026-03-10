import { useState, useEffect } from 'react';
import buildTimeVideo from 'virtual:latest-video';

interface LatestContentData {
  latestVideoUrl: string | null;
  latestVideoThumbnail: string | null;
  latestVideoTitle: string | null;
  latestNewsletterUrl: string | null;
  loading: boolean;
  error: string | null;
}

interface VideoInfo {
  url: string;
  videoId: string;
  title: string;
}

const YOUTUBE_CHANNEL_ID = 'UCBjoWT-P17Bl66D52RwqdGA';

function extractVideoId(link: string): string | null {
  if (link.includes('youtube.com/watch')) {
    return link.match(/[?&]v=([^&]+)/)?.[1] ?? null;
  }
  if (link.includes('youtu.be/')) {
    return link.split('youtu.be/')[1]?.split('?')[0] ?? null;
  }
  if (link.includes('youtube.com/v/')) {
    return link.split('youtube.com/v/')[1]?.split('?')[0] ?? null;
  }
  return null;
}

function parseVideoFromXml(xml: string): VideoInfo {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');

  const entries = doc.getElementsByTagNameNS('http://www.w3.org/2005/Atom', 'entry');
  if (!entries.length) throw new Error('XML: feed vazio');

  const entry = entries[0];
  const videoIdEl = entry.getElementsByTagNameNS(
    'http://www.youtube.com/xml/schemas/2015', 'videoId'
  )[0];
  const videoId = videoIdEl?.textContent?.trim();
  if (!videoId) throw new Error('XML: não encontrou videoId');

  const titleEl = entry.getElementsByTagNameNS('http://www.w3.org/2005/Atom', 'title')[0];
  const title = titleEl?.textContent?.trim() || 'Último Vídeo';

  return {
    url: `https://www.youtube.com/watch?v=${videoId}`,
    videoId,
    title,
  };
}

async function fetchViaRss2Json(): Promise<VideoInfo> {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
  const rss2JsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  const response = await fetch(rss2JsonUrl);
  if (!response.ok) throw new Error(`rss2json HTTP ${response.status}`);

  const data = await response.json();
  if (data.status === 'error') throw new Error(`rss2json: ${data.message}`);
  if (!data.items?.length) throw new Error('rss2json: feed vazio');

  const item = data.items[0];
  const link = item.link || item.url || '';
  const videoId = extractVideoId(link) || item.guid?.split(':').pop() || item.id || null;
  if (!videoId) throw new Error('rss2json: não encontrou videoId');

  return {
    url: `https://www.youtube.com/watch?v=${videoId}`,
    videoId,
    title: item.title || 'Último Vídeo',
  };
}

async function fetchViaCodetabs(): Promise<VideoInfo> {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
  const proxyUrl = `https://api.codetabs.com/v1/proxy/?quest=${rssUrl}`;

  const response = await fetch(proxyUrl);
  if (!response.ok) throw new Error(`codetabs HTTP ${response.status}`);

  return parseVideoFromXml(await response.text());
}

async function fetchViaAllOrigins(): Promise<VideoInfo> {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;

  const response = await fetch(proxyUrl);
  if (!response.ok) throw new Error(`allorigins HTTP ${response.status}`);

  return parseVideoFromXml(await response.text());
}

async function fetchDynamic(): Promise<VideoInfo> {
  const strategies = [fetchViaRss2Json, fetchViaCodetabs, fetchViaAllOrigins];

  for (let i = 0; i < strategies.length; i++) {
    try {
      return await strategies[i]();
    } catch (err) {
      console.warn(`Estratégia ${i + 1} falhou:`, err);
      if (i === strategies.length - 1) throw err;
    }
  }

  throw new Error('Todas as estratégias falharam');
}

function getBuildTimeVideo(): VideoInfo | null {
  if (!buildTimeVideo) return null;
  return {
    url: buildTimeVideo.url,
    videoId: buildTimeVideo.videoId,
    title: buildTimeVideo.title,
  };
}

export function useLatestContent(): LatestContentData {
  const fallback = getBuildTimeVideo();

  const [content, setContent] = useState<LatestContentData>({
    latestVideoUrl: fallback?.url ?? null,
    latestVideoThumbnail: fallback ? `https://img.youtube.com/vi/${fallback.videoId}/maxresdefault.jpg` : null,
    latestVideoTitle: fallback?.title ?? null,
    latestNewsletterUrl: null,
    loading: !fallback,
    error: null,
  });

  useEffect(() => {
    async function fetchLatest() {
      try {
        const video = await fetchDynamic();

        setContent(prev => ({
          ...prev,
          latestVideoUrl: video.url,
          latestVideoThumbnail: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
          latestVideoTitle: video.title,
          loading: false,
        }));
      } catch (error) {
        console.error('Erro ao buscar conteúdo do YouTube:', error);
        if (!fallback) {
          setContent(prev => ({
            ...prev,
            error: 'Não foi possível carregar o último vídeo',
            loading: false,
          }));
        }
      }
    }

    fetchLatest();
  }, []);

  return content;
}
