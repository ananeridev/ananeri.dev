import type { FeaturedContent, ConfigData } from '../types';
import configData from '../data/config.json';

/**
 * Retorna sempre o vídeo e newsletter mais recentes
 * 
 * Esta função garante que sempre apareça:
 * 1. O banner do vídeo mais recente do YouTube (sempre)
 * 2. O banner da newsletter mais recente do LinkedIn (se disponível)
 * 
 * PRIORIDADE: Se existir latestContent.latestVideoUrl ou latestNewsletterUrl,
 * esses links serão usados. Caso contrário, usa os links do featuredContent.
 * 
 * Se o LinkedIn não estiver disponível, mostra apenas o YouTube.
 */
export function getLatestFeaturedContent(
  dynamicVideo?: { url: string; thumbnail: string; title: string } | null,
  dynamicNewsletter?: { url: string } | null
): FeaturedContent[] {
  const config = configData as ConfigData;
  
  // Busca sempre o conteúdo de vídeo (YouTube)
  let videoContent = config.featuredContent.find(
    (content) => 
      content.title.toLowerCase().includes('vídeo') || 
      content.title.toLowerCase().includes('video') ||
      content.url.includes('youtube.com') ||
      content.url.includes('youtu.be')
  );
  
  // Busca sempre o conteúdo de newsletter (LinkedIn)
  let newsletterContent = config.featuredContent.find(
    (content) => 
      content.title.toLowerCase().includes('newsletter') ||
      content.title.toLowerCase().includes('artigo') ||
      content.url.includes('linkedin.com/newsletters')
  );
  
  const result: FeaturedContent[] = [];
  
  // PRIORIDADE 1: Vídeo dinâmico (da API)
  if (dynamicVideo && videoContent) {
    result.push({
      ...videoContent,
      url: dynamicVideo.url,
      imageUrl: dynamicVideo.thumbnail,
      title: dynamicVideo.title || videoContent.title,
      type: 'video'
    });
  }
  // PRIORIDADE 2: latestContent do config
  else if (config.latestContent?.latestVideoUrl && videoContent) {
    result.push({
      ...videoContent,
      url: config.latestContent.latestVideoUrl,
      type: 'video'
    });
  }
  // PRIORIDADE 3: Vídeo padrão do config
  else if (videoContent) {
    result.push({
      ...videoContent,
      type: videoContent.type || 'video'
    });
  }
  
  // Newsletter: só adiciona se tiver link válido (não mostra se não tiver)
  // PRIORIDADE 1: Newsletter dinâmica (se implementada no futuro)
  if (dynamicNewsletter && newsletterContent) {
    result.push({
      ...newsletterContent,
      url: dynamicNewsletter.url,
      type: 'newsletter'
    });
  }
  // PRIORIDADE 2: latestContent do config (só se tiver URL válida)
  else if (config.latestContent?.latestNewsletterUrl && 
           config.latestContent.latestNewsletterUrl.trim() !== '' && 
           newsletterContent) {
    result.push({
      ...newsletterContent,
      url: config.latestContent.latestNewsletterUrl,
      type: 'newsletter'
    });
  }
  // Não mostra newsletter se não tiver link válido
  
  // Se não encontrou nada, retorna pelo menos o vídeo padrão
  if (result.length === 0 && videoContent) {
    result.push({
      ...videoContent,
      type: 'video'
    });
  }
  
  return result;
}
