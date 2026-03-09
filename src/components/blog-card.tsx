"use client";

import type { BlogPost } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { scrollAnimationProps, hoverLift } from "@/lib/animations";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const categoryColors = {
  tech: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-800 hover:bg-blue-200"
  },
  essay: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-800 hover:bg-purple-200"
  },
  notes: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    badge: "bg-green-100 text-green-800 hover:bg-green-200"
  },
  life: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-800 hover:bg-orange-200"
  },
};

export function BlogCard({ post, index = 0 }: BlogCardProps) {
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
      {...scrollAnimationProps(index * 0.05)}
      whileHover={hoverLift}
    >
      <Link href={`/blog/${post.category}/${post.slug}`}>
        <Card
          className={`
            p-6 transition-all duration-300 cursor-pointer
            hover:shadow-lg border-slate-200
            ${colors.bg} hover:opacity-90
          `}
        >
          <div className="space-y-4">
            {/* Header: Category and Date */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className={colors.badge}>
                {post.category}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-slate-600">
                <Calendar className="h-3.5 w-3.5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-600">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`text-xl font-serif font-semibold ${colors.text} leading-tight`}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-slate-300 text-slate-600"
                  >
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 3 && (
                  <Badge
                    variant="outline"
                    className="text-xs border-slate-300 text-slate-600"
                  >
                    +{post.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}

            {/* Read More Link */}
            <div className="flex items-center gap-1 text-sm font-medium text-indigo-500">
              <span>Read more</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
