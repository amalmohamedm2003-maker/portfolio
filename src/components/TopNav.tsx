'use client';

import Link from 'next/link';

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
            Our story
          </Link>
          <Link href="/projects" className="text-text-muted hover:text-text-primary transition-colors">
            Engineering
          </Link>
          <Link href="/blog" className="text-text-muted hover:text-text-primary transition-colors">
            Write
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
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            Sign in
          </a>

          {/* Primary CTA / SDK Download */}
          <a
            href="/api/download-sdk"
            className="bg-[#191919] hover:bg-[#000000] text-white px-5 py-2.5 rounded-full font-medium transition-colors"
          >
            Download SDK
          </a>
        </div>
      </div>
    </nav>
  );
}
