import { byNewest, readCollection } from "./read-collection";
import type { Post } from "./types";

export async function getPosts(): Promise<Post[]> {
  const items = await readCollection<Post>("blog");
  return items.sort(byNewest);
}

export async function getPost(slug: string): Promise<Post | null> {
  const items = await getPosts();
  return items.find((item) => item.slug === slug) ?? null;
}