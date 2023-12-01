import customerModel from "../models/bankModel";
import { bankType } from "../types/bankType";

export const createService = async (data: bankType) => {
  return await customerModel.create(data);
};

export const showService = async () => {
  return await customerModel.find();
};

export const showIdService = async (id: string) => {
  return await customerModel.findById(id);
};

export const updateService = async (id: string, data: bankType) => {
  return await customerModel.findByIdAndUpdate(id, data);
};

export const deleteService = async (id: string) => {
  return await customerModel.findByIdAndDelete(id);
};
