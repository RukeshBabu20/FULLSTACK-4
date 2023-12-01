import mongoose, { Schema } from "mongoose";
import { bankType } from "../types/bankType";

const customerSchema: Schema<bankType> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  account: {
    type: Number,
    required: true,
    // unique: true,
  },
  ifsc: {
    type: String,
    required: true,
  },
});

const customerModel = mongoose.model<bankType>("customers", customerSchema);
export default customerModel;
