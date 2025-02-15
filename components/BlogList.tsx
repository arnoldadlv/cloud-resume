// components/BlogList.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WordPressPost } from "@/types/wordpress";

interface BlogListProps {
  posts: WordPressPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex flex-col md:flex-row gap-6 border-b pb-12"
        >
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <div className="md:w-1/3">
              <div className="relative h-48 md:h-full">
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>
                <span
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Published on: {new Date(post.date).toLocaleDateString()}
            </p>
            <div
              className="text-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Read more
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
