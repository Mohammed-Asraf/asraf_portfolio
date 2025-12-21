'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SkillsPopup from './SkillsPopup';

const Header = () => {
  const [isSkillsPopupOpen, setSkillsPopupOpen] = useState(false);

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
              <Link href="/#details" className="bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 block py-2 px-4">
                Projects
              </Link>
            </li>
          </ul>
          <div className="hidden md:inline-block">
            <Link href="/#contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 hover:animate-tada block">
              Contact Me
            </Link>
          </div>
          {/* Mobile menu button will be needed here for a truly responsive site */}
        </nav>
      </header>
    </>
  );
};

export default Header;
