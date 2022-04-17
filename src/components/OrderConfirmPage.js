import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getOrderedClassPack,
  setOrderedStatus,
} from "../features/classPackSlice";
import OrderedClassPackInfo from "../molecules/OrderedClassPackInfo";
import PriceContainer from "./PriceContainer";

const OrderConfirmPage = () => {
  const { orderId } = useParams();
  const { status, data } = useSelector((state) => state.classPack.ordered);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === null) {
      dispatch(getOrderedClassPack(orderId));
    } else {
      dispatch(setOrderedStatus("found"));
    }
  }, []);

  if (data === null) return null;
  return (
    <div className="container mx-auto">
      <h1 className="text-xl mb-4 text-blue-500">
        CLASS PACK PURCHASE SUCCESS
      </h1>
      <div className="border border-blue-500 bg-white">
        <div className="p-6">
          <OrderedClassPackInfo />
        </div>
        <div className="border my-2"></div>
        <PriceContainer />
      </div>
    </div>
  );
};

export default OrderConfirmPage;
