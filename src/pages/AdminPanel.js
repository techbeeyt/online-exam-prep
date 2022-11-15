import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div>
        <Link to="/admin-panel/add-exam"> Create New Exam </Link>{" "}
      </div>
    </>
  );
};

export default AdminPanel;
