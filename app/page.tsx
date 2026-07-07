import { GeistSans } from 'geist/font/sans';
import SmoothScroll from './landing/components/SmoothScroll';
import ScrollReveal from './landing/components/ScrollReveal';
import Navbar from './landing/components/Navbar';
import Hero from './landing/components/Hero';
import Features from './landing/components/Features';
import HowItWorks from './landing/components/HowItWorks';
import Stats from './landing/components/Stats';
import Testimonials from './landing/components/Testimonials';
import Pricing from './landing/components/Pricing';
import CTA from './landing/components/CTA';
import Footer from './landing/components/Footer';

export default function LandingPage() {
  return (
    <div className={GeistSans.className}>
      <SmoothScroll>
        <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
          <Navbar />
          <Hero />
          <ScrollReveal><Features /></ScrollReveal>
          <ScrollReveal><HowItWorks /></ScrollReveal>
          <ScrollReveal><Stats /></ScrollReveal>
          <ScrollReveal><Testimonials /></ScrollReveal>
          <ScrollReveal><Pricing /></ScrollReveal>
          <ScrollReveal><CTA /></ScrollReveal>
          <Footer />
        </div>
      </SmoothScroll>
    </div>
  );
}
