"use client";

import { BlogCategory } from "@/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: BlogCategory | 'all';
  onCategoryChange: (category: BlogCategory | 'all') => void;
}

const categories: (BlogCategory | 'all')[] = ['all', 'tech', 'essay', 'notes', 'life'];

const categoryLabels: Record<BlogCategory | 'all', string> = {
  all: 'All Posts',
  tech: 'Tech',
  essay: 'Essay',
  notes: 'Notes',
  life: 'Life',
};

const categoryColors: Record<BlogCategory | 'all', { bg: string; text: string; border: string }> = {
  all: {
    bg: 'bg-slate-100 hover:bg-slate-200',
    text: 'text-slate-700',
    border: 'border-slate-300',
  },
  tech: {
    bg: 'bg-blue-50 hover:bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
  essay: {
    bg: 'bg-purple-50 hover:bg-purple-100',
    text: 'text-purple-700',
    border: 'border-purple-200',
  },
  notes: {
    bg: 'bg-green-50 hover:bg-green-100',
    text: 'text-green-700',
    border: 'border-green-200',
  },
  life: {
    bg: 'bg-orange-50 hover:bg-orange-100',
    text: 'text-orange-700',
    border: 'border-orange-200',
  },
};

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const colors = categoryColors[category];

        return (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              colors.bg,
              colors.text,
              isSelected
                ? `border-2 ${colors.border} ring-2 ring-offset-1 ring-opacity-50`
                : `border border-transparent opacity-70 hover:opacity-100`
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {categoryLabels[category]}
          </motion.button>
        );
      })}
    </div>
  );
}
