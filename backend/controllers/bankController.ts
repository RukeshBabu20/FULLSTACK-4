import * as Service from "../services/customerService";
import { NextFunction, Request, Response } from "express";

export const createData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  try {
    const result = await Service.createService(data);
    if (result) {
      res.status(200).json({ message: "Data created", result });
    } else {
      res.status(204).json({ message: "No input found" });
    }
  } catch {
    res.status(500).json({ message: "Failed to create data" });
  }
};

export const showData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Service.showService();
    if (result) {
      res.status(200).json({ message: "Your data", result });
    } else {
      res.status(204).json({ message: "Data not found" });
    }
  } catch {
    res.status(500).json({ message: "Failed to display data" });
  }
};

export const showIdData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const result = await Service.showIdService(id);
    if (result) {
      res.status(200).json({ message: "Your Data", result });
    } else {
      res.status(204).json({ message: "No data found" });
    }
  } catch {
    res.status(500).json({ message: "Failed to get data" });
  }
};

export const updateData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const result = await Service.updateService(id, updateData);
    console.log(result);
    if (result) {
      res.status(200).json({ message: "Your Data updated", result });
    } else {
      res.status(204).json({ message: "Cannot find the update record" });
    }
  } catch {
    res.status(500).json({ message: "Failed to update data" });
  }
};

export const deleteData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const result = await Service.deleteService(id);
    if (result) {
      res.status(200).json({ message: "you record deleted", result });
    } else {
      res.status(204).json({ message: "Data not found" });
    }
  } catch {
    res.status(500).json({ message: "Failed to delete data" });
  }
};
