'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'sage-design-system',
    title: 'Sage Design System',
    description: 'Enterprise-scale design system for Sage\'s global product suite',
    image: '/images/portfolio/sage-ds.jpg'
  },
  {
    id: 'sage-mobile',
    title: 'Sage Mobile App',
    description: 'Cross-platform mobile application for business accounting',
    image: '/images/portfolio/sage-mobile.jpg'
  },
  {
    id: 'kaplan-platform',
    title: 'Kaplan Learning Platform',
    description: 'Educational platform redesign improving student engagement',
    image: '/images/portfolio/kaplan.jpg'
  },
  {
    id: 'thg-checkout',
    title: 'THG Checkout Experience',
    description: 'Optimized e-commerce checkout increasing conversion by 23%',
    image: '/images/portfolio/thg.jpg'
  },
  {
    id: 'ao-mobile',
    title: 'AO Mobile App',
    description: 'Award-winning retail mobile app with AR features',
    image: '/images/portfolio/ao.jpg'
  },
  {
    id: 'growfox-saas',
    title: 'Growfox SaaS Platform',
    description: 'B2B SaaS platform for marketing automation',
    image: '/images/portfolio/growfox.jpg'
  },
  {
    id: 'sage-ai',
    title: 'Sage AI Assistant',
    description: 'AI-powered financial assistant for small businesses',
    image: '/images/portfolio/sage-ai.jpg'
  },
  {
    id: 'ao-checkout',
    title: 'AO Checkout Redesign',
    description: 'Streamlined checkout process reducing cart abandonment',
    image: '/images/portfolio/ao-checkout.jpg'
  }
];

const PortfolioGrid = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">Selected Work</h2>
          <p className="text-xl text-dimWhite max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in interaction design, user experience, and digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.id}`} className="block group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-dimWhite">{project.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
