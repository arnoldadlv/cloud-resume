// utils/wordpress.ts
import { WordPressPost } from "../types/wordpress";

const WORDPRESS_API_URL = "https://blog.arnolddelavega.com/index.php";

const getEndpointUrl = (
  endpoint: string,
  queryParams: Record<string, string | number> = {}
) => {
  const searchParams = new URLSearchParams({
    rest_route: `/wp/v2/${endpoint}`,
    ...queryParams,
  });
  return `${WORDPRESS_API_URL}?${searchParams.toString()}`;
};

export async function fetchPosts(
  page: number = 1,
  perPage: number = 10
): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      getEndpointUrl("posts", {
        page,
        per_page: perPage,
        _embed: 1,
      }),
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function fetchPostBySlug(slug: string): Promise<WordPressPost> {
  try {
    const response = await fetch(
      getEndpointUrl("posts", {
        slug,
        _embed: 1,
      }),
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();

    if (!posts.length) {
      throw new Error(`Post with slug "${slug}" not found`);
    }

    return posts[0];
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Failed to fetch post");
  }
}
