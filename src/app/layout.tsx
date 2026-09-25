import type { Metadata } from 'next';
import './globals.css';
import TopNav from '@/components/TopNav';

export const metadata: Metadata = {
  title: 'Amal Mohamed M | AI Engineer & Systems Specialist',
  description: 'Specializing in RAG pipelines, NLP classifiers, and scalable machine learning workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-canvas text-text-primary">
      <body className="flex flex-col min-h-screen selection:bg-[#191919] selection:text-white font-sans">
        <TopNav />
        <main className="flex-1 flex justify-center px-6 py-12 md:py-20 w-full">
          <div className="w-full max-w-4xl">
            {children}
          </div>
        </main>
        <footer className="border-t border-border-subtle py-8 text-center text-sm text-text-muted mt-auto">
          Help · Status · About · Careers · Press · Blog · Privacy · Terms
        </footer>
      </body>
    </html>
  );
}
