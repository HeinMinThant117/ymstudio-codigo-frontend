import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const user = useSelector((state) => state.auth.user);

  if (user === null) return <Navigate to="/login" />;

  return (
    <div className="w-screen h-screen bg-gray-100">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
