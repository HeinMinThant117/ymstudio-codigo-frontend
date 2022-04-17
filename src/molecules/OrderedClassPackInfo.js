import React from "react";
import { useSelector } from "react-redux";
import classPackIcon from "../assets/images/eight.png";

const OrderedClassPackInfo = () => {
  const {
    data: { pack_name, newbie_note, pack_price },
  } = useSelector((state) => state.classPack.ordered);
  return (
    <>
      <h3 className="font-semibold text-lg mb-4">You have selected:</h3>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={classPackIcon} className="w-12 h-12 mr-2" />
          <div>
            <p className="text-blue-700 font-semibold">{pack_name}</p>
            {newbie_note && (
              <p className="text-xs text-blue-700 mt-1">{newbie_note}</p>
            )}
          </div>
        </div>
        <p className="font-semibold">${pack_price}</p>
      </div>
    </>
  );
};

export default OrderedClassPackInfo;
