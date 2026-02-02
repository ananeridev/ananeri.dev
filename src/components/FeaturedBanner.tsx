interface FeaturedBannerProps {
  title: string;
  imageUrl: string;
  url: string;
  description?: string;
}

export function FeaturedBanner({ title, imageUrl, url, description }: FeaturedBannerProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-lg border-2 border-black hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
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
