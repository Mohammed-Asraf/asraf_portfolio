import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Get In Touch</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center space-y-3 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-primary text-4xl" />
            <div className="text-lg text-center">
              <p className="font-semibold text-white">Email Me:</p>
              <Link href="mailto:asrafcena2018@gmail.com" className="text-gray-200 hover:text-primary transition-colors duration-300">
                asrafcena2018@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaLinkedin className="text-primary text-4xl" />
            <div className="text-lg text-center">
              <p className="font-semibold text-white">Connect on LinkedIn:</p>
              <Link href="https://www.linkedin.com/in/mohammed-asraf/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-primary transition-colors duration-300">
                Mohammed Asraf S
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaGithub className="text-primary text-4xl" />
            <div className="text-lg text-center">
              <p className="font-semibold text-white">Find me on GitHub:</p>
              <Link href="https://github.com/Mohammed-Asraf" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-primary transition-colors duration-300">
                Mohammed-Asraf
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
