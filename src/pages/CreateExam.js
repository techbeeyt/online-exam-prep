import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const CreateExam = () => {
  const [quesCounter, setQuesCounter] = useState(1);
  const [questions, setQuestions] = useState({});
  const [addQues, setAddQues] = useState({});
  const [addQuesArray, setAddQuesArray] = useState([]);
  const [addQuesData, setAddQuesData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
  });

  useEffect(() => {
    setQuestions({ ...questions, ["questionList"]: addQuesArray });
  }, [addQuesArray]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "title" ||
      name === "topic" ||
      name === "time" ||
      name === "fullmark"
    ) {
      setQuestions({ ...questions, [name]: value });
    } else {
      setAddQues({ ...addQues, [name]: value });
      setAddQuesData({ ...addQuesData, [name]: value });
    }
  };

  const handleAddQues = (e) => {
    e.preventDefault();
    if (
      addQuesData.question &&
      addQuesData.option1 &&
      addQuesData.option2 &&
      addQuesData.option3 &&
      addQuesData.option4 &&
      addQuesData.correctAnswer
    ) {
      setAddQuesArray([...addQuesArray, addQues]);
      setQuesCounter(quesCounter + 1);
      setAddQuesData({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: "",
      });
    } else {
      alert("Fill all the question's fields properly");
    }
  };

  const saveQuestion = (e) => {
    e.preventDefault();
    console.log(questions);
  };

  const handleCorrectAnswer = (e) => {
    setAddQues({
      ...addQues,
      ["correctAnswer"]: e.target.previousElementSibling.value,
    });
    setAddQuesData({
      ...addQuesData,
      ["correctAnswer"]: e.target.previousElementSibling.value,
    });
  };

  return (
    <div className="relative m-6">
      <form method="post">
        <div className="flex flex-col w-full justify-center items-center">
          <div>
            <input
              className="absoulute text-2xl font-bold text-gray-900 w-auto mb-2 border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
              type="text"
              placeholder="Enter Exam Name"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="topic">Topic: </label>
            <input
              name="topic"
              type="text"
              placeholder="Enter topic"
              className="border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <div>
              <label htmlFor="topic">Time: </label>
              <input
                name="time"
                type="text"
                placeholder="time "
                className="border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="fullmark">Full Marks: </label>
              <input
                name="fullmark"
                type="text"
                placeholder="Enter fullmark"
                className="border-b-2 w-24 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="bg-black w-full my-2" style={{ height: "1px" }}></div>

        <div className="flex flex-wrap">
          {addQuesArray.map((item, index) => {
            return (
              <div className="w-1/2 px-10 mb-4" key={index}>
                <h1 className="text-lg font-semibold">{`${index + 1}. ${
                  item.question
                }`}</h1>
                <h2>{`a. ${item.option1}`}</h2>
                <h2>{`b. ${item.option2}`}</h2>
                <h2>{`c. ${item.option3}`}</h2>
                <h2>{`d. ${item.option4}`}</h2>
                <div className="flex justify-start items-center">
                  <h2 className="text-green-700 mr-2">Answer: </h2>
                  <h2>{item.correctAnswer}</h2>
                </div>
              </div>
            );
          })}
          <div className="w-1/2 px-10 py-4 shadow-lg">
            <textarea
              type="text"
              name="question"
              placeholder={`${quesCounter}. Enter the question's text`}
              className="text-lg w-full font-semibold border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
              onChange={handleChange}
              value={addQuesData.question}
            ></textarea>
            <div className="flex flex-col justify-center items-start">
              <div className="w-full flex justify-between items-center">
                <label htmlFor="option1">a. </label>
                <input
                  type="text"
                  name="option1"
                  placeholder="Option 1"
                  className="mr-auto border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
                  onChange={handleChange}
                  value={addQuesData.option1}
                />
                <div
                  className="ml-2 h-8 w-8 bg-slate-50 rounded-md hover:shadow-md flex justify-center items-center text-zinc-700 hover:text-green-700"
                  onClick={handleCorrectAnswer}
                >
                  <FaCheck className="pointer-events-none" />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <label htmlFor="option2">b. </label>
                <input
                  type="text"
                  name="option2"
                  placeholder="Option 2"
                  className="mr-auto border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700 "
                  onChange={handleChange}
                  value={addQuesData.option2}
                />
                <div
                  className="ml-2 h-8 w-8 bg-slate-50 rounded-md hover:shadow-md flex justify-center items-center text-zinc-700 hover:text-green-700"
                  onClick={handleCorrectAnswer}
                >
                  <FaCheck className="pointer-events-none" />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <label htmlFor="option3">c. </label>
                <input
                  type="text"
                  name="option3"
                  placeholder="Option 3"
                  className="mr-auto border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
                  onChange={handleChange}
                  value={addQuesData.option3}
                />
                <div
                  className="ml-2 h-8 w-8 bg-slate-50 rounded-md hover:shadow-md flex justify-center items-center text-zinc-700 hover:text-green-700"
                  onClick={handleCorrectAnswer}
                >
                  <FaCheck className="pointer-events-none" />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <label htmlFor="option4">d. </label>
                <input
                  type="text"
                  name="option4"
                  placeholder="Option 4"
                  className="mr-auto border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
                  onChange={handleChange}
                  value={addQuesData.option4}
                />
                <div
                  className="ml-2 h-8 w-8 bg-slate-50 rounded-md hover:shadow-md flex justify-center items-center text-zinc-700 hover:text-green-700"
                  onClick={handleCorrectAnswer}
                >
                  <FaCheck className="pointer-events-none" />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <label htmlFor="correctAnswer">Answer: </label>
                <input
                  type="text"
                  name="correctAnswer"
                  placeholder="Correct Answer"
                  className="mr-auto border-b-2 border-white focus:outline-0 focus:border-b-2 focus:border-gray-800 px-4 py-1 focus:bg-slate-100 focus:rounded-t-sm focus:text-gray-700"
                  onChange={handleChange}
                  value={addQuesData.correctAnswer}
                />
              </div>
            </div>
            <button
              className="bg-blue-600 text-white border-2 border-blue-600 p-1 rounded-sm mt-2"
              onClick={handleAddQues}
            >
              Add this question
            </button>
          </div>
        </div>

        <div className="bg-black w-full my-2" style={{ height: "1px" }}></div>

        <div className="flex justify-end items-center">
          <button
            className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-2 border-blue-600 px-4 py-2 m-2 rounded-sm text-xl"
            onClick={(e) => e.preventDefault()}
          >
            Save as Draft
          </button>
          <button
            onClick={saveQuestion}
            className="bg-blue-600 text-white border-2 border-blue-600 px-4 py-2 m-2 rounded-sm text-xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExam;
