'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'sage-smart-transactions',
    title: 'Sage Smart Transactions',
    description: 'Transaction service that extracts data from uploaded invoices',
    image: '/images/1.jpg'
  },
  {
    id: 'thg-fraud-detection',
    title: 'Fraud Detection Platform',
    description: 'Anti-fraud solution for e-Commerce businesses',
    image: '/images/fraud-detection-thumb-img.png'
  },
  {
    id: 'thg-checkout',
    title: 'THG Checkout Experience',
    description: 'Optimised for e-Commerce checkout software as a service',
    image: '/images/checkout-thumb-img.png'
  },
  {
    id: 'mystock-platform',
    title: 'MyStock Trading Platform',
    description: 'No-code algorithmic trading platform for investors',
    image: '/images/mystock-thumb-img.png'
  },
  {
    id: 'ao-contact-us',
    title: 'AO Contact Us',
    description: 'Reducing e-Commerce business expences with AI automation',
    image: '/images/chatbot-thumb-img.png'
  },
  {
    id: 'ao-my-account',
    title: 'AO My Account',
    description: 'Mobile-first my account solution for e-Commerce',
    image: '/images/myaccount-thumb-img.png'
  },
  {
    id: 'growfox-saas',
    title: 'Growfox SaaS Platform',
    description: 'B2B SaaS platform for marketing automation',
    image: '/images/growfox.jpg'
  },
  {
    id: 'sage-ai',
    title: 'Sage AI Assistant',
    description: 'AI-powered financial assistant for small businesses',
    image: '/images/sage-ai.jpg'
  },
  {
    id: 'ao-checkout',
    title: 'AO Checkout Redesign',
    description: 'Streamlined checkout process reducing cart abandonment',
    image: '/images/ao-checkout.jpg'
  }
];

const PortfolioGrid = () => {
  return (
    <section className="py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="heading-2 mb-6">Selected Work</h2>
          <p className="text-xl text-dimWhite max-w-3xl">
            A collection of projects showcasing my expertise in interaction design, user experience, and digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
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
