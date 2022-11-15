import React from "react";
import Targets from "../components/Targets";

const OurServiceExams = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-10">
      <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900 mt-20">Our Services</h1>
      </div>
      <div className="flex justify-center items-center flex-col w-full  bg-gradient-to-tr from-indigo-500 to-indigo-600 py-20">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-10 tracking-wide">
          Select your target and start practicing
        </h1>
        <div className="flex flex-wrap mx-32 justify-center items-center gap-10">
          <Targets>JSC</Targets>
          <Targets>SSC</Targets>
          <Targets>HSC</Targets>
          <Targets>
            <span className="self-center whitespace-pre">Admission</span>
            <span className="self-center whitespace-pre">Test</span>
          </Targets>
          <Targets>
            <span className="self-center">BCS</span>
            <span className="self-center">Preperation</span>
          </Targets>
          <Targets>
            <span className="self-center">Job</span>
            <span className="self-center">Preperation</span>
          </Targets>
          <Targets>IELTS</Targets>
        </div>
      </div>
    </>
  );
};

export default OurServiceExams;
