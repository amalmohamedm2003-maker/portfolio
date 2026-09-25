import MotionContainer from '@/components/MotionContainer';

export default function AboutPage() {
  return (
    <MotionContainer>
      <header className="border-b border-border-subtle pb-8 mb-12 mt-8">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">
          Amal Mohamed M
        </h1>
        <p className="text-xl text-text-muted font-sans leading-relaxed max-w-2xl">
          Aspiring AI/ML Engineer with hands-on Python experience building and deploying production-grade AI/ML applications, including transformer-based NLP models and retrieval-augmented generation (RAG) systems.
        </p>
      </header>

      <div className="space-y-16">
        {/* Education Section */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">
            Education
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold font-sans text-xl text-text-primary">B.Tech in Computer Science & Engineering</h3>
                <span className="text-sm font-sans text-text-muted">2021 - 2025</span>
              </div>
              <p className="text-text-muted font-sans text-lg">Ahalia School of Engineering and Technology, Palakkad</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold font-sans text-xl text-text-primary">Higher Secondary, Computer Science</h3>
                <span className="text-sm font-sans text-text-muted">2019 - 2021</span>
              </div>
              <p className="text-text-muted font-sans text-lg">Bharathamatha Higher Secondary School, Palakkad</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">
            Experience
          </h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold font-sans text-xl text-text-primary">Data Scientist Intern</h3>
              <span className="text-sm font-sans text-text-muted">Jul 2025 - Apr 2026</span>
            </div>
            <p className="text-text-primary font-medium font-sans text-lg mb-4">Techolas Technologies</p>
            <ul className="list-disc list-outside ml-6 space-y-3 text-text-muted font-sans text-lg leading-relaxed">
              <li>Built a RAG-based application using structured application development practices, achieving 85% faithfulness and 88% answer relevancy.</li>
              <li>Engineered end-to-end data pipelines (SQL, Pandas, NumPy) and resolved data-quality issues through systematic troubleshooting, reducing data noise by 30%.</li>
              <li>Used Git for version control across iterative development cycles; collaborated with stakeholders to document application specifications and test results.</li>
              <li>Conducted AI model testing, created visualizations, and prepared detailed reports.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-text-primary mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold font-sans text-lg text-text-primary mb-2">AI / ML & Frameworks</h3>
              <p className="text-text-muted font-sans leading-relaxed">Machine Learning, Deep Learning, LLMs, RAG, PyTorch, TensorFlow, Scikit-learn, FAISS, Sentence Transformers.</p>
            </div>
            <div>
              <h3 className="font-bold font-sans text-lg text-text-primary mb-2">Programming</h3>
              <p className="text-text-muted font-sans leading-relaxed">Python, Java, C</p>
            </div>
            <div>
              <h3 className="font-bold font-sans text-lg text-text-primary mb-2">Data Engineering & DBs</h3>
              <p className="text-text-muted font-sans leading-relaxed">Predictive Modeling, ETL Pipelines, Pandas, NumPy, EDA, Statistical Analysis, MySQL.</p>
            </div>
            <div>
              <h3 className="font-bold font-sans text-lg text-text-primary mb-2">DevOps & Version Control</h3>
              <p className="text-text-muted font-sans leading-relaxed">Git, GitHub Actions (CI/CD), Docker, MLOps, AWS, GCP.</p>
            </div>
          </div>
        </section>
      </div>
    </MotionContainer>
  );
}
