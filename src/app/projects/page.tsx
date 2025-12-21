import Link from 'next/link';
import { projectsData } from '../../data/projects';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectsPage = () => {
  return (
    <div className="bg-cobalt-extra-dark min-h-screen text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
            <FaArrowLeft />
            Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-center mt-4 mb-8">
            Case Studies
          </h1>
        </div>

        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/20 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:border-primary hover:shadow-primary/20"
            >
              <h2 className="text-3xl font-bold text-primary mb-2">{project.title}</h2>
              <p className="text-md text-gray-400 mb-6">{project.year}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Project Description</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
