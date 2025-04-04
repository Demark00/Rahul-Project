import React from "react";
import { FaLightbulb } from "react-icons/fa"; // Example icon (replace with your SVG if needed)

const Card = () => {
  return (
    <div className="flex flex-col items-center text-center p-9 rounded-4xl transition-all duration-500 max-w-80 bg-gray-900
      hover:bg-gradient-to-b hover:from-[#64F4AB] hover:to-[#327A56] hover:shadow-[0px_15px_25px_rgba(100,244,171,0.2)] group">
      
      {/* Icon Box */}
      <div className="bg-[#2D2E32] text-green-400 rounded-full shadow-lg border-2 border-green-600 p-4 transition-all duration-300 
        group-hover:bg-transparent group-hover:text-white">
        <FaLightbulb className="text-6xl" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mt-4 poppins-semibold transition-all duration-300 group-hover:text-white">
        Creative & Digital Strategy
      </h3>

      {/* Description */}
      <p className="text-white text-sm mt-2 poppins-light transition-all duration-300 group-hover:text-white">
        We craft winning strategies that perfectly fit your business goals. We
        blend creativity and in-depth research to create a unique recipe for
        Your Success.
      </p>
    </div>
  );
};

export default Card;
