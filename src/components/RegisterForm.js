import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../features/authSlice";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { status, errors } = useSelector((state) => state.auth.register);

  if (status === "registered") return <Navigate to="/login" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({ name, email, password, confirm_password: confirmPassword })
    );
  };

  return (
    <div className="border h-screen flex bg-gray-700 border-black">
      <form
        className="flex flex-col border p-6 m-auto bg-white  "
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold self-center my-8">
          Member Register
        </h1>
        <input
          type="text"
          className="border-b border-gray-300 py-2 px-1 mb-4"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          className="border-b border-gray-300 py-2 px-1 mb-4"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="border-b border-gray-300 py-2 px-1 mb-4"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className="border-b border-gray-300 py-2 px-1 mb-4"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className="bg-blue-500 text-white font-semibold p-2 my-4 w-1/2 mx-auto">
          Register
        </button>
        <Link to="/login">
          <p className=" text-center text-sm text-blue-500 mb-2">Login</p>
        </Link>
        {errors.map((error, index) => (
          <p key={index} className="text-red-500 text-sm bg-red-200 mt-2 p-2">
            {error}
          </p>
        ))}
      </form>
    </div>
  );
};

export default RegisterForm;
