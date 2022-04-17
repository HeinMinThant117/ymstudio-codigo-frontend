import axios from "axios";
const baseUrl = "http://localhost:8000/api/class-packs";

const fetchAll = async () => {
  const response = axios.get(baseUrl);
  return response;
};

export default { fetchAll };
