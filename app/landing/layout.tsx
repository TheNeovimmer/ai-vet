import { GeistSans } from 'geist/font/sans';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import './landing.css';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${GeistSans.variable} font-sans`}>
      <SmoothScroll>
        <Navbar />
        <main>{children}</main>
      </SmoothScroll>
    </div>
  );
}
