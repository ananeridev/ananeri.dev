import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function WorkWithMe() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t('workWithMe.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {t('workWithMe.description')}
          </p>
        </div>

        <div className="bg-white border-2 border-black rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            {t('workWithMe.mediaKit')}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t('workWithMe.mediaKitDescription')}
          </p>
          <a
            href="https://beacons.ai/ananeridev/mediakit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t('workWithMe.accessMediaKit')}
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="bg-white border-2 border-black rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            {t('workWithMe.collaborationOpportunities')}
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>{t('workWithMe.opportunities.speeches')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>{t('workWithMe.opportunities.partnerships')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>{t('workWithMe.opportunities.consulting')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>{t('workWithMe.opportunities.brand')}</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            {t('common.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
