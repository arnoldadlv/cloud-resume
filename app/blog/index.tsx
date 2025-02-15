// app/blog/page.tsx (not pages/blog/index.tsx if using App Router)
import { GetStaticProps } from "next";
import Link from "next/link";
import { WordPressPost, getAllPosts } from "@/lib/wordpress";

interface BlogPageProps {
  posts: WordPressPost[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title.rendered}
              </Link>
            </h2>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <div className="mt-4 text-sm">
              Published on{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  try {
    const posts = await getAllPosts();
    return {
      props: { posts },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: { posts: [] }, // Fallback for empty state
      revalidate: 10, // Shorter revalidation on error
    };
  }
};
