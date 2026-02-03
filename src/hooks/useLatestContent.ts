import { useState, useEffect } from 'react';

interface LatestContentData {
  latestVideoUrl: string | null;
  latestVideoThumbnail: string | null;
  latestVideoTitle: string | null;
  latestNewsletterUrl: string | null;
  loading: boolean;
  error: string | null;
}

const YOUTUBE_CHANNEL_ID = 'UCBjoWT-P17Bl66D52RwqdGA';

export function useLatestContent(): LatestContentData {
  const [content, setContent] = useState<LatestContentData>({
    latestVideoUrl: null,
    latestVideoThumbnail: null,
    latestVideoTitle: null,
    latestNewsletterUrl: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchLatest() {
      try {
        // Busca último vídeo do YouTube via RSS
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
        const rss2JsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(rss2JsonUrl);
        
        if (!response.ok) {
          throw new Error('Erro ao buscar RSS do YouTube');
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          const latestVideo = data.items[0];
          
          // Extrai o ID do vídeo da URL (suporta múltiplos formatos)
          let videoId = null;
          const link = latestVideo.link || latestVideo.url || '';
          
          // Tenta diferentes formatos de URL do YouTube
          if (link.includes('youtube.com/watch')) {
            videoId = link.match(/[?&]v=([^&]+)/)?.[1];
          } else if (link.includes('youtu.be/')) {
            videoId = link.split('youtu.be/')[1]?.split('?')[0];
          } else if (link.includes('youtube.com/v/')) {
            videoId = link.split('youtube.com/v/')[1]?.split('?')[0];
          } else if (latestVideo.guid) {
            // RSS feed geralmente tem o ID no guid
            videoId = latestVideo.guid.split(':').pop();
          }
          
          // Se não encontrou o ID, tenta extrair do título ou outras propriedades
          if (!videoId && latestVideo.id) {
            videoId = latestVideo.id;
          }
          
          // Gera thumbnail (YouTube sempre tem formato padrão)
          const thumbnail = videoId 
            ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            : null;
          
          setContent(prev => ({
            ...prev,
            latestVideoUrl: link,
            latestVideoThumbnail: thumbnail,
            latestVideoTitle: latestVideo.title || 'Último Vídeo',
            loading: false,
          }));
        } else {
          setContent(prev => ({ ...prev, loading: false }));
        }
      } catch (error) {
        console.error('Erro ao buscar conteúdo do YouTube:', error);
        setContent(prev => ({
          ...prev,
          error: 'Não foi possível carregar o último vídeo',
          loading: false,
        }));
      }
    }

    fetchLatest();
  }, []);

  return content;
}
