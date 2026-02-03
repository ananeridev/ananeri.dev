import { Code, Dumbbell, BookOpen, Cat, Dog, Flower2 } from 'lucide-react';

export function Background() {
  const icons = [
    { Icon: Code, x: '10%', y: '20%', delay: '0s' },
    { Icon: Flower2, x: '85%', y: '15%', delay: '1s' },
    { Icon: Dumbbell, x: '15%', y: '60%', delay: '2s' },
    { Icon: Cat, x: '80%', y: '55%', delay: '1.5s' },
    { Icon: Dog, x: '50%', y: '10%', delay: '0.5s' },
    { Icon: BookOpen, x: '90%', y: '70%', delay: '2.5s' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Textura de fundo */}
      <div className="absolute inset-0 opacity-5 text-black">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Profundidade em pink mais escuro na base */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-pink-400/50 via-pink-200/0 to-transparent" />

      {/* Detalhes sutis em preto (bordinhas e círculos suaves) */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-black/5" />
      <div className="absolute -bottom-24 right-10 w-40 h-40 rounded-full border border-black/10" />

      {/* Ícones sutis animados */}
      {icons.map(({ Icon, x, y, delay }, index) => (
        <div
          key={index}
          className="absolute opacity-10"
          style={{
            left: x,
            top: y,
            animation: `float 20s infinite ease-in-out`,
            animationDelay: delay,
          }}
        >
          <Icon className="w-16 h-16 md:w-24 md:h-24 text-pink-500" />
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-15px, 15px) rotate(-5deg);
          }
          75% {
            transform: translate(10px, 10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}
