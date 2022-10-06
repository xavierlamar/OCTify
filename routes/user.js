import express from "express";
import { getUserHomePage, getGererDoc, getGererUsager, getGererPer, getGererDeconnect } from "../controllers/Usercontroller.js";

const router = express.Router();

router.get("/", getUserHomePage)
router.get("/gererdocument", getGererDoc)
router.get("/gererusager", getGererUsager)
router.get("/gererpersonnel", getGererPer)
router.get("/deconnexion", getGererDeconnect)

export default router