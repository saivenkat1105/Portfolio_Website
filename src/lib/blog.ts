import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getBlogPostContent(slug: string): string {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return "_No content found for this article._";
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  // Strip frontmatter if present, return body only
  const { content } = matter(raw);
  return content;
}
