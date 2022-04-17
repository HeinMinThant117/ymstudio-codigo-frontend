import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const errors = useSelector((state) => state.auth.login.errors);
  const user = useSelector((state) => state.auth.user);

  if (user !== null) return <Navigate to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="border h-screen flex bg-gray-700 border-black">
      <form
        className="flex flex-col border p-6 m-auto bg-white w-1/6 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold self-center my-8">Member Login</h1>
        <input
          type="email"
          className="border-b border-gray-300 py-2 px-1 mb-4"
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          type="password"
          className="border-b border-gray-300 py-2 px-1 mb-4"
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <button className="bg-blue-500 text-white font-semibold p-2 my-4 w-1/2 mx-auto">
          Login
        </button>
        {errors.map((error, index) => (
          <p key={index} className="text-red-500 text-sm bg-red-200 mt-2 p-2">
            {error}
          </p>
        ))}
      </form>
    </div>
  );
};

export default LoginForm;
