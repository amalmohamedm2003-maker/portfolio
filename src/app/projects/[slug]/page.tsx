import { notFound } from 'next/navigation';
import MotionContainer from '@/components/MotionContainer';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';

const PROJECT_REGISTRY: Record<string, any> = {
  'rag-sdk': {
    title: 'Modular RAG Engine & Developer SDK',
    tagline: 'Production-ready framework for context-grounded LLM synthesis.',
    date: 'Jan 2026 - Apr 2026',
    status: 'Published SDK',
    github: 'https://github.com/amalmohamedm2003-maker',
    downloadable: true,
    content: `
### Background & Problem Statement
Off-the-shelf RAG scripts frequently fail in production due to static chunking failures, semantic noise injection, and complex dependencies. This SDK was architected to give developers modular, deterministic control over parsing, storage, and contextual retrieval.

### Architectural Pipeline
1. **Document Normalization Layer:** Handles multi-format ingestion (Markdown, PDF, TXT) with boundary-aware sliding window chunking.
2. **Dense & Sparse Embedding Interface:** FAISS-based vector retrieval and Sentence Transformers for high-quality embedding generation.
3. **Retrieval Synthesizer:** Cloud-ready LLM routing and grounded natural language response insights (achieving 85% faithfulness score and 88% answer relevancy).
4. **DevOps Integration:** CI/CD automation via GitHub Actions, Dockerized services, and AWS deployment workflows with safety-first cost controls.

### SDK Installation & Quickstart
\`\`\`bash
pip install amal-rag-engine
\`\`\`
\`\`\`python
from rag_engine import Pipeline, VectorIndex

index = VectorIndex.from_documents("./knowledge_base")
pipeline = Pipeline(index=index, top_k=4)
response = pipeline.query("Explain CVSS attack complexity metrics")
print(response.grounded_text)
\`\`\`
    `,
  },
  'cvss-bert': {
    title: 'CVSS Vulnerability Classifier via Fine-Tuned BERT',
    tagline: 'Automating cyber threat scoring using Transformer language models.',
    date: 'Aug 2025 - Jan 2026',
    status: 'Conference Published',
    github: 'https://github.com/amalmohamedm2003-maker',
    downloadable: false,
    content: `
### Overview
Manually analyzing CVE disclosures to assign CVSS metrics (Base Score, Exploitability, Impact) introduces latency in vulnerability patch pipelines. This project automates vector assignment directly from unstructured textual descriptions.

### Research Methodology
- **Data Ingestion:** Engineered an end-to-end NLP data pipeline that extracted and preprocessed 45,676 raw JSON records from the NVD.
- **Data Preprocessing:** Flattened complex structures, normalized CWE entries, and developed a stratified training framework to address significant dataset imbalances.
- **Model Architecture:** Developed a multi-classifier BERT system to automate CVSS vector generation.
- **Results:** Achieved high model reliability with F1 Scores up to 97.77% and Balanced Accuracy reaching 95% for critical metrics like Scope (S).
- **Publication:** Presented methodology and ablation studies in an IEEE/Springer-indexed conference.
    `,
  },
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = PROJECT_REGISTRY[params.slug];
  if (!project) return notFound();

  return (
    <MotionContainer>
      <Link href="/" className="inline-flex items-center text-xs font-mono text-text-muted hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Overview
      </Link>

      <header className="border-b border-border-subtle pb-8 mb-8">
        <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400 mb-2">
          <span>{project.date}</span>
          <span>·</span>
          <span className="text-medium-green">{project.status}</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-text-muted leading-relaxed">{project.tagline}</p>

        <div className="flex items-center space-x-4 mt-6">
          {project.downloadable && (
            <a
              href="/api/download-sdk"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download SDK Bundle (.zip)</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-surface border border-border-subtle text-xs text-neutral-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Inspect GitHub Repository</span>
          </a>
        </div>
      </header>

      {/* Render Content */}
      <article className="prose prose-invert max-w-none font-sans">
        <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br/>') }} />
      </article>
    </MotionContainer>
  );
}
