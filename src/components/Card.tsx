interface CardProps {
  name: string;
  icon: React.ReactNode;
  url: string;
  children: React.ReactNode;
}

export function Card({ name, icon, url, children }: CardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-white border-2 border-black rounded-lg hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-black group-hover:bg-pink-500 rounded-lg transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-black group-hover:text-pink-600 transition-colors">
          {name}
        </h3>
      </div>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </a>
  );
}
