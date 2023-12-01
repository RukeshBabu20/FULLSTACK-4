import axios from "axios";
import { bankType } from "../types/bankType";

const url = "http://localhost:5000/customer";

export const createData = async (data: bankType) => {
  const response = await axios.post(url + "/create", data);
  return response.data;
};

export const showIdData = async (id: string) => {
  const response = await axios.get(url + `/show/${id}`);
  return response.data;
};

export const showData = async () => {
  const response = await axios.get(url + "/show");
  return response.data;
};

export const updateData = async (id: string, data: bankType) => {
  const response = await axios.put(url + `/update/${id}`, data);
  return response.data;
};

export const deleteData = async (id: string) => {
  const response = await axios.delete(url + `/delete/${id}`);
  return response.data;
};
