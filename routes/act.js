import express from "express";
import { createAct, getAct, getAllAct ,deleteUser} from "../controllers/ActController.js";

const router = express.Router();

router.post("/create", createAct)
router.get("/:id", getAct)
router.delete("/:id", deleteUser)
router.get("/", getAllAct)

export default router