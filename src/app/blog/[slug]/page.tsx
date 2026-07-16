import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FadeIn } from "@/components/motion/fade-in";
import { JsonLd } from "@/components/layout/json-ld";
import { Section } from "@/components/ui/section";
import { getPost, getPosts } from "@/lib/content/posts";
import { formatDate } from "@/lib/format";
import { articleSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.publishedAt,
      images: [`/api/og?title=${encodeURIComponent(post.title)}&kind=Note`],
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <Section flush>
      <FadeIn className="max-w-2xl">
        <Link href="/blog" className="link annotation">
          &larr; All notes
        </Link>
        <h1 className="display-lg mt-8">{post.title}</h1>
        <p className="annotation mt-6">
          {post.author} &nbsp;/&nbsp; {formatDate(post.publishedAt)} &nbsp;/&nbsp;{" "}
          {post.readingMinutes} min
        </p>
      </FadeIn>

      <article className="prose mt-12">
        <MDXRemote source={post.body} />
      </article>

      <JsonLd data={articleSchema(post)} />
    </Section>
  );
}