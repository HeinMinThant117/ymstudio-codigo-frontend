import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrderedClassPack } from "../features/classPackSlice";
import { useDispatch, useSelector } from "react-redux";
import OrderedClassPackInfo from "../molecules/OrderedClassPackInfo";
import CouponForm from "./CouponForm";
import PriceContainer from "./PriceContainer";

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
          <CouponForm />
        </div>
        <div className="border my-2"></div>
        <PriceContainer />
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
