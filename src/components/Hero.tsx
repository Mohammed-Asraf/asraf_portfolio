import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaCloud, FaPython, FaAws, FaShieldAlt } from 'react-icons/fa'; // Example icons

const Hero = () => {
  const skills = [
    { name: "Azure", icon: <FaCloud /> },
    { name: "GCP", icon: <FaCloud /> },
    { name: "Python", icon: <FaPython /> },
    { name: "AI/ML", icon: <FaReact /> }, // Using React icon as placeholder for generic AI/ML
    { name: "Cybersecurity", icon: <FaShieldAlt /> },
  ];

  return (
    <>
      <style>
        {`
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-spin-reverse {
            animation: spin-reverse 10s linear infinite;
          }
          @keyframes pulse-ring {
            0%, 100% {
              transform: scale(0.95);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.9;
            }
          }
          .animate-pulse-ring {
            animation: pulse-ring 7s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
      <section className="relative py-20 px-4 min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/10 lg:backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left text-white">
            <p className="text-primary font-semibold text-lg mb-2 flex items-center justify-center md:justify-start">
              <span className="w-8 h-px bg-primary mr-2"></span>
              Hello There!
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              I'm <span className="text-primary">Mohammed Asraf</span>
            </h1>
            <p className="text-xl text-gray-200 mt-4 mb-12 max-w-md mx-auto md:mx-0">
              AI Developer & Cloud Engineer who builds intelligent, scalable, and secure systems from the ground up.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Link href="/#projects" className="bg-white/20 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 border border-white/30">
                Portfolio
              </Link>
              <Link href="/#contact" className="bg-white/10 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 border border-white/30">
                Let's Collaborate
              </Link>
            </div>
          </div>

          {/* Right Side: Image and Skills */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
            
            {/* The background circle for the image */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-primary transform scale-105 shadow-xl"></div>
            
            {/* The image container with the circular mask */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg z-10">
              <Image
                src="/MY IMAGE white bg.jpg"
                alt="Mohammed Asraf S Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Container for Rotating & Pulsing Rings */}
            <div className="absolute top-1/2 left-1/2 w-[32rem] h-[32rem] -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="absolute inset-4 rounded-full border-2 border-white/10 lg:motion-safe:animate-spin-reverse lg:animate-pulse-ring"></div>
              <div className="absolute inset-0 rounded-full border-2 border-white/10 lg:motion-safe:animate-spin-slow lg:animate-pulse-ring"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
