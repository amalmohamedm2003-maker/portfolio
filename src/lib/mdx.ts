import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_PATH)) return [];

  const files = fs.readdirSync(BLOG_PATH);
  return files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const filePath = path.join(BLOG_PATH, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const words = content.split(/\s+/g).length;
      const readingTime = `${Math.ceil(words / 200)} min read`;

      return {
        slug,
        title: data.title || 'Untitled Post',
        date: data.date || '2026-01-01',
        description: data.description || '',
        readingTime,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
