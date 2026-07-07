'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: { monthly: '79', yearly: '59' },
    description: 'For solo practitioners and small clinics.',
    features: [
      'Up to 500 patient records',
      'AI Diagnosis Assistant',
      'Smart Scheduling',
      'Basic Reporting',
      'Email Support',
    ],
  },
  {
    name: 'Professional',
    price: { monthly: '149', yearly: '119' },
    description: 'For growing clinics with multiple vets.',
    popular: true,
    features: [
      'Unlimited patient records',
      'Everything in Starter',
      'Treatment Plans & Drug Check',
      'Advanced Analytics',
      'Priority Support',
      'Staff Accounts (up to 10)',
    ],
  },
  {
    name: 'Enterprise',
    price: { monthly: '299', yearly: '249' },
    description: 'For multi-location hospitals and chains.',
    features: [
      'Everything in Professional',
      'Unlimited Staff Accounts',
      'Custom AI Training',
      'API Access & Integrations',
      'Dedicated Account Manager',
      'SLA Guarantee',
      'On-premise Deployment Option',
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto mb-8">
            No hidden fees. No surprises. Start free and upgrade when you need more.
          </p>

          <div className="inline-flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !yearly
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                yearly
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              Annually
              <span className="ml-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-zinc-900 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-900 text-white shadow-xl dark:shadow-2xl dark:shadow-black/30'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/20 hover:-translate-y-0.5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className={`text-lg font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-zinc-900 dark:text-zinc-100'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'}`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-zinc-900 dark:text-zinc-100'}`}>
                  ${yearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className={`text-sm ml-1.5 ${plan.popular ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  /month
                </span>
              </div>
              <Link
                href="/login"
                className={`block text-center py-3 px-6 rounded-full font-semibold text-sm mb-8 transition-all hover:scale-[0.97] active:scale-[0.95] shadow-sm ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20 dark:shadow-blue-500/20'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                Get Started
              </Link>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.popular ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'
                      }`}
                    />
                    <span className={plan.popular ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-400'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
