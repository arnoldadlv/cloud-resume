// app/blog/[slug]/page.tsx
import { fetchPostBySlug, fetchPosts } from "@/utils/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const posts = await fetchPosts(1, 100);
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  try {
    const post = await fetchPostBySlug(params.slug);
    return {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160),
    };
  } catch {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found",
    };
  }
}

export default async function BlogPost({ params }: BlogPostParams) {
  try {
    const post = await fetchPostBySlug(params.slug);

    return (
      <>
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="text-gray-600">
            Published on{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </header>

        {/* Featured Image */}
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <div className="relative h-96 md:h-[500px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:shadow-lg prose-pre:bg-gray-800 prose-pre:text-gray-100 prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:rounded prose-code:px-1"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}
``