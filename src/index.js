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
import OrderConfirmPage from "./components/OrderConfirmPage";
import RegisterForm from "./components/RegisterForm";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/class-packs/:packId" element={<OrderPage />} />
          <Route path="/orders/:orderId" element={<OrderConfirmPage />} />
        </Route>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
