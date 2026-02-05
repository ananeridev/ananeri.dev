import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Github, Linkedin, Youtube, BookOpen, ExternalLink } from 'lucide-react';
import { Profile } from './components/Profile';
import { Social } from './components/Social';
import { FeaturedBanner } from './components/FeaturedBanner';
import { Background } from './components/Background';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ContentPage } from './pages/ContentPage';
import { Speeches } from './pages/Speeches';
import configData from './data/config.json';
import type { ConfigData } from './types';
import { getLatestFeaturedContent } from './utils/featuredContent';
import { useLatestContent } from './hooks/useLatestContent';
import { useLanguage } from './contexts/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  youtube: <Youtube className="w-6 h-6 text-white" />,
  newsletter: <BookOpen className="w-6 h-6 text-white" />,
  'newsletter-en': <BookOpen className="w-6 h-6 text-white" />,
  linkedin: <Linkedin className="w-6 h-6 text-white" />,
  github: <Github className="w-6 h-6 text-white" />,
  external: <ExternalLink className="w-6 h-6 text-white" />,
};

function Home() {
  const config = configData as ConfigData;
  const { latestVideoUrl, latestVideoThumbnail, latestVideoTitle, loading } = useLatestContent();
  const { t } = useLanguage();
  
  // Prepara dados dinâmicos do vídeo
  const dynamicVideo = latestVideoUrl && latestVideoThumbnail ? {
    url: latestVideoUrl,
    thumbnail: latestVideoThumbnail,
    title: latestVideoTitle || 'Último Vídeo'
  } : null;
  
  // Busca conteúdo com dados dinâmicos
  const latestContent = getLatestFeaturedContent(dynamicVideo, null);

  // Destaque específico para newsletter nos main links
  const newsletterLink = config.mainLinks.find((link) => link.icon === 'newsletter');
  const otherMainLinks = config.mainLinks.filter((link) => link.icon !== 'newsletter');

  const getMainLinkText = (icon: string) => {
    switch (icon) {
      case 'youtube':
        return {
          title: t('mainLinksDetails.youtube.title'),
          description: t('mainLinksDetails.youtube.description'),
        };
      case 'newsletter':
        return {
          title: t('mainLinksDetails.newsletter.title'),
          description: t('mainLinksDetails.newsletter.description'),
        };
      case 'newsletter-en':
        return {
          title: t('mainLinksDetails.newsletterEn.title'),
          description: t('mainLinksDetails.newsletterEn.description'),
        };
      case 'external':
        return {
          title: t('mainLinksDetails.workWithMe.title'),
          description: t('mainLinksDetails.workWithMe.description'),
        };
      default:
        return { title: '', description: '' };
    }
  };
  
  return (
    <div className="min-h-screen relative z-10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Profile
          name={config.profile.name}
          bio={t('profile.bio')}
          avatarUrl={config.profile.avatarUrl}
          socialLinks={config.socialLinks}
        />

        {/* Featured Content - Aparece primeiro - Sempre mostra vídeo e newsletter mais recentes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            {t('home.featuredContent')}
          </h2>
          <div className={`grid gap-6 ${latestContent.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
            {loading && latestContent.length === 0 ? (
              <div className="col-span-2 text-center py-8">
                <p className="text-gray-600">{t('common.loading')}</p>
              </div>
            ) : (
              latestContent.map((content, index) => (
                <FeaturedBanner
                  key={index}
                  title={content.title}
                  imageUrl={content.imageUrl}
                  url={content.url}
                  description={content.description}
                  type={content.type}
                />
              ))
            )}
          </div>
        </section>

        {/* Main Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            {t('home.mainLinks')}
          </h2>
          <div className="grid gap-4">
            {/* Newsletter em destaque */}
            {newsletterLink && (
              <div className="border-2 border-pink-500 rounded-xl p-1 bg-pink-50/60 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
                {(() => {
                  const texts = getMainLinkText(newsletterLink.icon);
                  return (
                <Social
                  name={texts.title || newsletterLink.name}
                  icon={iconMap[newsletterLink.icon] || iconMap.newsletter}
                  url={newsletterLink.url}
                  description={texts.description || newsletterLink.description}
                />
                  );
                })()}
              </div>
            )}

            {/* Demais links principais */}
            {otherMainLinks.map((link, index) => (
              (() => {
                const texts = getMainLinkText(link.icon);
                return (
                  <Social
                    key={index}
                    name={texts.title || link.name}
                    icon={iconMap[link.icon] || iconMap.external}
                    url={link.url}
                    description={texts.description || link.description}
                  />
                );
              })()
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            {t('home.mediaKit')}
          </h2>
          <a
            href="https://beacons.ai/ananeridev/mediakit"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-white border-2 border-black rounded-lg hover:bg-pink-50 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black group-hover:bg-pink-500 rounded-lg transition-colors duration-300">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black group-hover:text-pink-600 transition-colors">
                {t('home.mediaKitTitle')}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {t('home.mediaKitDescription')}
              </p>
            </div>
          </a>
        </section>

        {/* Links de indicação / patrocinados */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            {t('home.referralLinks')}
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
                  {t('home.codeconDiscount')}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-300 mt-1">
                  {t('home.codeconCoupon')}
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
              {t('home.setupItems')}
            </a>
          </div>
        </section>

        {/* Links para outras páginas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            {t('home.moreContent')}
          </h2>
          <div className="grid gap-4">
            <Link
              to="/speeches"
              className="group flex items-center gap-4 p-6 bg-white border-2 border-black rounded-lg hover:bg-pink-50 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black group-hover:bg-pink-500 rounded-lg transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black group-hover:text-pink-600 transition-colors">
                  {t('home.speeches')}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {t('home.speechesDescription')}
                </p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="text-center pt-8 border-t-2 border-pink-200">
          <p className="text-sm text-gray-600">
            {t('footer.byAna')}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {t('footer.creditWeslleyPrefix')}{' '}
            <a
              href="https://github.com/wellwelwel/weslley.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 underline"
            >
              weslley.io
            </a>{' '}
            {t('footer.creditWeslleySuffix')}
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-pink-400 relative">
        <Background />
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speeches" element={<Speeches />} />
          {/* rota antiga em PT redireciona para a nova URI em inglês */}
          <Route path="/palestras" element={<Navigate to="/speeches" replace />} />
          <Route path="/:pageId" element={<ContentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
