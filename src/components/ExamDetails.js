import React from "react";
import { Link } from "react-router-dom";
const ExamDetails = ({ item }) => {
  const { title, slug, topic, fullmarks, attendence, end_time } = item;
  return (
    <div className="flex justify-between items-center bg-slate-100 p-4 m-4 border border-slate-300 rounded-lg shadow-md bg">
      <div>
        <Link to={`/live-exams/${slug}`}>
          <h1 className="text-blue-600 text-xl font-semibold"> {title} </h1>
        </Link>
        <div>
          <span className="text-gray-800"> Topic : </span>
          <span className="text-gray-600"> {topic} </span>
        </div>
        <div>
          <span className="text-gray-800"> Full Marks : </span>
          <span className="text-gray-600"> {fullmarks} </span>
        </div>
        <div>
          <span className="text-gray-800"> Total Attendendee: </span>
          <span className="text-gray-600"> {attendence} </span>
        </div>
      </div>
      <span className="text-gray-600"> {'Ends in: ' + end_time} </span>
    </div>
  );
};

export default ExamDetails;
