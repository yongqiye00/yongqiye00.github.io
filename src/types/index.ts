export interface Profile {
  name: string;
  name_pronunciation?: string;
  first_name: string;
  last_name: string;
  role: string;
  organizations: Organization[];
  bio: string;
  interests: string[];
  email: string;
  github: string;
  linkedin?: string;
  twitter?: string;
  google_scholar?: string;
  resume_url?: string;
  stats?: {
    publications: string;
    citations: string;
    projects: string;
  };
  social_links?: {
    github?: string;
    scholar?: string;
  };
}

export interface Organization {
  name: string;
  url: string;
}

export interface Author {
  name: string;
  url?: string;
  is_highlight?: boolean;
  equal_contribution?: boolean;  // 共一作者标记
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  type: PublicationType;
  doi?: string;
  pdf_url?: string;
  code_url?: string;
  project_url?: string;
  image?: string;
  abstract: string;
  tags: string[];
  featured?: boolean;
  status?: 'published' | 'preprint' | 'in-press';
}

export type PublicationType = 'conference' | 'journal' | 'workshop' | 'thesis' | 'preprint';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'award' | 'talk' | 'news' | 'update';
  url?: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export type BlogCategory = 'tech' | 'essay' | 'notes' | 'life';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  excerpt: string;
  content: string;
  readingTime: number;
}