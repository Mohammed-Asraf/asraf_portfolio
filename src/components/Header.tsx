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
      <header className="bg-cobalt-dark/50 backdrop-blur-md text-white sticky top-0 z-50 shadow-md">
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
            <li className="relative group">
              <Link href="/" className="font-medium hover:text-primary group-hover:scale-105 transition-all duration-300 block py-2 px-4">
                Home
              </Link>
              <span className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md rounded-md scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/#about" className="font-medium hover:text-primary group-hover:scale-105 transition-all duration-300 block py-2 px-4">
                About
              </Link>
              <span className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md rounded-md scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <button onClick={() => setSkillsPopupOpen(true)} className="font-medium hover:text-primary group-hover:scale-105 transition-all duration-300 block py-2 px-4">
                Skills
              </button>
              <span className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md rounded-md scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/#details" className="font-medium hover:text-primary group-hover:scale-105 transition-all duration-300 block py-2 px-4">
                Experience
              </Link>
              <span className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md rounded-md scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/#details" className="font-medium hover:text-primary group-hover:scale-105 transition-all duration-300 block py-2 px-4">
                Projects
              </Link>
              <span className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md rounded-md scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300"></span>
            </li>
          </ul>
          <div className="relative group hidden md:inline-block">
            <Link href="/#contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 hover:animate-tada block">
              Contact Me
            </Link>
            <span className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md rounded-full scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300"></span>
          </div>
          {/* Mobile menu button will be needed here for a truly responsive site */}
        </nav>
      </header>
    </>
  );
};

export default Header;
