// app/blog/[slug]/page.tsx
import { fetchPostBySlug, fetchPosts } from "@/utils/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
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
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <h1
          className="text-4xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <div className="relative h-96 mb-8">
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
