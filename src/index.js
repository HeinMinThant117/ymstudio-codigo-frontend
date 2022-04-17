import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import OrderPage from "./components/OrderPage";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/order/:id" element={<OrderPage />} />
        </Route>

        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
