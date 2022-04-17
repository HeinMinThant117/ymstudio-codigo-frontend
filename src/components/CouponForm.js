import React from "react";

const CouponForm = () => {
  return (
    <form>
      <input
        placeholder="Enter promo code"
        className="bg-gray-200 p-2 text-sm"
      />
      <button className="bg-blue-400 py-2 px-4 text-white font-semibold text-sm">
        APPLY
      </button>
    </form>
  );
};

export default CouponForm;
