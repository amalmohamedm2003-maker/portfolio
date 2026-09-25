import { getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import MotionContainer from '@/components/MotionContainer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <MotionContainer>
      <Link href="/blog" className="inline-flex items-center text-xs font-mono text-text-muted hover:text-white mb-8">
        <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Articles
      </Link>

      <header className="border-b border-border-subtle pb-8 mb-8">
        <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400 mb-3">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-xl text-text-muted mt-4 leading-relaxed font-sans">{post.description}</p>
        )}
      </header>

      {/* Medium Typography Reading Section */}
      <article className="prose prose-invert prose-neutral max-w-none text-base md:text-lg leading-relaxed font-sans">
        <MDXRemote source={post.content} />
      </article>
    </MotionContainer>
  );
}
