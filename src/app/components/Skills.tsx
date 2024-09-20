import { FaCode, FaTools, FaCertificate } from "react-icons/fa";

const Skills: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-teal-500 text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Languages */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
          <FaCode className="text-5xl text-teal-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Languages</h3>
          <p className="text-gray-600">JavaScript, TypeScript, Python, C/C++, Java</p>
        </div>
        
        {/* Frameworks */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
          <FaTools className="text-5xl text-teal-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Frameworks</h3>
          <p className="text-gray-600">React.js, Next.js, Node.js, FastAPI</p>
        </div>
        
        {/* Tools */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
          <FaTools className="text-5xl text-teal-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tools</h3>
          <p className="text-gray-600">Git, GitHub, VS Code</p>
        </div>
        
        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
          <FaCertificate className="text-5xl text-teal-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Certifications</h3>
          <p className="text-gray-600">AWS Cloud, Generative AI, Cloud Computing</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
