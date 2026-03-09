/**
 * Calculate estimated reading time for a blog post
 * Based on average reading speed of 200-250 words per minute
 */

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}
