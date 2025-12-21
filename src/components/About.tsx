import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg text-white">
          <FaQuoteLeft className="text-primary text-7xl absolute -top-8 -left-8 opacity-20 transform rotate-[-15deg] hidden md:block" />
          <p className="text-xl md:text-2xl font-semibold leading-relaxed text-center italic z-10 relative">
            "Innovative AI and Cloud Engineer crafting secure, intelligent, and scalable solutions that drive measurable business impact."
          </p>
          
          <div className="mt-8 pt-4 border-t border-gray-600 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex -space-x-2 overflow-hidden mb-4 sm:mb-0">
              <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-cobalt-light flex items-center justify-center text-sm font-bold text-gray-200">P1</div>
              <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-cobalt-light flex items-center justify-center text-sm font-bold text-gray-200">P2</div>
              <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-cobalt-light flex items-center justify-center text-sm font-bold text-gray-200">P3</div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-white">1000+ Users Impacted</h4>
              <p className="text-gray-200">Across diverse platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
