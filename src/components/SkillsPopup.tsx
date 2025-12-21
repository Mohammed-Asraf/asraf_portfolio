// src/components/SkillsPopup.tsx

interface SkillsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const skillsData = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform",
  "CI/CD", "Git", "SQL", "NoSQL", "Machine Learning", "Deep Learning"
];

const SkillsPopup = ({ isOpen, onClose }: SkillsPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl max-w-2xl w-full text-white p-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill) => (
            <span key={skill} className="bg-white/20 text-white px-4 py-2 rounded-full text-lg font-semibold">
              {skill}
            </span>
          ))}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-primary transition-colors text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default SkillsPopup;
