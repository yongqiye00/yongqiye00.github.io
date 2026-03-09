import { getPostBySlug } from "@/lib/blog";
import { BlogPost } from "@/components/blog-post";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/layout";
import { featureConfig } from "@/config/features";

interface BlogPostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { category, slug } = await params;
  const post = await getPostBySlug(category, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
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

  const { category, slug } = await params;
  const post = await getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <BlogPost post={post} />
    </Layout>
  );
}
