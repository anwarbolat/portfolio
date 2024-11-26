'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThreeJSHero from './ThreeJSHero';
import { useEffect, useRef } from 'react';
import styles from '../../styles/TextReveal.module.css';

const RevealText = ({ text, id }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const spans = containerRef.current.querySelectorAll('span');
    let ticking = false;

    const updateOpacity = (span, index, scrollY, viewportHeight) => {
      const rect = span.getBoundingClientRect();
      
      // Calculate position relative to viewport
      const scrollProgress = scrollY / (document.documentElement.scrollHeight - viewportHeight);
      const elementTop = rect.top;
      
      // Calculate reveal threshold based on viewport position
      const revealPoint = viewportHeight * 0.3;
      const distanceFromReveal = elementTop - revealPoint;
      
      // Add small offset for each character within the word
      const characterOffset = index * 8;
      
      let opacityValue;
      
      if (elementTop <= revealPoint) {
        opacityValue = 0.4;
      } else {
        opacityValue = Math.max(0.001,
          Math.min(0.4,
            0.4 - ((distanceFromReveal + characterOffset) * 0.001)
          )
        );
      }
      
      // Ensure text stays visible when scrolled past
      if (scrollProgress > 0.1) {
        opacityValue = Math.max(opacityValue, 0.4 * Math.min(1, scrollProgress * 2));
      }
      
      span.style.opacity = opacityValue;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          
          spans.forEach((span, index) => {
            updateOpacity(span, index, currentScrollY, viewportHeight);
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Set initial state
    spans.forEach(span => {
      span.style.opacity = '0.001';
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split text into words and characters while preserving spaces
  const renderText = () => {
    const words = text.split(/(\s+)/);
    let charIndex = 0;

    return words.map((word, wordIndex) => {
      if (word.trim() === '') {
        // For spaces between words
        return <span key={`space-${wordIndex}`} className="word">&nbsp;</span>;
      }

      // For actual words
      const characters = word.split('').map((char, i) => {
        const span = (
          <span
            key={`char-${charIndex}`}
            style={{
              opacity: 0.001,
              transitionDelay: `${charIndex * 8}ms`
            }}
          >
            {char}
          </span>
        );
        charIndex++;
        return span;
      });

      return (
        <span key={`word-${wordIndex}`} className="word">
          {characters}
        </span>
      );
    });
  };

  return (
    <p ref={containerRef} className={styles.revealText} id={id}>
      {renderText()}
    </p>
  );
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 5) return "Hi, night owl 🌙";
  if (hour < 12) return "Good morning ☀️";
  if (hour < 18) return "Good afternoon 🌤️";
  return "Good evening 🌆";
};

export default function Hero() {
  const introText = 'I create meaningful digital experiences through thoughtful interface design and user-centered solutions, focusing on both aesthetics and functionality.';
  
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-24">
      <ThreeJSHero />
      <div className="container mx-auto px-4 relative">
        <h1 className="heading-1 mt-48 mb-6 leading-tight text-left">
          <span>{getGreeting()}</span>, I'm <span className="text-primary">Anwar Bolat</span>
        </h1>
        <div className="w-full text-left relative" style={{ height: '100vh' }}>
          <RevealText text={introText} />
          <RevealText text={introText} />
          <RevealText text={introText} />
          <RevealText text={introText} />
          <RevealText text={introText} id="bottom" />
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/portfolio"
              className="btn btn-primary inline-block text-center w-full sm:w-auto"
            >
              View Portfolio
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/about"
              className="btn bg-white/10 text-white hover:bg-white/20 inline-block text-center w-full sm:w-auto"
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
