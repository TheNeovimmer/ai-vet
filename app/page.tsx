'use client';

import { GeistSans } from 'geist/font/sans';
import { ReactLenis } from 'lenis/react';
import Navbar from './landing/components/Navbar';
import Hero from './landing/components/Hero';
import Features from './landing/components/Features';
import HowItWorks from './landing/components/HowItWorks';
import Stats from './landing/components/Stats';
import Testimonials from './landing/components/Testimonials';
import Pricing from './landing/components/Pricing';
import CTA from './landing/components/CTA';
import Footer from './landing/components/Footer';
import ScrollReveal from './landing/components/ScrollReveal';

export default function HomePage() {
  return (
    <div className={GeistSans.className}>
      <ReactLenis root options={{ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal><Features /></ScrollReveal>
          <ScrollReveal><HowItWorks /></ScrollReveal>
          <ScrollReveal><Stats /></ScrollReveal>
          <ScrollReveal><Testimonials /></ScrollReveal>
          <ScrollReveal><Pricing /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <ScrollReveal><Footer /></ScrollReveal>
        </main>
      </ReactLenis>
    </div>
  );
}
