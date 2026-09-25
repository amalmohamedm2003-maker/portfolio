'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Layers, 
  BookOpen, 
  User, 
  DownloadCloud
} from 'lucide-react';

const Github = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function HoverSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      aria-label="Sidebar Navigation"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed left-0 top-0 h-screen z-50 flex items-center"
    >
      <motion.div
        animate={{ width: isExpanded ? 260 : 64 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className="h-[96vh] my-auto ml-2 rounded-2xl bg-surface border border-border-subtle/60 backdrop-blur-md shadow-2xl flex flex-col justify-between p-3 overflow-hidden"
      >
        {/* Top: Branding / Icon */}
        <div className="flex items-center space-x-3 px-2 py-3">
          <div className="w-8 h-8 rounded-full bg-border-subtle flex items-center justify-center font-serif text-sm font-bold text-white shrink-0">
            A
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-medium text-sm text-text-primary tracking-tight whitespace-nowrap"
              >
                Amal Mohamed M
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Middle: Navigation Links */}
        <nav className="flex flex-col space-y-1">
          {[
            { href: '/', label: 'Overview', icon: Home },
            { href: '/projects', label: 'Engineering Works', icon: Layers },
            { href: '/blog', label: 'Technical Writing', icon: BookOpen },
            { href: '/about', label: 'About & Papers', icon: User },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-text-muted hover:text-white hover:bg-card transition-colors group"
            >
              <item.icon className="w-5 h-5 shrink-0 group-hover:text-white" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-sm font-normal whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </nav>

        {/* Bottom: SDK Resource & Socials */}
        <div className="flex flex-col space-y-2 border-t border-border-subtle pt-3">
          <a
            href="/api/download-sdk"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono transition-all group"
            title="Direct Download RAG SDK (.zip)"
          >
            <DownloadCloud className="w-5 h-5 text-medium-green shrink-0" />
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="whitespace-nowrap"
                >
                  Download SDK (.zip)
                </motion.span>
              )}
            </AnimatePresence>
          </a>

          <div className="flex items-center space-x-1 pt-1 px-1">
            <a
              href="https://github.com/amalmohamedm2003-maker"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-text-muted hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amal-mohamed-m-abb593257"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-text-muted hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}
