import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-zinc-950 dark:bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="relative text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Get Started Today
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Ready to transform your clinic?
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Join thousands of veterinary professionals already running smarter with AI Vet.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 bg-white text-zinc-900 px-10 py-4 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-all hover:scale-[0.97] active:scale-[0.95]"
        >
          Start Free Trial
          <ArrowRight size={16} />
        </Link>
        <p className="text-sm text-zinc-500 mt-4">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
