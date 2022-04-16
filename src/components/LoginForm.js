import React, { useState } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", { email, password })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response));
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
        <button className="bg-blue-500 text-white font-semibold p-2 my-8 w-1/2 mx-auto">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
