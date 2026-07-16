import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/content/types";

export function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid gap-3 border-b border-line py-8 md:grid-cols-[auto_1fr] md:gap-10"
    >
      <p className="annotation md:w-32">{formatDate(post.publishedAt)}</p>
      <div>
        <h2 className="display-md transition-colors group-hover:text-signal">
          {post.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-graphite">{post.summary}</p>
        <p className="annotation mt-3">{post.readingMinutes} min read</p>
      </div>
    </Link>
  );
}