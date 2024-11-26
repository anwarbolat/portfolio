'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 mb-6">About Me</h1>
            <p className="text-xl text-dimWhite mb-6">
              Hi, I'm Anwar Bolat, an Interaction and Visual Designer based in the United Kingdom. With an MSc in Human-Computer Interaction and a focus on AI, I combine design expertise with data-driven insights to create exceptional user experiences.
            </p>
            <p className="text-xl text-dimWhite mb-6">
              As a Senior UX Designer at Sage, I continuously improve user experiences through research and usability testing. My expertise spans across SaaS, eCommerce, and Mobile interfaces, using technologies like React, JavaScript, Next.js, Flutter, and Python.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Anwar Bolat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}