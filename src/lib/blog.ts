import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, BlogCategory } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMetadata {
  title: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  excerpt: string;
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const categories: BlogCategory[] = ['tech', 'essay', 'notes', 'life'];
  const posts: BlogPost[] = [];

  for (const category of categories) {
    const categoryPath = path.join(BLOG_DIR, category);
    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const post = await getPostBySlug(category, slug);
      if (post) {
        posts.push(post);
      }
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by category and slug
 */
export async function getPostBySlug(category: string, slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(BLOG_DIR, category, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const metadata = data as PostMetadata;

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      category: metadata.category,
      tags: metadata.tags || [],
      excerpt: metadata.excerpt,
      content,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.error(`Error reading post ${category}/${slug}:`, error);
    return null;
  }
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category === category);
}

/**
 * Get all unique categories that have posts
 */
export async function getCategoriesWithPosts(): Promise<BlogCategory[]> {
  const posts = await getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories) as BlogCategory[];
}

/**
 * Search posts by query string (searches in title, excerpt, tags)
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Calculate reading time for content
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}

/**
 * Get all unique tags from all posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
