import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-zinc-900 dark:bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_theme(colors.blue.600/0.15)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_theme(colors.blue.400/0.1)_0%,_transparent_70%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Ready to Transform Your Clinic?
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto">
          Join hundreds of modern veterinary practices already using AI Vet.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all hover:scale-[0.97] active:scale-[0.95] shadow-lg shadow-blue-600/25"
        >
          Get Started Free
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
