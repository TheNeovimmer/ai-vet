import Link from 'next/link';

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How It Works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-zinc-900 dark:bg-white rounded-md flex items-center justify-center">
                <span className="text-white dark:text-zinc-900 text-xs font-bold">V</span>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">AI Vet</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              AI-powered veterinary practice management software. Built for modern clinics.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} AI Vet. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
