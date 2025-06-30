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
  title: "Sergio Cruz - Senior Engineering Leader | Product Strategy | Scaled Teams & Systems",
  description: "I help engineering teams deliver real product outcomes—and teach others how to do the same.",
  author: "Sergio Cruz",
  url: "https://sergio.io",
  
  // Social Media Links
  social: {
    twitter: "https://x.com/hashtagserg",
    github: "https://github.com/sergiocruz",
    linkedin: "https://linkedin.com/in/sergiorlcruz",
    email: "hi@sergio.io"
  },
  
  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Featured Work", href: "/featured-work" },
    { name: "Resume", href: "/resume" }
  ],
  
  // Site branding
  brand: {
    name: "sergio.io",
    tagline: "Senior Engineering Leader, Product Strategy, Scaled Teams & Systems"
  },

  // SEO
  defaultImage: "/og-image.jpg",
  
  // Footer
  footer: {
    description: "Senior engineering leader scaling teams, shaping systems, and shipping software people actually want to use.",
    copyright: "Sergio Cruz. All rights reserved."
  }
};