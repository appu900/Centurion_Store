import express from "express";
import { handleCreateUser, handleUserLogin } from "./userHandler";
const router = express.Router();

router.post("/", handleCreateUser);
router.post("/login",handleUserLogin)

export default router;
