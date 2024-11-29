'use client';

import Link from 'next/link';
import ParallaxImageStack from './ParallaxImageStack';

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-32 bg-[#3b265b] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start min-h-[600px]">
          {/* Left column – Content */}
          <div className="text-left pt-12">
            <h2 className="heading-2 mb-6">Let's Create Something Amazing Together</h2>
            <p className="text-xl mb-12 text-slate-300">
              Explore my portfolio to see my work or learn more about my journey and expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/portfolio"
                className="btn-primary text-lg px-8 py-3 rounded-lg inline-block"
              >
                View Portfolio
              </Link>
              <Link
                href="/about"
                className="btn-secondary text-lg px-8 py-3 rounded-lg inline-block"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Right column - Parallax Image Stack  */}
          <div className="relative h-[600px] hidden lg:block -ml-12">
            <ParallaxImageStack />
          </div>
        </div>
      </div>
    </section>
  );
}
