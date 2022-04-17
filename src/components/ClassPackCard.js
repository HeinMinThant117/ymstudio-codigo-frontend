import classPackIcon from "../assets/images/eight.png";
import React from "react";
import { Link } from "react-router-dom";

const ClassPackCard = ({ classPack }) => {
  return (
    <Link
      to={`/order/${classPack.pack_id}`}
      className=" flex flex-col text-center items-center border p-2 bg-white"
    >
      {classPack.tag_name && (
        <p className=" self-start mt-2 ml-2 bg-black py-1 px-4 text-white inline-block text-sm">
          {classPack.tag_name}
        </p>
      )}
      <h3 className=" text-blue-800 text-md font-semibold">
        {classPack.pack_name}
      </h3>
      <img className="w-16 h-16 mt-4" src={classPackIcon} />
      <p className="my-6">{classPack.pack_description}</p>
      <p className="mb-4 font-semibold">$ {classPack.pack_price}</p>
    </Link>
  );
};

export default React.memo(ClassPackCard);
