import { Check } from 'lucide-react';
import Link from 'next/link';

const PLANS = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For solo practitioners and small clinics getting started.',
    features: ['Up to 200 patient records', 'AI diagnosis assistant', 'Smart scheduling', 'Email support'],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing clinics that need advanced tools.',
    features: ['Up to 1,000 patient records', 'Everything in Starter', 'Drug interaction checker', 'Treatment plan generator', 'Priority email & chat support'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$249',
    period: '/month',
    description: 'For multi-location clinics and hospitals.',
    features: ['Unlimited patient records', 'Everything in Professional', 'Multi-location support', 'Custom integrations', 'API access', 'Dedicated account manager', '24/7 phone support'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1 h-1 rounded-full bg-blue-600" />
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            No hidden fees. No surprise charges. Start your free trial today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30 shadow-lg shadow-blue-600/5 dark:shadow-blue-500/5'
                  : 'border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">{plan.price}</span>
                  {plan.period && <span className="text-sm text-zinc-400">{plan.period}</span>}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-zinc-600 dark:text-zinc-400">{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className={`block text-center font-semibold text-sm py-3.5 rounded-full transition-all hover:scale-[0.97] active:scale-[0.95] ${
                  plan.popular
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200'
                    : 'border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
