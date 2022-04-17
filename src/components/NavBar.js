import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-white p-4 mb-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about" className="ml-4">
            About
          </Link>
        </div>
        <div>
          <p className=" cursor-pointer" onClick={() => dispatch(logoutUser())}>
            Logout
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
