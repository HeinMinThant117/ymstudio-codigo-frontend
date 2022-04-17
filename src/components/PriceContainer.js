import React from "react";
import { useSelector } from "react-redux";
import PriceRow from "../molecules/PriceRow";

const PriceContainer = () => {
  const { price } = useSelector((state) => state.classPack.ordered);
  return (
    <div className="p-4">
      <PriceRow label="Subtotal" value={price.subtotal} />
      <PriceRow label="GST" value={price.gst} />
      {price.discount > 0 && (
        <PriceRow label="Discount" value={price.discount} />
      )}
      <PriceRow label="Grand Total" value={price.grandTotal} />
    </div>
  );
};

export default PriceContainer;
