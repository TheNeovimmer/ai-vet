'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { label: 'Pets Helped', value: 12847, suffix: '' },
  { label: 'AI Insights Generated', value: 48231, suffix: '+' },
  { label: 'Appointments Scheduled', value: 9562, suffix: '' },
  { label: 'Clinics Using AI Vet', value: 342, suffix: '' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </p>
  );
}

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-zinc-900 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center group">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-zinc-400 text-sm mt-2 group-hover:text-zinc-300 transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
