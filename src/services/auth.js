import axios from "axios";
const baseUrl = "http://localhost:8000/api";

const login = async (data) => {
  const response = await axios.post(baseUrl + "/login", data);
  return response;
};

export default { login };
