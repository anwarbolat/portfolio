'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <svg height={"48px"} width={"auto"} viewBox={"0 0 103 64"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
              <g clip-path="url(#clip0_33_136)">
                <path d="M75.7201 0.306213L61.0928 16.9112L70.6394 16.9112L65.1083 22.4203L57.3119 30.1829C56.2972 31.1477 55.4337 32.2586 54.75 33.4787C51.3709 39.4873 52.9243 46.753 58.218 49.7103C63.5118 52.6676 70.5504 50.1938 73.9295 44.1852C77.1063 38.8185 79.4255 25.5549 75.7201 0.306213ZM63.021 41.1795C60.0869 39.541 58.0266 37.1746 57.3092 34.9318C59.6069 34.3704 62.7028 34.8861 65.6423 36.5219C68.5818 38.1577 70.6367 40.5268 71.3514 42.7723C69.0591 43.3337 65.9551 42.8153 63.021 41.1795Z" fill="#BD10E0"/>
                <path d="M35.2765 2.0333C27.9574 -2.05484 18.2356 1.36448 13.5647 9.667C8.89391 17.9695 11.0379 28.0126 18.3569 32.1007C25.676 36.1888 35.3979 32.7668 40.0714 24.4643C44.7449 16.1618 42.5983 6.11875 35.2765 2.0333ZM24.9964 20.2983C20.9512 18.034 18.0953 14.7624 17.1029 11.6627C20.277 10.8865 24.5649 11.5982 28.6182 13.8599C32.6714 16.1215 35.5192 19.3958 36.5089 22.4982C33.3375 23.2771 29.0416 22.5653 24.9964 20.3037V20.2983Z" fill="#BD10E0"/>
                <path d="M25.0665 38.1228C24.5973 38.1228 24.128 38.104 23.6615 38.0664C21.0578 37.8723 18.528 37.1151 16.2481 35.8477C13.2434 34.1639 10.7894 31.6535 9.17978 28.617C5.90589 22.5224 5.88703 14.518 9.80005 7.56386C11.3756 4.73907 13.5193 2.26838 16.097 0.306213L0.126709 0.306213L0.126709 63.8469H14.2929C17.316 63.6723 20.544 62.469 23.6534 60.4061C27.6986 57.7201 31.5307 53.5997 34.4405 48.4049C37.4582 43.0329 38.9927 37.4513 39.0925 32.5036C35.1956 36.068 30.2174 38.1228 25.0665 38.1228ZM14.0367 50.3281C9.99152 48.0665 7.13562 44.7949 6.14321 41.6952C9.31732 40.9163 13.6052 41.6281 17.6585 43.8924C21.7117 46.1567 24.5595 49.4256 25.5492 52.528C22.3778 53.3042 18.0872 52.5898 14.0367 50.3281Z" fill="#BD10E0"/>
                <path d="M79.5847 41.988L75.7175 63.8469L26.2505 63.8469C41.0612 54.6795 56.0283 15.5441 40.3007 0.308899L64.3344 0.308899C62.177 5.41235 57.4091 16.2344 55.2921 21.2116C53.3342 26.8119 47.5038 35.7161 48.7443 41.8295C51.3198 60.5673 74.8545 58.6978 79.5847 41.988Z" fill="#BD10E0"/>
                <path d="M102.124 43.6587C100.641 46.4952 98.0791 47.0216 95.9568 44.6552C93.1899 42.168 92.5615 36.3044 93.5836 30.3763L94.6111 23.629L102.103 32.0766V0.19342L80.0566 0.19342C80.987 10.4218 81.9443 21.6064 80.9681 32.0309L87.2111 23.629L80.0916 63.8657H83.2954H102.124L102.124 43.6587Z" fill="#BD10E0"/>
              </g>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? 'text-white' : 'text-dimWhite'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block nav-link ${
                  pathname === item.href ? 'text-white' : 'text-dimWhite'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
