import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
