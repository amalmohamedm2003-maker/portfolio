import Link from 'next/link';
import { ArrowUpRight, Cpu, ShieldCheck } from 'lucide-react';
import MotionContainer from '@/components/MotionContainer';

export default function HomePage() {
  return (
    <MotionContainer>
      {/* Editorial Profile Header */}
      <section className="border-b border-border-subtle pb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Amal Mohamed M
        </h1>
        <p className="text-xl text-text-muted font-sans leading-relaxed mb-6">
          Aspiring AI/ML Engineer & Data Scientist specializing in retrieval architectures, applied NLP, and scalable ML workflows.
        </p>
        <div className="flex flex-col space-y-2 text-sm font-mono text-neutral-400">
          <span>🎓 B.Tech Computer Science, Ahalia School of Engineering (2021-2025)</span>
          <span>💼 Data Scientist Intern at Techolas Technologies</span>
        </div>
      </section>

      {/* Flagship Milestone: RAG Engine SDK */}
      <section className="py-12 border-b border-border-subtle">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-medium-green mb-3">
          <Cpu className="w-4 h-4" />
          <span>Core Engineering Focus · SDK Kit</span>
        </div>

        <Link href="/projects/rag-sdk" className="group block">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:underline underline-offset-4 decoration-1 decoration-neutral-500 mb-3 flex items-center justify-between">
            <span>Modular RAG Engine & Developer SDK</span>
            <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h2>
          <p className="text-text-muted leading-relaxed mb-4 text-base">
            An end-to-end framework built for predictable document retrieval and LLM context synthesis. Achieved 85% faithfulness score and 88% answer relevancy through structured data pipelines, FAISS vector retrieval, and CI/CD automation.
          </p>
          <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400">
            <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">Python</span>
            <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">FAISS</span>
            <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">Docker / AWS</span>
            <span className="text-neutral-500">Read Architectural Breakdown →</span>
          </div>
        </Link>
      </section>

      {/* Second Milestone: CVSS BERT */}
      <section className="py-12 border-b border-border-subtle">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>Milestone 02 · NLP & Research</span>
        </div>

        <Link href="/projects/cvss-bert" className="group block">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:underline underline-offset-4 decoration-1 decoration-neutral-500 mb-3 flex items-center justify-between">
            <span>CVSS Severity Classification via Fine-Tuned BERT</span>
            <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h2>
          <p className="text-text-muted leading-relaxed mb-4 text-base">
            Automated CVE vulnerability assessment converting raw text disclosures into Common Vulnerability Scoring System (CVSS) vectors. Addressed significant dataset imbalances using a stratified training framework, achieving up to 97.77% F1 Score.
          </p>
          <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400">
            <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">PyTorch</span>
            <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">BERT</span>
            <span className="px-2.5 py-1 bg-surface border border-border-subtle rounded-md">Conference Publication</span>
          </div>
        </Link>
      </section>

      {/* Technical Publications / Recent Thoughts */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-serif text-xl font-bold text-white">Selected Writing</h3>
          <Link href="/blog" className="text-xs font-mono text-text-muted hover:text-white">View all posts →</Link>
        </div>
        
        <div className="space-y-6">
          <article className="group">
            <Link href="/blog/building-production-rag-sdk" className="block">
              <span className="text-xs font-mono text-neutral-500">September 2026 · 6 min read</span>
              <h4 className="font-serif text-lg font-semibold text-neutral-200 group-hover:text-white mt-1">
                Lessons from Building a Python RAG SDK: Chunking Strategies and Context Dilution
              </h4>
            </Link>
          </article>
        </div>
      </section>
    </MotionContainer>
  );
}
