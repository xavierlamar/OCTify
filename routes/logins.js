import express from "express";
import { getLoginsHomePage, getGererDoc, getGererUsager, getGererPer, getGererDeconnect } from "../controllers/Loginscontroller.js";

const router = express.Router();

router.get("/", getLoginsHomePage)
router.get("/gererdocument", getGererDoc)
router.get("/gererusager", getGererUsager)
router.get("/gererpersonnel", getGererPer)
router.get("/deconnexion", getGererDeconnect)

export default router
