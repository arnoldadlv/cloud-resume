// app/blog/[slug]/page.tsx
import { fetchPostBySlug, fetchPosts } from "@/utils/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { title } from "@/components/primitives";

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
            className={title({ color: "violet" })}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="py-4 text-muted-foreground">
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
          className="prose prose-lg max-w-none
            prose-headings:text-foreground
            prose-headings:font-bold
            prose-p:text-muted-foreground
            prose-a:text-primary
            hover:prose-a:text-primary-600
            prose-img:rounded-xl
            prose-img:shadow-lg
            prose-pre:bg-accent
            prose-pre:text-accent-foreground
            prose-code:bg-accent
            prose-code:text-accent-foreground
            prose-code:rounded
            prose-code:px-1
			prose-ul:text-muted-foreground
    		prose-ol:text-muted-foreground
            dark:prose-headings:text-foreground
            dark:prose-p:text-muted-foreground
			dark:prose-li:text-muted-foreground
			dark:prose-ul:text-muted-foreground
			dark:prose-ol:text-muted-foreground
			dark:prose-strong:text-muted-foreground
            dark:prose-a:text-primary-400
            dark:hover:prose-a:text-primary-300
            dark:prose-pre:bg-muted
            dark:prose-code:bg-muted"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-sm font-medium
              bg-background text-foreground
              rounded-lg border border-border
              hover:bg-accent hover:text-accent-foreground
              transition-colors duration-200"
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
