export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
}

export interface FooterInfo {
  description: string;
  copyright: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  social: SocialLinks;
  navigation: NavigationItem[];
  brand: BrandInfo;
  defaultImage: string;
  footer: FooterInfo;
}

export const SITE: SiteConfig = {
  title:
    'Sergio Cruz - Senior Director of Software Engineering | Product Engineering & Partner Integrations',
  description:
    'Senior Director of Software Engineering at Ramsey Solutions. I lead engineering for revenue-critical products and teach on Pluralsight.',
  author: 'Sergio Cruz',
  url: 'https://sergio.io',

  // Social Media Links
  social: {
    twitter: 'https://x.com/hashtagserg',
    github: 'https://github.com/sergiocruz',
    linkedin: 'https://linkedin.com/in/sergiorlcruz',
    email: 'hi@sergio.io',
  },

  // Navigation
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Featured Work', href: '/featured-work' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ],

  // Site branding
  brand: {
    name: 'sergio.io',
    tagline: 'Senior Director of Software Engineering',
  },

  // SEO
  defaultImage: '/images/sergiocruz-avatar.jpg',

  // Footer
  footer: {
    description:
      'Senior Director of Software Engineering at Ramsey Solutions and Pluralsight author.',
    copyright: 'Sergio Cruz. All rights reserved.',
  },
};
