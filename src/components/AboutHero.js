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
              Hi, I'm Anwar Bolat, an Interaction and Visual Designer based in the United Kingdom. With an MSc in Human-Computer Interaction (HCI) and certifications from NN/g and UXQB, I combine design expertise with data-driven approach to create exceptional user experiences.
            </p>
            <p className="text-xl text-dimWhite mb-6">
              As a Senior UX Designer at Sage, I continuously improve user experiences through user research and usability testing. My expertise spans across Cloud SaaS, eCommerce, Mobile and interfaces with integrated AI capabilities. I also have a strong background in front-end development, using technologies like React, Next.js, Flutter, and proficient in UI design and animation. I have experience working with a wide range of design tools such as Figma, Illustrator, AfterEffects, Photoshop, and more.
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