"use client";

import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/mdx/markdown-renderer";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

interface BlogPostProps {
  post: BlogPost;
}

const categoryColors = {
  tech: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-200"
  },
  essay: {
    bg: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-200"
  },
  notes: {
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-200"
  },
  life: {
    bg: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-200"
  },
};

export function BlogPost({ post }: BlogPostProps) {
  const colors = categoryColors[post.category];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={slideUp.initial}
      animate={slideUp.animate}
      transition={slideUp.transition}
      className="max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <Link href="/blog">
        <div className="flex items-center gap-2 text-slate-600 hover:text-indigo-500 mb-6 transition-colors cursor-pointer">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to all posts</span>
        </div>
      </Link>

      {/* Article Card */}
      <article className="bg-white rounded-lg border border-slate-200 p-8 md:p-12 shadow-sm">
        {/* Header */}
        <header className="mb-8 pb-8 border-b border-slate-200">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <Badge className={`${colors.bg} ${colors.text} border-none`}>
              {post.category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-slate-700 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Tag className="h-4 w-4 text-slate-500" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-sm border-slate-300 text-slate-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </motion.div>
  );
}
