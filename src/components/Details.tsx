'use client';

import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { FaChevronDown } from 'react-icons/fa';

// Data for Experience section
const experienceData = [
  {
    title: "AI Developer and Cloud Engineer",
    company: "Clamshell Learning",
    location: "Bengaluru, India",
    date: "Oct 2024 - Present",
    description: [
      "Engineered AI-driven and cloud-based solutions aligned with business objectives, focusing on system architecture, scalability, security, and performance optimization across Azure and Google Cloud Platform serving educational technology sector.",
      "Implemented cloud-native workflows with emphasis on 99.9 percent reliability, deployment efficiency improvements of 25 percent, and seamless integration of AI components into enterprise systems supporting 500+ active users.",
      "Developed AI and ML features using Python and cloud services, participating in code reviews, technical documentation, and knowledge sharing sessions contributing to 30 percent faster development cycles.",
      "Collaborated with cross-functional teams of 8+ members including product managers, designers, and engineers to enhance system reliability by 40 percent, implement DevOps best practices, and streamline CI/CD deployment processes.",
      "Optimized cloud infrastructure costs by 20 percent through efficient resource allocation, auto-scaling configurations, and performance monitoring across Azure and GCP environments.",
    ],
  },
  {
    title: "Founder’s Office Intern - Cloud and Learning Solutions",
    company: "Clamshell Learning",
    location: "Bengaluru, India",
    date: "Aug 2024 - Oct 2024",
    description: [
      "Researched cloud-based Learning Management Systems evaluating deployment strategies, scalability patterns, and cost optimization across Azure and Google Cloud Platform, identifying 35 percent potential cost savings.",
      "Analyzed multi-cloud performance metrics including latency (reduced by 15 percent), reliability (improved to 99.5 percent), disaster recovery capabilities, and total cost of ownership supporting strategic decision-making for enterprise LMS implementation serving 1,000+ users.",
    ],
  },
];

// Data for Education section
const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Karpagam College of Engineering",
    year: "2022 - 2025",
    gpa: "7.52/10",
  },
  {
    degree: "Diploma in Electronics and Communication Engineering",
    institution: "Thiagarajar Polytechnic College",
    year: "2019 - 2022",
  },
];

// Content-specific components
const ExperienceContent = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {experienceData.map((job, index) => (
        <div 
          key={index} 
          className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg overflow-hidden ${isMobile ? 'cursor-pointer' : ''}`}
          onClick={() => handleToggle(index)}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
              <p className="text-lg text-gray-200">{job.company} - {job.location}</p>
            </div>
            <div className="text-right ml-4">
              <p className="text-md text-gray-300 flex-shrink-0">{job.date}</p>
              {isMobile && (
                <FaChevronDown className={`mt-2 text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              )}
            </div>
          </div>
          {(!isMobile || openIndex === index) && (
            <ul className="list-disc list-inside space-y-2 text-md text-gray-300 mt-4 animate-fade-in">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
       <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const EducationContent = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {educationData.map((edu, index) => (
        <div 
          key={index} 
          className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg overflow-hidden ${isMobile ? 'cursor-pointer' : ''}`}
          onClick={() => handleToggle(index)}
        >
           <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
            </div>
             {isMobile && (
              <FaChevronDown className={`text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            )}
          </div>
          
           {(!isMobile || openIndex === index) && (
             <div className="animate-fade-in">
              <p className="text-lg text-gray-200">{edu.institution}</p>
              <p className="text-md text-gray-300">{edu.year}</p>
              {edu.gpa && <p className="text-md text-gray-300">GPA: {edu.gpa}</p>}
            </div>
           )}
        </div>
      ))}
       <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};


// Main Details component
const Details = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const tabs = ['Experience', 'Education'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Experience':
        return <ExperienceContent />;
      case 'Education':
        return <EducationContent />;
      default:
        return null;
    }
  };

  return (
    <section id="details" className="py-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center border-b-2 border-white/20 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative group px-6 md:px-8 py-3 text-lg font-semibold transition-all duration-300 focus:outline-none flex-shrink-0 
                ${activeTab === tab 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white group-hover:scale-105'
                }`}
            >
              {tab}
              
              {activeTab !== tab && (
                <span className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-md rounded-md scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300"></span>
              )}

              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-100 transition-transform duration-300"></span>
              )}
            </button>
          ))}
        </div>
        <div className="p-4">{renderContent()}</div>
      </div>
    </section>
  );
};

export default Details;