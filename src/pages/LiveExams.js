import React, { useEffect, useState } from "react";
import ExamDetails from "../components/ExamDetails";
import Navbar from './../container/Navbar';

const LiveExams = () => {
  const [exams, setExams] = useState([]);
  useEffect(() => {
    fetchLiveExamsData();
    setExams([
      {
        _id: 'euiehfduieh',
        title: 'Model test 1',
        slug: 'model-test-1',
        topic: 'Bangla, Math, English',
        fullmarks: 100,
        attendence: 421,
        start_time: '8 jun 2022 8:00 am',
        end_time: '8 jun 2022 8:00 pm',
      },
      {
        _id: 'euiehfduieh',
        title: 'Model test 1',
        slug: 'model-test-1',
        topic: 'Physics',
        fullmarks: 80,
        attendence: 4231,
        start_time: '8 jun 2022 8:00 am',
        end_time: '8 jun 2022 8:00 pm',
      },
      {
        _id: 'euiehfdadsfuieh',
        title: 'Model test 1',
        slug: 'model-test-1',
        topic: 'Bangla, Math, English',
        fullmarks: 80,
        attendence: 4231,
        start_time: '8 jun 2022 8:00 am',
        end_time: '8 jun 2022 8:00 pm',
      },
      {
        _id: 'euidsfuieh',
        title: 'Model test 1',
        slug: 'model-test-1',
        topic: 'Bangla, Math, English',
        fullmarks: 80,
        attendence: 4231,
        start_time: '8 jun 2022 8:00 am',
        end_time: '8 jun 2022 8:00 pm',
      },
    ]);
  }, []);

  const fetchLiveExamsData = async () => {
    try {
      const res = await fetch("http://localhost:5000/live-exams", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setExams(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="bg-blue-600 p-4">
        <h1 className="text-gray-50 font-bold text-xl">Ongoing Exams</h1>
      </div>
      {exams.length > 0 ? (
        <div className="flex flex-col">
          {
            exams.map((item) => {
              return (
                <>
                  <ExamDetails key={item._id} item={item} />
                </>
              );
            })
          }
        </div>
      ) : (
        <div className="w-full py-40 flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold text-gray-400">
            Currently No Exam is Ongoing
          </h1>
          <p className="text-gray-700 text-lg">
            You can check All exams and participate previous exam virtually
          </p>
        </div>
      )}
    </div>
  );
};

export default LiveExams;
