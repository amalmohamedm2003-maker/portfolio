import MotionContainer from '@/components/MotionContainer';
import Link from 'next/link';

export default function ProjectsList() {
  return (
    <MotionContainer>
      <header className="border-b border-border-subtle pb-8 mb-12 mt-8">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">
          Engineering Works
        </h1>
        <p className="text-xl text-text-muted font-sans leading-relaxed max-w-2xl">
          Selected works focusing on AI architectures, NLP, and scalable applications.
        </p>
      </header>

      <div className="space-y-16">
        <article className="group">
          <Link href="/projects/rag-sdk" className="block">
            <div className="flex items-center space-x-2 text-sm font-sans text-text-muted mb-3">
              <span>Jan 2026 - Apr 2026</span>
              <span>·</span>
              <span className="text-text-primary font-medium">SDK Release</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-3 group-hover:underline underline-offset-4">
              Modular RAG Engine & Developer SDK
            </h2>
            <p className="text-lg text-text-muted font-sans leading-relaxed mb-4">
              Production-ready framework for context-grounded LLM synthesis. Achieved 85% faithfulness score utilizing FAISS, Docker, and AWS.
            </p>
            <div className="flex items-center space-x-2 text-sm font-sans text-text-muted">
              <span className="bg-border-subtle/50 px-2.5 py-1 rounded-full">Python</span>
              <span className="bg-border-subtle/50 px-2.5 py-1 rounded-full">FastAPI</span>
            </div>
          </Link>
        </article>

        <article className="group">
          <Link href="/projects/cvss-bert" className="block">
            <div className="flex items-center space-x-2 text-sm font-sans text-text-muted mb-3">
              <span>Aug 2025 - Jan 2026</span>
              <span>·</span>
              <span className="text-text-primary font-medium">Conference Publication</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-3 group-hover:underline underline-offset-4">
              CVSS Severity Classification via Fine-Tuned BERT
            </h2>
            <p className="text-lg text-text-muted font-sans leading-relaxed mb-4">
              Automated cyber threat scoring using Transformer language models. Engineered NLP pipeline for 45,676 NVD records with up to 97.77% F1 Score.
            </p>
            <div className="flex items-center space-x-2 text-sm font-sans text-text-muted">
              <span className="bg-border-subtle/50 px-2.5 py-1 rounded-full">PyTorch</span>
              <span className="bg-border-subtle/50 px-2.5 py-1 rounded-full">BERT</span>
            </div>
          </Link>
        </article>
      </div>
    </MotionContainer>
  );
}
