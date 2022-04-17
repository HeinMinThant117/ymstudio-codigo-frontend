import axios from "axios";
const baseUrl = "http://localhost:8000/api";

const login = async (data) => {
  const response = await axios.post(baseUrl + "/login", data);
  return response;
};

const logout = async (token) => {
  const response = await axios.post(
    baseUrl + "/logout",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return response;
};

export default { login, logout };
