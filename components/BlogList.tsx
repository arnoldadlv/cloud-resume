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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <div className="relative h-48">
              <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>
                <span
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </Link>
              <p className="text-sm text-gray-500">Slug: {post.slug}</p>
            </h2>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Read more
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
