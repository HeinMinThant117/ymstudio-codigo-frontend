import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
