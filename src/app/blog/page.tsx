import type { Metadata } from "next";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { PostRow } from "@/components/cards/post-row";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { getPosts } from "@/lib/content/posts";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Working notes on software architecture, applied AI, and the decisions that make projects succeed or fail.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <PageHeader eyebrow="Notes" title="What we learned, written down.">
      {posts.length === 0 ? (
        <EmptyState title="Nothing published yet.">
          Add an .mdx file to <code>src/content/blog</code> to publish.
        </EmptyState>
      ) : (
        <Stagger className="mt-16 border-t border-line">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <PostRow post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </PageHeader>
  );
}