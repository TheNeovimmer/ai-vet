export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="shrink-0">
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" className="fill-zinc-900 dark:fill-white" />
      <path
        d="M9 21l7-12 7 12"
        className="stroke-white dark:stroke-zinc-900"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24.5" cy="8.5" r="3.5" className="fill-blue-600 dark:fill-blue-500" />
      <circle cx="24.5" cy="8.5" r="1.2" className="fill-white" />
    </svg>
  );
}
