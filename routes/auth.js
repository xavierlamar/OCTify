import express from "express";
import { registerUser, loginUser, createUser } from "../controllers/Authentification.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/logins", loginUser)
router.post("/add", createUser)

export default router