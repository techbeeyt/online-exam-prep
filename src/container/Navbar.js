import React from "react";
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LiveMark from "../components/LiveMark";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-end items-center px-10 py-4 bg-white shadow-sm">
      <div className="mr-auto">
        <Link to="/">
          <img src={logo} width={150} alt='no'/>
        </Link>
      </div>
      <div className="flex gap-x-4 mr-2">
          <Link className="roboto-regular text-xl relative" to="/live-exams">
            Live Exams
            <LiveMark />
          </Link>
        <Link className="roboto-regular  text-xl" to="/upcoming-exams">
          Upcoming Exams
        </Link>
        <Link className="roboto-regular  text-xl" to="/all-exams">
          All Exams
        </Link>
        <Link className="roboto-regular  text-xl" to="/result">
          Result
        </Link>
        <Link className="roboto-regular  text-xl" to="/notice">
          Notice
        </Link>
        <Link className="roboto-regular  text-xl" to="/blogs">
          Blogs
        </Link>
      </div>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      <Link to="/login">
        <Button look="default">Sign Up</Button>
      </Link>
    </div>
  );
};

export default Navbar;
