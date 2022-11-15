import React from "react";

const Button = ({ look, bold, children }) => {
  let des, fontWeight;
  look === "default"
    ? (des = "bg-transparent text-indigo-700 hover:bg-indigo-700 hover:text-white")
    : (des = "bg-indigo-700 text-white");
  bold === "true" ? (fontWeight = "font-bold") : (fontWeight = "");
  return (
    <button
      className={`${des}  border-2 border-indigo-700 px-2 py-1 lg:px-4 lg:py-2 m-2 rounded-md lg:text-xl ${fontWeight}`}
    >
      {children}
    </button>
  );
};

export default Button;
