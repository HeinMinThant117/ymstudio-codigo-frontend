import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ClassPackCard from "./components/ClassPackCard";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { getClassPacks } from "./features/classPackSlice";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <NavBar />
      {/* <HomePage /> */}
      <Outlet />
    </div>
  );
}

export default App;
