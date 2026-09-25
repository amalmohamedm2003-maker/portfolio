import MotionContainer from '@/components/MotionContainer';
import Link from 'next/link';
import { Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectsList() {
  return (
    <MotionContainer>
      <header className="border-b border-border-subtle pb-8 mb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          <Layers className="w-4 h-4" />
          <span>Engineering Works</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Projects & Milestones
        </h1>
        <p className="text-lg text-text-muted leading-relaxed">
          Selected works focusing on AI architectures, NLP, and scalable applications.
        </p>
      </header>

      <div className="space-y-12">
        <article className="group">
          <Link href="/projects/rag-sdk" className="block">
            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 mb-2">
              <span>Jan 2026 - Apr 2026</span>
              <span>·</span>
              <span className="text-medium-green">SDK Release</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-white group-hover:underline underline-offset-4 decoration-1 decoration-neutral-500 mb-2 flex items-center justify-between">
              <span>Modular RAG Engine & Developer SDK</span>
              <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h2>
            <p className="text-text-muted font-sans leading-relaxed mb-3">
              Production-ready framework for context-grounded LLM synthesis. Achieved 85% faithfulness score utilizing FAISS, Docker, and AWS.
            </p>
            <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400">
              <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">Python</span>
              <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">FastAPI</span>
            </div>
          </Link>
        </article>

        <article className="group">
          <Link href="/projects/cvss-bert" className="block">
            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 mb-2">
              <span>Aug 2025 - Jan 2026</span>
              <span>·</span>
              <span className="text-neutral-300">Conference Publication</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-white group-hover:underline underline-offset-4 decoration-1 decoration-neutral-500 mb-2 flex items-center justify-between">
              <span>CVSS Severity Classification via Fine-Tuned BERT</span>
              <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h2>
            <p className="text-text-muted font-sans leading-relaxed mb-3">
              Automated cyber threat scoring using Transformer language models. Engineered NLP pipeline for 45,676 NVD records with up to 97.77% F1 Score.
            </p>
            <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400">
              <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">PyTorch</span>
              <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">BERT</span>
            </div>
          </Link>
        </article>
      </div>
    </MotionContainer>
  );
}
