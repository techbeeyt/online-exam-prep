import "./App.css";
import Navbar from "./container/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LiveExams from "./pages/LiveExams";
import AdminPanel from "./pages/AdminPanel";
import CreateExam from "./pages/CreateExam";

function App() {
  return (
    <>
      <div className="flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-exams" element={<LiveExams />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/admin-panel/add-exam" element={<CreateExam />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
