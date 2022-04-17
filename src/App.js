import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassPackCard from "./components/ClassPackCard";
import NavBar from "./components/NavBar";
import { getClassPacks } from "./features/classPackSlice";

function App() {
  const dispatch = useDispatch();
  const classPacks = useSelector((state) => state.classPack.data);

  useEffect(() => {
    dispatch(getClassPacks());
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100">
      <NavBar />
      <main className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {classPacks.map((classPack) => (
          <ClassPackCard key={classPack.pack_id} classPack={classPack} />
        ))}
      </main>
    </div>
  );
}

export default App;
