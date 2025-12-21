import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-white py-6 text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <p>Designed and Crafted by AsRaf!! 🌌👽</p>
        <div className="flex justify-center gap-4">
          <Link href="https://github.com/Mohammed-Asraf" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors duration-300">
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
