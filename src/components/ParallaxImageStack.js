'use client';

import { useEffect, useRef } from 'react';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg'
];

export default function ParallaxImageStack() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.querySelectorAll('.parallax-image');
    let ticking = false;

    const updateParallax = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      const windowCenter = window.innerHeight / 2;
      const distance = containerCenter - windowCenter;
      
      // Check if the container is in view
      const containerInView = containerRect.top < window.innerHeight && containerRect.bottom > 0;
      
      // Calculate progress only after container is fully in view
      const containerFullyVisible = containerRect.top < window.innerHeight * 0.5;
      const scrollProgress = containerFullyVisible ? 
        Math.max(0, Math.min(1, (window.innerHeight * 0.5 - containerRect.top) / (window.innerHeight * 0.5))) : 0;
      
      // Calculate spread progress based on how far we've scrolled past the container
      const spreadProgress = containerInView ?
        Math.max(0, Math.min(1, 
          (window.scrollY - (container.offsetTop - window.innerHeight * 0.7)) / (container.offsetHeight)
        )) : 0;

      imageElements.forEach((img, index) => {
        // Base spread factor that increases with index
        const spreadFactor = index * 80;
        
        // Vertical movement based on scroll position
        const translateY = containerInView ? -distance * 0.1 * (index + 1) : 0;
        
        // Horizontal spread based on scroll progress past the container
        const translateX = spreadProgress * spreadFactor;
        
        // Rotation and scale effects
        const rotate = spreadProgress * (index % 2 === 0 ? 10 : -10);
        const scale = 1 - (spreadProgress * 0.1 * index);
        
        img.style.transform = `
          translate3d(${translateX}px, ${translateY}px, 0)
          rotate(${rotate}deg)
          scale(${scale})
        `;
        
        // Opacity changes based on spread progress
        img.style.opacity = Math.max(0.3, 1 - spreadProgress * 0.5);
      });
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full flex items-center justify-center">
      {images.map((src, index) => (
        <div
          key={index}
          className="parallax-image absolute top-0 left-1/3 -translate-y-1/2"
          style={{
            zIndex: images.length - index,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
          }}
        >
          <img
            src={src}
            alt={`Project ${index + 1}`}
            className="w-[400px] h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      ))}
    </div>
  );
}
