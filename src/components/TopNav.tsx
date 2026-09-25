'use client';

import Link from 'next/link';

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function TopNav() {
  return (
    <nav className="w-full border-b border-border-subtle bg-canvas">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="font-serif text-3xl font-bold tracking-tight text-text-primary">
          Amal Mohamed
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-sans">
          <Link href="/about" className="text-text-muted hover:text-text-primary transition-colors">
            My story
          </Link>
          <Link href="/projects" className="text-text-muted hover:text-text-primary transition-colors">
            Engineering
          </Link>
          <Link href="/blog" className="text-text-muted hover:text-text-primary transition-colors">
            Work Blogs
          </Link>
          
          <a
            href="https://github.com/amalmohamedm2003-maker"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          
          <a
            href="https://www.linkedin.com/in/amal-mohamed-m-abb593257"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors flex items-center"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          {/* Primary CTA / SDK Download */}
          <a
            href="/api/download-sdk"
            className="bg-[#191919] hover:bg-[#000000] text-white px-5 py-2.5 rounded-full font-medium transition-colors"
          >
            Download RAG SDK
          </a>
        </div>
      </div>
    </nav>
  );
}
