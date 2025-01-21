import express from "express";
import { handleAdminLogin, handleCreateAdmin } from "./admin.handler";
const router = express.Router();

router.post("/", handleCreateAdmin);
router.post("/login", handleAdminLogin);

export default router;
