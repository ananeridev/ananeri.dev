import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, BookOpen, ExternalLink } from 'lucide-react';
import { Profile } from './components/Profile';
import { Social } from './components/Social';
import { FeaturedBanner } from './components/FeaturedBanner';
import { Background } from './components/Background';
import { WorkWithMe } from './pages/WorkWithMe';
import { ContentPage } from './pages/ContentPage';
import configData from './data/config.json';
import type { ConfigData } from './types';

const iconMap: Record<string, React.ReactNode> = {
  youtube: <Youtube className="w-6 h-6 text-white" />,
  newsletter: <BookOpen className="w-6 h-6 text-white" />,
  linkedin: <Linkedin className="w-6 h-6 text-white" />,
  github: <Github className="w-6 h-6 text-white" />,
  external: <ExternalLink className="w-6 h-6 text-white" />,
};

function Home() {
  const config = configData as ConfigData;
  
  return (
    <div className="min-h-screen relative z-10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Profile
          name={config.profile.name}
          bio={config.profile.bio}
          avatarUrl={config.profile.avatarUrl}
          socialLinks={config.socialLinks}
        />

        {/* Featured Content - Aparece primeiro */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Featured Content
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {config.featuredContent.map((content, index) => (
              <FeaturedBanner
                key={index}
                title={content.title}
                imageUrl={content.imageUrl}
                url={content.url}
                description={content.description}
              />
            ))}
          </div>
        </section>

        {/* Main Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Main Links
          </h2>
          <div className="grid gap-4">
            {config.mainLinks.map((link, index) => (
              <Social
                key={index}
                name={link.name}
                icon={iconMap[link.icon] || iconMap.external}
                url={link.url}
                description={link.description}
              />
            ))}
          </div>
        </section>

        {/* Links para outras páginas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Mais Conteúdo
          </h2>
          <div className="grid gap-4">
            <Link
              to="/palestras"
              className="group flex items-center gap-4 p-6 bg-white border-2 border-black rounded-lg hover:bg-pink-50 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-black group-hover:bg-pink-500 rounded-lg transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black group-hover:text-pink-600 transition-colors">
                  Palestras
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Confira minhas palestras e apresentações
                </p>
              </div>
            </Link>
          </div>
        </section>

        <footer className="text-center pt-8 border-t-2 border-pink-200">
          <p className="text-gray-600">
            Feito com React + Vite + Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Inspirado em templates open-source
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative">
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/:pageId" element={<ContentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
