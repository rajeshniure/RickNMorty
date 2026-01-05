
import React from "react";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      <div className="w-16 h-16 border-4 border-l-emerald-500 border-gray-300 rounded-full animate-spin mb-4"></div>
      
      
      <p className="text-white text-lg font-medium">{message}</p>
    </div>
  );
};

export default Loading;
