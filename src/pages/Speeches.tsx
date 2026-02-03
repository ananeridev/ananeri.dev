import { Link } from 'react-router-dom';
import { ExternalLink, Github, Presentation } from 'lucide-react';
import speechesData from '../data/speeches.json';
import { useLanguage } from '../contexts/LanguageContext';

interface Speech {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export function Speeches() {
  const { language } = useLanguage();
  const speeches: Speech[] = speechesData.speeches;

  const sortedSpeeches = [...speeches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="flex-1 relative z-10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          {language === 'pt' ? 'Voltar para a página inicial' : 'Back to home'}
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 flex items-center gap-3">
            <Presentation className="w-10 h-10 text-pink-600" />
            {language === 'pt' ? 'Minhas Palestras' : 'My Speeches'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'pt'
              ? 'Confira todas as minhas apresentações e palestras em conferências e eventos'
              : 'Check out all my presentations and speeches at conferences and events'}
          </p>
        </div>

        <div className="space-y-8">
          {sortedSpeeches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                {language === 'pt' ? 'Nenhuma palestra registrada ainda.' : 'No speeches registered yet.'}
              </p>
            </div>
          ) : (
            sortedSpeeches.map((speech) => (
              <article
                key={speech.id}
                className="overflow-hidden rounded-lg border-2 border-black hover:border-pink-500 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className={`grid gap-0 ${speech.imageUrl ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>
                  {speech.imageUrl && (
                    <div className="md:col-span-1 h-48 md:h-auto overflow-hidden">
                      <img
                        src={speech.imageUrl}
                        alt={speech.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className={`${speech.imageUrl ? 'md:col-span-2' : 'md:col-span-1'} p-6 flex flex-col justify-between`}>
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="text-2xl font-bold text-black flex-1">{speech.title}</h2>
                        <span className="text-xs font-semibold bg-pink-500 text-white px-3 py-1 rounded-full whitespace-nowrap">
                          {new Date(speech.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-pink-600 mb-3">{speech.event}</p>
                      <p className="text-gray-700 mb-4">{speech.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                      {speech.videoUrl && (
                        <a
                          href={speech.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {language === 'pt' ? 'Vídeo' : 'Video'}
                        </a>
                      )}
                      {speech.slidesUrl && (
                        <a
                          href={speech.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                        >
                          <Presentation className="w-4 h-4" />
                          {language === 'pt' ? 'Slides' : 'Slides'}
                        </a>
                      )}
                      {speech.githubUrl && (
                        <a
                          href={speech.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
