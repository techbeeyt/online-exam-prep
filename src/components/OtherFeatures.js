import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const OtherFeatures = ({
  heading,
  subheading,
  reverse,
  learnMore,
  children,
}) => {
  let rev;
  reverse == "true" ? (rev = "flex-row-reverse") : (rev = "flex-row");
  return (
    <div
      className={`my-20 mx-44 flex ${rev} gap-10 justify-center items-center`}
    >
      <div className="justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{heading}</h1>
        <p className="text-gray-800 text-lg mb-4">{subheading}</p>
        <Link
          to={`/blogs/other-features/${learnMore}`}
          className="text-xl font-semibold text-blue-600"
        >
          <div className=" flex gap-2 justify-start items-center">
            Learn More <MdKeyboardArrowRight />
          </div>
        </Link>
      </div>
      <div className="w-full bg-slate-400 rounded-md h-96 mt-12"></div>
    </div>
  );
};

export default OtherFeatures;
