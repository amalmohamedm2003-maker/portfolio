import MotionContainer from '@/components/MotionContainer';
import { User, GraduationCap, Briefcase, Code } from 'lucide-react';

export default function AboutPage() {
  return (
    <MotionContainer>
      <header className="border-b border-border-subtle pb-8 mb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          <User className="w-4 h-4" />
          <span>About & Resume</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Amal Mohamed M
        </h1>
        <p className="text-lg text-text-muted leading-relaxed font-sans">
          Aspiring AI/ML Engineer with hands-on Python experience building and deploying production-grade AI/ML applications, including transformer-based NLP models and retrieval-augmented generation (RAG) systems.
        </p>
      </header>

      <div className="space-y-12">
        {/* Education Section */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-white mb-6 flex items-center">
            <GraduationCap className="w-5 h-5 mr-3 text-medium-green" />
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-neutral-200">B.Tech in Computer Science & Engineering</h3>
                <span className="text-sm font-mono text-neutral-500">2021 - 2025</span>
              </div>
              <p className="text-text-muted">Ahalia School of Engineering and Technology, Palakkad</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-neutral-200">Higher Secondary, Computer Science</h3>
                <span className="text-sm font-mono text-neutral-500">2019 - 2021</span>
              </div>
              <p className="text-text-muted">Bharathamatha Higher Secondary School, Palakkad</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-white mb-6 flex items-center">
            <Briefcase className="w-5 h-5 mr-3 text-medium-green" />
            Experience
          </h2>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-lg text-neutral-200">Data Scientist Intern</h3>
              <span className="text-sm font-mono text-neutral-500">Jul 2025 - Apr 2026</span>
            </div>
            <p className="text-neutral-400 font-medium mb-3">Techolas Technologies</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-text-muted">
              <li>Built a RAG-based application using structured application development practices, achieving 85% faithfulness and 88% answer relevancy.</li>
              <li>Engineered end-to-end data pipelines (SQL, Pandas, NumPy) and resolved data-quality issues through systematic troubleshooting, reducing data noise by 30%.</li>
              <li>Used Git for version control across iterative development cycles; collaborated with stakeholders to document application specifications and test results.</li>
              <li>Conducted AI model testing, created visualizations, and prepared detailed reports.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-white mb-6 flex items-center">
            <Code className="w-5 h-5 mr-3 text-medium-green" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-neutral-200 mb-2">AI / ML & Frameworks</h3>
              <p className="text-text-muted text-sm leading-relaxed">Machine Learning, Deep Learning, LLMs, RAG, PyTorch, TensorFlow, Scikit-learn, FAISS, Sentence Transformers.</p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-200 mb-2">Programming</h3>
              <p className="text-text-muted text-sm leading-relaxed">Python, Java, C</p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-200 mb-2">Data Engineering & DBs</h3>
              <p className="text-text-muted text-sm leading-relaxed">Predictive Modeling, ETL Pipelines, Pandas, NumPy, EDA, Statistical Analysis, MySQL.</p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-200 mb-2">DevOps & Version Control</h3>
              <p className="text-text-muted text-sm leading-relaxed">Git, GitHub Actions (CI/CD), Docker, MLOps, AWS, GCP.</p>
            </div>
          </div>
        </section>
      </div>
    </MotionContainer>
  );
}
