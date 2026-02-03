import { Linkedin, Youtube, Github, Mail, Twitter, BookOpen, ExternalLink } from 'lucide-react';

interface SocialIconProps {
  platform: string;
  url: string;
  size?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-full h-full" />,
  youtube: <Youtube className="w-full h-full" />,
  github: <Github className="w-full h-full" />,
  twitter: <Twitter className="w-full h-full" />,
  email: <Mail className="w-full h-full" />,
  newsletter: <BookOpen className="w-full h-full" />,
  default: <ExternalLink className="w-full h-full" />,
};

const colorMap: Record<string, string> = {
  linkedin: 'bg-[#0077b5] hover:bg-[#005885]',
  youtube: 'bg-[#FF0000] hover:bg-[#CC0000]',
  github: 'bg-[#181717] hover:bg-[#0d0d0d]',
  twitter: 'bg-[#1DA1F2] hover:bg-[#0d8bd9]',
  email: 'bg-[#EA4335] hover:bg-[#c5221f]',
  newsletter: 'bg-[#0077b5] hover:bg-[#005885]',
  default: 'bg-gray-600 hover:bg-gray-700',
};

export function SocialIcon({ platform, url, size = 32 }: SocialIconProps) {
  const platformKey = platform.toLowerCase().replace(/\s+/g, '');
  const icon = iconMap[platformKey] || iconMap.default;
  const colorClass = colorMap[platformKey] || colorMap.default;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colorClass} w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-3 group`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label={platform}
    >
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
    </a>
  );
}
