import React from "react";

const BestFeatures = ({ heading, subheading, imgSrc }) => {
  return (
    <div className="my-20 mx-44">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-4xl font-bold text-gray-800">{heading}</h1>
        <p className="text-gray-700 text-lg font-sans">{subheading}</p>
      </div>
      <div className="w-full bg-slate-400 rounded-md h-80percent mt-12  overflow-hidden flex justify-center items-center">
        <img src={imgSrc} alt={heading} className="object-cover" />
      </div>
    </div>
  );
};

export default BestFeatures;
