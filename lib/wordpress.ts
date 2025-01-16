// lib/wordpress.ts
import { WordPressPost } from "@/types/wordpress";

const WORDPRESS_API_URL = "https://blog.arnolddelavega.com/wp-json/wp/v2";

export async function getAllPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(
  slug: string
): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    const posts = await response.json();
    return posts[0] || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
export type { WordPressPost };

