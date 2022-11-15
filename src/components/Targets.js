import React from "react";

const Targets = ({ children }) => {
  return (
    <div className="w-56 h-40 bg-indigo-300 rounded-lg overflow-hidden hover:shadow-2xl cursor-pointer">
      <div className="p-4 h-2/3 flex justify-center items-center text-3xl font-bold text-indigo-800 bg-gray-50 flex-col">{children}</div>
      <div className="h-1/3 bg-indigo-800 flex justify-center items-center text-white font-semibold hover:bg-indigo-200 hover:text-gray-800 transition-all duration-300 ease-linear">+ Enroll</div>
    </div>
  );
};

export default Targets;
