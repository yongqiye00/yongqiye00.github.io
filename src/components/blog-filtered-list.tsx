"use client";

import { useState, useMemo } from "react";
import { BlogCard } from "@/components/blog-card";
import { CategoryFilter } from "@/components/category-filter";
import type { BlogPost, BlogCategory } from "@/types";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

interface BlogFilteredListProps {
  posts: BlogPost[];
}

export function BlogFilteredList({ posts }: BlogFilteredListProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') {
      return posts;
    }
    return posts.filter(post => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <motion.div variants={itemVariants}>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">
            No posts found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
