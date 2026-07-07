const STEPS = [
  { step: '01', title: 'Sign Up', description: 'Create your clinic profile in under 2 minutes. No setup fees, no contracts.' },
  { step: '02', title: 'Upload Records', description: 'Migrate patient records securely. We support major clinic formats with automatic data extraction.' },
  { step: '03', title: 'Let AI Assist', description: 'Our AI analyzes patient history, symptoms, and treatments to provide real-time clinical insights.' },
  { step: '04', title: 'Run Smarter', description: 'Optimize scheduling, reduce wait times, and deliver better outcomes — all from one dashboard.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1 h-1 rounded-full bg-blue-600" />
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Four steps to a modern clinic
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Getting started is straightforward. We handle the complexity so you don&apos;t have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-20 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-zinc-200 dark:from-zinc-700 to-zinc-200 dark:to-zinc-700" />
          {STEPS.map((item) => (
            <div key={item.step} className="text-center group relative">
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-6 text-sm font-bold text-zinc-900 dark:text-zinc-100 ring-1 ring-black/5 dark:ring-white/5 transition-all duration-300 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white group-hover:ring-blue-200 dark:group-hover:ring-blue-700 group-hover:shadow-lg group-hover:shadow-blue-600/20 dark:group-hover:shadow-blue-500/20 group-hover:-translate-y-1">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
