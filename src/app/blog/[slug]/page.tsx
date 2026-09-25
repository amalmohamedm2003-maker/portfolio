import { getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import MotionContainer from '@/components/MotionContainer';
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
      <article>
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl text-text-muted leading-relaxed font-sans mb-8">
              {post.description}
            </p>
          )}
          
          <div className="flex items-center space-x-4 border-b border-t border-border-subtle py-4">
            <div className="w-10 h-10 rounded-full bg-[#191919] flex items-center justify-center font-serif text-white text-lg">
              A
            </div>
            <div>
              <div className="font-sans text-sm font-medium text-text-primary">Amal Mohamed M</div>
              <div className="flex items-center space-x-2 text-sm font-sans text-text-muted">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Medium Typography Reading Section */}
        <div className="prose prose-neutral prose-lg lg:prose-xl max-w-none font-serif leading-relaxed">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </MotionContainer>
  );
}
