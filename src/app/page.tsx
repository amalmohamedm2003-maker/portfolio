import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import MotionContainer from '@/components/MotionContainer';

export default function HomePage() {
  return (
    <MotionContainer>
      {/* Massive Hero Section Matching Medium */}
      <section className="py-16 md:py-24 flex flex-col justify-center border-b border-border-subtle">
        <h1 className="font-serif text-7xl md:text-8xl lg:text-[100px] leading-[0.95] font-normal tracking-tight text-text-primary mb-8 max-w-4xl">
          Human <br className="hidden md:block"/> stories & ideas
        </h1>
        <p className="text-xl md:text-2xl text-text-primary font-sans leading-relaxed mb-10 max-w-2xl">
          A place to read, write, and deepen your understanding about AI, retrieval architectures, and scalable ML workflows.
        </p>
        <div>
          <Link href="/projects/rag-sdk" className="inline-block bg-[#191919] hover:bg-[#000000] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Start reading
          </Link>
        </div>
      </section>

      {/* Flagship Milestone: RAG Engine SDK */}
      <section className="py-12 border-b border-border-subtle">
        <Link href="/projects/rag-sdk" className="group block">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Modular RAG Engine & Developer SDK
          </h2>
          <p className="text-text-muted leading-relaxed mb-4 text-lg">
            An end-to-end framework built for predictable document retrieval and LLM context synthesis. Achieved 85% faithfulness score and 88% answer relevancy through structured data pipelines, FAISS vector retrieval, and CI/CD automation.
          </p>
          <div className="flex items-center space-x-2 text-sm font-sans text-text-muted">
            <span className="bg-border-subtle/50 px-2 py-1 rounded-full">Python</span>
            <span className="bg-border-subtle/50 px-2 py-1 rounded-full">FAISS</span>
            <span className="bg-border-subtle/50 px-2 py-1 rounded-full">Docker / AWS</span>
            <span>· 5 min read</span>
          </div>
        </Link>
      </section>

      {/* Second Milestone: CVSS BERT */}
      <section className="py-12 border-b border-border-subtle">
        <Link href="/projects/cvss-bert" className="group block">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-3">
            CVSS Severity Classification via Fine-Tuned BERT
          </h2>
          <p className="text-text-muted leading-relaxed mb-4 text-lg">
            Automated CVE vulnerability assessment converting raw text disclosures into Common Vulnerability Scoring System (CVSS) vectors. Addressed significant dataset imbalances using a stratified training framework, achieving up to 97.77% F1 Score.
          </p>
          <div className="flex items-center space-x-2 text-sm font-sans text-text-muted">
            <span className="bg-border-subtle/50 px-2 py-1 rounded-full">PyTorch</span>
            <span className="bg-border-subtle/50 px-2 py-1 rounded-full">BERT</span>
            <span>· Conference Publication</span>
          </div>
        </Link>
      </section>

      {/* Technical Publications / Recent Thoughts */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-serif text-2xl font-bold text-text-primary">Selected Writing</h3>
        </div>
        
        <div className="space-y-6">
          <article className="group">
            <Link href="/blog/building-production-rag-sdk" className="block">
              <span className="text-sm font-sans text-text-muted">Sep 25 · 6 min read</span>
              <h4 className="font-serif text-xl font-bold text-text-primary mt-1">
                Lessons from Building a Python RAG SDK: Chunking Strategies and Context Dilution
              </h4>
            </Link>
          </article>
        </div>
      </section>
    </MotionContainer>
  );
}
