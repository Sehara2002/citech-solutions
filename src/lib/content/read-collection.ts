import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "src", "content");

/**
 * Reads one MDX directory into plain objects. The only place the
 * filesystem is touched — swap this for a DB client and the collection
 * modules above it don't change.
 */
export async function readCollection<T>(dir: string): Promise<T[]> {
  const full = path.join(ROOT, dir);
  let files: string[];

  try {
    files = await fs.readdir(full);
  } catch {
    return []; // An empty collection is not an error.
  }

  const items = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(full, file), "utf8");
        const { data, content } = matter(raw);
        return { ...data, slug: file.replace(/\.mdx$/, ""), body: content };
      }),
  );

  return items as T[];
}

export const byNewest = (a: { publishedAt: string }, b: { publishedAt: string }) =>
  b.publishedAt.localeCompare(a.publishedAt);