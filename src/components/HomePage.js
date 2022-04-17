import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClassPacks } from "../features/classPackSlice";
import React from "react";
import ClassPackCard from "./ClassPackCard";

const HomePage = () => {
  const { status, data } = useSelector((state) => state.classPack.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClassPacks());
  }, []);

  if (status === null) return null;

  return (
    <main className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container mx-auto">
      {data.pack_list.map((classPack) => (
        <ClassPackCard key={classPack.pack_id} classPack={classPack} />
      ))}
    </main>
  );
};

export default HomePage;
