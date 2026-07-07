import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-24 pb-16 px-6 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent dark:from-blue-500/[0.04] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #18181b 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              AI-Powered Veterinary Software
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-zinc-900 dark:text-zinc-100 mb-6">
              Modernize Your{' '}
              <span className="text-blue-600 dark:text-blue-400 relative">
                Veterinary
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-600/20 dark:bg-blue-400/20 rounded-full" />
              </span>{' '}
              Practice
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md mb-10">
              AI-driven scheduling, diagnostics, and practice management — purpose-built for modern veterinary clinics.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-[0.97] active:scale-[0.95] shadow-lg shadow-black/5 dark:shadow-white/5"
              >
                Start Free Trial
                <ArrowRight size={16} />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-8 py-4 rounded-full font-semibold text-sm hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all hover:scale-[0.97] active:scale-[0.95]"
              >
                <Play size={16} className="fill-zinc-700 dark:fill-zinc-300" />
                Watch Demo
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/5 dark:bg-blue-400/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 rounded-3xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-black/20 transition-shadow duration-500 group-hover:shadow-2xl relative">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg mb-3" />
                      <div className="h-3 bg-zinc-100 dark:bg-zinc-700 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-zinc-100 dark:bg-zinc-700 rounded w-1/2" />
                    </div>
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg mb-3" />
                      <div className="h-3 bg-zinc-100 dark:bg-zinc-700 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-zinc-100 dark:bg-zinc-700 rounded w-1/2" />
                    </div>
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700 shadow-sm col-span-2 transition-all hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex gap-3 mb-3">
                        <div className="w-8 h-8 bg-zinc-100 dark:bg-zinc-700 rounded-full" />
                        <div className="flex-1">
                          <div className="h-3 bg-zinc-100 dark:bg-zinc-700 rounded w-1/3 mb-2" />
                          <div className="h-3 bg-zinc-100 dark:bg-zinc-700 rounded w-2/3" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-6 bg-blue-500 rounded-full w-16" />
                        <div className="h-6 bg-zinc-100 dark:bg-zinc-700 rounded-full w-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-600 animate-pulse" />
                <span className="font-semibold text-blue-400 dark:text-blue-600">AI</span> Diagnosis Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
