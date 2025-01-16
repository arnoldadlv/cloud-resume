// app/blog/page.tsx
import { fetchPosts } from "@/utils/wordpress";
import BlogList from "@/components/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Latest blog posts from our WordPress site",
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <BlogList posts={posts} />
    </div>
  );
}
