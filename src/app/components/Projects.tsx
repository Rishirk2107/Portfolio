const Projects: React.FC = () => {
    const projectList = [
      {
        title: "Real-time Chat Application",
        description:
          "Built a chat app supporting 100+ concurrent users with real-time messaging using Socket.io and optimized MongoDB for storing chat history.",
        link: "https://github.com/Rishirk2107/MERN-Chat-App",
      },
      {
        title: "Contract Summarizing Chatbot",
        description:
          "Developed a chatbot capable of summarizing 500+ pages of contracts using LLM models, reducing the time to summarize contracts to under 5 minutes.",
        link: "https://github.com/Rishirk2107/Contract-Risk-Assessment",
      },
      {
        title: "Blog Service with Microservices Architecture",
        description:
          "Built a scalable blog service using Node.js with a microservices architecture, improving the maintainability and scalability of the system.",
        link: "https://github.com/Rishirk2107/Role-Permission",
      },
    ];
  
    return (
      <div className="bg-gray-100 p-4 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-500 text-center mb-6 md:mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl md:text-2xl font-bold text-teal-600 mb-2 md:mb-4">{project.title}</h3>
              <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6">{project.description}</p>
              <a
                href={project.link}
                className="text-teal-500 text-sm md:text-md font-semibold underline hover:text-teal-700 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  