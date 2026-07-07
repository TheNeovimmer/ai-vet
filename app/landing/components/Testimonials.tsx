import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'AI Vet cut our admin time by 60%. The diagnosis assistant catches things we used to miss — our standard of care has genuinely improved.',
    author: 'Dr. Sarah Chen',
    role: 'DVM, Pacific Veterinary Hospital',
    rating: 5,
  },
  {
    quote: 'We onboarded 400+ patient records in an afternoon. The scheduling alone saves my front desk 15 hours a week. Game changer.',
    author: 'Marcus Webb',
    role: 'Practice Manager, Eastside Animal Clinic',
    rating: 5,
  },
  {
    quote: 'The drug interaction checker flagged a contraindication we would have missed. Worth it for that alone. The rest is a bonus.',
    author: 'Dr. Amara Okafor',
    role: 'DVM, Lakeside Veterinary Center',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1 h-1 rounded-full bg-blue-600" />
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Trusted by veterinarians
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Here&apos;s what clinic teams are saying about AI Vet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl p-7 transition-all hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{t.author}</div>
                <div className="text-xs text-zinc-400 dark:text-zinc-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
