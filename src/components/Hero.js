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
      const revealPoint = viewportHeight * 0.375;
      const distanceFromReveal = elementTop - revealPoint;
      
      // Add small offset for each character within the word
      const characterOffset = index * 5;
      
      let opacityValue;
      
      if (elementTop <= revealPoint) {
        opacityValue = 0.5;
      } else {
        opacityValue = Math.max(0.1,
          Math.min(0.5,
            0.5 - ((distanceFromReveal + characterOffset) * 0.01)
          )
        );
      }
      
      // Ensure text stays visible when scrolled past
      if (scrollProgress > 0.1) {
        opacityValue = Math.max(opacityValue, 0.5 * Math.min(1, scrollProgress * 2));
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
      span.style.opacity = '0.01';
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
              opacity: 0.01,
              transitionDelay: `${charIndex * 10}ms`
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
  if (hour < 5) return "Hi, night owl";
  if (hour < 12) return "Morning";
  if (hour < 18) return "Good day";
  return "Evening";
};

export default function Hero() {
  const introText = `I'm an interaction and visual designer. I design user-centered digital experiences using design thinking processes, focusing on aesthetics and functionality.`;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-24">
      <ThreeJSHero />
      <div className="container mx-auto px-4 relative">
        <div className="mt-24 sm:mt-48">
          <h1 className="heading-2 mb-6 leading-tight text-left">
            <span>{getGreeting()}</span>, my name is Anwar Bolat
          </h1>
          <div className="w-full text-left relative" style={{ height: '80vh' }}>
            <RevealText text={introText} />
            <RevealText text={introText} />
            <RevealText text={introText} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
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
    </section>
  );
};
