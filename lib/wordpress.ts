// lib/wordpress.ts
import { WordPressPost } from "@/types/wordpress";

const WORDPRESS_API_URL = "https://blog.arnolddelavega.com/wp-json/wp/v2";

export async function getAllPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?_embed&per_page=100`,
      {
        next: {
          revalidate: 60, //revalidates list of posts every 60 seconds
        },
      }
    );
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
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      {
        next: {
          revalidate: 3600, //refreshes individual posts every hour
        },
      }
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
