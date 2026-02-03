import { useState } from 'react';
import { Youtube, BookOpen } from 'lucide-react';

interface FeaturedBannerProps {
  title: string;
  imageUrl: string;
  url: string;
  description?: string;
  type?: 'video' | 'newsletter';
}

export function FeaturedBanner({ title, imageUrl, url, description, type }: FeaturedBannerProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Determina o tipo baseado na URL se não fornecido
  const contentType = type || 
    (url.includes('youtube.com') || url.includes('youtu.be') ? 'video' : 'newsletter');

  // Ícone padrão baseado no tipo
  const DefaultIcon = contentType === 'video' ? Youtube : BookOpen;
  const defaultBgColor = contentType === 'video' ? 'bg-red-600' : 'bg-blue-600';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-lg border-2 border-black hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-48 md:h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {!imageError && imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className={`w-full h-full ${defaultBgColor} flex items-center justify-center`}>
            <DefaultIcon className="w-16 h-16 md:w-20 md:h-20 text-white opacity-50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </a>
  );
}
