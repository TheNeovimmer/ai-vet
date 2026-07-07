'use client';

import { useEffect, useState, useRef } from 'react';

const STATS = [
  { value: 1200, suffix: '+', label: 'Clinics Trust Us' },
  { value: 50000, suffix: '+', label: 'Patients Managed' },
  { value: 40, suffix: '%', label: 'Faster Diagnoses' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
];

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || counted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(end * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div className="text-center group">
      <span
        ref={ref}
        className="block text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 transition-all group-hover:text-blue-300"
      >
        {count}
        {suffix}
      </span>
      <span className="text-sm text-zinc-400 font-medium">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-zinc-900 dark:bg-zinc-950 border-y border-zinc-800 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
