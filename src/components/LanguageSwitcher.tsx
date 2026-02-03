import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white border-2 border-black rounded-lg p-2 shadow-lg">
      <Globe className="w-4 h-4 text-gray-600" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-200 ${
          language === 'pt'
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        aria-label="Switch to Portuguese"
      >
        PT
      </button>
    </div>
  );
}
