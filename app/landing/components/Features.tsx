import { Sparkles, Calendar, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FEATURES = [
  {
    icon: Sparkles,
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'AI Diagnosis Assistant',
    description: 'Upload symptoms and get instant differential diagnoses. Trained on the latest veterinary literature for accurate, actionable insights.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
  },
  {
    icon: Calendar,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    title: 'Smart Scheduling',
    description: 'Intelligent calendar that optimizes appointments, sends automated reminders, and tracks no-shows to maximize clinic efficiency.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
  },
  {
    icon: Stethoscope,
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    title: 'Treatment Plans',
    description: 'Generate comprehensive treatment plans with AI. Medication dosages, follow-up schedules, and recovery tracking all in one place.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
  },
  {
    icon: ShieldCheck,
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    title: 'Drug Interaction Check',
    description: 'Cross-reference patient medications against known contraindications. Safety-first AI that flags potential issues before they arise.',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&h=600&fit=crop',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1 h-1 rounded-full bg-blue-600" />
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Everything you need to run your clinic
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            AI-powered tools that handle the busywork so you can focus on what matters — your patients.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 max-w-lg">
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 ring-1 ring-black/5 dark:ring-white/5`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{feature.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">{feature.description}</p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
              <div className="flex-1 w-full group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-800 relative shadow-lg dark:shadow-black/10 transition-shadow duration-500 group-hover:shadow-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-2xl pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
