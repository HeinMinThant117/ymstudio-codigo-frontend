import React, { useState } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import authService from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  if (auth.token) navigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    // authService
    //   .login({ email, password })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response.status === 401) {
    //       setErrors(["Your email or password is incorrect"]);
    //     } else if (error.response.status === 422) {
    //       const validationErrorObj = error.response.data.errors;
    //       const validatedErrors = [];

    //       Object.keys(validationErrorObj).forEach((error) =>
    //         validationErrorObj[error].map((error) =>
    //           validatedErrors.push(error)
    //         )
    //       );

    //       setErrors(validatedErrors);
    //     }
    //   });
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
        {auth.errors.map((error, index) => (
          <p key={index} className="text-red-500 text-sm bg-red-200 mt-2 p-2">
            {error}
          </p>
        ))}
      </form>
    </div>
  );
};

export default LoginForm;
