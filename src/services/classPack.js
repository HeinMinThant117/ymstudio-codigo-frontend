import axios from "axios";
const baseUrl = "http://localhost:8000/api/class-packs";

const fetchAll = async () => {
  const response = axios.get(baseUrl);
  return response;
};

const fetchOne = async (id) => {
  const response = axios.get(`${baseUrl}/${id}`);
  return response;
};

export default { fetchAll, fetchOne };
