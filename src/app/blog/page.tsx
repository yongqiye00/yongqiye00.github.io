import { getAllPosts } from "@/lib/blog";
import type { BlogPost } from "@/types";
import { BlogFilteredList } from "@/components/blog-filtered-list";
import Layout from "@/components/layout/layout";
import { featureConfig } from "@/config/features";

export default async function BlogPage() {
  // Feature check
  if (!featureConfig.blog) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <h1 className="text-3xl font-serif text-slate-900 mb-4">
              Blog Coming Soon
            </h1>
            <p className="text-slate-600">
              This feature is currently disabled. Check back later!
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  const allPosts = await getAllPosts();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
          Blog
        </h1>
        <p className="text-lg text-slate-700">
          Thoughts, tutorials, and notes on technology, research, and life.
        </p>
      </div>

      {/* Blog Filtered List */}
      <BlogFilteredList posts={allPosts} />
      </div>
    </Layout>
  );
}
