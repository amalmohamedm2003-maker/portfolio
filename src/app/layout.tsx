import type { Metadata } from 'next';
import './globals.css';
import HoverSidebar from '@/components/HoverSidebar';

export const metadata: Metadata = {
  title: 'Amal Mohamed M | AI Engineer & Systems Specialist',
  description: 'Specializing in RAG pipelines, NLP classifiers, and scalable machine learning workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark bg-canvas text-text-primary">
      <body className="flex min-h-screen selection:bg-neutral-800 selection:text-white">
        <HoverSidebar />
        <main className="flex-1 ml-16 md:ml-20 flex justify-center px-6 py-12 md:py-20">
          <div className="w-full max-w-3xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
