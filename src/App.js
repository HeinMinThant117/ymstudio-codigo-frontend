import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return <div>Hi</div>;
}

export default App;
