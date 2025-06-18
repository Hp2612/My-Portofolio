

import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Vision = () => {
  return (
    
    <div id="vision" className="flex justify-center items-center min-h-screen bg-[#2C2523] p-4">
       
      <div className="flex flex-col md:flex-row bg-[#f0aa49] text-white rounded-2xl shadow-xl p-4 max-w-4xl w-full relative">

  {/* Card Title on Top Center */}
 <div className="absolute -top-10 left-0 right-0 mx-auto text-orange bg-[#2C2523] px-4 py-3 rounded-xl shadow-lg text-2xl font-bold border-2 border-white text-center whitespace-nowrap">
  MY CAREER GOAL MERN STACK DEVELOPER
</div>


  {/* Left Side */}
  <div className="flex flex-col items-start justify-center md:w-1/2 space-y-12 mt-10">
    <div className="flex items-center space-x-4">
      <span className="text-4xl font-bold">M:</span>
      <SiMongodb className="text-green-400 text-4xl" />
      <span>MongoDB</span>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-4xl font-bold">E:</span>
      <SiExpress className="text-white text-4xl" />
      <span>Express.js</span>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-4xl font-bold">R:</span>
      <SiReact className="text-blue-400 text-4xl" />
      <span>React.js</span>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-4xl font-bold">N:</span>
      <SiNodedotjs className="text-green-300 text-4xl" />
      <span>Node.js</span>
    </div>
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
    <p className="text-lg leading-relaxed">
      The MERN stack offers an end-to-end JavaScript solution, enabling rapid development with a single language across both client and server. It ensures fast, scalable, and maintainable applications, powered by MongoDB's flexible data model, Express's efficient backend routing, React's dynamic UI, and Node.js's high-performance server-side runtime.
    </p> 
  </div>

</div>
    </div>
  );
};

export default Vision;