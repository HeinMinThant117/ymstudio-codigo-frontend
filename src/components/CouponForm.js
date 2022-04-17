import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkPromocode } from "../features/classPackSlice";

const CouponForm = () => {
  const [promocode, setPromocode] = useState();

  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.classPack.ordered.promocode);

  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkPromocode(promocode));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter promo code"
        className="bg-gray-200 p-2 text-sm"
        onChange={(e) => setPromocode(e.target.value)}
        onInput={toInputUppercase}
      />
      <button className="bg-blue-400 py-2 px-4 text-white font-semibold text-sm">
        APPLY
      </button>
      {message !== "success" && message !== null && (
        <p className="text-sm text-red-700 mt-2">{message}</p>
      )}
      {message === "success" && message !== null && (
        <p className="text-sm text-green-700 mt-2 ">Promocode applied</p>
      )}
    </form>
  );
};

export default CouponForm;
