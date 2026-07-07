'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled
              ? 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm'
              : 'bg-white/50 dark:bg-zinc-950/30 border border-transparent'
          }`}
        >
          <Link href="/landing" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-zinc-900 dark:bg-white rounded-md flex items-center justify-center transition-colors">
              <span className="text-white dark:text-zinc-900 text-xs font-bold">V</span>
            </div>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">AI Vet</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <Link
              href="/login"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-4 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-full px-5 py-2 transition-all hover:scale-[0.97] active:scale-[0.95]"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggle}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-zinc-100 dark:border-zinc-800" />
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-xl transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
