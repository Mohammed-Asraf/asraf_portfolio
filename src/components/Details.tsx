'use client';

import { useState } from 'react';

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

// Data for Projects section
const projectsData = [
  {
    title: "AI Product Development",
    year: "Ongoing",
    technologies: ["Python", "AI/ML APIs", "Azure", "Google Cloud Platform", "Git"],
    description: [
      "Designed feature architecture and technical implementation workflows for AI-driven educational product with focus on scalability, performance optimization achieving 30 percent faster response times, and enhanced user experience.",
      "Integrated AI and ML components including natural language processing and machine learning models into cloud-based architectures using Azure Machine Learning and Google Cloud AI Platform serving 500+ users.",
    ],
  },
  {
    title: "Securing Multi-Cloud Environment",
    year: "2024",
    technologies: ["Microsoft Azure", "Google Cloud Platform", "Security Architecture"],
    description: [
      "Investigated comprehensive security challenges, threat models, and compliance considerations (GDPR, SOC 2, ISO 27001) across multi-cloud environments.",
      "Evaluated industry best practices for securing workloads including identity and access management, network segmentation, encryption at rest and in transit, and defense-in-depth security strategies.",
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
const ExperienceContent = () => (
  <div className="max-w-4xl mx-auto space-y-8">
    {experienceData.map((job, index) => (
      <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
            <p className="text-lg text-gray-200">{job.company} - {job.location}</p>
          </div>
          <p className="text-md text-gray-300 flex-shrink-0 ml-4">{job.date}</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-md text-gray-300">
          {job.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ProjectsContent = () => (
  <div className="max-w-4xl mx-auto space-y-8">
    {projectsData.map((project, index) => (
      <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-md text-gray-300 mb-4">{project.year}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
        <ul className="list-disc list-inside space-y-2 text-md text-gray-300 flex-grow">
          {project.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const EducationContent = () => (
  <div className="max-w-4xl mx-auto space-y-8">
    {educationData.map((edu, index) => (
      <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
        <p className="text-lg text-gray-200">{edu.institution}</p>
        <p className="text-md text-gray-300">{edu.year}</p>
        {edu.gpa && <p className="text-md text-gray-300">GPA: {edu.gpa}</p>}
      </div>
    ))}
  </div>
);

// Main Details component
const Details = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const tabs = ['Experience', 'Projects', 'Education'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Experience':
        return <ExperienceContent />;
      case 'Projects':
        return <ProjectsContent />;
      case 'Education':
        return <EducationContent />;
      default:
        return null;
    }
  };

  return (
    <section id="details" className="py-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center border-b-2 border-white/20 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative group px-8 py-3 text-lg font-semibold transition-all duration-300 focus:outline-none 
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