'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SkillsPopup from './SkillsPopup';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isSkillsPopupOpen, setSkillsPopupOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SkillsPopup isOpen={isSkillsPopupOpen} onClose={() => setSkillsPopupOpen(false)} />
      <header className="bg-cobalt-dark/50 text-white sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/signature (1).svg"
              alt="Mohammed Asraf S Logo"
              width={80}
              height={40}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-2">
            <li>
              <Link href="/" className="bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 block py-2 px-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 block py-2 px-4">
                About
              </Link>
            </li>
            <li>
              <button onClick={() => setSkillsPopupOpen(true)} className="bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 block py-2 px-4 text-left w-full">
                Skills
              </button>
            </li>
            <li>
              <Link href="/#details" className="bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 block py-2 px-4">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className="bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 block py-2 px-4">
                Projects
              </Link>
            </li>
          </ul>
          <div className="hidden md:inline-block">
            <Link href="/#contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 hover:animate-tada block">
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-cobalt-dark/90 backdrop-blur-sm absolute top-full left-0 w-full">
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors duration-300 block py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors duration-300 block py-2">
                  About
                </Link>
              </li>
              <li>
                <button onClick={() => { setSkillsPopupOpen(true); setMenuOpen(false); }} className="hover:text-primary transition-colors duration-300 block py-2">
                  Skills
                </button>
              </li>
              <li>
                <Link href="/#details" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors duration-300 block py-2">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors duration-300 block py-2">
                  Projects
                </Link>
              </li>
              <li>
                 <Link href="/#contact" onClick={() => setMenuOpen(false)} className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 mt-4 block">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
