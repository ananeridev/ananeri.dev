import { Link } from 'react-router-dom';

interface SocialProps {
  name: string;
  icon: React.ReactNode;
  url: string;
  description?: string;
}

export function Social({ name, icon, url, description }: SocialProps) {
  const isExternal = url.startsWith('http://') || url.startsWith('https://');
  const className = "group flex items-center gap-4 p-6 bg-white border-2 border-black rounded-lg hover:bg-pink-50 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl";

  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black group-hover:bg-pink-500 rounded-lg transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-black group-hover:text-pink-600 transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}
        </div>
      </a>
    );
  }

  return (
    <Link
      to={url}
      className={className}
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black group-hover:bg-pink-500 rounded-lg transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-black group-hover:text-pink-600 transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
    </Link>
  );
}
