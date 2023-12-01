import express from "express";
import router from "./routes/bankRoute";
import cors from "cors";
import dbConnection from "./database/database";
const app = express();
const PORT = 5000;

dbConnection();

app.use(express.json());
app.use(cors());

app.use("/customer", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
