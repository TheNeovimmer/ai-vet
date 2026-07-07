const STEPS = [
  {
    number: '01',
    title: 'Connect Your Clinic',
    description: 'Import your existing patient records, staff, and scheduling data. Works with your current workflow — no complex setup required.',
  },
  {
    number: '02',
    title: 'AI Learns Your Practice',
    description: "Our AI adapts to your clinic's specialty, common cases, and treatment patterns. The more you use it, the smarter it gets.",
  },
  {
    number: '03',
    title: 'Transform Your Workflow',
    description: 'Diagnose faster, schedule smarter, and deliver better care. Your clinic runs like clockwork with AI handling the heavy lifting.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Get started in minutes
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Three simple steps to transform your veterinary practice with AI.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px bg-zinc-200 dark:bg-zinc-800" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl flex items-center justify-center text-sm font-bold mb-6 relative z-10 transition-transform group-hover:scale-110 duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
