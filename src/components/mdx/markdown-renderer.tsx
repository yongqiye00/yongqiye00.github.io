"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface MarkdownRendererProps {
  content: string;
}

// YouTube embed component
const YouTubeEmbed = ({ id }: { id: string }) => (
  <div className="my-6 aspect-video rounded-lg overflow-hidden">
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      className="w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video"
    />
  </div>
);

// Vimeo embed component
const VimeoEmbed = ({ id }: { id: string }) => (
  <div className="my-6 aspect-video rounded-lg overflow-hidden">
    <iframe
      src={`https://player.vimeo.com/video/${id}`}
      className="w-full h-full"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Vimeo video"
    />
  </div>
);

// Parse custom video syntax from content
function parseVideoEmbeds(content: string): { processedContent: string; videoMap: Map<string, { type: 'youtube' | 'vimeo'; id: string }> } {
  const videoMap = new Map<string, { type: 'youtube' | 'vimeo'; id: string }>();
  let processedContent = content;
  let videoIndex = 0;

  // Parse :::youtube video_id::: syntax
  processedContent = processedContent.replace(/:::youtube\s+([a-zA-Z0-9_-]+)\s*:::/g, (match, id) => {
    const placeholder = `__VIDEO_EMBED_${videoIndex}__`;
    videoMap.set(placeholder, { type: 'youtube', id });
    videoIndex++;
    return placeholder;
  });

  // Parse :::vimeo video_id::: syntax
  processedContent = processedContent.replace(/:::vimeo\s+([a-zA-Z0-9_-]+)\s*:::/g, (match, id) => {
    const placeholder = `__VIDEO_EMBED_${videoIndex}__`;
    videoMap.set(placeholder, { type: 'vimeo', id });
    videoIndex++;
    return placeholder;
  });

  return { processedContent, videoMap };
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { processedContent, videoMap } = parseVideoEmbeds(content);

  return (
    <div className="markdown prose prose-slate max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-slate-800" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-800" {...props} />
          ),
          p: ({ node, children, ...props }) => {
            // Check if this paragraph contains a video embed placeholder
            const text = children?.toString() || '';
            if (videoMap.has(text)) {
              const video = videoMap.get(text)!;
              if (video.type === 'youtube') {
                return <YouTubeEmbed id={video.id} />;
              }
              return <VimeoEmbed id={video.id} />;
            }
            return <p className="mb-4 leading-relaxed text-slate-700" {...props}>{children}</p>;
          },
          a: ({ node, ...props }) => (
            <a
              className="text-indigo-600 hover:text-indigo-800 underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-slate-700" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-700" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-4" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-indigo-300 pl-4 py-2 my-4 bg-indigo-50/50 italic text-slate-700"
              {...props}
            />
          ),
          code: ({ node, className, children, ...props }) => {
            // Inline code doesn't have className (for syntax highlighting)
            const isInline = !className || className === '';
            if (isInline) {
              return (
                <code
                  className="bg-slate-100 text-pink-600 px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className={className}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ node, ...props }) => (
            <div className="my-4">
              <pre
                className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm"
                {...props}
              />
            </div>
          ),
          table: ({ node, ...props }) => (
            <div className="my-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 border border-slate-200" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-slate-50" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-4 py-2 text-sm text-slate-700 border-t border-slate-200" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-6 border-slate-200" {...props} />
          ),
          img: ({ src, alt, ...props }) => {
            // For local images starting with /blog/images/, use Next.js Image component
            if (src?.startsWith('/blog/images/')) {
              return (
                <div className="my-6">
                  <Image
                    src={src}
                    alt={alt || ''}
                    width={800}
                    height={450}
                    className="rounded-lg"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                  {alt && <p className="text-sm text-slate-600 mt-2 text-center">{alt}</p>}
                </div>
              );
            }
            // Fallback for external images
            return (
              <img
                src={src}
                alt={alt}
                className="rounded-lg my-4 max-w-full h-auto"
                loading="lazy"
                {...props}
              />
            );
          },
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-slate-900" {...props} />
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
