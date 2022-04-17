import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ClassPackCard from "./components/ClassPackCard";
import { getClassPacks } from "./features/classPackSlice";
import classPack from "./services/classPack";

function App() {
  const dispatch = useDispatch();
  const classPacks = useSelector((state) => state.classPack.data);

  useEffect(() => {
    dispatch(getClassPacks());
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100">
      <nav className="bg-white p-4 mb-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <Link to="/">Home</Link>
            <Link to="/about" className="ml-4">About</Link>
          </div>
          <div>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </nav>
      <main className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {classPacks.map((classPack) => (
          <ClassPackCard key={classPack.pack_id} classPack={classPack} />
        ))}
      </main>
    </div>
  );
}

export default App;
