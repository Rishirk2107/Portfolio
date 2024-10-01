const About: React.FC = () => {
    return (
      <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-500 text-center mb-6">About Me</h2>
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg" // You can replace this with your actual image path
            alt="Rishi Kumar"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 shadow-md"
          />
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-center max-w-xl">
            Hello! I am <span className="font-semibold">Rishi Kumar</span>, a passionate 
            <span className="text-teal-500"> Full-Stack Developer</span> and 
            <span className="text-teal-500"> Chatbot Developer</span> currently pursuing a 
            Computer Science degree at Chennai Institute of Technology with a CGPA of 8.98. 
            I specialize in building end-to-end web solutions and developing intelligent 
            chatbot systems to deliver impactful, scalable applications.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="bg-teal-500 text-white px-4 md:px-6 py-2 rounded-lg shadow hover:bg-teal-600 transition duration-300"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  