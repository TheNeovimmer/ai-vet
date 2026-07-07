const TESTIMONIALS = [
  {
    name: 'Dr. Rebecca Chen',
    role: 'DVM, Paws & Claws Veterinary Clinic',
    quote: 'AI Vet cut our diagnostic time in half. The AI treatment plans are eerily accurate — it\'s like having a second opinion on tap 24/7.',
    initials: 'RC',
  },
  {
    name: 'Dr. Marcus Okonkwo',
    role: 'Chief of Staff, VCA Animal Hospitals',
    quote: 'We rolled this out across all three locations. Scheduling is seamless, and the drug interaction checker has caught several potential issues already.',
    initials: 'MO',
  },
  {
    name: 'Dr. Sarah Valtieri',
    role: 'Owner, Brookside Animal Hospital',
    quote: 'I was skeptical about AI in veterinary medicine. Six months in, I can\'t imagine running my practice without it. The ROI is undeniable.',
    initials: 'SV',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Trusted by veterinary professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/20 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-900 text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{t.name}</p>
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
