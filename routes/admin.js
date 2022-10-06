import express from "express";
import { getAdminHomePage, getGererDoc, getGererUsager, getGererPer, getGererDeconnect } from "../controllers/AdminController.js";

const router = express.Router();

router.get("/", getAdminHomePage)
router.get("/gererdocument", getGererDoc)
router.get("/gererusager", getGererUsager)
router.get("/gererpersonnel", getGererPer)
router.get("/deconnexion", getGererDeconnect)

export default router