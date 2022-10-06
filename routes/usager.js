import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/UsagerController.js";

const router = express.Router();
//UPDATE
router.put("/:id", updateUser)

//DELETE
router.delete("/:id", deleteUser)


//GET
router.get("find/:id", getUser)

//GET ALL
router.get("/", getAllUsers)

export default router
