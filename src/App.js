import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getClassPacks } from "./features/classPackSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClassPacks());
  }, []);
  return (
    <div className=" grid grid-cols-3">
      <div className=" flex flex-col text-center border p-2">
        <p className=" self-start mt-2 ml-2 bg-black py-1 px-4 text-white inline-block text-sm">
          Popular
        </p>
        <h3 className=" text-blue-800 text-md font-semibold">10 Class Pack</h3>
        <p className="my-6">Class Description 1234124124124124214124124</p>
        <p className="mb-4 font-semibold">$220.00</p>
      </div>
    </div>
  );
}

export default App;
