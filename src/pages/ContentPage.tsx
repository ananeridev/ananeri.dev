import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import pagesData from '../data/pages.json';
import type { PagesData, PageItem } from '../types';

export function ContentPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const page = pageId ? (pagesData as PagesData)[pageId] : null;

  if (!page) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Página não encontrada</h1>
            <p className="text-gray-700 mb-6">A página que você está procurando não existe.</p>
            <Link
              to="/"
              className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {page.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {page.description}
          </p>
        </div>

        <div className="space-y-6">
          {page.items?.map((item: PageItem, index: number) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-lg p-6 hover:border-pink-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
              
              {item.date && (
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                </div>
              )}
              
              {item.event && (
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span>{item.event}</span>
                </div>
              )}

              {item.description && (
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
              )}

              {item.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-4 flex-wrap">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-pink-500 transition-all duration-300"
                  >
                    Ver mais
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
                  >
                    GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {item.slidesUrl && (
                  <a
                    href={item.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Slides
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {item.videoUrl && (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    Vídeo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
