import React from "react";
import PriceRow from "../molecules/PriceRow";
import classPackIcon from "../assets/images/eight.png";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl mb-4">CLASS PACK PURCHASE</h1>
      <div className="border border-blue-500 bg-white">
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-4">You have selected:</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={classPackIcon} className="w-12 h-12 mr-2" />
              <div>
                <p className="text-blue-700 font-semibold">Class Pack</p>
                <p className="text-xs text-blue-700 mt-1">
                  Newbie get blah blah
                </p>
              </div>
            </div>
            <p className="font-semibold">$ 420.00</p>
          </div>
          <form>
            <input
              placeholder="Enter promo code"
              className="bg-gray-200 p-2 text-sm"
            />
            <button className="bg-blue-400 py-2 px-4 text-white font-semibold text-sm">
              APPLY
            </button>
          </form>
        </div>
        <div className="border my-2"></div>
        <div className="p-4">
          <PriceRow label="Subtotal" value={390.24} />
          <PriceRow label="GST" value={390.24} />
          <PriceRow label="Discount" value={390.24} />
          <PriceRow label="Grand Total" value={390.24} />
        </div>
      </div>
      <p className="text-sm my-4">
        Please read all{" "}
        <span className="text-blue-500">Terms & Conditions</span> before
        purchasing your YM Class or Class Pack
      </p>
      <Link to="/">
        <p className="text-sm text-blue-500">Back</p>
      </Link>
    </div>
  );
};

export default OrderPage;
