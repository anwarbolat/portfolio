'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Testimonials />
      <Footer />
    </main>
  );
}
