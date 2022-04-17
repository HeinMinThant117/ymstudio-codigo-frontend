import axios from "axios";

const baseUrl = "http://localhost:8000/api/promocodes";

const verify = async (token, data) => {
  const response = await axios.post(`${baseUrl}/verify`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export default { verify };
