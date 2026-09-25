import { getAllPosts } from '@/lib/mdx';
import MotionContainer from '@/components/MotionContainer';
import Link from 'next/link';

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <MotionContainer>
      <header className="border-b border-border-subtle pb-8 mb-12 mt-8">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">
          Articles & Insights
        </h1>
        <p className="text-xl text-text-muted font-sans leading-relaxed max-w-2xl">
          Deep dives into RAG architectures, NLP classifiers, and data science workflows.
        </p>
      </header>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center space-x-2 text-sm font-sans text-text-muted mb-2">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-text-primary mb-3 group-hover:underline underline-offset-4">
                {post.title}
              </h2>
              <p className="text-lg text-text-muted font-sans leading-relaxed">
                {post.description}
              </p>
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
