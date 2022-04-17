import React, { useEffect } from "react";
import PriceRow from "../molecules/PriceRow";
import { Link, useParams } from "react-router-dom";
import { getOrderedClassPack } from "../features/classPackSlice";
import { useDispatch, useSelector } from "react-redux";
import OrderedClassPackInfo from "../molecules/OrderedClassPackInfo";
import CouponForm from "./CouponForm";

const OrderPage = () => {
  const { packId } = useParams();
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.classPack.ordered);

  useEffect(() => {
    dispatch(getOrderedClassPack(packId));
  }, []);

  if (status === null) return null;

  return (
    <div className="container mx-auto">
      <h1 className="text-xl mb-4 text-blue-500">CLASS PACK PURCHASE</h1>
      <div className="border border-blue-500 bg-white">
        <div className="p-6">
          <OrderedClassPackInfo />
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
      <div className="flex justify-between">
        <Link to="/">
          <p className="text-sm text-blue-500">Back</p>
        </Link>
        <button className="bg-blue-500 text-sm text-white font-semibold px-10 py-2 rounded-2xl">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
