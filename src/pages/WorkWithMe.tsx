import { ExternalLink } from 'lucide-react';

export function WorkWithMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 relative">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Work with me
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Conheça meu media kit e descubra oportunidades de colaboração
          </p>
        </div>

        <div className="bg-white border-2 border-black rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Media Kit
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Acesse meu media kit completo com informações sobre mim, estatísticas,
            formatos de conteúdo disponíveis e muito mais.
          </p>
          <a
            href="https://beacons.ai/ananeridev/mediakit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Acessar Media Kit
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="bg-white border-2 border-black rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Oportunidades de Colaboração
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>Palestras e workshops</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>Parcerias de conteúdo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>Consultoria técnica</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold">•</span>
              <span>Brand partnerships</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
}
