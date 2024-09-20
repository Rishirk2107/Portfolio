const Experience: React.FC = () => {
    return (
      <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-500 text-center mb-6 md:mb-8">Experience</h2>
        <div className="space-y-8 max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="bg-teal-500 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-md md:text-lg font-semibold">1</span>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Backend Developer Intern</h3>
              <p className="text-sm md:text-lg text-gray-500 mb-2">Doodleblue Innovations (Aug 2021 – Nov 2022)</p>
              <ul className="list-disc list-inside text-gray-600 text-sm md:text-lg">
                <li>Architected robust backend systems, improving efficiency.</li>
                <li>Optimized MongoDB queries and implemented microservices.</li>
                <li>Enhanced security with JWT-based authentication.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  