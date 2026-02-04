export interface ProfileConfig {
  name: string;
  avatarUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface MainLink {
  name: string;
  url: string;
  description: string;
  icon: string;
}

export interface FeaturedContent {
  title: string;
  imageUrl: string;
  url: string;
  description?: string;
  type?: 'video' | 'newsletter';
}

export interface LatestContent {
  latestVideoUrl?: string;
  latestNewsletterUrl?: string;
}

export interface ConfigData {
  profile: ProfileConfig;
  socialLinks: SocialLink[];
  mainLinks: MainLink[];
  featuredContent: FeaturedContent[];
  latestContent?: LatestContent;
}

export interface PageItem {
  title: string;
  date?: string;
  event?: string;
  description?: string;
  url?: string;
  githubUrl?: string;
  slidesUrl?: string;
  videoUrl?: string;
  technologies?: string[];
}

export interface Page {
  title: string;
  description: string;
  items: PageItem[];
}

export interface PagesData {
  [key: string]: Page;
}
