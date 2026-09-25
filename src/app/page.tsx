import Link from 'next/link';
import { ArrowUpRight, Cpu, Download } from 'lucide-react';
import MotionContainer from '@/components/MotionContainer';

export default function HomePage() {
  return (
    <MotionContainer>
      {/* Massive Hero Section - Two Column Layout */}
      <section className="py-16 md:py-24 border-b border-border-subtle">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Core Welcome */}
          <div className="flex-1">
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] font-normal tracking-tight text-text-primary mb-8">
              My ideas <br className="hidden md:block"/> & works
            </h1>
            <p className="text-xl md:text-2xl text-text-primary font-sans leading-relaxed mb-10 max-w-lg">
              Exploring my pure works and engineering path in AI, retrieval architectures, and scalable ML workflows.
            </p>
            
            <div className="w-16 h-[1px] bg-text-primary mb-8 opacity-20"></div>

            <Link href="/projects" className="inline-block bg-[#191919] hover:bg-[#000000] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Engineering Works
            </Link>
          </div>

          {/* Right Column - SDK Graphic Hero */}
          <div className="flex-1 w-full group relative">
            <Link href="/projects/rag-sdk" className="block relative h-full w-full rounded-2xl overflow-hidden border border-border-subtle bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
              {/* Graphic Header Area */}
              <div className="bg-[#f0f9f0] p-8 md:p-12 h-64 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500 group-hover:bg-[#e4fae4]">
                <Cpu className="w-24 h-24 text-medium-green opacity-20 absolute -right-6 -bottom-6 transform group-hover:scale-110 transition-transform duration-700" />
                <h3 className="font-serif text-4xl font-bold text-text-primary text-center relative z-10 mb-2">
                  RAG Engine SDK
                </h3>
                <p className="text-sm font-mono text-medium-green uppercase tracking-wider relative z-10">
                  v1.0.0 Stable Release
                </p>
              </div>
              
              {/* Expanding Details Section */}
              <div className="p-8 bg-white border-t border-border-subtle">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-sans font-bold text-xl text-text-primary">Context-Grounded LLM Framework</h4>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors" />
                </div>
                
                {/* This paragraph stays visible */}
                <p className="text-text-muted font-sans leading-relaxed text-sm md:text-base">
                  Production-ready Python SDK for deterministic document retrieval. Features dynamic token chunking, FAISS vector indexing, and Reciprocal Rank Fusion (RRF).
                </p>

                {/* Dropdown / Hover Expansion Details */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="overflow-hidden">
                    <div className="pt-6 mt-6 border-t border-border-subtle/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="flex items-center space-x-2 text-xs font-mono text-text-muted">
                        <span className="bg-canvas px-2 py-1 rounded">Python</span>
                        <span className="bg-canvas px-2 py-1 rounded">85% Faithfulness</span>
                      </div>
                      <span className="inline-flex items-center space-x-2 text-sm font-medium text-medium-green">
                        <span>View Kit</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          </div>

        </div>
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
          <h3 className="font-serif text-2xl font-bold text-text-primary">Work Blogs</h3>
        </div>
        
        <div className="space-y-6">
          <article className="group">
            <Link href="/blog/building-production-rag-sdk" className="block">
              <span className="text-sm font-sans text-text-muted">Sep 25 · 6 min read</span>
              <h4 className="font-serif text-xl font-bold text-text-primary mt-1 group-hover:underline underline-offset-4">
                Lessons from Building a Python RAG SDK: Chunking Strategies and Context Dilution
              </h4>
            </Link>
          </article>
        </div>
      </section>
    </MotionContainer>
  );
}
