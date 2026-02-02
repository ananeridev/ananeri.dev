import { Avatar } from './Avatar';
import { SocialIcon } from './SocialIcon';
import type { SocialLink } from '../types';

export interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl?: string;
  socialLinks?: SocialLink[];
}

export function Profile({ name, bio, avatarUrl, socialLinks = [] }: ProfileProps) {
  return (
    <div className="text-center mb-12 animate-fade-in">
      {avatarUrl && <Avatar avatarUrl={avatarUrl} alt={name} />}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        {name}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
        {bio}
      </p>
      {socialLinks.length > 0 && (
        <div className="flex justify-center gap-3 flex-wrap">
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={index}
              platform={link.platform}
              url={link.url}
              size={36}
            />
          ))}
        </div>
      )}
    </div>
  );
}
