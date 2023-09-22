import express from "express";
import { getAllUser } from "../contollers/user-controller.js";
import { signup } from "../contollers/user-controller.js";
import { login } from "../contollers/user-controller.js";
const router=express.Router();

router.get("/", getAllUser);
router.post("/signup",signup);
router.post("/login",login);
export default router;