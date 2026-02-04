import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function WorkWithMe() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-16">
        <div className="text-center mb-10">
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

        {/* Links de indicação / patrocinados */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Links de indicação
          </h2>

          <div className="space-y-4">
            {/* Card CODECON */}
            <a
              href="https://devleaders.com.br/codecon" 
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border-2 border-white bg-neutral-900 text-white px-6 py-4 flex items-center gap-4 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-sm font-bold text-black border border-neutral-700">
                DVLPR
              </div>
              <div className="flex-1 text-left">
                <p className="text-lg font-semibold tracking-wide">
                  15$ OFF NA LOJA DA CODECON
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-300 mt-1">
                  CUPOM: ANANERI15
                </p>
              </div>
            </a>

            {/* Card itens de setup */}
            <a
              href="https://www.amazon.com.br/shop/anabneri" 
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border-2 border-white bg-neutral-900 text-white px-6 py-4 flex items-center justify-center text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              Itens do meu setup
            </a>
          </div>
        </section>

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
