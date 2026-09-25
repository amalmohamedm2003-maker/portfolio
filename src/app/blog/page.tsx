import { getAllPosts } from '@/lib/mdx';
import MotionContainer from '@/components/MotionContainer';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <MotionContainer>
      <header className="border-b border-border-subtle pb-8 mb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          <BookOpen className="w-4 h-4" />
          <span>Technical Writing</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Articles & Insights
        </h1>
        <p className="text-lg text-text-muted leading-relaxed">
          Deep dives into RAG architectures, NLP classifiers, and data science workflows.
        </p>
      </header>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 mb-2">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-200 group-hover:text-white mb-2 transition-colors">
                {post.title}
              </h2>
              <p className="text-text-muted font-sans leading-relaxed">
                {post.description}
              </p>
              <div className="mt-3 text-xs font-mono text-medium-green">
                Read Article →
              </div>
            </Link>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-text-muted italic">No articles published yet. Check back soon!</p>
        )}
      </div>
    </MotionContainer>
  );
}
