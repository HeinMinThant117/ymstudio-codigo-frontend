import React from "react";
import { useSelector } from "react-redux";
import PriceRow from "../molecules/PriceRow";

const PriceContainer = () => {
  const { price } = useSelector((state) => state.classPack.ordered);

  return (
    <div className="p-4">
      <PriceRow
        label="Subtotal"
        value={"$" + parseFloat(price.subtotal).toFixed(2)}
      />
      <PriceRow label="GST" value={"$" + price.gst} />
      {price.discount > 0 && (
        <PriceRow
          label="Discount"
          value={"-$" + parseFloat(price.discount).toFixed(2)}
        />
      )}
      <PriceRow
        label="Grand Total"
        value={"$" + parseFloat(price.grandTotal - price.discount).toFixed(2)}
      />
    </div>
  );
};

export default PriceContainer;
