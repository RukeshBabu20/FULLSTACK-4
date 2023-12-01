import mongoose from "mongoose";
const DB_URL = "mongodb://127.0.0.1:27017/fullstack4";

const dbConnection = () => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("DB connected.");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default dbConnection;
