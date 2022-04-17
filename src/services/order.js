import axios from "axios";

const baseUrl = "http://localhost:8000/api/orders";

const submit = async (token, data) => {
  const response = await axios.post(baseUrl, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const getOrder = async (token, id) => {
  const response = await axios.get(`${baseUrl}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};


export default { submit, getOrder };
