import axiosClient from "./axiosClient";

const taskApi = {
  getAll: () => axiosClient.get("/"),
  create: (data) => axiosClient.post("/", data),
  update: (id, data) => axiosClient.put(`/${id}`, data),
  delete: (id) => axiosClient.delete(`/${id}`),
};

export default taskApi;
