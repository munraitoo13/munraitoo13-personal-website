import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta } from "@/types/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const SAFE_SLUG_REGEX = /^[a-zA-Z0-9_-]+$/;

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parsePostFile(slug: string): BlogPost | null {
  if (!SAFE_SLUG_REGEX.test(slug)) return null;

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const published = data.published !== false;
  if (!published) return null;

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? "2026-01-01"),
    locale: String(data.locale ?? "en-US"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    featured: Boolean(data.featured),
    published,
    readingTimeMinutes: calculateReadingTime(content),
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .filter((slug) => parsePostFile(slug) !== null);
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => parsePostFile(slug))
    .filter((post): post is BlogPost => post !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  return parsePostFile(slug);
}
