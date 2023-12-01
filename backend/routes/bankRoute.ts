import express from "express";
import * as Controller from "../controllers/bankController";
const router = express.Router();

router.get("/show", Controller.showData);
router.get("/show/:id", Controller.showIdData);
router.post("/create", Controller.createData);
router.put("/update/:id", Controller.updateData);
router.delete("/delete/:id", Controller.deleteData);

export default router;
